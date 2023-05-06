---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Object.keys(obj)
<hr> 

> [!abstract]
> We can also generate an array which contains all the keys stored in an object with the `Object.keys()` method. This method takes an object as the argument and returns an array of strings representing each property in the object.
> 
> > [!example]
> > 
> > ```js
> > let users = {
> >   Alan: {
> >     age: 27,
> >     online: false
> >   },
> >   Jeff: {
> >     age: 32,
> >     online: true
> >   },
> >   Sarah: {
> >     age: 48,
> >     online: false
> >   },
> >   Ryan: {
> >     age: 19,
> >     online: true
> >   }
> > };
> > 
> > function getArrayOfUsers(obj) {
> >   // Only change code below this line
> >   let newArray=Object.keys(obj);
> >   return newArray;
> >   // Only change code above this line
> > }
> > 
> > console.log(getArrayOfUsers(users));
> > ```
> > 
> > > [!bug] Console
> > > <code>[ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript 