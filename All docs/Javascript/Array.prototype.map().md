---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Array.prototype.map()
<hr> 

> [!abstract]
> El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
> ```js
> array.map(function(currentValue, index, arr), thisValue)
> ```
> 
> > [!example]
> > 
> > ```js
> > var numeros= [1, 4, 9];
> > var raices = numeros.map(function(num){
> >    return num * num}
> >    );
> >    
> > console.log(raices);
> > ```
> > 
> > > [!bug] Console
> > > <code>[1, 16, 81]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions #arrays