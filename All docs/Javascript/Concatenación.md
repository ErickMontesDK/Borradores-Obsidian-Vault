---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Concatenación
<hr> 

> [!abstract]
> When the `+` operator is used with a `String` value, it is called the <mark>concatenation</mark> operator. You can build a new string out of other strings by concatenating them together. This string can be a variable.
> 
> > [!danger] String+String
> > ```javascript
> > const ourStr = "I come first. " + "I come second.";
> > console.log(ourStr);
> > //I come first. I come second.
> > ```
> 
> > [!danger] String with `+=` operator
> > Add the string at the end of the original variable
> > ```js
> > let myStr="This is the first sentence.";
> > myStr+="This is the second sentence.";
> > console.log(myStr);
> > //This is the first sentence. This is the second sentence.
> > ```
> 
> > [!danger] String + variable
> > ```js
> > const myName="Erick";
> > const myStr="My name is "+myName+" and I am well!";
> > console.log(myStr);
> > //My name is Erick  and I am well!
> > ```
> 

^c13f9e

<hr>
<b>Tags:</b> #javascript #strings