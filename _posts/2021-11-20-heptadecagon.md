---
title: Construction of the Regular Heptadecagon With Ruler and Compass
tags: ["Group Theory", "Galois Theory"]
---

## Introduction

We will prove that the regular heptadecagon, a polygon with 17 equal sides, is constructible with ruler and compass. It is enough to prove that the number $\cos\left(\frac{2\pi}{17}\right)$ is <a href="https://en.wikipedia.org/wiki/Constructible_number" target="_blank">constructible</a>. The procedure will follow the idea given by Gauss, who summed the roots of unity to express this quantity in terms of roots—Gaussian periods.

## Expression in Radicals of $\cos\left(\frac{2\pi}{17}\right)$

Let $\zeta=e^{2\pi i/17}$, the primitive root of the polynomial

$$
\begin{align}
    f(t)=t^{17}-1=(t-1)\left(t^{16}+\ldots+ t+1\right).\label{polf}
\end{align}
$$

The field $\mathbb{Q}(\zeta)$ is a Galois extension of $\mathbb{Q}$ whose Galois group is isomorphic to the multiplicative group $\mathbb{Z}^\*\_{17}$. You can verify that $\mathbb{Z}^\*\_{17}=\langle 3\rangle$. *If you are not familiar with Galois theory, the essence of this argument is that each time you multiply a primitive root by $\zeta$, you move to the next vertex of the heptadecagon in the counterclockwise direction.*

| $n$     | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ | $13$ | $14$ | $15$ |
|:--------|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|:-----|:-----|:-----|:-----|:-----|:-----|
| $3^n \bmod 17$   | $1$ | $3$ | $9$ | $10$ | $13$ | $5$ | $15$ | $11$ | $16$ | $14$ | $8$ | $7$ | $4$ | $12$ | $2$ | $6$ |


Motivated by the fact that $\lbrace 0\rbrace=\langle 3^{16}\rangle\triangleright \langle 3^8\rangle\triangleright\langle 3^4\rangle\triangleright\langle 3^2\rangle\triangleright\langle 3\rangle$, we consider the cosets $\langle 3^2\rangle$ and $3\langle 3^2\rangle$ as a starting point to define the sums

$$
\begin{align}
    x_1&=\sum_{k\in\langle 3^2\rangle}\zeta^k=\zeta+\zeta^9+\zeta^{13}+\zeta^{15}+\zeta^{16}+\zeta^8+\zeta^4+\zeta^2,\label{x1}\\
    x_2&=\sum_{k\in 3\langle 3^2\rangle}\zeta^k=\zeta^3+\zeta^{10}+\zeta^5+\zeta^{11}+\zeta^{14}+\zeta^7+\zeta^{12}+\zeta^6,\label{x2}\\
    y_1&=\sum_{k\in\langle 3^4\rangle}\zeta^k=\zeta+\zeta^{13}+\zeta^{16}+\zeta^4,\label{y1}\\
    y_2&=\sum_{k\in 3^2\langle 3^4\rangle}\zeta^k=\zeta^9+\zeta^{15}+\zeta^8+\zeta^2,\label{y2}\\
    y_3&=\sum_{k\in 3\langle 3^4\rangle}\zeta^k=\zeta^3+\zeta^5+\zeta^{14}+\zeta^{12},\label{y3}\\
    y_4&=\sum_{k\in 3^3\langle 3^4\rangle}\zeta^k=\zeta^{10}+\zeta^{11}+\zeta^7+\zeta^6.\label{y4}
\end{align}
$$

<p style="text-align: center;">
  <img src="/assets/images/heptadecagon.svg" alt="Roots of $f(t)=t^{17}-1$ in the Complex Plane" class="border">
</p>

By the way these sums have been chosen in the complex plane —some summands are conjugate roots, we can state that $x_1,x_2,y_1,y_2,y_3,y_4$ are all real, and that $x_1>x_2,y_1>y_2,y_3>y_4$ —see the figure above. From \eqref{polf} we know that

$$
x_1+x_2=-1.
$$

On the other hand, by reducing the powers modulo $17$ in the product we obtain

$$
\begin{align*}
    x_1x_2
    &=\zeta^{30} + \zeta^{29} + \zeta^{28} + 3\zeta^{27} + 2\zeta^{26} + 2\zeta^{25} + \zeta^{24} + 3\zeta^{23} + 3\zeta^{22} + 3\zeta^{21} \\&\quad+ 4\zeta^{20} + 4\zeta^{19} + 4\zeta^{18} + 4\zeta^{16}+ 4\zeta^{15}+ 4\zeta^{14} + 3\zeta^{13} +3\zeta^{12} + 3\zeta^{11} \\&\quad+ \zeta^{10} + 2\zeta^9 + 2\zeta^8 + 3\zeta^7 + \zeta^6 + \zeta^5 + \zeta^4\\
    &=4\left(\zeta^{16}+\cdots+\zeta\right)\\
    &=4(-1)\\
    &=-4.
\end{align*}
$$

