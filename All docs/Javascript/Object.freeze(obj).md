---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Object.freeze(obj)
<hr> 

> [!abstract]
> To ensure your data doesn't change, JavaScript provides a function <mark>Object.freeze()</mark> to prevent data mutation.
> 
> > [!example]
> > ```js
> > let obj = {
> >   name:"FreeCodeCamp",
> >   review:"Awesome"
> > };
> > 
> > Object.freeze(obj);
> > obj.review = "bad";
> > obj.newProp = "Test";
> > console.log(obj); 
> > ```
> > > [!bug] Console
> > > <code>{ name: "FreeCodeCamp", review: "Awesome" }</code>
> 


<hr>
<b>Tags:</b> #javascript #functions #objects
