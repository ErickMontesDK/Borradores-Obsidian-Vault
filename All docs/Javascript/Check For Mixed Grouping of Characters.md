---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Check For Mixed Grouping of Characters ( )
<hr> 

> [!danger] ## Check For Mixed Grouping of Characters ( )
> Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses `()`.
> 
> If you want to find either `Penguin` or `Pumpkin` in a string, you can use the following Regular Expression: `/P(engu|umpk)in/g`
> 
> > [!example]
> > 
> > ```js
> > let testStr = "Pumpkin";
> > let testRegex = /P(engu|umpk)in/;
> > testRegex.test(testStr); //true
> > ```
> 

<hr>
<b>Tags:</b> #javascript #regex