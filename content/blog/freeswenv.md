---
title: Free Software is still important for our environment
date: 2024-08-17
---

Recently I got to operate a Windows 11 machine. It was a ThinkPad T14 produced
in 2020, with 16 gigabytes of RAM, a relatively recent Intel Core i5, and a
512-gigabyte PCIe SSD. This is much more powerful than one of my usual
computers, a ThinkPad X220i.

When I opened `taskmgr` I was met with about 200 processes[^1]. Opening
a new window in `explorer`, the file manager, takes about 5 seconds to
respond, and an additional 5 seconds in a blank window. Windows updates have
taken more than 20 gigabytes of valuable disk space in `C:\`.
Compiling an average 20-page LaTeX document with pdfLaTeX takes 40 seconds.

[^1]: Apparently those are complete processes rather than threads. I'm not
    familiar with Windows environments though.

Compare that to a 2013 Dell Latitude E6440, with 4 gigabytes of RAM, an Intel
Core i5 from 2013, and a 1 terabyte SATA SSD. That Dell runs smoothly with the
same Firefox/[LyX](https://www.lyx.org)/pdfLaTeX workflow, even with the most
heavy-weight desktop environment available, GNOME 45 on Fedora Workstation.
Compiling the same LaTeX document with pdfLaTeX takes 8 seconds.

A 2013 laptop is able to outperform one from 2020 in almost every aspect other
than video decoding. Except that, of course, the hardware isn't at fault. It's
the endless amounts of bloat and inefficiency in software.

---

The mentality of the vast majority of computer users seem to be "it is
imperative that I switch to a new device every two or three years". But it's not
like these users switch to a massively more resource-hungry workflow every two
or three years: most of them browse the web, write documents[^2], and watch
videos online. That is not a heavy-weight workflow. My claim is that **it is
ridiculous to require these people to switch to a new computer every two or
three years.**

[According to the United Nations Institute for Training and
Research](https://unitar.org/about/news-stories/press/global-e-waste-monitor-2024-electronic-waste-rising-five-times-faster-documented-e-waste-recycling),
"A record 62 million tonnes (Mt) of e-waste was produced in 2022, Up 82% from
2010; On track to rise another 32%, to 82 million tonnes, in 2030; Billions of
dollars worth of strategically-valuable resources squandered, dumped; Just 1% of
rare earth element demand is met by e-waste recycling."

[^2]: As much as I prefer Free Software, writing documents with ordinary
    document editors is somewhere we really haven't caught on. LibreOffice is,
    even in my opinion, significantly more buggy than Microsoft Office;
    OnlyOffice Desktop Editors still performs horribly (and still has trouble
    running on Wayland). While many of us might dislike word processors, it is a
    critical part of a lot of ordinary users' workflows, and it is often not a
    solution to "simply use LaTeX with LyX". This is a critical area that needs
    improvement if we are ever to compete with Windows.   
    This is not entirely the fault of the Free Software community (I'm using
    "fault" in a very loose sense here). [Office Open
    XML](https://en.wikipedia.org/wiki/Office_Open_XML) is notoriously difficult
    to implement correctly (the initial specification is more than 6000 pages
    long, and Microsoft is using various undocumented extensions), and we still
    lack a lot of fonts common in documents produced by Microsoft Office (though
    the development of more metrically-compatible and similar-looking fonts will
    help).

Of course people are going to purchase new devices and let their old ones go to
waste, if they are unable to use their workflow due to terrible programming
practices and planned obsolescence.


---

## See also

* <https://libreplanet.org/wiki/Free_Software_and_the_Environment>
* <https://www.sfscon.it/talks/combatting-e-wastes-environmental-harm-with-free-software/>

<!-- vim: tw=80
-->
