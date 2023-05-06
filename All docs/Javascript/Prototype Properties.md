---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Prototype Properties
<hr> 

> [!abstract]
> Sometimes you'll have the same value for all instances of a `Constructor`. Essentially you have a duplicated variable inside each object instance. 
> 
> A better way is to use the `prototype` of `constructor`. Properties in the `prototype` are shared among ALL instances of the `constructor`.
> ```js
> Constructor.prototype.property = value;
> ```
> 
> > [!example]
> > 
> > ```js
> > function Dog(name) {
> >   this.name = name;
> > }
> > 
> > let beagle = new Dog("Snoopy");
> > Dog.prototype.numLegs=4;
> > 
> > console.log(beagle.numLegs);
> > ```
> > 
> > > [!bug] Console
> > > <code>4</code>
> > 
> 

> [!warning]
> Instead of adding properties to the objects one by one, a more efficient way is to set the `prototype` to a new object that already contains the properties. This way, the properties are added all at once
> > [!example]
> > ```js
> > //Original Constructor
> > function Dog(name) {
> >   this.name = name;
> > }
> > 
> > //New prototype properties for the Constructor
> > Dog.prototype = {
> >   numLegs:4,
> >   eat: function(){
> >     console.log("nom nom nom");
> >   },
> >   describe: function(){
> >     console.log("My name is " + this.name);
> >   }
> > };
> > ```
> You can create the object with the function [[Object.create()]], with the advantage that it inherits the [[Prototype Properties]] from the object

> [!warning]
> 
>There is one crucial side effect of manually setting the prototype to a new object. It erases the [[Constructor]] property!
>To fix this, whenever a prototype is manually set to a new object, remember to define the `constructor` property:
>````ad-example
>```js
>Bird.prototype = {
  >constructor: Bird,
  >numLegs: 2,
  >eat: function() {
>	console.log("nom nom nom");
>  },
>  describe: function() {
>	console.log("My name is " + this.name); 
>  }
>};
>```
>````

<hr>
<b>Tags:</b> #javascript #constructor