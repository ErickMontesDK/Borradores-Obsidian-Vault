---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Search for multiple values |
<hr> 

> [!danger] ## Search for multiple values |
> You can search for multiple patterns using the `alternation` or `OR` operator: <mark>  |  </mark>.
> 
> > [!example]
> > 
> > ```js
> > let petString = "James has a pet cat.";
> > let petRegex = /dog|cat|bird|fish/; // All values
> > let result = petRegex.test(petString);
> > ```
> > 
> > 
> 

<hr> 
<b>Tags:</b> #javascript #regex