It follows that $x_1$ and $x_2$ are roots of the polynomial

$$
t^2-(x_1+x_2)t+x_1x_2=t^2-t-4.
$$

Hence,

$$
\begin{align}
    x_1&=\frac{-1+\sqrt{17}}{2},\label{x1r}\\
    x_2&=\frac{-1-\sqrt{17}}{2}.\label{x2r}
\end{align}
$$

The goal from now on will be to repeat this procedure on $y_1,y_2,y_3,y_4$ in order to obtain their radical expressions. Similarly, for $y_1$ and $y_2$ we obtain that $y_1+y_2=x_1$ and

$$
\begin{align*}
    y_1y_2
    &=\zeta^{31} + \zeta^{28} + \zeta^{25} + \zeta^{24} + \zeta^{22} + \zeta^{21} + \zeta^{19} + \zeta^{18}\\&\quad + \zeta^{16} + \zeta^{15} + \zeta^{13} + \zeta^{12} + \zeta^{10} + \zeta^{9} + \zeta^{6} + \zeta^{3}\\
    &=\zeta^{16}+\cdots+\zeta\\
    &=-1.
\end{align*}
$$

Therefore, $y_1$ and $y_2$ are roots of the polynomial

$$
\begin{align*}
    t^2-x_1t-1.
\end{align*}
$$

That is,

$$
\begin{align}
    y_1&=\frac{1}{4}\left(-1+\sqrt{17}+\sqrt{34-2\sqrt{17}}\right),\label{y1r}\\
    y_2&=\frac{1}{4}\left(-1+\sqrt{17}-\sqrt{34-2\sqrt{17}}\right).\label{y2r}
\end{align}
$$

Likewise, $y_3$ and $y_4$ are roots of

$$
\begin{align*}
    t^2-x_2t-1.
\end{align*}
$$

Their expressions are

$$
\begin{align}
    y_3&=\frac{1}{4}\left(-1-\sqrt{17}+\sqrt{34+2\sqrt{17}}\right),\label{y3r}\\
    y_4&=\frac{1}{4}\left(-1-\sqrt{17}-\sqrt{34+2\sqrt{17}}\right).\label{y4r}
\end{align}
$$

Finally, we define $\alpha$ and $\beta$ as

$$
\begin{align*}
    \alpha&=\zeta+\zeta^{16},\\
    \beta&=\zeta^4+\zeta^{13}.
\end{align*}
$$

Repeating the same process, we obtain that $\alpha+\beta=y_1$ and $\alpha\beta=y_3$, so both are roots of the polynomial

$$
\begin{align*}
    t^2-y_1t+y_3.
\end{align*}
$$

Whence,

$$
\begin{align}
    \alpha
    &=\frac{1}{8}\left(-1+\sqrt{17}+\sqrt{34-2\sqrt{17}}+2\sqrt{17+3\sqrt{17}-\sqrt{170+38\sqrt{17}}}\right),\\
    \beta
    &=\frac{1}{8}\left(-1+\sqrt{17}+\sqrt{34-2\sqrt{17}}-2\sqrt{17+3\sqrt{17}-\sqrt{170+38\sqrt{17}}}\right).
\end{align}
$$


Note that $\alpha$ is the sum of conjugate roots, so

$$
\begin{align*}
    \alpha=2\Re\left(\zeta\right)=2\cos\left(\frac{2\pi}{17}\right).
\end{align*}
$$

Thus, finally

$$
\begin{align}
    \cos\left(\frac{2\pi}{17}\right)
    &=\frac{1}{16}\left(-1+\sqrt{17}+\sqrt{34-2\sqrt{17}}+2\sqrt{17+3\sqrt{17}-\sqrt{170+38\sqrt{17}}}\right).\label{cosrad}
\end{align}
$$

Proving that indeed, this cosine is a constructible number.


## Construction of the Field Tower

From the way we have constructed the cosine, the following field tower consists of quadratic extensions

$$
\begin{align*}
    \mathbb{Q}\subseteq\mathbb{Q}(x_1)\subseteq\mathbb{Q}(y_1)\subseteq\mathbb{Q}\left(\cos\left(\frac{2\pi}{17}\right)\right).
\end{align*}
$$

Which we can simplify as

$$
\begin{align}
    \mathbb{Q}\subseteq\mathbb{Q}\left(\sqrt{17}\right)\subseteq\mathbb{Q}\left(\sqrt{34-2\sqrt{17}}\right)\subseteq\mathbb{Q}\left(\cos\left(\frac{2\pi}{17}\right)\right).
\end{align}
$$

This agrees with the <a href="https://en.wikipedia.org/wiki/Constructible_polygon#Gauss%E2%80%93Wantzel_theorem" target="_blank">Gauss–Wantzel theorem</a>.

## References

1. <a id="Stewart2015"></a> Stewart, I. (2015). *Abstract Algebra: A Comprehensive Introduction* (4th ed.). Chapman and Hall/CRC. <a href="https://doi.org/10.1201/b18187" target="_blank">https://doi.org/10.1201/b18187</a>