---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Principles for functional programming
<hr> 

> [!abstract]
> 1.  <mark>Don't alter a variable or object</mark> - create new variables and objects and return them if need be from a function. 
> 	* Hint: using something like `const newArr = arrVar`, where `arrVar` is an array will simply create a reference to the existing variable and not a copy. So changing a value in `newArr` would change the value in `arrVar`.
>     
> 2.  <mark>Declare function parameters</mark> - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

<hr>
<b>Tags:</b> #javascript #functionalprogramming
