---
title: Programming languages
date: 2024-07-24
---

<style>
span.pros {
	font-weight: bold;
}
span.cons {
	font-weight: bold;
}
</style>

I've recently read Drew DeVault's blog post, [How I decide between many
programming
languages](https://drewdevault.com/2019/09/08/Enough-to-decide.html). I
figured that I should write my own.

## C

<span class="pros">Pros</span>

-   [Simple](https://drewdevault.com/2017/01/30/Lessons-to-learn-from-C.html).
-   Interoperable with almost all other languages.
-   Direct access to system calls (well, for most system calls that I'd
    use, anyways).
-   Good ecosystem, and most packages I'd use are in my system's
    repositories. Using the system package manager is the only way to
    sanely manage dynamically linked libraries.
-   Flexible macro system. Yes, there are pitfalls, but it's flexible
    enough for my needs and it's not that hard to remember to add
    parenthesis.

<span class="cons">Cons</span>

-   Null terminated strings are objectively bad
-   Footguns do exist, and there isn't anything like borrow checking or
    automatic reference counting. These aren't strictly necessary, but
    are obviously helpful.
-   `errno` is bad. (My opinion holds that the proper alternative is
    multiple return values, though I also believe that the langugage
    shouldn't make it easy to accidentally ignore errors, nor should
    error handling have too much boilerplate.)

## Go

<span class="pros">Pros</span>

-   Easy concurrency to write quick and relatively-scalable network
    services in.
-   Well-designed standard library, and a generally good ecosystem (with
    an non-insane language-specific package manager, which I find
    acceptable since Go libraries are statically linked).
-   The best [garbage collector](https://go.dev/blog/ismmkeynote) I've
    seen in garbage-collected languages.

<span class="cons">Cons</span>

-   [The way zero values are handled are really
    bad](https://fasterthanli.me/articles/lies-we-tell-ourselves-to-keep-using-golang#all-or-nothing-so-let-s-do-nothing).
-   I'm not a fan of the automatic conversion between pointers and
    values.
-   [Go's error handling doesn't sit right with
    me](https://drewdevault.com/2014/06/07/Why-Go-error-handling-doesnt-sit-right-with-me.html).
    (I am *not* for exceptions, just to be clear.)

## Python

<span class="pros">Pros</span>

-   Code is easy to write.
-   Good-ish ecosystem.

<span class="cons">Cons</span>

-   Code is hard to maintain.
-   Really slow.
-   The global interpreter lock guarantees that threading is a pain.
    `asyncio` also sucks, and there aren't many libraries written for
    `trio`.
-   Dynamically typed, and no, mypy doesn't magically solve everything.

## Shell scripts

<span class="pros">Pros</span>

-   Good for gluing my desktop together, automating day-to-day tasks
    (both on the desktop and administering servers), and generating
    Makefiles.

<span class="cons">Cons</span>

-   A lot of bad advice on the web, and many people write disgusting
    scripts.
-   Arrays are not available in standard POSIX shell, and life is a pain
    without them.
-   A sufficiently complex shell script that interacts with the network
    *is* going to have remote code execution vulnerabilities.
-   I wanted to say "dynamic typing" here. "No typing" is probably more
    appropriate.

## Common Lisp

<span class="pros">Pros</span>

-   Really flexible. Best for, well, list parsing.

<span class="cons">Cons</span>

-   `#'i-still-dont-get-the-point-of-having-two-namespaces`.
-   Dynamic typing.
-   Quicklisp confuses me.
-   `))))))))))))))))))))))`

## Lua

<span class="pros">Pros</span>

-   Probably the best general-purpose scripting language.
-   Easy to use as an extension language.
-   Lua tables are really versatile.

<span class="cons">Cons</span>

-   The lack of real threads is a huge pain. No, coroutines are not
    threads. (Though, no other scripting language has sane
    multithreading, so... fair enough.)
-   Generally lacking ecosystem.
-   1-based indexing sucks.
-   I still prefer curly braces over `end`.

## JavaScript

<span class="pros">Pros</span>

-   None. I wouldn't use it if there are saner alternatives in browsers,
    e.g. if WASM could access the DOM.

<span class="cons">Cons</span>

-   Quirks surrounding automatic type conversion and equality testing.
-   I don't see any compelling reason for this language to exist outside
    web browsers, yet Node.JS exists.
-   NPM.
