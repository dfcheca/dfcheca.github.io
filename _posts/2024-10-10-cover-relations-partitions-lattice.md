---
title: Counting Cover Relations in the Lattice of Partitions $L(m,n)$
tags: ["Partitions", "Generating Functions", "Algebraic Combinatorics"]
key: cover-relations-partitions-lattice

---

***Taken from:*** \[[1](#Stanley2018), Exercise 6.2(a)\].

## Exercise 6.2(a)

Show that the number $c(m, n)$ of cover relations in $L(m, n)$, i.e., the number of pairs $(\lambda, \mu)$ of partitions in $L(m, n)$ for which $\mu$ covers $\lambda$, is given by

$$c(m, n)=\frac{(m+n-1)!}{(m-1)!(n-1)!}.$$

### Proof

Let $(\lambda,\mu)$ be a pair of partitions counted by $c(m,n)$, meaning that $\lambda = (\lambda_1, \lambda_2, \ldots)$ and $\mu = (\mu_1, \mu_2, \ldots)$ differ in exactly one summand. We have two cases for the first summands of both partitions. The first case is when $\lambda_1 = \mu_1 = k$ for some $1 \leq k \leq n$, and we can complete the remaining summands in $c(m-1,k)$ ways. The second case is when $\lambda_1 = \mu_1 - 1 = k$ for $0 \leq k \leq n-1$, and we can complete the remaining summands in $\lvert L(m-1,k) \rvert$ ways. Summing these cases over all $k$ gives us

$$
\begin{align*}
    c(m,n)=\sum_{k=1}^n c(m-1,k)+\sum_{k=0}^{n-1}\lvert L(m-1,k)\rvert.
\end{align*}
$$

for all $m \geq 1$ and $n \geq 0$. Note that the pair $(\varnothing,1)$ is accounted for by the second sum. We define $c(m,n):=0$ if $mn=0$. Substituting the expression found in \[[1](#Stanley2018), Proposition 6.3\] yields

$$
\begin{align*}
    c(m,n)=\sum_{k=0}^n c(m-1,k)+\sum_{k=0}^{n-1} \binom{m+k-1}{k}.
\end{align*}
$$

Let $C(x,y):=\sum_{m,n\geq0}c(m,n)x^my^n$. Thus, by simplifying some sums as Cauchy products,

$$
\begin{align*}
    C(x,y)
    &=\sum_{m\geq1,n\geq0}c(m,n)x^my^n\\
    &=\sum_{m\geq1,n\geq0}\left(\sum_{k=0}^n c(m-1,k)+\sum_{k=0}^{n-1} \binom{m+k-1}{k}\right)x^my^n\\
    &=x\sum_{m\geq0}x^m \sum_{n\geq0}\sum_{k=0}^nc(m,k)y^n+\sum_{m\geq1}x^m\sum_{n\geq0}\sum_{k=0}^{n-1}\binom{m+k-1}{k}y^n\\
    &=x\sum_{m\geq0}x^m \left(\sum_{n\geq0}c(m,n)y^n\right)\left(\sum_{n\geq0}y^n\right)\\
    &\quad+\sum_{m\geq1}x^m\left(\sum_{n\geq0}\binom{m+n-1}{n}y^n\right)\left(-1+\sum_{n\geq0}y^n\right)\\
    &=\frac{x}{1-y}C(x,y)+\frac{y}{1-y}\sum_{m\geq1}\sum_{n\geq0}\binom{m+n-1}{n}x^my^n.
\end{align*}
$$

We can simplify the last sum using the formula from \[[1](#Stanley2018), Example 7.11\], as follows

$$
\begin{align*}
    C(x,y)
    &=\frac{x}{1-y}C(x,y)+\frac{y}{1-y}\sum_{m\geq1}\frac{x^m}{(1-y)^m}\\
    &=\frac{x}{1-y}C(x,y)+\frac{y}{1-y}\cdot\frac{\frac{x}{1-y}}{1-\frac{x}{1-y}}\\
    &=\frac{x}{1-y}C(x,y)+\frac{y}{1-y}\cdot\frac{x}{1-x-y}.
\end{align*}
$$

Solving for $C(x,y)$,

$$
\begin{align*}
    C(x,y)=\frac{xy}{(1-x-y)^2}.
\end{align*}
$$

On the other hand,

$$
\begin{align*}
    \sum_{m,n\geq1}\frac{(m+n-1)!}{(m-1)!(n-1)!}x^my^n
    &=\sum_{m\geq1}\sum_{n\geq1}n\binom{m+n-1}{n}x^my^n\\
    &=y\frac{\partial}{\partial y}\left(\sum_{m\geq1}\sum_{n\geq0}\binom{m+n-1}{n}x^my^n\right)\\
    &=y\frac{\partial}{\partial y}\left(\sum_{m\geq1}\frac{x^m}{(1-y)^m}\right)\\
    &=y\frac{\partial}{\partial y}\left(\frac{x}{1-x-y}\right)\\
    &=\frac{xy}{(1-x-y)^2}.
\end{align*}
$$

Thus, by comparing coefficients, we have that

$$c(m, n)=\frac{(m+n-1)!}{(m-1)!(n-1)!}$$

for all $m,n \geq 1$. {% include qed.html %}

## References

1. <a id="Stanley2018"></a> Stanley, Richard P. (2018). *Algebraic Combinatorics: Walks, Trees, Tableaux, and More* (2nd ed.). Springer International Publishing. <a href="https://doi.org/10.1007/978-3-319-77173-1" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/978-3-319-77173-1</a>