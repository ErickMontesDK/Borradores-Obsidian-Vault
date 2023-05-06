---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Setters and getters
<hr> 

> [!abstract]
> You can obtain values from an object and set the value of a property within an object.
> These are classically called getters and setters.
> * Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
> * Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function.
> 
> > [!example]
> > 
> > ```js
> > class Book {
> >   constructor(author) {
> >     this._author = author;
> >   }
> >   // getter
> >   get writer() {
> >     return this._author;
> >   }
> >   // setter
> >   set writer(updatedAuthor) {
> >     this._author = updatedAuthor;
> >   }
> > }
> > const novel = new Book('anonymous'); //Create object "novel"
> > console.log(novel.writer); //Getter, access value
> > novel.writer = 'newAuthor';//Setter, modify value
> > console.log(novel.writer);
> > ```
> > 
> > > [!bug]
> > > <code>`anonymous`
> > > newAuthor</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript 