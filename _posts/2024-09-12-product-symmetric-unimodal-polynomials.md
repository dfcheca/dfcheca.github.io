---
title: Why the Product of Symmetric Unimodal Polynomials is Also Symmetric Unimodal
tags: ["Algebraic Combinatorics", "Generating Functions"]
key: product-symmetric-unimodal-polynomials

---

***Taken from:*** \[[1](#Stanley2018), Exercise 4.3\].

## Exercise 4.3

Let $ F(q) $ and $ G(q) $ be symmetric unimodal polynomials with nonnegative real coefficients. Show that $ F(q)G(q) $ is also symmetric (easy) and unimodal (harder).

### Proof

We prove first the result for the product $P(q)=(1+q+\cdots+q^u)(1+q+\cdots+q^v)=1+\cdots+q^{u+v}$ with $u, v$ nonnegative integers. Clearly, both factors are symmetric and unimodal. WLOG, we take $u\leq v$; we have that the $t$-th coefficient of the product is

$$
\begin{align*}
    &\quad[q^t](1+q+\cdots+q^u)(1+q+\cdots+q^v)\\
    &=[q^t]\frac{1-q^{u+1}}{1-q}\cdot\frac{1-q^{v+1}}{1-q}\\
    &=[q^t]\frac{1-q^{u+1}-q^{v+1}+q^{u+v+2}}{(1-q)^2}\\
    &=\left([q^t]-[q^{t-u-1}]-[q^{t-v-1}]+[q^{t-u-v-2}]\right)\sum_{t\geq0}(t+1)q^t\\
    &=
    \begin{cases}
        t+1&\qquad\text{if}\qquad 0\leq t<u+1\\
        (t+1)-(t-u)&\qquad\text{if}\qquad u+1\leq t<v+1\\
        (t+1)-(t-u)-(t-v)&\qquad\text{if}\qquad v+1\leq t<u+v+2\\
        (t+1)-(t-u)-(t-v)+(t-u-v-1)&\qquad\text{if}\qquad t\geq u+v+2
    \end{cases}\\
    &=
    \begin{cases}
        t+1&\qquad\text{if}\qquad 0\leq t\leq u\\
        u+1&\qquad\text{if}\qquad u< t\leq v\\
        u+v-t+1&\qquad\text{if}\qquad v<t \leq u+v\\
        0&\qquad\text{if}\qquad t> u+v
    \end{cases}\\
\end{align*}
$$

Note that the coefficients are increasing up to $q^u$, the maximal coefficient is $u+1$, and they decrease down to $q^{u+v}$, showing that the product is unimodal. Also note that $[q^t]P(q)=[q^{u+v-t}]P(q)$ for every $t$, showing that this product is also symmetric with center $\left\lfloor(u+v)/2\right\rfloor$.

Now let us prove the general statement: let $F(q)=\sum_{i=0}^m a_iq^i$ and $G(q)=\sum_{j=0}^n b_j q^j$, with each $a_i,b_j\geq 0$. We proceed as in [Proposition 1, [2](#Stanley1989)]. Let $ r = \lfloor m/2 \rfloor $, then by symmetry we have $a_i=a_{m-i}$ for every $0\leq i\leq r$. For convenience, we consider $a_{-1}:=b_{-1}:=0$. We separate the summands of $F(q)$ around $r$ and rewrite this sum as

$$
\begin{align*}
    F(q)
    &=\sum_{i=0}^{r-1}a_iq^i+a_r\sum_{k=r}^{m-r}q^k+\sum_{i=0}^{r-1}a_{m-i}q^{m-i}\\
    &=\sum_{i=0}^{r-1}a_iq^i+a_r\sum_{k=r}^{m-r}q^k+\sum_{i=0}^{r-1}a_iq^{m-i}\\
    &=a_r\sum_{k=r}^{m-r}q^k+\sum_{i=0}^{r-1}a_i(q^i+q^{m-i})\\
    &=a_r\sum_{k=r}^{m-r}q^k+\sum_{i=0}^{r-1}a_i\left(\sum_{k=i}^{m-i}q^k-\sum_{k=i+1}^{m-i-1}q^k\right)\\
    &=a_r\sum_{k=r}^{m-r}q^k+\sum_{i=0}^{r-1}\sum_{k=i}^{m-i}a_iq^k-\sum_{i=0}^{r-2}\sum_{k=i+1}^{m-i-1}a_iq^k-a_{r-1}\sum_{k=r}^{m-r}q^k\\
    &=(a_r-a_{r-1})\sum_{k=r}^{m-r}q^k+\sum_{i=0}^{r-1}\sum_{k=i}^{m-i}a_iq^k-\sum_{i={\color{red}{1}}}^{r-1}\sum_{k=i}^{m-i}a_{i-1}q^k\\
    &=(a_r-a_{r-1})\sum_{k=r}^{m-r}q^k+\sum_{i=0}^{r-1}\sum_{k=i}^{m-i}a_iq^k-\sum_{i={\color{red}{0}}}^{r-1}\sum_{k=i}^{m-i}a_{i-1}q^k\\
    &=\sum_{i=0}^r\sum_{k=i}^{m-i} (a_i-a_{i-1})q^k.
\end{align*}
$$

Similarly, if $ s = \lfloor n/2 \rfloor $, we have that $G(q)=\sum_{j=0}^s\sum_{k=j}^{n-j} (b_j-b_{j-1})q^k$. Thus, the product of both polynomials is

$$F(q)G(q)=\sum_{i=0}^r\sum_{j=0}^s(a_i-a_{i-1})(b_j-b_{j-1})(q^i+\cdots+q^{m-i})(q^j+\cdots+q^{n-j}).$$

Now, each polynomial $(q^i + \cdots + q^{m-i})(q^j + \cdots + q^{n-j}) = q^{i+j}\left(1+q+\cdots+q^{m-2i}\right)\left(1+q+\cdots+q^{n-2j}\right)$ is symmetric with center $\left\lfloor(m+n)/2\right\rfloor$ and unimodal by the result above when taking $u= m-2i$ and $v=n-2j$. By hypothesis, $(a_i - a_{i-1})(b_j - b_{j-1}) \geq 0$ for each summand, so $F(q)G(q)$ is unimodal, and symmetric with center $\left\lfloor(m+n)/2\right\rfloor$. <span style="float: right;">$\blacksquare$</span>

### Note

The reason Stanley states that it is easy to prove symmetry is because a polynomial $P(q)$ is symmetric if and only if it is equal to its reverse $q^m P(1/q)$ where $m$ is the sum of the highest and lowest powers of $P(q)$. Thus, if we define $H(q) := F(q)G(q)$, we have that

$$q^{m+n} H(1/q) = q^m F(1/q) \cdot q^n G(1/q) = F(q)G(q) = H(q),$$

that is, $F(q)G(q)$ is symmetric.

## References

1. <a id="Stanley2018"></a> Stanley, Richard P. (2018). *Algebraic Combinatorics: Walks, Trees, Tableaux, and More* (2nd ed.). Springer International Publishing. <a href="https://doi.org/10.1007/978-3-319-77173-1" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/978-3-319-77173-1</a>

2. <a id="Stanley1989"></a> Stanley, Richard P. (1989). *Log-Concave and Unimodal Sequences in Algebra, Combinatorics, and Geometry*. Annals of the New York Academy of Sciences, 576(1), 500-535. <a href="https://doi.org/10.1111/j.1749-6632.1989.tb16434.x" target="_blank" rel="noopener noreferrer">https://doi.org/10.1111/j.1749-6632.1989.tb16434.x</a>

3. <a id="Scheuer2024"></a> Scheuer, Markus. (2024, September 8). *Proof review: The product of symmetric unimodal polynomials is again symmetric unimodal* [Question]. Mathematics Stack Exchange. <a href="https://math.stackexchange.com/questions/4968513/" target="_blank" rel="noopener noreferrer">https://math.stackexchange.com/questions/4968513/</a>