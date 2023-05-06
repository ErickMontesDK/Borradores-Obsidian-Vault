---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Check for Possible Element ?
<hr> 

> [!danger] ## Check for Possible Element ?
> You can specify the possible existence of an element with a question mark, `?`. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
> 
> > [!example]
> > 
> > ```js
> > let american = "color";
> > let british = "colour";
> > let rainbowRegex= /colou?r/;
> > 
> > rainbowRegex.test(american); //true
> > rainbowRegex.test(british); //true
> > ```
> 

<hr>
<b>Tags:</b> #javascript #regex