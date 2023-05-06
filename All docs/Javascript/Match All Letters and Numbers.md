---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Match All Letters and Numbers \w
<hr> 

> [!danger] ## Match All Letters and Numbers \w
> The closest character class in JavaScript to match the alphabet is `\w`. This shortcut is equal to `[A-Za-z0-9_]`. This character class matches upper and lowercase letters plus numbers.
> 
> > [!example]
> > 
> > ```js
> > let quoteSample = "The five boxing wizards jump quickly.";
> > let alphabetRegexV2 = /\w/g; 
> > console.log(quoteSample.match(alphabetRegexV2));
> > ```
> > > [!bug]
> > > <code>[ 'T', 'h', 'e', 'f', 'i', 'v', 'e', 'b', 'o', 'x', 'i', 'n', 'g', 'w', 'i', 'z', 'a', 'r', 'd', 's', 'j', 'u', 'm', 'p', 'q', 'u', 'i', 'c', 'k', 'l', 'y' ]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #regex