---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Match Everything But Letters and Numbers \W
<hr> 

> [!danger] ## Match Everything But Letters and Numbers \W
> You can search for the opposite of the `\w` with `\W`. Note, the opposite pattern uses a capital letter. This shortcut is the same as `[^A-Za-z0-9_]`.
> 
> > [!example]
> > 
> > ```js
> > let quoteSample = "The five boxing wizards jump quickly.";
> > let nonAlphabetRegex = /\W/g; //All except letter and numbers
> > console.log(quoteSample.match(nonAlphabetRegex));
> > ```
> > > [!bug]
> > > <code>[ ' ', ' ', ' ', ' ', ' ', '.' ]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #regex