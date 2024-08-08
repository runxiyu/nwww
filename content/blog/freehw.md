---
title: Free Hardware
date: 2022-10-21
---

**In "free software" and "free hardware", the "free" in "free computing"
does not refer to price; it refers to freedom and liberty of users.**

This section is mainly for posts on *hardware hardware designs*. Without
which, *no computer user is free*.

> In fact, access to schematics, boardviews, datasheets and any other
> documentation is *critical* to software freedom.
>
> —Leah Rowe, founder and lead developer of
> [Libreboot](https://libreboot.org)

We can't make free software, especially bootloaders and operating
systems, if we don't have knowledge of how hardware works. In modern day
computing we do understand how to design kernels for most architectures
such as x86 and aarch64, but this is not enough—without extensive
research into how components in a specific piece of hardware interact
with each other, we may be able to accomplish simple tasks such as
running an OS on it, but [the right to
repair](https://www.fsf.org/campaigns/fight-to-repair) is severely
restricted, and we can't check if the *hardware* is doing nasty things,
or replace parts of it should it be so.

## What are Free Hardware Designs?

Hardware designs that meets the following conditions are free hardware
designs.

1.  The design files, for example 3D models and circuit diagrams, are
    available under a free license;
2.  All verilogs of FGPAs, if any (it is wise to use FGPAs for the sake
    of condition 5) are available under a free license;
3.  The documentations of interfaces of the hardware, such as data
    sheets, are available under a free license;
4.  The hardware is fully functional with no proprietary software;
5.  The hardware is designed to be easy to tinker around with (including
    improving and reparing, e.g. being modular) and contains no
    tivoization.

Here, a free license means that the user may use, adapt and/or
redistribute the work for any purpose, similar to the four essential
freedoms of [free
software](https://www.gnu.org/philosophy/free-sw.html). The design and
documentation is like the equivalent of "source code" in software.

We have found no hardware that have/meet all of these requirements (i.e.
full certification) now.

## What are the Benefits of Free Hardware?

1.  You can be ensured that your hardware is not spying on you or doing
    anything nasty like that, because you and your technical friends can
    audit what's going on, reprogram the FPGAs, etc.;
2.  You can get fully free software operating systems on your hardware
    to work properly and use all the features that your hardware has,
    without ever running a nonfree program, so you more easily get the
    benefits of free software;
3.  You can easily create your own software or operating system that
    interacts with the hardware given enough expertise and good
    documentation;
4.  You can create your own version of the hardware as you wish, for
    example for friends who are in need of hardware but cannot afford
    commercial ones, since circuit diagrams, 3D models, and verilogs are
    available;
5.  You can upgrade the parts on your own, thus cutting down on e-waste,
    helping protecting our land from plastic, helping protecting our
    environment which we all live in and depend on;
6.  You can rely on 3D models and circuit diagrams when you're
    integrating hardware into a new project, for example your own
    computer case, without taking the trouble to measure everything and
    create your own model for an exact fit.

## How Can I Help?

### Users

If you're just a normal computer user, kindly ask the manufacturer of
your hardware for design files and datasheets. Show manufacturer that
you care about your freedom to hack the hardware.

When considering purchasing new hardware, prioritize free hardware. At
this stage it is extremely rare to find any, but still be on the
lookout. Please, if you find any that seem to be trustworthy, tell the
community about it.

### Hardware manufacturers

When you create a hardware design, use the [GNU General Public License,
version 3](https://www.gnu.org/licenses/gpl-3.0.txt) (please add "or
later") or the [CERN Open Hardware Licence Version 2 - Strongly
Reciprocal](https://ohwr.org/cern_ohl_s_v2.txt) license! CERN 2.0 is a
strong copyleft license for hardware designs, similar to the spirit of
the GNU GPL, which is more widely used in free software. The GPL is not
specifically designed for hardware designs, but it seems to be work for
hardware designs, at least RMS's lawyers believe it's okay. CERN 2.0 is
more complicated and has more legalese. However, since the GPL can
achieve most of CERN, discussion is needed for which to use and whether
letting yet another license proliferate is good. Using these licenses
ensures that it is illegal to take your design and make proprietary
hardware (or designs thereof) out of it.

If you're wondering how you could profit, see [the FAQ on
profits](#faq-profit).

## Frequently Asked Questions

### What would be the incentive for hardware manufacturers to continue develop hardware and innovate?

You may profit from providing support to end users who don't know how to
deal with hardware.

However, profit isn't the goal, when you see people developing good
hardware and software. When profit is the goal of a project or company,
people often ignore the social consequences they bring about to people.

### How would developers gather the resources to develop hardware? Developing hardware is expensive.

This is an issue. However, people in the free software community—who
probably also support free hardware—would probably be more than happy to
support you.

It should be noted that many or most of the expenses of developing
hardware today comes from patents. [Software patents make developing
software exceptionally hard as developers cannot be passively (i.e. with
no extra work) ensured that they're not infringing patents just by not
copying others' work—they need to actively look for works similar to
theirs and check if these are patented, leading to an exponential
increase in development cost](https://endsoftwarepatents.org), which we
can already see with people patenting technologies to speed up the free
RISC-V architecture, leaving others with slow versions of the
architecture as the way to speed the processor up is patented. (This is
yet another reason to use copyleft licenses.)

### How would this affect me, a normal computer user who doesn't understand how my hardware works?

There are certainlly people who would understand how the hardware works,
and possibly tinker with it, given free documentation, design files and
datasheets. It is impossible for everyone to be a computer expert;
however, free hardware and free software grant people collective control
over their computing, with the freedom to redistribute modified version
of the original work.

Many markets, especially the computer hardware market down to the basics
such as the architecture/chipset-like level, are Economics of Scale,
meaning that the cost of production per unit decreases as the total
number of production for one entity.  This naturally gives rise to
oligopolies, also known in the technology industry as companies like
Intel and Microsoft.

An oligopoly is a market structure in which a market or industry is
dominated by a small number of large sellers or producers.  People often
confuse this with monopolies, for which the latter Francis Wayland
defines as "an exclusive right granted to a [hu]man or a monopoly of
[hu]man, to empoly their labor or capital in some particular manner",
which cannot exist in a free market (i.e. free of government
regulations).  The technology industry in most countries is an
oligopoly, not a monopoly.

The harm of oligopolys (and monopolies, which are similar in this
context) are commonly discussed in Economics, such as the lack of
competition causing prices to be solely in control of one economic
entity, who may set insane prices in seek of profits, which is
especially harmful for products that serve basic human needs, such as
food and water.  And in modern times, technology is often a necessity
for daily life, exacebating the harms of a relevant oligopoly market.

There is yet another practical harm of a oligopoly technology market:
about the rights of users.  When CPUs are produced by almost solely
Intel, AMD, and a few others, they are now free to add their backdoors
and "management engines" into the CPUs that we users use daily, and
their seek for profit pushes them to do so.  We now have to work with
spyware in our computer hardware, and we can't do anything about it,
because the oligopoly nature of the market doesn't allow us common
people to monitor, produce, develop, or otherwise deal with our own
technology except for the "expected usages" that the oligopoly
superimposes on us.

One way out is to decentralize the development and production of CPUs
and related goods.  Individual cities and towns should be able to
produce computers, from the very basics, for their own people.
And I know this sounds like an anti-internationalisation self-sustaining
propaganda chiche economic outcome, but if you think about it, such an
essential part of life (like technology) would be better served by
people who'd be less likely to massively implement spyware that would be
of any use to them.

Initiatives to decentralize development of CPUs and other computer
components, such as LibreSilicon, have existed for a short time (in
comparison to the time that Intel and AT&T have existed).  We're nowhere
near what Intel could make, however, partly due to the insane patents
around their technology.  Patent trolls exist and often target free
software and free hardware projects, and thus applying the idea of
copyleft as it works for copyright, to patents, may aid practical
development.  And at this point, we can't really develop upon existing
foundations, so we have to ignore pre-existing knowledge and develop our
own architecture and CPU from the start, paying attention to copyleft
licenses and copyleft-in-patents to hopefully prevent patent trolls from
taking over the world again.  (This is also what the Evosaur project is
attempting to do.)
