---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Match Whitespace \s
<hr> 

> [!danger] ## Match Whitespace \s
> You can also match the whitespace or spaces between letters.
> You can search for whitespace using `\s`, which is a lowercase `s`. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.
> 
> > [!example]
> > 
> > ```js
> > let whiteSpace = "Whitespace. Whitespace everywhere!"
> > let spaceRegex = /\s/g;
> > whiteSpace.match(spaceRegex);
> > ```
> > 
> 

<hr>
<b>Tags:</b> #javascript #regex