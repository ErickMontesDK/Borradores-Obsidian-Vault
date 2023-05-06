---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Use a wildcard .
<hr> 

> [!danger] ## Use a wildcard .
> The wildcard character `.` will match any one character. You can use the wildcard character just like any other character in the regex. 
> For example, if you wanted to match `hug`, `huh`, `hut`, and `hum`, you can use the regex `/hu./` to match all four words.
> 
> > [!example]
> > 
> > ```js
> > let exampleStr = "Let's have fun with regular expressions!";
> > let unRegex = /.un/; //With wildcard
> > let result = unRegex.test(exampleStr);
> > ```
> > 
> 

<hr>
<b>Tags:</b> #javascript #regex