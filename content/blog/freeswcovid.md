---
title: On Free Software, Education in China and the COVID-19 Pandemic
date: 2022-07-26
---

*This was originally an email to the Libreplanet-discuss mailing list.*

I am a secondary school student from Shanghai, China. This email
discusses the problems I discovered in the Chinese educational system,
in terms of students' right to freedom in computing and options to
control the COVID-19 pandemic from the standpoint of a person living in
China.

When COVID-19 broke out in 2020, students were required to watch lecture
videos produced by the city's education department for twenty minutes,
then join the Tencent Meetings room to discuss in their own class for
10--15 minutes.

Watching the videos wasn't an issue for me. Our apartment has cable TV,
where the videos are broadcast; there was also a website that played the
livestream without JavaScript. However, Tencent Meetings presented a
problem to me.

At the time, I run Arch Linux. (Currently, I run Hyperbola
GNU/Linux-libre, a Free Software-only distribution, which would have
made this even harder.) Tencnet Meetings, claiming to support "all
operating systems and platforms", only supports Windows and macOS. (I
wonder how they passed the resolution to display that statement, I
believe that they have many programmers who use GNU/Linux.) (As of
October 2021, a classmate noted that there is a "Linux versuon".) School
required Tencent Meetings, therefore I went through a hard process to
setup QEMU running a Windows 7 virtual machine—I believed that 7 would
be slightly better than 10 in terms of privacy, though as always with
nonfree software, I can't really know for sure. It was slightly
unstable, which is an annoyance, for example the connection from the
Windows audio server to pulseaudio would stop working from time to time,
but it was acceptable. Though my setup was okay (in the perspective of
my school), it left me in a psycological crisis about education and
freedom. More on that later.

Offline classes resumed in May 2020, as most of China has minimal cases
of COVID-19. This freed me from using a proprietary
non-privacy-respecting bloated piece of software in a virtual machine,
but it did not free me from teachers' requirement to use WeChat (think
of it as the equiv of WhatsApp in China), Xiaoheiban (A proprietary
classroom information distribution system), or other pieces of nonfree
software.

Similar to the beliefs stated in the GNU Education project, I believe
that schools and educaion are a means of sharing information and
knowledge. I understand that meeting software and lesson management
software are used as means of distributing knowledge, rather than the
knowledge being distributed themselves. However, I believe this doesn't
lead to the argument that the mandate of proprietary software usage is
just, for three reasons as below.

1.  There are always going to be curious students who wonder how the
    trchnology works. Proprietary software denies them this right.
2.  The usage of proprietary software when young may implant dependence
    on it in the future.
3.  Education is a right and a responsility. Mandating nonfree software
    in education adds unjust responsibilities on students.

Point 1 and 2 are explained well in the Education section of the GNU
website, therefore I am not going to focus on them. Focusing on the
third point:

Under laws of almost all countries, citizens have the right to an
education. Traditionally, this involves going to school, meeting
teachers and classmates, listening to classes, taking notes, passing
exams (I have strong opinions that exam systems ought to change to
better represent individual talents, but this is out of scope of this
memo.) and finishing homework. Students loose a slight bit of their time
and freedom of movement (as in, it's not easy to move to a house 100
miles away from school), in exchange for being educated.

However, with schools requiring the use of nonfree software, in effect
students are required to give up their privacy, and digital freedom,
both crucial rights in modern society, as the effect of needing to use
nonfree software. The right to education has effectively turned into an
exchange for other basic rights. This is not acceptable.

Furthermore, in countries like China, 9 years of education is mandatory
for children. I understand this law as a means to the goal of creating a
knowledgeble and educated society, which is good. However, when
mandatory edication mandates nonfree software, it deduces to "children
are required to use nonfree software". So, being a child here is pretty
unlucky, because there goes your right to privacy, your independence,
and your freedom, because of a law that's supposed to help society.

We need to stop using nonfree software in education.

In th beginning of this email, I mentioned COVID-19. You might be
wondering how the Chinese government fully put the pandemic under
control in just 5 months, which is seemingly impossible if all you know
is how the US dealt with this situation.

The answer is that the Chinese government is implementing strict contact
tracing. This is extremely easy because of the prevaliance of
survillance. Many would argue that this is a benefit of survillance,
which I believe to be true. However, no comparisons were given between
losing privacy and increasing the risk or infection. Briefly inspecting
this idea in my head, it's really hard to think about—privacy and
freedom is important in the long term, at the cost of many lives in the
pandemic. The lives of these dead are gone—they lose not only privacy
and computing freedom, they lose their lives, which costs them their
opportunity to pursue their dreams in this world, and they have no
freedom of choice, speech, etc as they aren't alive. Once again, this is
hard to wrap my mind around, therefore I would especially like to invite
the community to discuss this.

The contact tracing system used is not Free Software. At first I didn't
understand why (except for the explanation that they want to profit from
harming citizens which is hopefully just a hypothetical "explanation"),
but I noticed that the authenticity and accuracy of the system may be
affected if users are allowed to modify their software. This seems to be
the core of some problems with regards to software freedom—here, the
user is not running software to complete their tasks. Rather, it's the
government's way to maintain public safety, therefore I believe that
whether users should be able to modify software in these conditions is
up to discussion. Back to the point, since a green-code proof from the
system is needed to get in a lot of places, a person basically needs to
use proprietary software to live a normal life (to get into coffee
shops, for example).

In the US and other countries, things aren't that good either. For one,
the pandemic isn't controlled well. As a consequence, a lot of places
require negative COVID tests to do stuff. [A thread on the LibrePlanet
mailing
list](https://lists.gnu.org/archive/html/libreplanet-discuss/2021-08/msg00008.html)
discusses this issue, as a lot of these tests require nonfree software
on users' phones. Note that this thread spans several months long, as it
is a hot discussion, so look in the september and october archives too.
The thread explains the implications clearly, thus I am not discussing
it here.

Additionally, I heard that some US courts require Zoom for online cases,
therefore it seems that a person' right to judicial justice comes at the
cost of digital freedom. I can't confirm this, but if that's true, I'm
truly disappointed at the judicial system, even though I'm not a US
citizen.

I am looking forward to a freer society, or at least one where the above
problems get solved.
