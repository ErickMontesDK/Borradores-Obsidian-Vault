---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Default parameters
<hr> 

> [!abstract]
> The default parameter kicks in when the argument is not specified (it is undefined).
> 
> > [!example]
> > ```js
> > const greeting = (name = "Anonymous") => "Hello " + name;
> > 
> > console.log(greeting("John"));
> > console.log(greeting());
> > ```
> > > [!bug] Console
> > > <code>Hello John</code>
> > > <code>Hello Anonymous</code>
> > 


<hr>
<b>Tags:</b> #javascript #functions