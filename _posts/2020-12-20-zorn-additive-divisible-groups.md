---
title: Divisible Abelian Groups as Direct Summands via Zorn's Lemma
tags: ["Group Theory"]
---

## Introduction

The following theorem---to the best of my knowledge---was proven by Reinhold Baer in 1936 \[[1](#Baer1936)\], and Irving Kaplansky, in 1954 \[[2](#Kaplansky1954)\], was the first to publish a proof using Zorn's lemma, which is the one we will follow below.

**Theorem.** Let $A$ be an abelian group defined additively. Suppose that $A$ is *divisible*, that is, for every $a\in A$ and $n\in\mathbb{Z}$, there exists an element $x\in A$ such that $nx=a$. Let $G$ be an abelian group containing $A$, then $A$ is a direct summand of $G$.

## Proof

As stated, we will use Zorn's lemma. Let $\Omega$ be defined as

$$\Omega:=\set{H\leq G:A\cap H=\lbrace 0\rbrace}.$$

We know that $\Omega$ is not empty, since $\lbrace 0\rbrace \in \Omega$. Let us see that every chain of $(\Omega,\subseteq)$ is bounded above.

Let $\mathcal{C}=\lbrace H_i\rbrace _{i\in I}$ be a chain of $(\Omega,\subseteq)$. Let $H_S$ be defined as

$$H_S:= \bigcup_{i\in I} H_i.$$

It is clear that for every $j\in I$, $H_j\subseteq H_S$. We need to see that $H_S\in\Omega$, that is, $H_S\leq G$ and $A\cap H_S=\lbrace 0\rbrace $.

1. If $H_S=\lbrace 0\rbrace $, there is nothing to prove. Suppose $H_S\neq\lbrace 0\rbrace $.
    - Let $x,y\in H_S$. Then $x\in H_i$ and $y\in H_j$ for some $i,j\in I$. Without loss of generality, we assume that $i\leq j$, so that $x\in H_j$, since $H_i\subseteq H_j$. As $H_j\leq G$, it follows that $x+y\in H_j$. Since $H_j\subseteq H_S$, we have $x+y\in H_S$.

    - Let $a\in H_S$. Then $a\in H_i$ for some $i\in I$. Since $H_i\leq G$, there exists $-a\in H_i$ such that $a+(-a)=0=(-a)+a$. Again, by transitivity of containment, $-a\in H_S$.

    By both items, $H\leq G$.
2. We have

    $$A\cap H_S=A\cap \bigcup_{i\in I} H_i=\bigcup_{i\in I}A\cap H_i=\bigcup_{i\in I}\lbrace 0\rbrace =\lbrace 0\rbrace .$$

It follows that every chain of $(\Omega,\subseteq)$ is bounded above. By Zorn's lemma, there exists a maximal element in $(\Omega,\subseteq)$, which we will call $B$.

Our ultimate goal is to see that $A+B=G$. Suppose, by contradiction, that this is not the case, that is, $A+B\nsubseteq G$ or $G\nsubseteq A+B$. The first condition does not hold, by the way we have assumed $A$ and $B$.

For the second, suppose there exists an element $g\in G$ such that $g\in G$ but $g\notin A+B$. This implies that $g\notin B$, since otherwise, we would have $g\in B$ and $0\in A$, hence $g=0+g \in A+B$, a contradiction.

Let $B':=\langle B\cup\lbrace g\rbrace\rangle$. Then $B\subsetneq B'$. It follows that $A\cap B'\neq \lbrace 0\rbrace $, otherwise $B$ would not be maximal in $(\Omega,\subseteq)$.

Therefore, there exists $a\in A\cap B'$ nonzero, such that $a=b+ng$, with $b\in B$ and $n\in\mathbb{Z}$. It cannot happen that $n$ is zero, since $a=b$ would imply $A\cap B\neq\lbrace 0\rbrace $. Nor can $n$ be 1, since $a=b+g$ implies $g=a-b \in A+B$, which is contradictory.

We obtain $a-b=ng$, and since $a-b\in A+B$, it follows that $ng\in A+B$.

Without loss of generality, suppose that $n$ is the smallest positive integer such that $ng\in A+B$. Let $p$ be a prime number such that $p\mid n$. Define $y$ as

$$y:=\frac{n}{p}g.$$

It follows that $y\notin A+B$. However, $py\in A+B$.

Since $A$ is a divisible subgroup, $a=pa_1$ for some $a_1\in A$. Now define $z$ as

$$z:= y-a_1;$$

$z\notin A+B$, since otherwise we would have $y=a_1+z\in A+B$, which is contradictory. Nevertheless,

$$pz=py-pa_1=ng-a=-b\in B.$$

Since $z\notin A+B$, the same argument can be repeated with $B'':=\langle B\cup\lbrace z\rbrace \rangle$, to obtain that there exists $a'\in A\cap B''$ such that $a'\neq 0$ and $a'=b'+mz$, with $b'\in B$ and $m\in \mathbb{Z}$, and $m\neq0$.

It cannot happen that $p\mid m$, because otherwise, there would exist $k\in \mathbb{Z}$ such that $a'=b'+kpz$. We had seen that $pz \in B$, hence $b'+kpz \in B$. But $a'\in A$, and is not zero, which contradicts $A\cap B=\lbrace 0\rbrace $.

Thus $\gcd(m,p)=1$. By Bézout's lemma, there exist $\alpha,\beta \in\mathbb{Z}$ such that $\alpha m+\beta p =1$. Multiplying by $z$, yields

$$z=\alpha mz+\beta pz =\alpha(a'-b')+\left[\alpha(-b')+\beta(-b)\right].$$

We obtain that $\alpha a'\in A$ and $\left[\alpha(-b')+\beta(-b)\right]\in B$, contradicting that $z\notin A+B$.

We conclude that $A+B=G$, and consequently, $A\oplus B=G$. <span style="float: right;">$\blacksquare$</span>

## References

1. <a id="Baer1936"></a> Baer, Reinhold. (1936). *The Subgroup of the Elements of Finite Order of an Abelian Group*. Annals of Mathematics, 37(4), 766--781. <a href="https://doi.org/10.2307/1968617" target="_blank">https://doi.org/10.2307/1968617</a>

2. <a id="Kaplansky1954"></a> Kaplansky, Irving (1954). *Infinite Abelian Groups*. The University of Michigan Press.