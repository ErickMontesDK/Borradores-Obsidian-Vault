---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Scope
<hr> 

> [!abstract]
> Scope refers to the visibility of variables. 
> * Variables which are defined outside of a function block have <mark>Global scope.</mark>
> * Variables that work just inside a function block have <mark>Local scope.</mark>

<hr> 


> [!info] ## Considerations
> > [!warning]
> > Variables which are declared without the `let` or `const` keywords are automatically created in the `global` scope.
> > [!warning]
> > Variables which are declared within a function, as well as the function parameters, have <mark>local scope</mark>. That means they are only visible within that function.
> > > [!example]
> > > ```js
> > > function myTest() {
> > >   const loc = "foo";
> > >   console.log(loc); //Shows "foo" in the console
> > > }
> > > 
> > > myTest();
> > > console.log(loc); //Throw error, 'cause loc isn't defined outside "myTest" function
> > ```
> 
> > [!warning]
> > It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
> > > [!example]
> > > ```js
> > > const someVar = "Hat";
> > > 
> > > function myFun() {
> > >   const someVar = "Head";
> > >   return someVar; 
> > > }
> > > console.log(myFun());//returns "Head"
> > > console.log(someVar);//returns "Hat"
> > ```
> 

^587807

<hr>
<b>Tags:</b> #javascript #functions #scope