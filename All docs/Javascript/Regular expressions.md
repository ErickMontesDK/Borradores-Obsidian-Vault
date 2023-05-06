---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Regular expressions
<hr> 

> [!question] ## Index
> 
>1. ### [[Using the Test Method]]
>2. ### [[Extract Matches]]
>3. ### [[Flags and cases in regex]]
>

<hr> 

> [!abstract]
> Regular expressions, often shortened to "<mark>regex</mark>" or "<mark>regexp</mark>", are patterns that help programmers match, search, and replace text.
> Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en [[Strings]]. En JavaScript, las expresiones regulares también son objetos.
> 
> Construyes una expresión regular en una de estas dos formas:
> * Usando una expresión regular literal, que consiste en un patrón encerrado entre barras, como sigue:
> > [!example]
> > ```js
> > let re = /ab+c/;
> > ```
> * O llamando a la función constructora del objeto `RegExp`de la siguiente manera:
> > [!example]
> > ```js
> > let re = new RegExp('ab+c');
> > ```

<hr>
<b>Tags:</b> #javascript #regex 