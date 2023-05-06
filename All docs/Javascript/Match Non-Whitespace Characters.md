---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Match Non-Whitespace Characters \S
<hr> 

> [!danger] ## Match Non-Whitespace Characters \S
> Search for non-whitespace using `\S`, which is an uppercase `s`. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters.
> 
> > [!example]
> > 
> > ```js
> > let sample = "Whitespace is important in separating words";
> > let countNonWhiteSpace = /\S/g;
> > let result = sample.match(countNonWhiteSpace);
> > console.log(result);
> > ```
> > > [!bug]
> > > <code>[ 'W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 'i', 's', 'i', 'm', 'p', 'o', 'r', 't', 'a', 'n', 't', 'i', 'n', 's', 'e', 'p', 'a', 'r', 'a', 't', 'i', 'n', 'g', 'w', 'o', 'r', 'd', 's' ]</code>
> 

<hr>
<b>Tags:</b> #javascript #regex