---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Match when there's not a character ^
<hr> 

> [!danger] ## Match when there's not a character ^
> You could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.
> 
> To create a negated character set, you place a caret character (`^`) after the opening bracket and before the characters you do not want to match.
> 
> > [!example]
> > 
> > ```js
> > let quoteSample = "3 blind mice.";
> > let myRegex = /[^aeiou0123456789]/gi;
> > let result = quoteSample.match(myRegex);
> > ```
> > 
> 

<hr>
<b>Tags:</b> #javascript #regex