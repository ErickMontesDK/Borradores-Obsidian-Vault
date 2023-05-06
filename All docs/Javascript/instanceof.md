---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# instanceof
<hr> 

> [!abstract]
> El operador **`instanceof`** verifica si un objeto en su cadena de prototipos contiene la propiedad `prototype` de un constructor.
> ```js
> objeto instanceof constructor
> ```
> 
> > [!example]
> > 
> > ```js
> > let Bird = function(name, color) {
> >   this.name = name;
> >   this.color = color;
> >   this.numLegs = 2;
> > }
> > 
> > let crow = new Bird("Alexis", "black");
> > 
> > let IsInstance=crow instanceof Bird;
> > console.log(IsInstance);
> > ```
> > 
> > > [!bug] Console
> > > <code>true</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript 