---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Function.prototype.call()
<hr> 

> [!abstract]
> El método **`call()`** llama a una función con un valor dado `this` y con argumentos provistos individualmente.
> ```js
> functionToInvoke.call(ObjectArgumento,arg1,arg2,arg3...)
> ```
> 
> > [!example]
> > 
> > ```js
> > const person = {
> >   fullName: function(city, country) {
> >     return this.firstName + " " + this.lastName + "," + city + "," + country;
> >   }
> > }
> > 
> > const person1 = {
> >   firstName:"John",
> >   lastName: "Doe"
> > }
> > 
> >  let newString=person.fullName.call(person1, "Oslo", "Norway"); 
> >  console.log(newString);
> > ```
> > 
> > > [!bug] Console
> > > <code>John Doe,Oslo,Norway</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions 