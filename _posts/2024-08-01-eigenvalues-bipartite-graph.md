---
title: Eigenvalue Pairing in Bipartite Graphs
tags: ["Algebraic Combinatorics", "Graph Theory", "Adjacency Matrix"]
key: eigenvalues-bipartite-graph
---

***Taken from:*** \[[1](#Stanley2018), Exercise 1.3\].

## Exercise 1.3
A *bipartite graph* $G$ with *vertex bipartition* $(A,B)$ is a graph whose vertex set is the disjoint union $A \mathbin{\unicode{x228D}} B$ of $A$ and $B$, such that every edge of $G$ is incident to one vertex in $A$ and one vertex in $B$. Show by a walk-counting argument that the nonzero eigenvalues of $G$ come in pairs $\pm \lambda$.

An equivalent formulation can be given in terms of the characteristic polynomial $f(x)$ of the matrix $\boldsymbol{A}(G)$. Recall that the *characteristic polynomial* of a $p \times p$ matrix $A$ is defined to be $\det(A - x I)$. The present exercise is then equivalent to the statement that when $G$ is bipartite, the characteristic polynomial $f(x)$ of $A(G)$ has the form $g(x^2)$ (if $G$ has an even number of vertices) or $x g(x^2)$ (if $G$ has an odd number of vertices) for some polynomial $g(x)$.

***Note.*** Sometimes the characteristic polynomial of a $p \times p$ matrix $A$ is defined to be $\det(x I - A) = (-1)^p \det(A - x I)$. We will use the definition $\det(A - x I)$, so that the value at $x = 0$ is $\det A$.

### Combinatorial Proof

For every bipartite graph, it holds that there are no cycles of odd length. Therefore, every closed walk has $\ell = 2k$ steps. Let $\lambda_1, \ldots, \lambda_r$ be the nonzero eigenvalues of $G$, and let $p(\lambda_1, \ldots, \lambda_r) = \sum_{i=1}^r \lambda_i^\ell = \sum_{i=1}^r (\lambda_i^2)^k$ be the number of walks of length $\ell$ in $G$.

It is trivial that $p(\lambda_1, \ldots, \lambda_r) = p(-\lambda_1, \ldots, -\lambda_r)$, but what this tells us, according to Lemma 1.7, is that if $\lambda_i$ is part of this list of eigenvalues, then $\lambda_i = -\lambda_j$ for some other $\lambda_j$. Thus, if $\lambda_i$ is an eigenvalue, then $-\lambda_i$ must also be an eigenvalue. <span style="float: right;">$\blacksquare$</span>

### Alternative Proof

Another argument following the suggestion in the text is as follows.

Let $ n = \lvert A\rvert $, $ m = \lvert B\rvert $ and $p=n+m$. Also, let $ I_k $ and $ O_k $ denote the identity matrix and the square zero matrix of size $ k $, respectively. Without loss of generality, $n\geq m$ and $ \boldsymbol{A}(G) $ can be block-decomposed as

$$
\boldsymbol{A}(G)=
\left(
\begin{array}{c|c}
    O_n & M \\ \hline
    M^T & O_m
\end{array}
\right),
$$

where $ M $ is an $ n \times m $ matrix.

Now, by the formula from \[[2](#Taboga2021)\], the characteristic polynomial[^1] of $ \boldsymbol{A}(G) $ is


[^1]: It may be necessary to clarify that even though $ f(x) $ is a polynomial in the variable $ x $, the last expression is not necessarily a product of polynomials. In fact, if it were, all the eigenvalues would be zero. That determinant is a rational function in $ x $. Furthermore, if $ x $ is a factor of $ f(x) $, the third step might not make sense since we could be dividing by zero. However, we are only interested in a new way to express $ f(x) $ when $ x \neq 0 $; by continuity, we could justify that this expression may have a couple of removable discontinuities at that point.

$$
\begin{align*}
    f(x)
    &=\det\left(\boldsymbol{A}(G)-x I\right)\\
    &=
    \det
    \left(\begin{array}{c|c}
        -x I_n & M \\ \hline
        M^T & -x I_m
    \end{array}\right)\\
    &=\det(-x I_n)\det\left(-x I_m-M^T(-x I_n)^{-1}M\right)\\
    &=(-x)^n\det\left(-x I_m+x^{-1}M^T M\right)\\
    &=(-x)^{n+m}\det\left(I_m-x^{-2}M^TM\right)\\
    &=(-x)^p\det\left(I_m-\frac{1}{x^2}M^TM\right).
\end{align*}
$$

Furthermore, it can be verified that

$$
\begin{align*}
    f(-x)
    &=
    \begin{cases}
        f(x),&\text{if $p$ is even},\\
        -f(x),&\text{if $p$ is odd}.
    \end{cases}
\end{align*}
$$

That is, $ f(x) $ is an even function if $ p $ is even, and it is an odd function if $ p $ is odd.

It is known that a polynomial $ f(x) $ is even if and only if it is of the form $ g(x^2) $ for some polynomial $ g(x) $, and it is odd if and only if it is of the form $ x g(x^2) $. This is equivalent to what we want to prove, since in both cases, the nonzero roots of $ f $ are precisely of the form $ x = \pm \lambda $. <span style="float: right;">$\blacksquare$</span>

## References

1. <a id="Stanley2018"></a> Stanley, Richard P. (2018). *Algebraic Combinatorics: Walks, Trees, Tableaux, and More* (2nd ed.). Springer International Publishing. <a href="https://doi.org/10.1007/978-3-319-77173-1" target="_blank">https://doi.org/10.1007/978-3-319-77173-1</a>

2. <a id="Taboga2021"></a> Taboga, M. (2021). *Determinant of a block matrix*. Lectures on matrix algebra. Retrieved from <a href="https://www.statlect.com/matrix-algebra/determinant-of-block-matrix" target="_blank">https://www.statlect.com/matrix-algebra/determinant-of-block-matrix</a>