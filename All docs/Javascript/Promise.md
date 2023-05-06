---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Promise
<hr> 

> [!question] ## Index
> 
>1. ### [[#^520b1e | Promise with then]]
>2. ### [[#^fb4f7e | Promise with catch]]

<hr> 

> [!abstract]
> You use it to make a promise to do something, usually asynchronously.
> When the task completes, you either fulfill your promise or fail to do so. 
> * <mark>Promise</mark> is a constructor function, so you need to use the `new` keyword to create one. 
> It takes a function, as its argument, with two parameters - `resolve` and `reject`.
> * A promise has three states: `pending`, `fulfilled`, and `rejected`.  `resolve` is used when you want your promise to succeed, and `reject` is used when you want it to fail.
> 
> > [!example]
> > 
> > ```js
> > const myPromise = new Promise((resolve, reject) => {
> >   if(condition here) {
> >     resolve("Promise was fulfilled");
> >   } else {
> >     reject("Promise was rejected");
> >   }
> > });
> > ```
> > 
> 

<hr>


> [!info] ## Promise with then
> Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. 
> When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the `then` method. 
> The <mark>then</mark> method is executed immediately after your promise is fulfilled with `resolve`.
> 
> > [!example]
> > 
> > ```js
> > const makeServerRequest = new Promise((resolve, reject) => {
> >   let responseFromServer = true;
> >     
> >   if(responseFromServer) {
> >     resolve("We got the data");
> >   } else {  
> >     reject("Data not received");
> >   }
> > });
> > //Se ejecuta cuando se cumple la parte resolve de la promesa
> > makeServerRequest.then(result => {
> >   console.log(result);
> > });
> > ```
> > > [!bug] Console
> > > <code>"We got the data"</code>
> 

^520b1e

<hr> 

> [!info] ## Promise with catch
> `catch` is the method used when your promise has been rejected. It is executed immediately after a promise's `reject` method is called.
> 
> > [!example]
> > 
> > ```js
> > const makeServerRequest = new Promise((resolve, reject) => {
> >   let responseFromServer = false;
> >     
> >   if(responseFromServer) {
> >     resolve("We got the data");
> >   } else {  
> >     reject("Data not received");
> >   }
> > });
> > 
> > makeServerRequest.then(result => {
> >   console.log(result);
> > });
> > //Se ejecuta cuando se cumple la parte de reject
> > makeServerRequest.catch(error => {
> >   console.log(error);
> > });
> > ```
> > > [!bug] Console
> > > <code>'Data not received'</code>
> 

^fb4f7e

<hr> 
<b>Tags:</b> #javascript #promise