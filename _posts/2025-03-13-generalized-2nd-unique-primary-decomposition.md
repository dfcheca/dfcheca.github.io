---
title: Generalization of the Second Uniqueness Theorem for Primary Decomposition
tags: ["Commutative Algebra", "Primary Decomposition"]
key: generalized-2nd-unique-primary-decomposition

---

***Taken from:*** \[[1](#Sharp2001), Exercise 5.43\].

## Exercise 5.43

Let $I$ be a decomposable ideal of the commutative ring $R$. Let

$$
I=Q_1 \cap \ldots \cap Q_n \quad \text { with } \sqrt{Q_i} =P_i \text { for } i=1, \ldots, n
$$

be a minimal primary decomposition of $I$. Let $\mathcal{P}$ be a non-empty subset of $\operatorname{ass}I$ with the property that whenever $P \in \mathcal{P}$ and $P^{\prime} \in \operatorname{ass}I$ are such that $P^{\prime} \subseteq P$, then $P^{\prime} \in \mathcal{P}$ too (such a subset of $\operatorname{ass}I$ is called an isolated subset of $\operatorname{ass}I$). Show that

$$
\bigcap_{\substack{i=1 \\ P_i \in \mathcal{P}}}^n Q_i
$$

depends only on $I$ and not on the choice of minimal primary decomposition of $I$.

### Proof

Let $I = Q_1' \cap \dots \cap Q_n'$ be another minimal primary decomposition of $I$. Define $k = \lvert\mathcal{P}\rvert$. Without loss of generality, we can reorder the terms in each intersection so that $\sqrt{Q_i} = \sqrt{Q_i'} = P_i \in \mathcal{P}$ for all $i = 1, \dots, k$, and such that $\sqrt{Q_i} = \sqrt{Q_i'}$ for all $i = k+1, \dots, n$.  

If $k = 1$, there is nothing to prove, since a unique element $P \in \mathcal{P}$ implies that $P$ is minimal, and the result follows directly from the 2<sup>nd</sup> Uniqueness Theorem of Primary Decomposition—\[[1](#Sharp2001), Th. 4.29\]. For the remainder of the proof, we assume that $k \geq 2$.  

Let $j \in \lbrace 1, \dots, k\rbrace$. Observe that $P_i \not\subseteq P_j$ for every $i = k+1, \dots, n$; otherwise, $P_i$ would belong to $\mathcal{P}$. By \[[1](#Sharp2001), Lem. 3.55\], we conclude that  

$$
\bigcap_{i=k+1}^{n} P_i \not\subseteq P_j.
$$  

From this, applying the Prime Avoidance Theorem—\[[1](#Sharp2001), Lem. 3.61\], we obtain  

$$
\bigcap_{i=k+1}^{n} P_i \not\subseteq \bigcup_{j=1}^{k} P_j.
$$  

That is, there exists an element  

$$
a \in \left(\bigcap_{i=k+1}^{n} P_i\right) \mathbin{\big\backslash} \left(\bigcup_{j=1}^{k} P_j\right),
$$  

which means that  

$$
a \in \bigcap_{i=k+1}^{n} P_i \setminus P_j
$$  

for all $j = 1, \dots, k$.  

Since each $P_i = \sqrt{Q_i} = \sqrt{Q_i'}$ for $i = k+1, \dots, n$, there exist integers $h_i, h_i'$ such that $a^{h_i} \in Q_i$ and $a^{h_i'} \in Q_i'$. Now, choose $t \in \mathbb{Z}^+$ such that  

$$
t \geq \max \{ h_{k+1}, h_{k+1}', \dots, h_n, h_n' \}.
$$  

At this point, we note that $a^t \notin P_j$ for $j = 1, \dots, k$; otherwise, since $P_j$ is prime, this would imply $a \in P_j$, contradicting our earlier observation. Thus, by \[[1](#Sharp2001), Lem. 4.14\], we deduce:  

$$
\begin{align*}
    (I : a^t) &= \left(\bigcap_{i=1}^{n} Q_i : a^t \right) \\
    &= \left(\bigcap_{j=1}^{k} (Q_j : a^t) \right) \cap \left(\bigcap_{i=k+1}^{n} (Q_i : a^t) \right) \\
    &= \left(\bigcap_{j=1}^{k} Q_j \right) \cap \left(\bigcap_{i=k+1}^{n} R \right) \\
    &= \bigcap_{j=1}^{k} Q_j.
\end{align*}
$$

A similar argument shows that $(I : a^t) = \bigcap_{j=1}^{k} Q_j'$, leading to the conclusion that  

$$
\bigcap_{j=1}^{k} Q_j = \bigcap_{j=1}^{k} Q_j',
$$  

as claimed. {% include qed.html %}

## References

1. <a id="Sharp2001"></a> Sharp, Rodney Y. (2001).  ***Steps in Commutative Algebra*** (2nd ed.). Cambridge University Press. <a href="http://dx.doi.org/10.1017/CBO9780511623684" target="_blank" rel="noopener noreferrer">http://dx.doi.org/10.1017/CBO9780511623684</a>