---
title: Number of Closed Walks in the Complete Graph $K_p$
tags: ["Algebraic Combinatorics", "Graph Theory", "Adjacency Matrix"]

---

***Taken from:*** \[[1](#Stanley2018), Exercise 1.1\].

## Exercise 1.1
Find a combinatorial proof of Corollary 1.6, i.e., the number of closed walks of length $\ell$ in $ K_p $ from some vertex to itself is given by

$$
\frac{1}{p}\left( (p - 1)^\ell + (p - 1)(-1)^\ell \right).
$$

### Proof

Let $c(p, \ell)$ the number of closed walks of length $\ell$ in $K_p$ from some vertex to itself, for $p\geq 1$ and $l\geq0$. For convenience, we will say that a walk is open if it is not closed, and we define $ c(p, 0) := 1 $.

The number of arbitrary walks in $ K_p $ of length $ \ell $ that start from any vertex is given by $ p(p-1)^\ell $, because to choose the first vertex, we have $ p $ options; then we must choose the second vertex of the walk, for which we have $ p-1 $ options, and for each subsequent vertex, we also have $ p-1 $ options, continuing this pattern until completing a walk of length $ \ell $.

Let $ \mathbf{A}(K_p) $ denote the adjacency matrix of the graph. By Theorem 1.1, we have the identity

$$
p(p-1)^\ell = \sum_{1 \leq i,j \leq p} (\mathbf{A}(K_p)^\ell)_{ij} = \sum_{i=1}^p (\mathbf{A}(K_p)^\ell)_{ii} + \sum_{i \neq j} (\mathbf{A}(K_p)^\ell)_{ij}.
$$

The first summand in the last equality counts the number of closed walks of length $ \ell $ from any vertex, which corresponds to $ p \, c(p, \ell) $. On the other hand, the second summand corresponds to the number of arbitrary open walks of length $ \ell $. These walks are in bijection with the number of arbitrary closed walks of length $ \ell + 1 $, because each closed walk is the concatenation of an open walk of length $ \ell $ with an edge whose final vertex is the initial vertex of the closed walk. Thus, the second summand corresponds to $ p \, c(p, \ell+1) $. We have the identity 

$$
p(p-1)^\ell = p \, c(p, \ell) + p \, c(p, \ell+1),
$$

it follows that 

$$
(p-1)^\ell = c(p, \ell) + c(p, \ell+1).
$$

Now, we define the generating function $ C(x) := \sum_{\ell \geq 0} c(p, \ell)x^\ell $. By multiplying the last equality by $ x^\ell $ and summing over $ \ell \geq 0 $, we obtain—for $\lvert x\rvert$ small enough—

$$
\begin{align*}
    \frac{1}{1-(p-1)x}
    &= \sum_{\ell \geq 0}(p-1)^\ell x^\ell \\
    &= C(x) + \sum_{\ell \geq 0} c(p, \ell+1)x^\ell\\
    &= C(x) + \frac{1}{x}\sum_{\ell \geq 1} c(p, \ell)x^\ell\\
    &= C(x) + \frac{1}{x}\left(C(x)-1\right).
\end{align*}
$$

Solving for $ C(x) $,

$$
\begin{align*}
    C(x) 
    &= \frac{1+2x-px}{(1-(p-1)x)(1+x)}\\
    &= \frac{1}{p}\left(\frac{1}{1-(p-1)x} + \frac{p-1}{1+x}\right)\\
    &= \frac{1}{p}\left(\sum_{\ell \geq 0}(p-1)^\ell x^\ell + (p-1)\sum_{\ell \geq 0}(-1)^\ell x^\ell\right).
\end{align*}
$$

By comparing the coefficients, we get the desired equality. <span style="float: right;">$\blacksquare$</span>

## References

1. <a id="Stanley2018"></a>  *Algebraic Combinatorics: Walks, Trees, Tableaux, and More* (2nd ed.). Springer International Publishing. <a href="https://doi.org/10.1007/978-3-319-77173-1" target="_blank">https://doi.org/10.1007/978-3-319-77173-1</a>