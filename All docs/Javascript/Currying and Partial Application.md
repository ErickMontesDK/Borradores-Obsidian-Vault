---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Currying and Partial Application
<hr> 

## Currying
> [!abstract]
> This technique converts N arguments function calls into N function call chains, with each function call having a single argument. Currying returns a function with an argument until all the arguments are applied. Then, you have to continue to call the returned function until the arguments have been exhausted and it returns the final value.
> ```js
> function curried(x) {
>   return function(y) {
>     return x + y;
>   }
> }
> ```
> 
> > [!example]
> > 
> > ```js
> > function add(x) {
> >   return function(y){
> >     return function(z){
> >       return x+y+z;
> >     }
> >   }
> > }
> > 
> > console.log(add(10)(20)(30));
> > ```
> > 
> > > [!bug] Console
> > > <code>60</code>
> > 
> 

<hr>

## Partial Application 
> [!abstract]
> Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.
> 
> > [!example]
> > 
> > ```js
> > // Arrow function  
> > //const add = x => y => z => x + y + z;// Normal function  
> > function add(x) {  
> >   return function(y) {  
> >     return function(z) {  
> >       return x + y + z;  
> >     }  
> >   }  
> > }const addFive = add(5);  
> > const addFourAgain = addFive(4);  
> > const nineTeen = addFourAgain(10);  
> > console.log( nineTeen === 19 );// true
> > ```
> > 
> > > [!bug] Console
> > > <code>true</code>
> > 
> 


<hr>
<b>Tags:</b> #javascript 