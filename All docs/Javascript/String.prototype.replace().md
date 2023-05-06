---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# String.prototype.replace()
<hr> 

> [!abstract]
> El método **`replace()`** devuelve una nueva cadena con algunas o todas las coincidencias de un `patrón`, siendo cada una de estas coincidencias reemplazadas por `remplazo`. El `patrón` puede ser una cadena o una [`RegExp`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp), y el `reemplazo` puede ser una cadena o una función que será llamada para cada coincidencia. Si el `patrón` es una cadena, sólo la primera coincidencia será reemplazada.
> ```js
> cadena.replace(regexp|substr, newSubStr|function[,flags]);
> 
> ```
> 
> > [!example]
> > 
> > ```js
> > const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
> > 
> > console.log(p.replace('dog', 'monkey'));
> > const regex = /Dog/i;
> > console.log(p.replace(regex, 'ferret'));
> > 
> > ```
> > 
> > > [!bug] Console
> > > <code>The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy? 
> > > The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript 