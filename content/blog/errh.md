---
title: Error handling
date: 2024-08-20
---

I haven't found a single language with error handling to my liking: 
 
* C: `errno` sucks and I haven't seen anyone that disagrees yet, and the thing 
  some libraries like OpenSSL does with its custom error type and detecting the 
  underlying `errno` is even more annyoing 
* Hare (and to some extent, Rust, though I haven't gotten to really know Rust 
  yet): IDK, it just feels really unnatural to me (I'll see how I could explain 
  in the future) 
* Go (and to some extent, Linux x86 asm): Hella boilerplate (especially in Go 
  without macros) 
* Python, and most other VM'ed languages that use exceptions: Functions in 
  between the throw'er and the catch'er don't get a say in what's going on, 
  which also means as a catcher you don't know where that `ValueError` came 
  from (was it in integer conversion or decoding or what?) 
* Haskell: Kinda a mess, see Hare/Rust for `Maybe`/`Either`; see Python for 
  exceptions; error can only be caught in `IO` monads which isn't the majority 
  of stuff in idiomatic Haskell 
* POSIX shell: I've basically taken it to define a function `a` that runs its 
  arguments and exits on failure (which is the most appropriate thing to do for 
  simple scripts), but handling `$?` is still kinda hellish, and don't even 
  mention `set -e` 
 
But at the same time sometimes I find exceptions to be very useful (e.g. say 
I'm handling a command in a network connection, and I want a catchall "command 
failed" that I could trigger by throwing an exception; I could emulate this 
with a goto up the stack but that also doesn't feel right) 
