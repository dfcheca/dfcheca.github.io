---
title: Counting Spanning Trees of Fan and Wheel Graphs via Deletion-Contraction
tags: ["Graph Theory", "Generating Functions", "Analytic Combinatorics"]
key: count-spanning-trees-fan-wheel-del-con
modify_date: 2026-08-28

---

We give deletion-contraction proofs of the classical formulas for the number of spanning trees of fan and wheel graphs in terms of Fibonacci and Lucas numbers. For the fan graph, a suitable deletion-contraction step yields a second-order recurrence satisfied by $F_{2n}$. For the wheel graph, the corresponding recurrence is inhomogeneous; we solve it using generating functions.

A similar approach was already considered in \[[3](#Myers1971)\]. The results proved here are essentially the same, but we use different choices of edges and obtain the resulting recurrences by a somewhat different argument.

## Introduction

<div class="theorem" markdown="1" id="definition-fan-wheel">

**Definition 1.** We define the fan graph $A_{n+1}$ to have $n+1$ vertices $\lbrace 0,1,...n\rbrace$, where the vertices $\lbrace 1,...n\rbrace$ form an $n$-path and vertex $0$ is adjacent to every vertex of the path.

Similarly, the wheel graph $W_{n+1}$ has $n+1$ vertices $\lbrace 0,1,...n\rbrace$, where the vertices $\lbrace 1,...n\rbrace$ form an $n$-cycle and vertex $0$ is adjacent to every vertex of the cycle.

</div>

<figure style="margin-top: 30px;" id="figure-1">
  <img
    src="/assets/images/Fan_and_wheel.svg"
    alt="Fan Graph $A_{n+1}$ and Wheel Graph $W_{n+1}$."
    style="width: 60%; height: auto;"
  >
  <figcaption style="margin-top: 10px;"> <strong>Figure 1.</strong> Fan Graph $A_{n+1}$ and Wheel Graph $W_{n+1}$.</figcaption>
</figure>

In \[[3](#Myers1971)\], the relevance of this type of graph in the theory and applications of planar graphs is mentioned, among which some electrical networks that can be modeled using these graphs stand out. Likewise, <a href="/2024/10/21/colombia-map-coloring.html" target="_blank" rel="noopener noreferrer">in this blog</a> we have seen how wheel graphs often appear as minors in the deletion-contraction relation for the chromatic polynomial of a graph and how they can help simplify some terms in this relation.

Let $\tau(G)$ denote the number of spanning trees of a graph $G=(V,E,\varphi)$. Sedlaček proved in \[[1](#Sedlacek1970)\] that $\tau(A_{n+1})=F_{2n}$ and $\tau(W_{n+1})=L_{2n}-2$, where $F_n$ and $L_n$ are, respectively, the $n$-th Fibonacci and Lucas numbers (resp. <a href="https://oeis.org/A000045" target="_blank" rel="noopener noreferrer">*OEIS* A000045</a> and <a href="https://oeis.org/A000032" target="_blank" rel="noopener noreferrer">*OEIS* A000032</a>). Such proof consists of using the <a href="https://en.wikipedia.org/wiki/Kirchhoff%27s_theorem" target="_blank" rel="noopener noreferrer">Matrix-tree theorem</a> and calculating the aforementioned number of trees by a direct computation.

In this article, we will present a proof via the recurrence relation satisfied by $\tau(G)$, namely, the well-known deletion-contraction relation, which is stated below.

<div class="theorem" markdown="1" id="theorem-1">

  **Theorem 1 \[[2](#Kocay2005), p. 109\].** Let $G=(V,E,\varphi)$ be a graph and $e\in E$ an edge that is neither a loop nor a bridge. Then,
  $$
  \begin{equation}
      \tau(G)=\tau(G-e)+\tau(G / e). \label{eq:sp-del-con}
  \end{equation}
  $$

</div>

The next lemma will be useful when we apply some deletion-contraction relations.

**For convenience, throughout this article, we use the notation $e_{u,v}$ to denote an edge such that $\varphi(e_{u,v})=\lbrace u,v\rbrace$, with $e_{u,v}=e_{v,u}$.**

<div class="theorem" markdown="1" id="lemma-1">

**Lemma 1.** Let $G=(V,E,\varphi)$ be a simple graph, where $\varphi$ is the incidence function of $G$, and let $e\in E$. Let $e'\notin E$ and $G'=\left(V,E\cup\lbrace e'\rbrace,\varphi'\right)$, where $\varphi'\mid_E=\varphi$ and $\varphi'(e')=\varphi(e)$. That is, $G'$ is the graph obtained by duplicating the edge $e$ in $G$. Then,

$$
\begin{equation}
  \tau(G')=2\tau(G)-\tau(G - e). \label{eq:del-con-rep}
\end{equation}
$$

</div>

***Proof.*** Applying the relation \eqref{eq:sp-del-con} to $G'$ yields

$$
\tau(G')=\tau(G'-e')+\tau(G' / e')=\tau(G)+\tau(G / e),
$$

since $G'-e'\cong G$ and $\tau(G' / e')=\tau(G / e)$. Substituting $\tau(G/e)=\tau(G)-\tau(G - e)$ into the preceding expression yields the result. {% include qed.html %}

We will require the use of generating functions, particularly those associated with $F_{2n}$ and $L_{2n}$. The following lemma allows us to determine the linear recurrence satisfied by a sequence whose generating function is rational, as is the case here.

<div class="theorem" markdown="1" id="lemma-2">

**Lemma 2 \[[4](#Stanley2012), §4.1, Th. 4.1.1\].** Let $\beta_1,\beta_2,\ldots,\beta_d$ be a given sequence of complex numbers, $d\geq1$, and $\beta_d\neq 0$. The following conditions on a sequence $(a_n)_{n\geq0}$ of complex numbers are equivalent,

<ol type="i" style="margin-left: 2em;">
  <li>
    $$\sum_{n\geq0}a_n x^n=\frac{P(x)}{Q(x)},$$

    where $Q(x)=1+\beta_1x+\beta_2x^2+\cdots+\beta_dx^d$ and $P(x)\in \mathbb{C}[x]$ is a polynomial of degree less than $d$.
  </li>
  <li>
    For every $n\geq0$,

    $$a_{n+d}+\beta_1a_{n+d-1}+\beta_2a_{n+d-2}+\cdots+\beta_d a_n=0.$$
  </li>
</ol>

</div>

In particular, it is known \[[4](#Stanley2012), §1.1, Example 1.1.12\] that $F(x):=\sum_{n\geq0}F_n x^n=\frac{x}{1-x-x^2}$, so the generating function of $F_{2n}$ is

$$\sum_{n\geq 0}F_{2n}x^n=\frac{F(x^{1/2})+F(-x^{1/2})}{2}=\frac{x}{1-3x+x^2}.$$

By [Lemma 2](#lemma-2), $F_{2n}=3F_{2(n-1)}-F_{2(n-2)}$ for every $n\geq 2$. **Our goal will be to prove this recurrence in order to establish the formula for $\tau(A_{n+1})$.**

Similarly, for $\sum_{n\geq0}L_n x^n=\frac{2-x}{1-x-x^2}$, we obtain

$$\sum_{n\geq 0}L_{2n}x^n=\frac{2-3x}{1-3x+x^2}.$$


## The Fan Graph

<div class="theorem" markdown="1" id="theorem-2">

**Theorem 2.** For $n\geq 1$, the number of spanning trees of the fan graph $A_{n+1}$ is given by $\tau(A_{n+1})=F_{2n}$ (<a href="https://oeis.org/A001906" target="_blank" rel="noopener noreferrer">*OEIS* A001906</a>), where $F_n$ is the $n$-th Fibonacci number.

</div>

***Proof.*** Let $n\geq 3$. We will denote by $B_{n+1}$ the graph obtained from $A_{n+1}$ by adding an additional edge $e'\_{0,n}$. If we apply deletion-contraction to $A_{n+1}$ with the edge $e=e_{n-1,n}\;$, we obtain the diagram of [Figure 2](#figure-2).

<figure style="margin-top: 30px;" id="figure-2">
  <img
    src="/assets/images/fan_decomposition.svg"
    alt="Decomposition of the Fan Graph $A_{n+1}$"
    style="width: 60%; height: auto;"
  >
  <figcaption style="margin-top: 10px;"> <strong>Figure 2.</strong> Decomposition of the Fan Graph $A_{n+1}$.</figcaption>
</figure>

Note that $A_{n+1}/e\cong B_n$ and that $\tau(A_{n+1}-e)=\tau(A_n)$, since the edge $e\_{0,n}$ in $A_{n+1}-e$ is a bridge. By \eqref{eq:sp-del-con}, we have

$$

\begin{equation}

  \tau(A_{n+1})=\tau(B_n)+\tau(A_n). \label{eq:first-an}

\end{equation}

$$

By \eqref{eq:del-con-rep}, $\tau(B_n)=2\tau(A_n)-\tau(A_n-e\_{0,n-1})$, and again $\tau(A_n-e\_{0,n-1})=\tau(A_{n-1})$, since $e\_{n-2,n-1}$ is a bridge in $A_n-e\_{0,n-1}$. Substituting back into \eqref{eq:first-an} yields

$$\tau(A_{n+1})=2\tau(A_n)-\tau(A_n-e_{0,n-1})+\tau(A_n)=3\tau(A_n)-\tau(A_{n-1}).$$

Let $a_n=\tau(A_{n+1})$ for all $n\geq 1$, and therefore $a_n=3a_{n-1}-a_{n-2}$ for every $n\geq 3$. It is easy to see that $a_1=1$ and $a_2=3$. As noted above, this sequence satisfies the same second-order recurrence relation as $F_{2n}$ and has the same initial values; therefore, they match. {% include qed.html %}

## The Wheel Graph

<div class="theorem" markdown="1" id="theorem-3">

**Theorem 3.** For $n\geq 1$, the number of spanning trees of the wheel graph $W_{n+1}$ is given by $\tau(W_{n+1})=L_{2n}-2$ (<a href="https://oeis.org/A004146" target="_blank" rel="noopener noreferrer">*OEIS* A004146</a>), where $L_n$ is the $n$-th Lucas number.

</div>

***Proof.*** Let $n\geq 3$, and let $R_{n+1}$ be the graph obtained by adding an additional spoke edge $e'\_{0,1}$ to $W_{n+1}$. Applying deletion-contraction to the rim edge $e=e\_{1,n}$ in $W_{n+1}$ gives diagram in [Figure 3](#figure-3).

<figure style="margin-top: 30px;" id="figure-3">
  <img
    src="/assets/images/wheel_decomposition.svg"
    alt="Decomposition of the Wheel Graph $W_{n+1}$"
    style="width: 60%; height: auto;"
  >
  <figcaption style="margin-top: 10px;"> <strong>Figure 3.</strong> Decomposition of the Wheel Graph $W_{n+1}$.</figcaption>
</figure>

Note that $W_{n+1}/e\cong R_n$ and $W_{n+1}-e\cong A_{n+1}$. Therefore,

$$
\begin{equation}
  \tau(W_{n+1})=\tau(R_n)+\tau(A_{n+1}). \label{eq:first-wn}
\end{equation}
$$

Similarly, by \eqref{eq:del-con-rep}, $\tau(R_n)=2\tau(W_n)-\tau(W_n-e\_{0,1})$. We can apply deletion-contraction to $f=e\_{1,2}$ in $G=W_n-e\_{0,1}$ to obtain $\tau(W_n-e\_{0,1})=\tau(W_{n-1})+\tau(A_{n-1})$, as shown in [Figure 4](#figure-4).

<figure style="margin-top: 30px;" id="figure-4">
  <img
    src="/assets/images/wheel_wo_spoke.svg"
    alt="Decomposition of the Wheel without a Spoke"
    style="width: 60%; height: auto;"
  >
  <figcaption style="margin-top: 10px;"> <strong>Figure 4.</strong> Decomposition of the Wheel without a Spoke.</figcaption>
</figure>

Substituting back into \eqref{eq:first-wn} gives

$$
\begin{equation}
\tau(W_{n+1})=2\tau(W_n)-\tau(W_{n-1})-\tau(A_{n-1})+\tau(A_{n+1}).
\end{equation}
$$

Let $w_n=\tau(W_{n+1})$ for $n\geq 1$. Then

$$w_n=2w_{n-1}-w_{n-2}-a_{n-2}+a_n,$$

and it is straightforward to verify that $a_n-a_{n-2}=F_{2n}-F_{2n-4}=L_{2n-2}$, so for $n\geq 3$,

$$
\begin{equation}
  w_n=2w_{n-1}-w_{n-2}+L_{2n-2}. \label{eq:second-wn}
\end{equation}
$$

The initial conditions can be computed manually: $w_1=1$ and $w_2=5$.

Unlike the case of the fan graph, it is not immediate to verify what the solution to \eqref{eq:second-wn} is, so we will apply a standard method consisting of deriving from this a functional equation for $W(x)=\sum_{n\geq 1}w_n x^n$ that allows us to obtain a closed formula for $w_n$. Effectively,

$$
\begin{align*}
  W(x)
  &=\sum_{n\geq 1}w_n x^n\\
  &=x+5x^2+\sum_{n\geq 3} (2w_{n-1}-w_{n-2}+L_{2n-2}) x^n\\
  &=x+5x^2++2x \left(W(x)-x\right)-x^2 W(x)+x\left(\frac{2-3x}{1-3x+x^2}-2-3x\right).\\
\end{align*}
$$

Solving for $W(x)$ and applying partial fractions yields

$$
\begin{align*}
  W(x)
  &=\frac{x+x^2}{(1-x)(1-3x+x^2)}\\
  &=\frac{2-3x}{1-3x+x^2}-\frac{2}{1-x}\\
  &=\sum_{n\geq 0}L_{2n}x^n-\sum_{n\geq 0}2 x^n.
\end{align*}
$$

Comparing the coefficients on both sides proves the formula. {% include qed.html %}

## References

1. <a id="Sedlacek1970"></a> Sedlaček, J. (1970).  ***Lucasova čísla v teorii grafů***. MATEMATIKA (GEOMETRIE A TEORIE GRAFŮ). Sborník pedagogické fakulty University Karlovy. p. 111-115.

2. <a id="Kocay2005"></a> Kocay, W., & Kreher, D.L. (2005). ***Graphs, Algorithms, and Optimization*** (1st ed.). Chapman and Hall/CRC. <a href="https://doi.org/10.1201/9781315272689" target="_blank" rel="noopener noreferrer">https://doi.org/10.1201/9781315272689</a>

3. <a id="Myers1971"></a> Myers, B. (1971). ***Number of spanning trees in a wheel***. IEEE Transactions on Circuit Theory, 18(2), 280–282. [https://doi.org/10.1109/TCT.1971.1083273](https://doi.org/10.1109/TCT.1971.1083273)

4. <a id="Stanley2012"></a> Stanley, Richard P. (2012). ***Enumerative Combinatorics: Volume 1*** (2nd ed.). Cambridge University Press. <a href="https://doi.org/10.1017/CBO9781139058520" target="_blank" rel="noopener noreferrer">https://doi.org/10.1017/CBO9781139058520</a>