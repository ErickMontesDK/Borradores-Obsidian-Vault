---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Function.prototype.apply()
<hr> 

> [!abstract]
> El método **apply()** invoca una determinada función asignando explícitamente el objeto **this**(<i>solo puede ser un objeto, si no se pone Null</i>) y un array o similar (array like object) como parámetros (**argumentos)** para dicha función.
> ```js
> functionToInvoke.apply(ObjectArgumento,[Argumentos en array])
> ```
> 
> > [!example]
> > 
> > ```js
> > //Object con método, el cual se llama
> > const person = {  
> >   fullName: function(city, country) {  
> > 	return this.firstName + " " + this.lastName + "," + city + "," + country;
> >   }  
> > }  
> > //Objeto a usar como argumento
> > const person1 = {  
> > 	firstName:"John",  
> > 	lastName: "Doe"  
> > }  
> >   
> > let newObject=person.fullName.apply(person1, ["Oslo", "Norway"]);
> > //el método fullName regresa un string 
> > console.log(newObject);
> > ```
> > 
> > > [!bug]
> > > <code>"John Doe,Oslo,Norway"</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions