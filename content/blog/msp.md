---
title: Math, Science, and Philosophy
date: 2022-11-14
---

Utilities developed in mathematics are often used to apply theories of
the sciences, such as the use of basic arithmetic, calculus, complex
analysis, and everything in between in empirical/experimental sciences
such as physics. We often take for granted that mathematics as we know
it today would work in the sciences. However, considering my impression
of math as formally being a creation and natural sciences being mostly
observant, it is worth questioning the linkage between these subjects,
and whether our use of mathematics, especially in the prediction of
theories of physics, is logically linked to the physics itself, or just
so happens to a coincidence which we ought to explain.

This article attempts to address these questions, but cannot provide a
full answer, for which extensive research would be required which time
does not allow for. Rather, this shall be treated as a brief
brain-teaser, which discussions may evolve from the text itself, or from
the various editorial footnotes and bugs. I would like to, afterwards,
complete this article and make it comprehensive and structured, but I’ll
need ideas from the discussion.

## Invented or discovered?<span id="invented-or-discovered" label="invented-or-discovered"></span>

Initially, it feels like mathematics is a pure invention of the human
mind. Formal definitions of mathematical systems (albeit unsuccessful in
creating the complete and consistent system intended) such as that
presented in <span class="smallcaps">Principia Mathematica</span> do not
refer to any tangible objects and are purely conceptual. Deriving
theorems from axioms and other theorems, applying general theorems to
specific conditions, etc. are all, formally, abstract activities with
little reference to the physical world.

However, humans do not truly invent ideas out of pure thought. The basic
building blocks of our analytical cognition, which may be in some sense
considered "axioms" of our perspective of the world, result from us
observing the world around us, finding patterns, which then evolve into
abstract ideas. Consider the possibility that the formation of numbers
as a concept in mathematics results from humans using primitive ideas
that resemble numbers to count and record enumerations of discrete
objects. Then as people had the need to express non-integer amounts,
concepts such as fractions and decimals (or primitive ideas and
representations thereof), were born. Previously *discrete* concepts,
numbers, are now used to represent values on *continuous* spectrums,
such as volume, mass, etc. But then consider an alternative world where
we are jellyfish swimming through blank water: although this concept of
volume is applicable to blank water, it is arguable whether the numeric
representation and thus the concept of numerical volume would exist in
the first place with the absence of discrete objects. This is an example
on how human sense perception affects the process for which we invent
concepts in mathematics, even if the formal definition thereof does not
refer to tangible objects, not to mention how many mathematical
constructs such as calculus were specifically created to solve physics
problems but is defined in terms of pure math.

Ultimately, even formally defined axiomatic systems have their axioms
based on human intuition, which in turn is a result of empirical
perspective observing of the natural, physical world.

Additionally, let’s take the time to appreciate how well often
mathematical concepts, formally defined by human intuition and logic,
map to experimentally verifiable physical concepts. This further
suggests how natural sciences has an effect on mathematics. (See
Section <a href="#applicability-in-science" data-reference-type="ref"
data-reference="applicability-in-science">[applicability-in-science]</a>
for details.)

The way I like to think about whether math is an invention or a
discovery is: The system of mathematics is formally an invention, but
the intuition that led to the axioms, and what theorems we think about
and prove, are the result of human discovery. There are both elements to
it, and a dichotomous classification would be inappropriate.

## Applicability in Science<span id="applicability-in-science" label="applicability-in-science"></span>

Despite how mathematics was likely inspired by tangible perception, the
vast majority of modern formal mathematical constructs are defined
theoretically. In fact, as seen with the use of complex Hilbert space in
quantum mechanics, mathematical concepts are sometimes developed much
earlier than a corresponding physics theory which utilizes it
extensively. It is impressive how formal creations of humans’ intuition
for beauty in pure math has such a mapping and reflection in the real
world and how physics tends to formalize empirical information in a
concise and rationalized manner.

This naturally leads us to a question: How is math used in
experimental/empirical sciences? Why? Is that use consistent and based
logically, or would it possibly be buggy?

I believe that mathematics has two main roles in physics. The first is
calculations, often as an abstraction of experimental experience into a
general formula, which is then applied to specific questions. With the
knowledge that <span class="math inline">*F* = *ma*</span> and that
<span class="math inline">*a* = 10 m/s<sup>2</sup>, *m* = 1 kg</span>,
we conclude that <span class="math inline">*F* = 10 N</span>. But many
times this involves or implies the second role of math in physics,
because calculations depend on corresponding concepts, and sometimes the
mathematical utilities themselves are developed from physics but are
defined in terms of pure math (such as calculus): physicists analogize
mathematical concepts with tangible physical objects and physics
concepts, and think about the physical world in a mathematically
abstract way. For example, the <span class="math inline">SU(3)</span>
group which finds it origins in the beauties of pure math (group theory
is inherently about symmetry), is used extensively in the physics of
elementary particles to represent particle
spin.<a href="#fn1" id="fnref1" class="footnote-ref"
role="doc-noteref"><sup>1</sup></a> But for the latter of these
use-cases, I am skeptical. Mathematics as we know it is incomplete
(Gödel’s first incompleteness theorem, in summary, proves that any
system of mathematics with Peano Arithmetic cannot prove all true
statements in its own system), possibly inconsistent (Gödel’s second
incompleteness theorem, in summary, proves that any system of
mathematics with Peano Arithmetic cannot prove its own consistency), and
is somewhat unpredictable (Turing’s halting problem, basically saying
that it is impossible to, without running the algorithm itself, predict
whether a general algorithm would halt or would run forever, and thus
there is no general algorithm to predict whether an algorithm will halt
in finite time). We haven’t found major loopholes for inconsistency yet,
but it is astonishing howmathematics, a system of such theoretical
imperfection, is used in every part of physics, not just for its
calculations but also for representation of ideas down to the basic
level. I find this to be uncanny. What if the physics theories we derive
are erroneous because of erroneous mathematical systems or concepts? I
believe that part of the answer is "experiments", to return to the
empirical nature of, well, empirical sciences, and see if the theories
actually predict the results. But there are tons of logistical issues
that prevent us from doing so, not to mention the inherent downside to
experiments: a limited number of attempts cannot derive a general-case
theory (take the Borwein integral as an example: a limited number of
experiments may easily conclude that it’s always
<span class="math inline">*π*</span> while it’s actually less than
<span class="math inline">*π*</span> after the 15th iteration). So then,
we turn to logical proof. But then because mathematical logic is
incomplete, we are not guaranteed to be able to prove a given
conjecture, which may be otherwise indicated by experiments, to be
correct.

Note that I am not arguing that physics derives its concepts from
mathematics; I believe that physics has chosen the part of math that it
believes to be helpful for use therein. However, these have strange and
unforseeable implications.

The addition of mathematical concepts into physics doesn’t only bring
the maths we want to bring over, it brings all relevant definitions,
axioms, logic, proofs, theorems, etc. all along with it. Once we
"assign" that a physical entity is "represented" by a "corresponding
concept" in mathematics, we can only abide by the development thereof.
So although physics originally isn’t guided by mathematics, the act of
choosing the part of math that’s useful in physics puts physics under
the iron grip of mathematical logic, which is inconsistent and
potentially incomplete, as contrary to the realistic and observable
nature that physics is supposed to be.

I had a brief chat with Mr. Coxon and he aclled how the existence of
neutrinos were predicted "mathematically" before they were
experimentally discovered physically. I do not know the history of all
this, but Mr. Coxon said that physicists looked at a phenomenon (I
believe that was beta decay) and went like: "where did that missing
energy go"? and proposed that there was a particle called a neutrino
that fills in the missing gap. (Alternatively, they could have
challenged the conservation of energy, which leads us to the topic of
"why do we find it so hard to challenge theories that seem beautiful,
and why does conservation and symmetry seem beautiful", but let’s get
back on topic...) Then twnety years later neutrinos were "discovered"
physically by experiments. Mr. Coxon said that it looked like that
mathematics predicted and in some resepct "guided" physics. Personally I
believe that this isn’t a purely "mathematical" pre-discovery and it’s
more of a "conservation of energy, a physics theory was applied, and
math was used as a utility to find incompletenesses in our understanding
of particles." I think that I’ve heard (but cannot recall at the moment)
two cases where conceptual analysis in "pure math" perfectly corresponds
to the phenomenon in physics discovered later which again makes me
question whether math played some role in the
experiment-phenomenon-discovery cycle of physics. I guess I need more
examples.

I remember that Kant argued that human knowledge is human perception and
its leading into rational thought and reason. To me this sounds like the
development of math, but in some sense this could also apply to physics,
though I still believe that physics theories even if reasoned require
experimental "testing" (not "verification") for it to be acceptable in
terms of physics. THis leaves me in a situation where none of the ways
of knowing that I can understand, even if used together, could bring
about an absolutely correct\[tm\] theory of physics. See, reason is
flawed because logic may fail, not to mention when we are literally
trying to define/describe novel physics concepts/entities and there
aren’t any definitions to begin with to even start with reasoning and
all we could do is using intuition in discovery. (Pattern finding in
intuitive concepts would require formalization to be somewhat
acceptable, but not absolutely ground-standing, in the realm of reason.)
And then, experiments are flawed because errors will always exist in the
messey real world (and if we do simulations that’s just falling back to
our existing understanding of logical analysis). So now we have no
single way, or combination of methods, to accurately verify the
correctness of a physics theory, which by definition of physical is
representative of the real world, basically saying that "we will never
know how things work in the real world". That feels uncanny. Also, how
do I even make sense of a physics theory to be "correct"? It’s arguable
whether any physics theory could be correct in the first place. If Kant
is correct then all our theories of physics is ultimately perception and
having biology in the form of human observations in the absolute and
hard-core feeling of physics is so weird.

## Random Ideas

Here are some of my random ideas that I haven’t sorted into
fully-explained paragraphs due to the lack of time to do so. However, I
believe that the general point is here, and I would appreciate a
discussion about these topics.

-   How is it possible to know *anything* in physics? Experiments can be
    inaccurate or conducted wrongly or can be affected by physical
    properties completely unknown to us, and mathematical proof can be
    erroneous because of systematic flaws and/or false assumptions about
    the representation of physical entities in math.

-   Gödel’s theorems only tell us that there *are* true statements that
    we cannot prove, and there *may be* inconsistencies. My intuition
    suggests that these statements and inconsistencies would be in the
    highly theoretical realm of math, which if accurately identified and
    are avoided in physics, would not pose a threat to applied
    mathematics in physics.

    However, it shall be noted that any single inconsistency may be
    abused to prove any statement, if consistencies were to be found in
    math: Suppose that we know a statement
    <span class="math inline">*A*</span> (i. e. physics is squishy) is
    both true and false. Thus, <span class="math inline">*A* = 1</span>
    and <span class="math inline">*A* = 0</span> are both true. Then,
    take a random statement <span class="math inline">*B*</span> (let’s
    say "Z likes humanities"). Thus we have
    <span class="math inline">*A* + *B* = 1</span> where
    <span class="math inline">+</span> is a boolean "or" operator
    because <span class="math inline">*A* = 1</span> and
    <span class="math inline">1 + *x* = 1</span>
    (<span class="math inline">*x*</span> is any statement). But then
    because <span class="math inline">*A* = 0</span>, thus
    <span class="math inline">0 + *B* = 1</span>, which means that
    <span class="math inline">*B*</span> must be 1 (if
    <span class="math inline">*B*</span> is zero, then
    <span class="math inline">0 + 0 = 0</span>). Thus, if we can prove
    that "physics is squishy" and "physics is not squishy" (without
    differences in definition), then we can literally prove that "Z
    likes humanities". Other from not defining subjective things like
    "squishy" and "is" (in terms of psychology), we can’t get around
    this easily, and everything would be provable, which would not be
    fun for physics.

## Bugs

-   No citations present for referenced materials. Thus, this article is
    not fit for publication, and shall not be considered an
    authoritative resource. The addition of references will massively
    improve the status of this article.

-   The ideas are a bit messy. The structure needs to be reorganized.
    Repetition is prevalent and must be reduced to a minimum.

## Acknowledgements

Multiple documents were consulted in the writing of this article, which
sometimes simply summarizes ideas already expressed by others. Please
see the attached reading materials for details. Works of Eugene Wigner
were especially helpful.

Contributors include many YK Pao School students and faculty. Insightful
conversations with other students, such as MuonNeutrino\_, have given me
great inspiration in the ideas expressed in this article and discussions
are still ongoing. For privacy reasons other names aren’t listed, but I
would be happy to put names on here at request/suggestion.

------------------------------------------------------------------------

1.  I’m not exactly sure about this, though, I can only comprehend it
    slightly superficially as I don't have much experience in particle
    physics or in special unitary groups, yet.
    <a href="#fnref1" class="footnote-back" role="doc-backlink">↩︎</a>
