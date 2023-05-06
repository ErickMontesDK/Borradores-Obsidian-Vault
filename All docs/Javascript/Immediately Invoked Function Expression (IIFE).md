---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Immediately Invoked Function Expression (IIFE)
<hr> 

> [!abstract]
> Las expresiones de función ejecutadas inmediatamente (**IIFE** por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
> La función se convierte en una expresión de función que es ejecutada inmediatamente. La variable dentro de la expresíon no puede ser accesada desde afuera.
> 
> ```js
> (function () {
>     statements
> })();
> ```
> 
> > [!example]
> > 
> > ```js
> > (function () {
> >   console.log("Chirp, chirp!");
> > })();
> > ```
> > 
> > > [!bug] Console
> > > <code>"Chirp, chirp!"</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions