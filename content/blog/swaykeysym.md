---
title: Setting weird keysyms in sway
date: 2023-07-11
---

Under the [Sway](https://swaywm.org/) Wayland compositor, we could set
set `xkb_layout` and `xkb_options` for keyboards in order to do weird
key mapping related things. Many people use `caps:ctrl_modifier` and
`caps:escape` in `xkb_options` (see
[xkeyboard-config(7)](https://man.openbsd.org/xkeyboard-config) for
other options) to make Caps Lock function as an extra Ctrl or Esc key.

If all you want to do is do a relatively common modification like that,
chances are that `xkb_variant` and `xkb_options` already has what you
want, and you should just set that.

But if what you want isn't covered in the standard XKB files, hear my
story. I personally wanted Caps Lock to function as an additional Shift
key, which isn't covered in `xkb_options`. (`caps:shift` doesn't differ
much from normal Caps Lock, make it confusingly documented and doesn't
make the Caps Lock function as an extra Shift.)

On X11, I would simply use `xmodmap -e "keysym Caps_Lock = Shift_L"`.
Now my Caps Lock functions as an extra Left Shift. Works just alright.

But now that I switched to Wayland, Sway in particular, `xmodmap` for
X11 isn't going to work. What I ended up doing was the following:

**`$HOME/.xkb/symbols/gbcustom`**

    default partial alphanumeric_keys
    xkb_symbols "basic" { // leave "basic" in-tact unless you know what you're doing
        include "gb" // or whatever base layout you use, most likely "us"
        name[Group1] = "English (UK) Customized";
        key <CAPS> { [ Shift_L, Shift_L, Shift_L, Shift_L ] };
    };

Note that here, the "`key`" lines are in the form
`key <X> { [ A, B, C, D ] } ;`, where "`X`" is the keycode symbolic name
of the physical key you want to press. In my case, it is `CAPS`. Check
`/usr/share/X11/xkb/symbols/pc` and `/usr/share/X11/xkb/symbols/latin`,
or the relevant files for your keyboard configuration, to look up the
keycode symbolic name from the name you're used to. (Looking up
`Shift_L` in `symbols/pc` gets you to `LFSH`, which is what you would
use in place of "`X`". `A` is triggered when `X` is pressed alone, `B`
when it's pressd with Shift, `C` with AltGr, and `D` with both AltGr and
Shift.

**`$HOME/.config/sway/config`**

    input "1:1:AT_Translated_Set_2_keyboard" {
        xkb_layout "gbcustom"
    }

Of course, replace "`1:1:AT_Translated_Set_2_keyboard`" with your actual
keyboard identifier listed in `swaymsg -t get_inputs`. And reload Sway.

There might be better ways to do so, but I've got this to work. For
these unusual setups, it is a bit complicated and not as straightforward
as adding a `xmondmap` line to `.xinitrc`. Hopefully things would get
better as Wayland matures.

[This GitHub issue](https://github.com/swaywm/sway/issues/4250) and
[jman's article on
this](https://www.city17.xyz/keychron/#xkb-here-be-dragons) were
extremely helpful. Thanks to [brocellous](https://sr.ht/~brocellous) for
pointing out the solution involving custom options.

Another, potentially better method involving defining custom
`xkb_options`, propsed by brocellous:

**`$HOME/.xkb/symbols/customsymbol`**

    // Remap caps to Shift_L
    partial modifier_keys
    xkb_symbols "caps_lshift" {
        replace key  {
            type[group1] = "ONE_LEVEL",
            symbols[group1] = [ Shift_L ],
            actions[group1] = [ SetMods(modifiers=Shift) ]
        };
    };

**`$HOME/.xkb/rules/evdev`**

    ! option = symbols
      custom:caps_lshift = +customsymbol(caps_lshift)

    ! include %S/evdev

**`$HOME/.config/sway/config`**

    input "1:1:AT_Translated_Set_2_keyboard" {
        xkb_layout "gb"
        xkb_options "custom:caps_lshift"
    }
