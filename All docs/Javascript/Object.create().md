---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Object.create()
<hr> 

> [!abstract]
> El método `**Object.create()**` crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.
> ```js
> Object.create(constructor.prototype])
> ```
> 
> > [!example]
> > 
> > ```js
> > function Animal() { }
> > 
> > Animal.prototype = {
> >   constructor: Animal,
> >   eat: function() {
> >     console.log("nom nom nom");
> >   }
> > };
> > 
> > let duck=Object.create(Animal.prototype);
> > let beagle=Object.create(Animal.prototype);
> > ```
> Tambien puedes hacer que un constructor heredé el prototipo de otro constructor
> > [!example]
> > 
> > ```js
> > function Animal() { }
> > 
> > Animal.prototype = {
> >   constructor: Animal,
> >   eat: function() {
> >     console.log("nom nom nom");
> >   }
> > };
> > 
> > function Dog() { }
> > 
> > Dog.prototype=Object.create(Animal.prototype);
> > 
> > let beagle = new Dog();
> > ```
> > 
> > 
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions #objects
