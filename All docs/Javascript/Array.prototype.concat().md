---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
banner_y: 0.5
---
# Array.prototype.concat()
<hr> 

> [!abstract]
> El método `**concat()**` se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
> <code>var nuevo_array = viejo_array.concat(valor1[, valor2[, ...[, valorN]]])</code>
> 
> > [!example]
> > 
> > ```js
> > const num1 = [1, 2, 3];
> > const num2 = [4, 5, 6];
> > const num3 = [7, 8, 9];
> > 
> > const numbers = num1.concat(num2, num3);
> > console.log(numbers);
> > ```
> > 
> > > [!bug] Console
> > > <code>[1, 2, 3, 4, 5, 6, 7, 8, 9]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions