---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Constructor
<hr> 

> [!question] ## Index
> 
>1. ### [[Prototype Properties]]
>2. ### [[Protect Properties Within an Object from Being Modified Externally]]
>

<hr> 

> [!abstract]
> Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. 
> Think of them as a blueprint for the creation of new objects.
> 
> > [!example]
> > 
> > ```js
> > function Bird() {
> >   this.name = "Albert";
> >   this.color = "blue";
> >   this.numLegs = 2;
> > }
> > ```
> > [!info] Consideraciones
> > -   Constructors are defined with a capitalized name to distinguish them from other functions that are not `constructors`.
> > -   Constructors use the keyword <mark>[[This]]</mark> to set properties of the object they will create. Inside the constructor, `this` refers to the new object it will create.
> > -   Constructors define properties and behaviors instead of returning a value as other functions might.
> To more easily create different objects from an Constructor, you can design your constructor to accept parameters. 
> The constructor is more flexible. It's now possible to define the properties for each `object` at the time it is created. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.
> 
> > [!example]
> > 
> > ```js
> > function Dog(name, color) {
> >   this.name=name;
> >   this.color=color;
> >   this.numLegs=4;
> > }
> > 
> > let Schnauzer=new Dog("Ferb","Black")
> > console.log(Schnauzer);
> > ```
> 
> 
> 

<hr> 

> [!warning] Calling
> You need to use the word <mark>new</mark> when calling a constructor. This tells JavaScript to create a new instance of `Constructor`. Without the `new` operator, `this` inside the constructor would not point to the newly created object, giving unexpected results.
> 
> ```js
> new ConstructorName();
> ```
> 
> > [!example]
> > ```js
> > function Bird() {
> >   this.name = "Albert";
> >   this.color  = "blue";
> >   this.numLegs = 2;
> > }
> > 
> > let blueBird = new Bird();
> > console.log(blueBird);
> > ```
> > > [!bug] Console
> > > <code>Bird { name: 'Albert', color: 'blue', numLegs: 2 }</code>
> It can be called with the function [[Object.create()]], with the advantage that it inherit the [[Prototype Properties]] from the object
> 

<hr>
<b>Tags:</b> #javascript #objects 