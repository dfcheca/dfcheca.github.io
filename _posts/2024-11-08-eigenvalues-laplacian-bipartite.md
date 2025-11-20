---
title: Spectral Relations Between the Laplacian and the Adjacency Matrix in Regular Bipartite Graphs
tags: ["Algebraic Combinatorics", "Graph Theory", "Adjacency Matrix", "Laplacian Matrix"]
key: eigenvalues-laplacian-bipartite

---

***Taken from:*** \[[1](#Stanley2018), Exercise 9.7\].

## Exercise 9.7 (a)
Let $ G $ be a bipartite graph with vertex bipartition $ (A, B) $. Suppose that $ \deg v = a $ for all $ v \in A $, and $ \deg v = b $ for all $ v \in B $. Let $ \boldsymbol{A} $ and $ \boldsymbol{L} $ denote the adjacency matrix and Laplacian matrix of $ G $, respectively. Show that if the eigenvalues of $ \boldsymbol{L} $ are $ \lambda_1, \dots, \lambda_p $, then the eigenvalues of $ \boldsymbol{A}^2 $ are $ (\lambda_1 - a)(\lambda_1 - b), \dots, (\lambda_p - a)(\lambda_p - b) $.

### Proof

Let $ n = \lvert A\rvert $ and $ m = \lvert B \rvert $. Without loss of generality, we can label the vertices of $ G $ starting with the vertices of $ A $ followed by the vertices of $ B $. Then, the adjacency matrix of $ G $ looks like

$$
\begin{align*}
    \boldsymbol{A}
    =
    \left(
    \begin{array}{c|c}
        O_{nn}&M\\\hline
        M^T&O_{mm} 
    \end{array}
    \right),
\end{align*}
$$

where $ M $ is an $ n \times m $ matrix, $ O_{pq} $ denotes the zero matrix of size $ p \times q $, and $ I_p $ represents the identity matrix of size $ p $.

On the other hand, the degree matrix $ \boldsymbol{D} $ of $ G $ is

$$
\begin{align*}
    \displaystyle
    \boldsymbol{D}
    =
    \left(
    \begin{array}{c|c}
        a I_n&O_{nm}\\\hline
        O_{mn}&bI_m 
    \end{array}
    \right).
\end{align*}
$$

Thus,

$$
\begin{align}
    \boldsymbol{L}=\boldsymbol{D}-\boldsymbol{A}
    =
    \left(
    \begin{array}{c|c}
        a I_n&-M\\\hline
        -M^T&bI_m 
    \end{array}
    \right). \label{eq:laplacian9.7(a)}
\end{align}
$$

Furthermore, $\boldsymbol{L}^2=(\boldsymbol{D}-\boldsymbol{A})^2=\boldsymbol{D}^2-\boldsymbol{D}\boldsymbol{A}-\boldsymbol{A}\boldsymbol{D}+\boldsymbol{A}^2$, therefore,

$$
\begin{align}
    \boldsymbol{A}^2=\boldsymbol{L}^2+\boldsymbol{D}\boldsymbol{A}+\boldsymbol{A}\boldsymbol{D}-\boldsymbol{D}^2. \label{eq:adjacency9.7(a)}
\end{align}
$$

We have

$$
\begin{align*}
    \boldsymbol{D}^2
    &=
    \left(
    \begin{array}{c|c}
        a^2 I_n&O_{nm}\\\hline
        O_{mn}&b^2 I_m 
    \end{array}
    \right),\\[3mm]
    \boldsymbol{D}\boldsymbol{A}
    &=
    \left(
    \begin{array}{c|c}
        a I_n&O_{nm}\\\hline
        O_{mn}&bI_m 
    \end{array}
    \right)
    \left(
    \begin{array}{c|c}
        O_{nn}&M\\\hline
        M^T&O_{mm} 
    \end{array}
    \right)
    =
    \left(
    \begin{array}{c|c}
        O_{nn}&a M\\\hline
        b M^T&O_{mm} 
    \end{array}
    \right),\\[3mm]
    \boldsymbol{A}\boldsymbol{D}
    &=
    \left(
    \begin{array}{c|c}
        O_{nn}&M\\\hline
        M^T&O_{mm} 
    \end{array}
    \right)
    \left(
    \begin{array}{c|c}
        a I_n&O_{nm}\\\hline
        O_{mn}&bI_m 
    \end{array}
    \right)
    =
    \left(
    \begin{array}{c|c}
        O_{nn}&b M\\\hline
        a M^T&O_{mm} 
    \end{array}
    \right).
\end{align*}
$$

Hence, from equation \eqref{eq:laplacian9.7(a)},

$$
\begin{align*}
    \boldsymbol{D}\boldsymbol{A}+\boldsymbol{A}\boldsymbol{D}-\boldsymbol{D}^2
    &=
    \left(
    \begin{array}{c|c}
        -a^2 I_n&(a+b) M\\\hline
        (a+b) M^T&-b^2 I_m
    \end{array}
    \right)\\[3mm]
    &=
    \left(
    \begin{array}{c|c}
        abI_n-a(a+b) I_n&(a+b) M\\\hline
        (a+b) M^T& abI_m-b(a+b) I_m
    \end{array}
    \right)\\[3mm]
    &=
    ab I_{n+m}-(a+b)\boldsymbol{L}.
\end{align*}
$$

Whence, substituting into equation \eqref{eq:adjacency9.7(a)} yields

$$
\begin{align*}
    \boldsymbol{A}^2=\boldsymbol{L}^2-(a+b)\boldsymbol{L}+ab I_{n+m}.
\end{align*}
$$

Now, let $ \lambda $ be an eigenvalue of $ \boldsymbol{L} $ with corresponding eigenvector $ \vec{u} $. Then

$$
\begin{align*}
    \boldsymbol{A}^2\vec{u}
    =\boldsymbol{L}^2\vec{u}-(a+b)\boldsymbol{L}\vec{u}+ab I_{n+m}\vec{u}
    =\lambda^2 \vec{u}-(a+b)\lambda \vec{u} +ab \vec{u}
    =(\lambda-a)(\lambda-b)\vec{u},
\end{align*}
$$

which means that $ (\lambda - a)(\lambda - b) $ is also an eigenvalue of $ \boldsymbol{A}^2 $. <span style="float: right;">$\blacksquare$</span>

## References

1. <a id="Stanley2018"></a> Stanley, Richard P. (2018). *Algebraic Combinatorics: Walks, Trees, Tableaux, and More* (2nd ed.). Springer International Publishing. <a href="https://doi.org/10.1007/978-3-319-77173-1" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/978-3-319-77173-1</a>