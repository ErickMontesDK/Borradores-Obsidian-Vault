---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Match All Numbers \d
<hr> 

> [!danger] ## Match All Numbers \d
> The shortcut to look for digit characters is `\d`, with a lowercase `d`. This is equal to the character class `[0-9]`
> 
> > [!example]
> > 
> > ```js
> > let movieName = "2001: A Space Odyssey";
> > let numRegex = /\d/g; // Change this line
> > let result = movieName.match(numRegex);
> > console.log(result);
> > ```
> > > [!bug]
> > > <code>[ '2', '0', '0', '1' ]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #regex