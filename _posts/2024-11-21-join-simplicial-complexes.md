---
title: The Join Operation for Simplicial Complexes
tags: ["Algebraic Combinatorics", "Simplicial Complexes"]

---

***Taken from:*** \[[1](#Stanley2018), Exercise 12.26\].

## Exercise 12.26

Let $\Gamma$ and $\Delta$ be simplicial complexes on disjoint vertex sets $V$ and $W$, respectively. Define the *join* $\Gamma * \Delta$ to be the simplicial complex on the vertex set $V \cup W$ with faces $F \cup G$, where $F \in \Gamma$ and $G \in \Delta$. (If $\Gamma$ consists of a single point, then $\Gamma * \Delta$ is the *cone* over $\Delta$. If $\Gamma$ consists of two disjoint points, then $\Gamma * \Delta$ is the *suspension* of $\Delta$.)

1. Compute the $h$-vector $h(\Gamma* \Delta)$ in terms of $h(\Gamma)$ and $h(\Delta)$.
2. Show that if $\Gamma$ and $\Delta$ are Cohen–Macaulay, then so is $\Gamma* \Delta$.
3. Generalizing Exercise 7, show that if $\Gamma$ and $\Delta$ are shellable, then so is $\Gamma* \Delta$.

### Solution

Let $ d = \dim\Gamma + 1 $ and $ e = \dim\Delta + 1 $.

1. The union of an $ i $-dimensional face in $\Gamma$ with a $ j $-dimensional face in $\Delta$ results in an $ (i + j + 1 )$-dimensional face in $\Gamma * \Delta$. Therefore,  
    
    $$
    f_k(\Gamma * \Delta) = \sum_{i + j = k - 1} f_i(\Gamma) f_j(\Delta),
    $$
    
    for every $k=-1,\ldots,d+e-1$; where $ f_i(\Gamma) = 0 $ if $ i < -1 $ or $ i \geq d $, and similarly for $ f_j(\Delta) $. Thus, 

    $$
    \begin{align*}
        \left(\sum_{i=0}^d f_{i-1}(\Gamma)x^{d-i}\right)\left(\sum_{j=0}^e f_{j-1}(\Delta)x^{e-j}\right)
        &=\sum_{k=0}^{d+e}\sum_{i+j=k-2}f_i(\Gamma)f_j(\Delta)x^{d+e-k}\\
        &=\sum_{k=0}^{d+e}f_{k-1}(\Gamma*\Delta)x^{d+e-k}.
    \end{align*}
    $$

    By substituting into \[[1](#Stanley2018), Eq. 12.5\] with $ x \to x + 1 $, we obtain 
    
    $$
    \begin{align*}
        \left(\sum_{i=0}^d h_i(\Gamma)(x+1)^{d-i}\right)\left(\sum_{j=0}^e h_j(\Gamma)(x+1)^{e-j}\right)
        &=\sum_{k=0}^{d+e}h_k(\Gamma*\Delta)(x+1)^{d+e-k}.
    \end{align*}
    $$


    The left-hand side of this equation becomes  
    
    $$\sum_{k=0}^{d+e}\sum_{i+j=k}h_i(\Gamma)h_j(\Delta)(x+1)^{d+e-k}.$$
    
    Comparing coefficients, we finally obtain  
    
    $$h_k(\Gamma*\Delta)=\sum_{i+j=k}h_i(\Gamma)h_j(\Delta)$$
    
    for every $k=0,\ldots,d+e$.

2. Since the vertex sets of $\Gamma$ and $\Delta$ are disjoint, the nonfaces of $\Gamma * \Delta$ are precisely those of $\Gamma$ and $\Delta$, making the Stanley–Reisner ideal decomposable as $I_\Gamma + I_\Delta$. This naturally leads to $K[\Gamma * \Delta] \cong K[\Gamma] \otimes_K K[\Delta],$ whence $ \dim K[\Gamma * \Delta] = \dim K[\Gamma] + \dim K[\Delta] = d + e.$
    Now let $\theta_1,\ldots, \theta_d\in K[\Gamma]_1$ and $\eta_1,\ldots, \eta_e \in K[\Delta]_1$ be maximal regular sequences. We also have

    $$
    \begin{align*}
        K[\Gamma * \Delta] / (\theta_1, \ldots, \theta_d, \eta_1, \ldots, \eta_e) \cong \big(K[\Gamma] / (\theta_1, \ldots, \theta_d)\big) \otimes_K \big(K[\Delta] / (\eta_1, \ldots, \eta_e)\big).
    \end{align*}
    $$
    
    The Hilbert series of the quotient is therefore
    
    $$
    \begin{align*}
        &L\left(K[\Gamma * \Delta] / (\theta_1, \ldots, \theta_d, \eta_1, \ldots, \eta_e), \lambda\right)\\
        &\quad\quad= L\left(K[\Gamma] / (\theta_1, \ldots, \theta_d), \lambda\right) \cdot L\left(K[\Delta] / (\eta_1, \ldots, \eta_e), \lambda\right).
    \end{align*}
    $$
    
    By \[[1](#Stanley2018), Th. 12.10\],
    
    $$
    \begin{align*}
        \frac{L(K[\Gamma * \Delta] / (\theta_1, \ldots, \theta_d, \eta_1, \ldots, \eta_e), \lambda)}{(1-\lambda)^{d+e}}
        =L(K[\Gamma], \lambda) \cdot L(K[\Delta], \lambda)
        = L(K[\Gamma * \Delta], \lambda),
    \end{align*}
    $$
    
    confirming that $\theta_1, \ldots, \theta_d, \eta_1, \ldots, \eta_e$ is a regular sequence in $K[\Gamma * \Delta]_1$, i.e., $\dim K[\Gamma * \Delta] = \operatorname{depth} K[\Gamma * \Delta] = d + e$. Thus, $\Gamma*\Delta$ is Cohen–Macaulay as well. <span style="float: right;">$\blacksquare$</span>

3. Let $m = f_{d-1}(\Gamma)$ and $n = f_{e-1}(\Delta)$; and let $F_1, \ldots, F_m$ be a shelling order for $\Gamma$, and $G_1, \ldots, G_n$ a shelling order for $\Delta$. As we proved in item (a), $f_{d+e-1}(\Gamma*\Delta)=mn$.
    
    We define $H_i = F_{\lceil i/n \rceil} \cup G_{i \bmod n}$ for $i = 1, \ldots, mn$, that is, the unions of the faces of the shellings ordered lexicographically. For practical purposes, let $\alpha_i = \lceil i/n \rceil$ and $\beta_i = i \bmod n$.
    
    Let $r(F_i)$ and $r(G_j)$ be the restrictions of $F_i$ and $G_j$ in their respective shelling orders.
    
    Now, for each $i = 1, \ldots, mn$, if $H_i = F_{\alpha_i} \cup G_{\beta_i}$, then the set $\langle H_i \rangle \setminus \langle H_1, \ldots, H_{i-1} \rangle$ must contain the face $r(F_{\alpha_i}) \cup r(G_{\beta_i})$, and this is indeed the restriction of $H_i$. Otherwise, either $r(F_{\alpha_i})$ or $r(G_{\beta_i})$ would not be unique.
    
    Thus, $\Gamma * \Delta$ has the shelling order $H_1, \ldots, H_{mn}$. <span style="float: right;">$\blacksquare$</span>

## References

1. <a id="Stanley2018"></a> Stanley. Richard P. (2018). *Algebraic Combinatorics: Walks, Trees, Tableaux, and More* (2nd ed.). Springer International Publishing. <a href="https://doi.org/10.1007/978-3-319-77173-1" target="_blank">https://doi.org/10.1007/978-3-319-77173-1</a>