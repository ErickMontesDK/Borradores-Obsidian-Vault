---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Class
<hr> 

> [!question] ## Index
> 
>1. ### [[Setters and getters]]
>2. ### [[Constructor]]
>3. ### [[Methods on Class]]
>	* [[Static methods]]
>4. ### [[Herencia de clases]]
>	* [[Overriding]]

<hr> 

> [!abstract]
> Las clases son "funciones especiales". La sintaxis de una clase tiene dos componentes: expresiones de clases y declaraciones de clases.
> The `class` keyword declares a new function, to which a constructor is added. This constructor is invoked when `new` is called to create a new object.
> 
> The `constructor` method is a special method for creating and initializing an object created with a class.
> 
> > [!example]
> > ```js
> > class Vegetable{
> >   constructor(vegeName){
> >     this.name=vegeName;
> >   }
> > }
> > const carrot = new Vegetable('carrot'); //create object "carrot"
> > console.log(carrot.name);
> > ```
> > > [!bug] Console
> > > "carrot"

<hr>
<b>Tags:</b> #javascript 