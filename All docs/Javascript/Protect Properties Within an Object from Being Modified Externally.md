---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Protect Properties Within an Object from Being Modified Externally
<hr> 

> [!abstract]
> A property in a object is considered public because it can be accessed and changed outside of it's definition.
> Therefore, any part of your code can easily change the name of the `key' to any value. Think about things like passwords and bank accounts being easily changeable by any part.
> 
> The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.
> 
> > [!example]
> > 
> > ```js
> > function Bird() {
> >   let hatchedEgg = 10;
> > 
> >   this.getHatchedEggCount = function() { 
> >     return hatchedEgg;
> >   };
> > }
> > let ducky = new Bird();
> > ducky.getHatchedEggCount();
> > ```
> > 
> 

<hr>
<b>Tags:</b> #javascript #constructor