---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Object.prototype.hasOwnProperty() and In function
<hr> 

> [!abstract]
> It determine if that object has the given property name. `.hasOwnProperty()` returns `true` or `false` if the property is found or not.
> 
> You can realize the same  function only using the keyword <mark>in</mark>
> 
> > [!example]
> > ```js
> > const myObj = {
> >   top: "hat",
> >   bottom: "pants"
> > };
> > 
> > console.log(myObj.hasOwnProperty("top")); //true
> > console.log(myObj.hasOwnProperty("middle")); //false
> > //also
> > console.log('top' in myObj); //True
> > console.log('middle' in myObj); //False
> ```

^4614bd

<hr>
<b>Tags:</b> #javascript #functions #objects 