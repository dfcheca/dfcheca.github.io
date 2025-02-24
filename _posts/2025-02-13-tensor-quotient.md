---
title: Tensoring with Quotients
tags: ["Commutative Algebra", "Tensor Product"]

---

***Taken from:*** (?).

## Exercise

Let $I$ be an ideal on $R$ and $M$ an $R$-module. Prove that

$$M\otimes_R \frac{R}{I}\cong \frac{M}{IM}.$$

***In particular:*** $M\otimes_R R\cong R\otimes_R M\cong M$.

### Proof

Define the function

$$
\begin{align*}
    \varphi: M \times \frac{R}{I} &\to \frac{M}{IM}\\[3mm]
    (m, \overline{r}) &\mapsto \overline{rm}.
\end{align*}
$$

This function is well-defined because if $ \overline{r} = \overline{s} $ in $ R/I $, then $ r - s \in I $, which implies that

$$
rm - sm = (r - s)m \in IM,
$$

so that $ \overline{rm} = \overline{sm} $ in $ M/IM $.

It is easy to check the bilinearity of $ \varphi $. By \[[1](#StacksProject), Lemma 10.12.2\], $ \varphi $ induces a well-defined $ R $-module homomorphism given by

$$
\begin{align*}
    \tilde{\varphi}: M \otimes_R \frac{R}{I} &\to \frac{M}{IM}\\[3mm]
    m \otimes \overline{r} &\mapsto \overline{rm}.
\end{align*}
$$

It is also easy to verify that $ \tilde{\varphi} $ is surjective, since for every $ \overline{m} \in M/IM $, we have $ \tilde{\varphi}(m \otimes \overline{1}) = \overline{m}$.

We only need to verify that $\tilde{\varphi}$ is injective, for which we will prove that its kernel is trivial. Let $\sum_{i=1}^n m_i\otimes \overline{r_i}\in \ker(\tilde{\varphi})$, which means that

$$0_{M/IM}=\tilde{\varphi}\left(\sum_{i=1}^n m_i\otimes \overline{r_i}\right)=\sum_{i=1}^n \overline{r_i m_i}$$

and this happens if and only if

$$\sum_{i=1}^n r_i m_i=\sum_{j=1}^N a_j m_j'$$

with $ a_j\in I $ and $ m_j'\in M $. By bilinearity, we have

$$
\begin{align*}
    \sum_{i=1}^n m_i\otimes \overline{r_i}
    &=\left(\sum_{i=1}^n r_i m_i\right)\otimes \overline{1}\\
    &=\left(\sum_{j=1}^N a_j m_j'\right)\otimes \overline{1}\\
    &=\sum_{j=1}^N m_j'\otimes \overline{a_j}\\
    &=\sum_{j=1}^N m_j'\otimes 0_{R/I}\\
    &=0_{M\otimes R/I}.
\end{align*}
$$

Thus, $\ker(\tilde{\varphi})$ is trivial, and $\tilde{\varphi}$ is an isomorphism. <span style="float: right;">$\blacksquare$</span>

## References

1. <a id="StacksProject"></a> The Stacks Project Authors. (n.d.). ***Tensor products*** (Section 10.12, Tag 00CV). The Stacks Project. Retrieved February 13, 2025, from <a href="https://stacks.math.columbia.edu/tag/00CV" target="_blank">https://stacks.math.columbia.edu/tag/00CV</a>