---
title: Equivalence Between the Definitions of Solvable Group
tags: ["Group Theory"]
---

## Introduction

A group $G$ is *solvable* if there exists a chain of subgroups $$\lbrace e\rbrace =G_n\lhd G_{n-1}\lhd \cdots \lhd G_1 \lhd G_0 =G$$ such that each $G_{i-1}/G_i$ is *cyclic*.

**Theorem.** For finite $G$, the definition of *solvable* is not altered when the condition that each quotient group is *cyclic* is replaced by being *abelian*.

## Proof

One implication is immediate, since every cyclic group is abelian. Conversely, if each quotient is abelian, we will first focus on the case where $G$ is abelian. If it is, let $G_1$ be a maximal proper subgroup of $G$; then the abelian group $G/G_1$ has prime order. Otherwise, there would exist a proper nontrivial subgroup $H$ of $G/G_1$ such that its inverse image under the canonical projection from $G$ onto $G/G_1$ is a subgroup contained between $G_1$ and $G$, contradicting the maximality of $G_1$. Repeating the same argument on $G_1$, we obtain a subgroup $G_2$ of $G_1$ such that $G_1/G_2$ has prime order. Consequently, one obtains the desired chain of quotient groups with prime order, that is, cyclic[^Footnote1]. This process must eventually stop at the trivial subgroup $\lbrace e\rbrace $, since $G$ is finite.

Now, suppose that $G$ is a finite group with a normal subgroup $H$ such that $G/H$ is abelian. By the previous argument, there exists a chain of subgroups

$$\lbrace e\rbrace =K_n\lhd K_{n-1}\lhd \cdots \lhd K_1 \lhd K_0 =G/H$$ 

such that each $K_{i-1}/K_i$ is cyclic of prime order. Taking the canonical projection $\varphi:G\rightarrow G/H$ and defining $L_i=\varphi^{-1}(K_i)$, we obtain the chain of subgroups

$$H=L_n\lhd L_{n-1}\lhd\cdots\lhd L_1\lhd L_0=G.$$

Each $L_i$ is normal in $L_{i-1}$ because each $K_i$ is abelian and normal in its predecessors. Since $\varphi$ is surjective, $\varphi(L_i)=K_i$ for all $i$. Applying the Third Isomorphism Theorem to $\varphi$ restricted to $L_{i-1}$, we obtain that $L_{i-1}/L_i\cong \varphi(L_{i-1})/\varphi (L_i)$, that is,

$$L_{i-1}/L_i\cong K_{i-1}/ K_i,$$

from which it follows that $L_{i-1}/L_i$ is cyclic of prime order.

To conclude, if $G$ is a finite group with a chain of subgroups 

$$\lbrace e\rbrace =N_n\lhd N_{n-1}\lhd \cdots \lhd N_1 \lhd N_0 =G$$ 

such that $N_{i-1}/N_i$ is abelian, as shown above, it is possible to refine this chain to obtain subchains between each $N_i$ and $N_{i-1}$ in such a way that the corresponding quotients are cyclic, and finally to construct a finer chain 

$$\lbrace e\rbrace =G_n\lhd G_{n-1}\lhd \cdots \lhd G_1 \lhd G_0 =G$$ 

such that each $G_{i-1}/G_i$ is cyclic. <span style="float: right;">$\blacksquare$</span>

## References

1. <a id="LawrenceZorzitto2021"></a> Lawrence, J. W., & Zorzitto, F. A. (2021). *Abstract Algebra: A Comprehensive Introduction*. Cambridge University Press. <a href="https://doi.org/10.1017/9781108874328" target="_blank">https://doi.org/10.1017/9781108874328</a>

[^Footnote1]: Every group of prime order is cyclic. Indeed, if $G$ has prime order, it has at least two elements. If we take $g$ different from the identity element, the order of $\gen{g}$ divides the order of $G$, but since the latter is prime, it must be that $G=\gen{g}$.