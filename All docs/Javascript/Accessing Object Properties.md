---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Accessing Object Properties
<hr> 

> [!question] ## Index
> 
>1. ### [[#^b5adbf | Dot notation]]
>2. ### [[#^f81d8b | Bracket notation]]
>3. ### [[#^3199cd | Nested objects]]
>4. ### [[Destructuring assignment]]
>5.

<hr> 

> [!warning] ## Dot notation
> Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
> > [!example]
> > ```js
> > const myObj = {
> >   prop1: "val1",
> >   prop2: "val2"
> > };
> > const prop1val = myObj.prop1; //"val1"
> > const prop2val = myObj.prop2; //"val2"
> ```

^b5adbf

<hr> 

> [!warning] ## Bracket notation
> Use of bracket notation on objects is to access a property which is stored as the value of a variable
> > [!example]
> > ```js
> > const dogs = {
> >   Fido: "Mutt",
> >   Hunter: "Doberman",
> >   Snoopie: "Beagle"
> > };
> > const myDog = "Hunter";
> > const myBreed = dogs[myDog];
> > console.log(myBreed);
> ```

^f81d8b

<hr> 

> [!caution] ## Nested Objects
> The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
> > [!example]
> > ```js
> > const ourStorage = {
> >   "desk": {
> >     "drawer": "stapler"
> >   },
> >   "cabinet": {
> >     "top drawer": { 
> >       "folder1": "a file",
> >       "folder2": "secrets"
> >     },
> >     "bottom drawer": "soda"
> >   }
> > };
> > ourStorage.cabinet["top drawer"].folder2; //Returns "secrets"
> > ourStorage.desk.drawer; //Returns "stapler"
> ```

^3199cd

<hr>
<b>Tags:</b> #javascript #objects 