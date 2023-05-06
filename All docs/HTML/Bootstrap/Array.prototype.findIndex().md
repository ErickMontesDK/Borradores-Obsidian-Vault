---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Array.prototype.findIndex()
<hr> 

> [!abstract]
> El método `**findIndex()**` devuelve el **índice** del **primer elemento** de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
> ```js
> 
> ```
> 
> > [!example]
> > 
> > ```js
> > const array1 = [5, 12, 8, 130, 44];
> > 
> > const isLargeNumber = (element) => element > 13;
> > 
> > console.log(array1.findIndex(isLargeNumber));
> > // expected output: 3
> > ```
> > 
> > > [!bug] Console
> > > <code>3</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript 