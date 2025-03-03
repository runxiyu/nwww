---
title: Lindenii Forge
---

When contributing to free software projects, I often get frustrated over the
workflow of forges like Forgejo/GitHub, and to a lesser extent, SourceHut.

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
patches is sometimes painful.

So I came up with a solution. Let the contributor do this:

* Switch to a branch in `contrib/*`
* Push directly to the upstream repo

Which automatically creates a merge request.

Then the maintainer can just pull it like any other branch and merge it.

The contributor's SSH keys is recorded so they could use an SSH API to set the
MR description, or to associate them with an account on the Forge, or even
pseudo-anonymously log in to the web interface with an SSH signature.

It's documented at https://lindenii.runxiyu.org/forge/

Edit: Apparently the Gerrit and A-Git workflows are similar, although I
personally think that my own approach is "cleaner".
