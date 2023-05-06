---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Object.prototype.constructor
<hr> 

> [!abstract]
> Retorna una referencia a la función del `Object` que creó el objeto de la instancia.
> ```js
> object.constructor===ConstructorName;
> ```
> 
> > [!example]
> > 
> > ```js
> > function Dog(name) {
> >   this.name = name;
> > }
> > 
> > 
> > function joinDogFraternity(candidate) {
> >   return candidate.constructor===Dog;
> > }
> > let beatle=new Dog("Shaggy");
> > 
> > console.log(joinDogFraternity(beatle));
> > ```
> > 
> > > [!bug] Console
> > > <code>true</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #funcitions #objects