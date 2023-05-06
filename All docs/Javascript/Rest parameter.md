---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Rest parameter
<hr> 

> [!abstract]
> La sintaxis de los **parámetros rest** nos permiten representar un número indefinido de argumentos como un array.
> 
> > [!example]
> > 
> > ```js
> > function howMany(...args) {
> >   return "You have passed " + args.length + " arguments.";
> > }
> > console.log(howMany(0, 1, 2));
> > console.log(howMany("string", null, [1, 2, 3], { }));
> > ```
> > 
> > > [!bug]
> > > <code>You have passed 3 arguments.
> > > You have passed 4 arguments.</code>
> > > 
> > 
> 

^f24963

<hr>
<b>Tags:</b> #javascript #functions