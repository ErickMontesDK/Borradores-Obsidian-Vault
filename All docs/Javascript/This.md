---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# This
<hr> 

> [!abstract]
> In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called).
> 
> The this keyword refers to different objects depending on how it is used
> * this in a Method: When used in an object method, this refers to the object. If the variable name changes, any code referencing the original name would need to be updated as well.
> 
> > [!example]
> > 
> > ```js
> > let duck = {
> >   name: "Aflac",
> >   numLegs: 2,
> >   sayName: function() {return "The name of this duck is " + this.name + ".";}
> > };
> > ```
> > 
> > 
> 

<hr>
<b>Tags:</b> #javascript #objects 