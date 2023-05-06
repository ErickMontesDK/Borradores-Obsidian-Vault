---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Match when the String is at the Beginning ^
<hr> 

> [!danger] ## Match when the String is at the Beginning ^
> Outside of a character set, the caret is used to search for patterns at the beginning of strings.
> 
> > [!example]
> > 
> > ```js
> > let firstString = "Ricky is first and can be found.";
> > let firstRegex = /^Ricky/;
> > firstRegex.test(firstString); //true 'cause it's at the beginning
> > let notFirst = "You can't find Ricky now.";
> > firstRegex.test(notFirst); //false cause it isn't at the beginning
> > ```
> > 
> 

<hr>
<b>Tags:</b> #javascript #regex