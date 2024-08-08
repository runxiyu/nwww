---
title: Forge Workflows
date: 2023-08-10
---

I generally use [my own Git server](https://git.runxiyu.org/) for my
projects. I also use my [sr.ht account](https://sr.ht/~runxiyu) for
[issue tracking](https://todo.sr.ht/~runxiyu) and [mailing
lists](https://lists.sr.ht/~runxiyu), and [their
Git](https://git.sr.ht/~runxiyu) for some projects too.

Regardless of whether I'm using my own infrastructure with plain Cgit
and plain mailing lists (except that my mailing list manager is slightly
broken for now), or the slightly better-integrated environment sourcehut
provides, a contributor who wishes to submit some of their commits may
simply do the following with
[git-send-email](https://git-send-email.io):

1.  Configure git-send-email (only once!)
2.  Clone the repository to a local directory
3.  Make some changes and commit
4.  `git send-email HEAD^ --to='~runxiyu/public-inbox@lists.sr.ht'` or
    something similar

This is much easier, imo, than the pull-request workflow popularized by
GitHub (which is proprietary by the way) and similar forges:

1.  Register an account on the forge (once per forge)
2.  Click “fork” on the repo's Web interface
3.  Clone the fork to a local directory
4.  Make some changes and commit
5.  Push
6.  Go back to the Web interface to create a PR (which often involves
    clicking at least three buttons)
7.  Delete your redundant fork once the PR is merged and your repo is
    not really useful anymore

Why do certain people hate on sourcehut? Really convenient workflow IMO.
