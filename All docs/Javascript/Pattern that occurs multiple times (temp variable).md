---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Pattern that occurs multiple times (temp variable)
<hr> 

> [!danger] ## Pattern that occurs multiple times (temp variable)
> Say you want to match a word that occurs multiple times like below. What if you don't know the specific word repeated? Capture groups can be used to find repeated substrings.
> * Capture groups are constructed by enclosing the regex pattern to be captured in parentheses.
> * The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. `\1`). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.
> 
> > [!example]
> > 
> > ```js
> > let repeatRegex = /(\w+) \1 \1/;
> > repeatRegex.test(repeatStr); // Returns true
> > repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
> > ```
> 

<hr>
<b>Tags:</b> #javascript #regex