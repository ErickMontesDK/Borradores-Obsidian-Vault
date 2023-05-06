---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Function.prototype.bind()
<hr> 

> [!abstract]
> El método `**bind()**` crea una nueva función, que cuando es llamada, asigna a su operador  _this_ el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada.
> 
> * With the `bind()` method, an object can borrow a method from another object.
> 
> > [!example]
> > 
> > ```js
> > const person = {
> >   firstName:"John",
> >   lastName: "Doe",
> >   fullName: function() {
> >     return this.firstName + " " + this.lastName;
> >   }
> > }
> > 
> > const member = {
> >   firstName:"Hege",
> >   lastName: "Nilsen",
> > }
> > 
> > let fullName = person.fullName.bind(member);
> > console.log(fullName());
> > ```
> > 
> > > [!bug] Console
> > > <code>Hege Nilsen</code>
> > 
> 
> * Sometimes the `bind()` method has to be used to prevent loosing **this**. When a function is used as a callback, **this** is lost.
> 
> > [!example]
> > 
> > ```js
> > const person = {
> >   firstName:"John",
> >   lastName: "Doe",
> >   display: function() {
> >     let x = this.firstName + " " + this.lastName;
> >     console.log(x);
> >   }
> > }
> > 
> > let display = person.display.bind(person);
> > setTimeout(display, 3000);
> > ```
> > 
> > > [!bug] Console
> > > <code>John Doe</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript 