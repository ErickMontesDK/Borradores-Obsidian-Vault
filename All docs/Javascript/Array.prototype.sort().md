---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Array.prototype.sort()
<hr> 

> [!abstract]
> El método `**sort()**` ordena los elementos de un arreglo (array) _localmente_ y devuelve el arreglo ordenado.
> ```js
> arr.sort([compareFunction])
> ```
> 
> > [!example]
> > 
> > ```js
> > var arr = [ 40, 1, 5, 200 ];
> > function comparar ( a, b ){ return a - b; }
> > console.log(arr.sort( comparar ) ) // [ 1, 5, 40, 200 ]
> > ```
> > 
> > > [!bug] Console
> > > <code>[ 1, 5, 40, 200 ]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions