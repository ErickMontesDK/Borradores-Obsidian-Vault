---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Array.prototype.every()
<hr> 

> [!abstract]
> Determina si todos los elementos en el array satisfacen una condición.
> ```js
> array.every(function(currentValue, index, arr), thisValue)
> ```
> 
> > [!example]
> > 
> > ```js
> > const isBelowThreshold = (currentValue) => currentValue < 40;
> > const array1 = [1, 30, 39, 29, 10, 13];
> > 
> > console.log(array1.every(isBelowThreshold));
> > // expected output: true
> > ```
> > 
> > > [!bug] Console
> > > <code>true</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions #arrays