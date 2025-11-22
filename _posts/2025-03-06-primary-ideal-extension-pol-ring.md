---
title: Primary Ideals and Their Extensions in Polynomial Rings
tags: ["Commutative Algebra", "Primary Decomposition"]
key: primary-ideal-extension-pol-ring

---

***Taken from:*** \[[1](#Sharp2001), Exercise 4.36\].

## Exercise 4.36

Let $R$ be a commutative ring and let $X$ be an indeterminate; use the extension and contraction notation of 2.41 in conjunction with the natural ring homomorphism $f: R \rightarrow R[X]$. Let $Q$ and $I$ be ideals of $R$.

1. Show that $Q$ is a primary ideal of $R$ if and only if $Q^e$ is a primary ideal of $R[X]$.

2. Show that, if $I$ is a decomposable ideal of $R$ and
   $$
   I=Q_1 \cap \ldots \cap Q_n \quad \text { with } \sqrt{Q_i}=P_i \text { for } i=1, \ldots, n
   $$

   is a primary decomposition of $I$, then

   $$
   I^e=Q_1^e \cap \ldots \cap Q_n^e \quad \text { with } \sqrt{Q_i^e}=P_i^e \text { for } i=1, \ldots, n
   $$

   is a primary decomposition of the ideal $I^e$ of $R[X]$.

3. Show that, if $I$ is a decomposable ideal of $R$, then

   $$
   \operatorname{ass}_{R[X]} I^e=\left\{P^e: P \in \operatorname{ass}_R I\right\}.
   $$

## 1st item

First we will prove that if $ S $ is a commutative ring in which every zero divisor is nilpotent, then $ S[X] $ satisfies the same property. Let $\mathfrak {N}=\sqrt{(0)}$ be the nilradical---the ideal of nilpotent elements---of $ S $. Let $ a,b\in S $ be such that $ ab\in \mathfrak {N} $. Then $(ab)^n=a^n b^n=0$ for some $ n\in\mathbb{Z}^+ $. Suppose that $ a\notin \mathfrak {N} $; then $ a $ is not a zero divisor, and hence $ b^n=0 $, that is, $ b\in \mathfrak {N} $. We have proven that $ \mathfrak {N} $ is prime, and therefore $ S/\mathfrak {N} $ is an integral domain.

Consider the canonical homomorphism

$$
\begin{align*}
    \phi: S[X] &\longrightarrow (S/\mathfrak {N})[X]\\
    \sum_i a_i X^i &\longmapsto \sum_i (a_i+\mathfrak {N}) X^i=\sum_i \overline{a_i} X^i.
\end{align*}
$$

We have that

$$
\ker\phi=\left\{\sum_i \overline{a_i} X^i\in S[X]:\; a_i\in \mathfrak {N} \text{ for every } i\right\}.
$$

Now suppose that $f(X)=\sum_{i=0}^d f_i X^i\in S[X]$ is a zero divisor; that is, there exists a nonzero polynomial $ g(X) $ such that $f(X)g(X)=0.$

Applying $ \phi $ to both sides of the equality, we obtain

$$
\phi(f(X)g(X))=\phi(f(X))\phi(g(X))=0.
$$

Since $(S/\mathfrak {N})[X]$ is an integral domain, it follows that $ \phi(f(X))=0 $ or $ \phi(g(X))=0 $. Without loss of generality, assume that $ \phi(f(X))=0 $; then $ f(X)\in \ker\phi $, and hence all its coefficients are nilpotent. Let $ N_i $ be the smallest positive integer such that $ f_i^{N_i}=0 $ for every $ i $, and let $N=\sum_{i=0}^d N_i.$ By the multinomial theorem,

$$
f(X)^N
=\sum_{\substack{k_0+\cdots+k_d=N\\k_0,\ldots,k_d\geq0}}\binom{N}{k_0,k_1,\ldots,k_d}f_0^{k_0}f_1^{k_1}\cdots f_d^{k_d}X^{k_1+2k_2+\cdots+dk_d}.
$$

Suppose by contradiction that for every summand in the previous sum we have $ k_i<N_i $ for every $ i $; then $\sum_{i=0}^d k_i<\sum_{i=0}^d N_i=N$, a contradiction. Hence, there exists some $ i $ for which in each summand there is some $ k_i\geq N_i $, implying that $f_i^{k_i}=f_i^{N_i}f_i^{k_i-N_i}=0$.
Thus, $ f(X)^N=0 $. Therefore, in $ S[X] $ every zero divisor is nilpotent.

Now, let us prove the first item.

### Proof

Proving that $ Q^e $ being primary implies that $ Q $ is primary is straightforward. Let $a,b\in R$ such that $ a b \in Q $. If we consider $ a, b $ as polynomials in $ Q^e $, we have that either $ a \in Q^e $ or $ b^N \in Q^e $ for some $ N \in \mathbb{Z}^+ $. Since $ a $ and $ b^N $ are constants, they must also belong to $ Q $, so $ Q $ is primary.  

Now, let us prove the forward direction. Let $\phi: R \to R/Q$ be the natural homomorphism, and let  
$\varphi: R[X] \to (R/Q)[X]$ be the extension of $\phi$ applied to each coefficient, that is,  

$$
\varphi\left(\sum_i r_i X^i\right) = \sum_i \phi(r_i) X^i =\sum_i(r_i+Q)X^i= \sum_i \overline{r_i} X^i.
$$

Let $ p(X) \in \ker(\varphi) $, that is,  

$$
\sum_i \overline{p_i} X^i = 0 \in (R/Q)[X],
$$

which means that $ p_i \in Q $ for each $ i $. Therefore, $ p(X) \in Q^e $. Thus, $ \ker(\varphi) = Q^e $.  

By the First Isomorphism Theorem---\[[1](#Sharp2001), Th. 2.13\], $(R/Q)[X] = \operatorname{Im} \varphi \cong R[X] / Q^e$. Recall that in $R/Q$, zero divisors are nilpotent—\[[1](#Sharp2001), Lem. 4.3\], so by the result proved above, taking $S = R/Q$, all zero divisors in $(R/Q)[X]$ are nilpotent. The above isomorphism preserves zero divisors, so $R[X] / Q^e$ satisfies the same property, and thus, $Q^e$ is primary.{% include qed.html %}

## 2nd item

Before proving the second item, we will first show that in the first item, $\sqrt{Q}^e = \sqrt{Q^e}$.  

For the first inclusion, let $ A(X) = \sum_{i=0}^d a_i X^i \in \sqrt{Q}^e $. Then, for each $ i $, there exists $ N_i \in \mathbb{Z}^+ $ such that $ a_i^{N_i} \in Q $. Let $ N = \sum_{i=0}^d N_i $. Then,  

$$
A(X)^N = \sum_{\substack{k_0+\cdots+k_d=N \\ k_0,\ldots,k_d\geq0}} \binom{N}{k_0,k_1,\ldots,k_d} a_0^{k_0} a_1^{k_1} \cdots a_d^{k_d} X^{k_1+2k_2+\cdots+dk_d}.
$$

By an argument similar to the one proved in the result preceding the first item, for at least one exponent in each summand of this sum, we have $ k_i \geq N_i $ for at least one index $i$ in every summand. Therefore, we can always factor out $ a_i^{N_i} \in Q $ and see that the corresponding summand belongs to $ Q $. Thus, $ A(X)^N \in Q^e $, which means $ A(X) \in \sqrt{Q^e} $.  

For the reverse inclusion, let $ A(X) = \sum_{i=0}^d a_i X^i \in \sqrt{Q^e} $, so there exists $ N \in \mathbb{Z}^+ $ such that

$$
\sum_{\substack{k_0+\cdots+k_d=N \\ k_0,\ldots,k_d\geq0}} \binom{N}{k_0,k_1,\ldots,k_d} a_0^{k_0} a_1^{k_1} \cdots a_d^{k_d} X^{k_1+2k_2+\cdots+dk_d} = A(X)^N \in Q^e.
$$  

Suppose, for contradiction, that $ A(X) \notin \sqrt{Q}^e $, that is, some coefficients of $ A(X) $ are not in $ \sqrt{Q} $. Let $ r $ be the smallest index with this property, meaning that $ a_j \in \sqrt{Q} $ for all $ j < r $ and $ a_r \notin \sqrt{Q} $. It cannot be the case that $ r = 0 $, since the constant coefficient of $ A(X)^N $ is $ a_0^N $, and we are assuming it must belong to $ Q $. Suppose instead that $ r > 0 $.  

Consider the coefficient $ C \in Q $ of $ X^{rN} $. This must satisfy, in addition to $ k_0 + \cdots + k_d = N $, the equality $ k_1 + 2k_2 + \cdots + d k_d = rN $. One of the terms contributing to $ X^{rN} $ is when $ k_r = N $ and all other $ k_i $'s are zero. This term is $ a_r^N $. The other terms arise when $ k_r < N $, so $ C $ has the form  

$$
C = a_r^N + \sum_{\substack{k_0+\cdots+k_d=N \\ k_1+2k_2+\cdots+dk_d=rN \\ k_r<N}} \binom{N}{k_0,k_1,\ldots,k_d} a_0^{k_0} a_1^{k_1} \cdots a_d^{k_d}.
$$  

Let $ T=C-a_r^N $. We will show that at least one of the other $ k_i $'s with $ i < r $ appears in every term of $ T $. Suppose, for contradiction, that this is not the case, meaning that for every term in $ T $, we have $ k_i = 0 $ for all $ i < r $. Then the exponent condition simplifies to $ rN = r k_r + \sum_{i>r} i k_i $.

Additionally, since $ k_r + \sum_{i>r} k_i = N $ and each index and exponent is positive, we obtain  

$$
rN = r k_r + \sum_{i>r} i k_i > r k_r + \sum_{i>r} r k_i = r\left(k_r + \sum_{i>r} k_i\right) = rN,
$$  

which is a contradiction.  

Thus, there exists $ i < r $ such that some $ a_i $ appears in every term composing $ X^{rN} $. Since we chose $ r $ to be minimal, we have $ a_i \in \sqrt{Q} $ for all $ i < r $, implying that $ T \in \sqrt{Q} \subseteq Q $. Consequently, $ a_r^N = C - T \in Q $, contradicting the assumption that $ a_r \notin \sqrt{Q} $.  

We conclude that $ \sqrt{Q}^e = \sqrt{Q^e} $. We can now proceed with the second item.

### Proof

By the 1st item, $ Q_i^e $ is primary for each $ i = 1, \dots, n $. On the other hand,

$$
\begin{align*}
    I^e
    &=\left\{\sum_{j}a_jX^j:a_j\in I\right\}\\
    &=\left\{\sum_{j}a_jX^j:\text{$a_j\in Q_i$ for all $i=1,\ldots,n$}\right\}\\
    &=\bigcap_{i=1}^n\left\{\sum_{j}a_jX^j:a_j\in Q_i\right\}\\
    &=\bigcap_{i=1}^n Q_i^e.
\end{align*}
$$

By what was previously proven, $ \sqrt{Q_i^e} = \sqrt{Q_i}^e = P_i^e $ for all $ i = 1, \dots, n $. {% include qed.html %}

## 3rd item

Before proving the last item, we shall make a small remark. In this context, if $ J $ is an ideal of $ R $, then we have $J=(J^e)^c$. The first inclusion is general from \[[1](#Sharp2001), Lem. 2.44\]. For the reverse inclusion, take $ r\in (J^e)^c $; then $ f(r)\in J^e $, that is, $ r\in J^e $. Since $r$ is constant, the only way for this to occur is that $ r\in J $.

### Proof

Let us suppose that the decomposition of $ I $ in the previous item is minimal, that is, $ P_i \neq P_j $ if $ i \neq j $ and for every $ j=1,\ldots,n $ it holds that

$$
I \neq \bigcap_{\substack{i=1\\i\neq j}}^n Q_i.
$$

If $ P_i^e = P_j^e $ with $ i \neq j $, then by the previous observation we would have

$$
P_i = (P_i^e)^c = (P_j^e)^c = P_j,
$$

which is a contradiction; hence, $ P_i^e \neq P_j^e $ if $ i \neq j $.

Now suppose, by contradiction, that $ Q_j^e $ is redundant for some $ j $, that is,

$$
I^e = \bigcap_{\substack{i=1\\i\neq j}}^n Q_i^e.
$$

Since the inverse image distributes over intersections, we have

$$
I = (I^e)^c = \left( \bigcap_{\substack{i=1\\i\neq j}}^n Q_i^e \right)^c = \bigcap_{\substack{i=1\\i\neq j}}^n (Q_i^e)^c = \bigcap_{\substack{i=1\\i\neq j}}^n Q_i,
$$

contradicting the irredundancy of $ Q_j $.

We have shown that $ I^e = Q_1^e \cap \cdots \cap Q_n^e $ is also minimal, therefore,

$$
\begin{align*}
    \operatorname{ass}_{R[X]}I^e
    =\left\{\sqrt{Q_i^e}:i\in\left\{1,\ldots,n\right\}\right\}=\left\{P^e: P \in \operatorname{ass}_R I\right\}.\tag*{$\blacksquare$}
\end{align*}
$$

## References

1. <a id="Sharp2001"></a> Sharp, Rodney Y. (2001).  ***Steps in Commutative Algebra*** (2nd ed.). Cambridge University Press. <a href="http://dx.doi.org/10.1017/CBO9780511623684" target="_blank" rel="noopener noreferrer">http://dx.doi.org/10.1017/CBO9780511623684</a>