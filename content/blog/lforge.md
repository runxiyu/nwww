---
title: Lindenii Forge
date: 2025-03-03
---

When contributing to free software projects, I often get frustrated over the
workflow of forges like Forgejo/GitHub, and to a lesser extent, SourceHut.
Therefore we've decided to create our own forge,
[Lindenii Forge](https://lindenii.runxiyu.org/forge/).

It's currently still under development, although it's slowed down a bit since
I have an English Literature exam this Wednesday, Philosophy this Friday,
Chinese and Physics next week, and Math the week after that. Any contributions
are welcome though!

We hang out in [`#lindenii`](https://webirc.runxiyu.org/kiwiirc/#lindenii) on
[irc.runxiyu.org](https://irc.runxiyu.org), and
[`#lindenii`](https://web.libera.chat/#lindenii) on
[Libera.Chat](https://libera.chat).


Here are some things that we plan to implement that make it stand out a bit.

## Interfaces, protocols, and APIs

We plan to have:

* A web interface
* Many things accessible via email, with anonymous-access IMAP archives
* An SSH interface
* A custom TLS-based protocol for native clients, when that comes along

## Merge requests

Let us first take a look at the workflows that people need to undertake
when contributing to projects or when receiving contributions, on different
categories of forges. We shall assume that the contributor has already cloned
the repo to their local device and made the changes they want to.

Most contemporary forges require contributors to:

* Make sure they have an account on the forge
* Navigate to the web page of the upstream repo, and click "fork", to create a
  clone of the repo in their own user's namespace
* Add their fork as a remote, in their local repo
* Push to their fork
* Go back to the web interface and press "create pull request"

The maintainer would have to:

* Fetch the contributor's repo manually and work on it if necessary; or read
  code through the web interface
* Press "merge" on the web interface
* Pull from the target branch back into their local repository

And at last, the contributor would have a fork of the upstream repo in their
own namespace dangling around. (I usually delete it to avoid clutter.)

In comparison, this is the SourceHut workflow:

* Ensure that git-send-email is set up (only once, rather than once per forge)
* Call git-send-email with the right mailing list address

And for maintainer:

* Run git-am on the email file and work on it if necessary
* Push

This is much more convenient but comes with a few tradeoffs: There is no way to
preserve the author's commit signatures if desired, it is very difficult to
design a good web interface to display patchsets properly, and sending v2
patches is sometimes painful... and it just doesn't feel sufficiently
integrated with Git. I want to be able to just push to a special branch to
update my merge request.

So I came up with a solution. Let the contributor do this:

* Switch to a branch in `contrib/*`
* Push directly to the upstream repo

Which automatically creates a merge request.

Then the maintainer can just pull it like any other branch and merge it. Pull
requests should also be made accessible via IMAP, presenting email
headers/commands and SSH commands that could be used to modify the state of the
MR.

The contributor's SSH keys is recorded so they could use an SSH API to set the
MR description, or to associate them with an account on the Forge, or even
pseudo-anonymously log in to the web interface with an SSH signature.

At least, this is my plan for [Lindenii
Forge](https://lindenii.runxiyu.org/forge/)'s code contribution workflow.
(There are a few concerns about hash SHA-1 collisions and malware distribution
via malicious merge requests, we are currently working on solutions. We will
probably [scan](https://github.com/cr-marcstevens/sha1collisiondetection) for
signs of SHA-1 collisions attempts; and malicious merge requests could be
mitigated by only allowing registered users (or federated users froum trusted
forges) to create merge requests, though that isn't a big concern at the moment
since GitHub
[makes merge requests accessible through read-only refs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally).

Additionally, I am devising a plan to incorporate this with email workflows;
creating merge requests based on incoming patchsets is trivial, but it's
slightly more difficult the other way around for various reasons; presenting
merge requests as an IMAP archive is also tricky.

Edit: Apparently the
[Gerrit](https://gerrit-documentation.storage.googleapis.com/Documentation/3.11.1/user-upload.html)
and
[A-Git](https://forgejo.org/docs/latest/user/agit-support/)
workflows are similar, although I personally think that our approach is more
"natural". We'll see if there's anything to integrate from these forges.

## Discussions

As much as I prefer mailing lists, the majority of contemporary developers do
prefer web interfaces. So our "discussions" would be something similar to
GitHub discussions at its core, but with great support for email workflows,
including IMAP archives (somewhat similar to
[public-inbox](https://public-inbox.org)) for people who don't want to
subscribe to lists directly.

Discussions should be the primary way to communicate with the project including
"hey this thing doesn't seem to work as I expect" (we prefer tickets/issues to
be for actionable tasks).

## Federation and authentication

[ForgeFed](https://forgefed.org/) is a great idea, but it's a bit too
complicated for us to implement at the moment. We'll probably start with
allowing people to authenticate via matching SSH keys on other forges (e.g.
fetching `https://meta.sr.ht/~runxiyu.keys` and
`https://github.com/runxiyu.keys` to match identities). We'll see how it goes.

## Other things

We generally like [SourceHut](https://sourcehut.org/)'s style of doing things,
so we'll probably implement a few things from there. For example, minimalist
web interface with no JS required to use full functionality (although we are
open to using JS for progressive improvements especially with respect to
searching, filtering, and updating discussions/etc).
