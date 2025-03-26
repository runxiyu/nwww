---
title: Client rate-limits on PRIVMSG considered harmful
date: 2025-03-02
---

A lot of IRC clients implement their own message rate-limiting logic to avoid
triggering server-side flood protection, by e.g. sending a message every 2
seconds after a threshold, rather than dumping all of it at once. While this
avoids flood kills, it is more frustrating for other users. Who likes to
receive one line in your long message every two seconds, interwoven with other
people's conversations? I don't have these server side limits on my own network
because I don't want to encourage this ridiculous delayed queueing behavior.
I'd rather see 200 lines go by immediately than have them slowly and painfully
clog the channel for 3 minutes. I find these sorts of limits to be an act of
evading detection rather than anything truly helpful.
