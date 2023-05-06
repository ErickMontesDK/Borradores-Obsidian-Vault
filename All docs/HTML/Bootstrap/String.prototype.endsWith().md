---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# String.prototype.endsWith()
<hr> 

> [!abstract]
> El método **`endsWith()`** determina si una cadena de texto termina con los caracteres de una cadena indicada, devolviendo `true` o `false` según corresponda.
> 
> Al final puedes indicar en que posición quieres que cheque que esté el texto (opcional)
> ```js
> 
> str.endsWith(searchString, position)
> 
> ```
> 
> > [!example]
> > 
> > ```js
> > const str1 = 'Cats are the best!';
> > 
> > console.log(str1.endsWith('best!'));
> > // expected output: true
> > 
> > console.log(str1.endsWith('best', 17));
> > // expected output: true
> > ```
> > 
> > > [!bug] Console
> > > <code>True
> > > True</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions #strings