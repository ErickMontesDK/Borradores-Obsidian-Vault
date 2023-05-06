---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Object.prototype.isPrototypeOf(obj)
<hr> 

> [!abstract]
> El método `**isPrototypeOf()**` comprueba si un objeto se encuentra en la cadena de prototipado de otro.
> ```js
> Constructor.prototype.isPrototypeOf(obj)
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
> > 
> > // Only change code below this line
> > let Value=Dog.prototype.isPrototypeOf(beagle); //true
> > console.log(Value); 
> > ```
> > 
> > > [!bug] Console
> > > <code>true</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions #objects