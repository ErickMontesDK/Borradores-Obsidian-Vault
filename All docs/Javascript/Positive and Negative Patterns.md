---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Positive and Negative Patterns (?=)
<hr> 

> [!danger] ## Positive and Negative Patterns (?=)
> A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. 
> * A positive lookahead is used as `(?=...)` where the `...` is the required part that is not matched.
> * A negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as `(?!...)` where the `...` is the pattern that you do not want to be there. 
> 
> > [!example]
> > 
> > ```js
> > let quit = "qu";
> > let noquit = "qt";
> > let quRegex= /q(?=u)/;
> > let qRegex = /q(?!u)/;
> > 
> > quit.match(quRegex);
> > noquit.match(qRegex);
> > ```
> 

<hr>
<b>Tags:</b> #javascript #regex