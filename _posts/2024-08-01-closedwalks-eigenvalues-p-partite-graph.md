---
title: Counting Closed Walks and Determining Eigenvalues in Complete \( p \)-Partite Graphs \( K(n,p) \)
tags: ["Algebraic Combinatorics", "Graph Theory", "Adjacency Matrix"]
key: closedwalks-eigenvalues-p-partite-graph

---

***Taken from:*** \[[1](#Stanley2018), Exercise 1.6\].

## Exercise 1.6
Let $n \geq 1$. The complete $p$-partite graph $K(n,p)$ has vertex set $V = V_1 \mathbin{\unicode{x228D}} \cdots \mathbin{\unicode{x228D}} V_p$ (disjoint union), where each $\lvert V_i\rvert = n$, and an edge from every element of $V_i$ to every element of $V_j$ when $i \neq j$. (If $u, v \in V_i$, then there is no edge $uv$.) Thus, $K(1,p)$ is the complete graph $K_p$, and $K(n,2)$ is the complete bipartite graph $K_{n,n}$.

1. (\*) Use Corollary 1.6 to find the number of closed walks of length $\ell$ in $K(n,p)$.
2. Deduce from (a) the eigenvalues of $K(n,p)$.

### Solution

1. Every closed walk of length $\ell$ in $K(n, p)$ is isomorphic to a closed walk in the complete graph $K_p$. For each step in this walk, we must first choose one of the partitions $V_i$ of the graph and then one of the $n$ vertices within $V_i$. The number of ways to walk arbitrarily between partitions is simply $p\ c(p, \ell)$---as defined in <a href="/2024/08/01/closedwalks-completegraph.html" target="_blank">Exercise 1.1</a>---and each time we choose a vertex, we multiply by $n$. Therefore, the number of closed walks in $K(n, p)$ is given by

   $$n^\ell p\ c(p, \ell) = (n(p - 1))^\ell + (p - 1)(-n)^\ell.$$

2. From Corollary 1.3 and Lemma 1.7, it follows that the eigenvalues of $K(n, p)$ are $n(p-1)$ with multiplicity $1$, $-n$ with multiplicity $p-1$, and $0$ with multiplicity $np - p$.

## References

1. <a id="Stanley2018"></a> Stanley. Richard P. (2018). *Algebraic Combinatorics: Walks, Trees, Tableaux, and More* (2nd ed.). Springer International Publishing. <a href="https://doi.org/10.1007/978-3-319-77173-1" target="_blank">https://doi.org/10.1007/978-3-319-77173-1</a>