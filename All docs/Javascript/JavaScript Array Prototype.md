---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# JavaScript Array Prototype
<hr> 

> [!abstract]
> The prototype constructor allows you to add new properties and methods to the Array() object.
> When constructing a property, ALL arrays will be given the property, and it's value, as default.
> When constructing a method, ALL arrays will have this method available.
> ```js
> Array.prototype.name = value
> ```
> > [!warning]
> > To access the array you need to use the word <mark> this </mark>
> 
> > [!example]
> > 
> > ```js
> > Array.prototype.myUcase = function() {
> >     var i;
> >     for (i = 0; i < this.length; i++) {
> >         this[i] = this[i].toUpperCase();
> >     }
> > };
> > 
> > var fruits = ["Banana", "Orange", "Apple", "Mango"];
> > fruits.myUcase();
> > console.log(fruits);
> > ```
> > 
> > > [!bug] Console
> > > <code>[ 'BANANA', 'ORANGE', 'APPLE', 'MANGO' ]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #prototype #arrays