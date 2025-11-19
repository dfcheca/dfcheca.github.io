---
title: Characterization of Shellings via Pure Intersections
tags: ["Algebraic Combinatorics", "Simplicial Complexes"]
key: shelling-equivalence

---

***Taken from:*** \[[1](#Stanley2018), Exercise 12.2\].

## Exercise 12.2

Prove the assertion of the Note following Definition 12.10. That is, let $\Delta$ be a pure $(d-1)$-dimensional simplicial complex. Then a facet ordering $F_1, \ldots, F_t$ is a shelling if and only if for all $2 \leq i \leq t$, the subcomplex $\left\langle F_1, \ldots, F_{i-1}\right\rangle \cap\left\langle F_i\right\rangle$ is a pure simplicial complex of dimension $d-2$.

### Proof

Let's prove both implications:

1.  Assume that $F_1, \ldots, F_t$ is a shelling of $\Delta$. By definition, for each $i > 1$, the set

    $$
    \langle F_i \rangle \setminus \langle F_1, \ldots, F_{i-1} \rangle
    $$

    has a unique minimal face $G$.

    Let $H$ be a facet of 

    $$
    \langle F_1, \ldots, F_{i-1}\rangle \cap \langle F_i\rangle.
    $$

    Then $H \subset F_i$, and hence $\lvert H\rvert \le d-1$. Suppose, for the sake of contradiction, that $\lvert H\rvert \le d-2$.  

    Since $F_i$ is a facet of dimension $d-1$, there exist distinct vertices 
    $a,b \in F_i \setminus H$.  

    Then

    $$
    H \cup \{a\}, \quad H \cup \{b\} \in 
    \langle F_i\rangle \setminus \langle F_1, \ldots, F_{i-1}\rangle.
    $$

    Because $G$ is the unique minimal face of this set, we must have

    $$
    G \subset H \cup \{a\} \quad \text{and} \quad G \subset H \cup \{b\}.
    $$

    It follows that $G \subseteq H$.  
    However, $G$ belongs to $\langle F_i\rangle \setminus \langle F_1, \ldots, F_{i-1}\rangle$, so $G$ cannot be contained in $H$, which lies in the intersection. 
    This is a contradiction.

2.  Assume that for every $2 \le i \le t$, the subcomplex
    
    $$
    \langle F_1, \ldots, F_{i-1}\rangle \cap \langle F_i\rangle
    $$
    
    is pure of dimension $d-2$.  
    
    Let $H_1, \ldots, H_k$ be the facets of this intersection. Since each $H_j$ has dimension $d-2$ and is contained in the facet $F_i$, we can write $H_j = F_i \setminus \lbrace a_j\rbrace$, for some vertex $a_j \in F_i$.
    
    We claim that the set
    
    $$
    G = \{a_1, a_2, \ldots, a_k\}
    $$
    
    is the unique minimal face of 
    $\langle F_i\rangle \setminus \langle F_1, \ldots, F_{i-1}\rangle$.

    Indeed, each $a_j$ is a vertex that does not belong to any of the facets $H_j$, hence any face of $\langle F_i\rangle \setminus \langle F_1, \ldots, F_{i-1}\rangle$ must contain all of them.

    To see this, let $G'$ be any face in $\langle F_i\rangle \setminus \langle F_1, \ldots, F_{i-1}\rangle$. Then $G' \subseteq F_i$. If there existed $a_j \notin G'$, we would have $G' \subseteq H_j = F_i \setminus \lbrace a_j \rbrace$, and therefore $G'$ would belong to the intersection $\langle F_1, \ldots, F_{i-1}\rangle \cap \langle F_i\rangle$, a contradiction.

    Hence $\lbrace a_1, \ldots, a_k\rbrace \subseteq G'$, proving that $G$ is contained in every new face and thus is the unique minimal face of $\langle F_i\rangle \setminus \langle F_1, \ldots, F_{i-1}\rangle$. Therefore, the ordering $F_1, \ldots, F_t$ is a shelling of $\Delta$. <span style="float: right;">$\blacksquare$</span>


## References

1. <a id="Stanley2018"></a> Stanley. Richard P. (2018). *Algebraic Combinatorics: Walks, Trees, Tableaux, and More* (2nd ed.). Springer International Publishing. <a href="https://doi.org/10.1007/978-3-319-77173-1" target="_blank">https://doi.org/10.1007/978-3-319-77173-1</a>