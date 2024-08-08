---
title: Linked lists as paths?
date: 2024-05-28
---


```
~runxiyu_    hax: also, imagine a world where paths are linked lists rather
             than strings
&hax         linked lists nah just use dir reading all the way
~runxiyu_    hax: ?
&hax         next = opendir(this);
&hax         *opendir(this, name)
~runxiyu_    hax: no
&hax         :D
~runxiyu_    hax: Honestly though I think linked-list (or "slices" or whatever
             it's called nowadays) would be pretty good at preventing directory
             traversal attacks?
~runxiyu_    i mean
~runxiyu_    why interpret strings?
&hax         not really, because directory path manipulation relies on
             hardlinks/symlinks in the path
&hax         in that sense I mean
~runxiyu_    hax: i mean, in an imaginary new system
&hax         problem: .. is actually useful
~runxiyu_    where symlinks don't exist. symlinks confuse the heck out of me
&hax         symlinks are weird yes
&hax         but still hardlink of .. and .
&f_          both "-1"'s are supposed to be EOF instead..
~runxiyu_    hax: ?????
~runxiyu_    I'm not sure how hardlinking directories work
~runxiyu_    I don't think that's possible
&hax         runxiyu_: it escapes via say
             "blahblah/whatever/../../../../../etc/passwd" or the likes
~runxiyu_    how do the inodes even record those
~runxiyu_    hax: oh, so it's not a hardlink issue, it's a .. issue
&hax         the problem with fixing that is you still need a notation of "go
             back a dir"
~runxiyu_    actually true
&hax         well links that go to a different dir in a different path contain
             the same problem
~runxiyu_    hax: .. = pop(pwd())
&hax         hmmmmmmm
~runxiyu_    well ok it's not fair to assume that everything is written in a
             "proper" programming language
&hax         what if someone creates a literal `..`
~runxiyu_    but sane shells should have sane vector manipulation
~runxiyu_    hax: sounds fine to me (again in an imaginary new system)
&hax         well, now you can only access it via "untrusted" input paths
&hax         because "trusted" ones get evaluated
~runxiyu_    ?
&hax         if you impliment `.. = pop(pwd());` in the shell
~runxiyu_    hax: I mean firstly I'm hypothesizing a system where all paths
             are linked lists / arrays / vectors / whatever, and "." and ".."
             mean nothing
~runxiyu_    hax: oh, I meant, instead of using "..", use "$(pop $(pwd))"
&hax         you need a way to designate "back", in a human-usable fashion
&hax         and pop pwd isn't really good since there's many other contexts
~runxiyu_    hax: that sounds like the task of the human-used program, not the
             operating system's structure
~runxiyu_    filesystem's
~runxiyu_    i mean
&hax         yes, I mean conflicts are an issue
~runxiyu_    well true
~runxiyu_    but eeehhhhh
&hax         I don't require that the OS uses even strings at all, but you
             still need human-usable ways of getting back a dir and such
~runxiyu_    "conflicts with how shells might represent them" doesn't sound
             like a good reason to clutter up the operating system's path
             representation with string interpretation
~runxiyu_    mhm
&hax         "shells have no good way for humans to interact" does sound like
             a good reason to clutter up the operating system's path
             representation with a few exceptions or such
&hax         main point being, changing the representation won't fix the
             exploits
&hax         unless you also make it less useful
~runxiyu_    hax: well, modern shells also interpret "~" specially
~runxiyu_    and that seems... really useful
&hax         yes
~runxiyu_    "why not use $HOME?" -> "why not use $(pop $(pwd))"
&hax         because /~/foo/bar isn't //home/user/foo/bar
&hax         and you can't sanely require escaping ..
~runxiyu_    hax: is there a time you actually need to specify
             /home/me/../another_user in a shell?
~runxiyu_    i feel like .. is similarly not really useful other than in the
             beginning of a path
&hax         runxiyu_: there are times where /path/to/something/../ is often
             used
~runxiyu_    by scripts or by humans
&hax         probably more the latter
~runxiyu_    huh?
&hax         er, former*
~runxiyu_    sounds like a case for $(pop $(pwd))
~runxiyu_    though perhaps humans would use ../../../testing/thing
&hax         yes that I do use often
~runxiyu_    but that's beginning-of-relative-ish-path
&hax         but how do you access ../../literaldotdot/testing/thing
~runxiyu_    hax: can i log this conversation and put it somewhere public
~runxiyu_    hax: hmmmmmmm
~runxiyu_    hax: good point
&hax         and sure
~runxiyu_     /save
&hax         anyways, linked lists is fine, but trying to `not have ..` for
             `security purposes` won't really help anything
~runxiyu_    mainly because of human shells though
~runxiyu_    idk
~runxiyu_    and i mean, why have special names at all?
&hax         . and .. aren't special names, they're just a reference in the fs
             to the dir before them (as far as I know)
&hax         probably not written on disk ofc, but in the kernel's mapping or
             whatever it's called of it
&hax         *to the dir and the dir before it
~runxiyu     well if applications tell kernel to "check the path '..'" and the
             kernel sees that and treats it specially
&hax         does it
~runxiyu     if it's "the kernel's mapping"?
~runxiyu     .. then in the perspective of anything above ring 0, it's
             essentially a special name
&hax         I mean as in like the cache of the filesystem
~runxiyu     hax: ???
~runxiyu     why do filesystem caches have anything to do with this
&hax         essentially a special name sure
&hax         because kernel reads fs -> insert '.' and '..' dir into it with
             reference, carry on
```
