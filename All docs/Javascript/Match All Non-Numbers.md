---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Match All Non-Numbers \D
<hr> 

> [!danger] ## Match All Non-Numbers \D
> The shortcut to look for non-digit characters is `\D`. This is equal to the character class `[^0-9]`, which looks for a single character that is not a number between zero and nine.
> 
> > [!example]
> > 
> > ```js
> > let movieName = "2001: A Space Odyssey";
> > let noNumRegex = /\D/g; // Change this line
> > let result = movieName.match(noNumRegex);
> > console.log(result);
> > ```
> > > [!bug]
> > > <code>[ ':', ' ', 'A', ' ', 'S', 'p', 'a', 'c', 'e', ' ', 'O', 'd', 'y', 's', 's', 'e', 'y' ]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #regex