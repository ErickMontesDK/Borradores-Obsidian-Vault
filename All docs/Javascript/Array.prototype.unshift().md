---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Array.prototype.unshift()
<hr> 

> [!abstract]
>  `.unshift()` works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()` adds the element at the beginning of the array.
> ```js
> arr.unshift(elemento1[, ...[, elementoN]])
> ```
> 
> > [!example]
> > 
> > ```js
> > 	const ourArray = ["Stimpson", "J", "cat"];
> > 	ourArray.shift(); //ourArray=["J", "cat"];
> > 	ourArray.unshift("Happy"); //ourArray=["Happy", "J", "cat"];
> > 	console.log(ourArray);
> > ```
> > 
> > > [!bug] Console
> > > <code>["Happy", "J", "cat"]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions #arrays