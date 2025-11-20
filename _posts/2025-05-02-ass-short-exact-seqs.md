---
title: Associated Primes in Short Exact Sequences
tags: ["Commutative Algebra", "Associated Primes"]
key: ass-short-exact-seqs

---

***Taken from:*** \[[1](#Sharp2001), Exercise 9.42\].

## Exercise 9.42

Let

$$
0 \longrightarrow L \xrightarrow{\; f\;} M \xrightarrow{\; g\;} N \longrightarrow 0
$$

be a short exact sequence of modules and homomorphisms over the commutative Noetherian ring $R$. Prove that

$$
\operatorname{Ass}(L) \subseteq \operatorname{Ass}(M) \subseteq \operatorname{Ass}(L) \cup \operatorname{Ass}(N).
$$

### Proof

The first inclusion is almost immediate. Let $\mathfrak{p} \in \operatorname{Ass}(L)$. Then $\mathfrak{p} = \operatorname{Ann}(\ell)$ for some nonzero $\ell \in L$. Let $r \in \operatorname{Ann}(\ell)$, then $0 = f(0) = f(r\ell) = r f(\ell)$, hence $r \in \operatorname{Ann}(f(\ell))$. Conversely, if we take $r \in \operatorname{Ann}(f(\ell))$, we have that $0 = r f(\ell) = f(r \ell)$. Since $f$ is injective, it follows that $r \ell = 0$, that is, $r \in \operatorname{Ann}(\ell)$. By the injectivity of $f$ we also have that $f(\ell) \neq 0$, so

$$
\mathfrak{p} = \operatorname{Ann}(\ell) = \operatorname{Ann}(f(\ell)) \in \operatorname{Ass}(M),
$$

and thus, $\operatorname{Ass}(L) \subseteq \operatorname{Ass}(M)$.

Now let us prove the inclusion on the right. Let $\mathfrak{p} \in \operatorname{Ass}(M)$, that is, $\mathfrak{p} = \operatorname{Ann}(m)$ for some nonzero $m \in M$. We consider two cases:

1. If $Rm \cap \operatorname{Im}(f) = 0$, the restriction of $g$ to the cyclic submodule $Rm\subseteq M$ is still injective.  Thus $Rm\cong g(Rm)\subseteq N$ and $g(m)\neq0$. Then
    
    $$
    \begin{align*}
        \operatorname{Ann}(g(m))
        &=\{r\in R : rg(m) = 0\}\\
        &=\{r\in R : g(rm)=0\} \\
        &=\{r\in R: rm\in\ker(g)\} \\
        &=\{r\in R: rm\in\operatorname{Im}(f)\}\\
        &=\{r\in R: rm=0\}\\
        &=\mathfrak{p}.
    \end{align*}
    $$

    Hence $\mathfrak{p}=\operatorname{Ann}\bigl(g(m)\bigr)\in\operatorname{Ass}(N)$.

2. If $Rm \cap\operatorname{Im}(f)\neq 0$, there exists a nonzero element in the intersection.  Concretely, pick $0\neq m_0\in Rm \cap\operatorname{Im}(f)$.  Since $m_0\in Rm$, we can write $m_0 = am$ for some $a\in R$.  Since $m_0\in\operatorname{Im}(f)$, there is some $\ell\in L$ with $f(\ell)=m_0$.

    By an analogous argument to the first inclusion, the injectivity of $f$ guarantees that
    
    $$\operatorname{Ann}(m_0)=\operatorname{Ann}\bigl(f(\ell)\bigr)=\operatorname{Ann}(\ell).$$

    It is clear that $\mathfrak{p} = \operatorname{Ann}(m) \subseteq \operatorname{Ann}(am) = \operatorname{Ann}(m_0)$; the reverse inclusion also holds: take $s \in \operatorname{Ann}(m_0)$, then $0 = s m_0 = (s a) m$, that is, $s a \in \mathfrak{p}$. Moreover, $a \notin \mathfrak{p}$, for otherwise $m_0 = a m = 0$. Therefore, $s \in \mathfrak{p}$ by primality of $\mathfrak{p}$. That is, $\mathfrak{p} = \operatorname{Ann}(m_0) = \operatorname{Ann}(\ell) \in \operatorname{Ass}(L)$.

From both cases, it follows that $\mathfrak{p} \in \operatorname{Ass}(L) \cup \operatorname{Ass}(N)$. <span style="float: right;">$\blacksquare$</span>

## References

1. <a id="Sharp2001"></a> Sharp, Rodney Y. (2001).  ***Steps in Commutative Algebra*** (2nd ed.). Cambridge University Press. <a href="http://dx.doi.org/10.1017/CBO9780511623684" target="_blank">http://dx.doi.org/10.1017/CBO9780511623684</a>