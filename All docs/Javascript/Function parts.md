---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Function parts
<hr> 

> [!abstract] ## Partes (opcionales) en una función
> 
> > [!attention] ### Parameters
> > <mark>Parameters</mark> are variables that act as placeholders for the values that are to be input to a function when it is called. 
> > When a function is defined, it is typically defined along with one or more parameters.
> > > [!example]
> > > ```js
> > > function testFun(param1, param2) {
> > >   console.log(param1, param2);
> > > }
> > > testFun("Hello","Marlen"); //We have passed two string arguments, `Hello` and `Marlen`
> > > ```
> > > 
> > > > [!bug] Console
> > > > <code>"Hello Marlen"</code>
> > > 
> 
> ad-attention
title:### Return
We can pass values into a function with arguments. You can use a <mark>return</mark> statement to send a value back out of a function.
* When a `return` statement is reached, the execution of the current function stops and control returns to the calling location.
> [!example]
> ```js
> function plusThree(num) {
>   return num + 3;
> }
> const answer = plusThree(5); //Receives the value 8, cause 5+3=8
> ```

> [!example]
> ```js
> function myFun() {
>   console.log("Hello");
>   return "World";
>   console.log("byebye")
> }
> myFun(); //Display the string Hello in the console, and return the string World
> ```


``````

<hr>
<b>Tags:</b> #javascript #functions
