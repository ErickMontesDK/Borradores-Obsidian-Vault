---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Match a Single Character with Multiple Possibilities []
<hr> 

> [!danger] ## Match a Single Character with Multiple Possibilities []
> Character classes allow you to define a group of characters you wish to match by placing them inside square (`[` and `]`) brackets.
> For example, you want to match `bag`, `big`, and `bug` but not `bog`. 
> You can create the regex `/b[aiu]g/` to do this. The `[aiu]` is the character class that will only match the characters `a`, `i`, or `u`.
> 
> > [!example]
> > 
> > ```js
> > let bigStr = "big";
> > let bagStr = "bag";
> > let bugStr = "bug";
> > 
> > let bgRegex = /b[aiu]g/;
> > bigStr.match(bgRegex);
> > bagStr.match(bgRegex);
> > bugStr.match(bgRegex);
> > 
> > ```
> > 
> * Inside a character set, you can define a range of characters to match using a hyphen character: `-`. This can be letter os numbers.
> > [!example]
> > 
> > ```js
> > let catStr = "cat";
> > let batStr = "bat";
> > 
> > let bgRegex = /[a-e]at/;
> > catStr.match(bgRegex);
> > batStr.match(bgRegex);
> > ```
> > 
> > ```js
> > let jennyStr = "Jenny8675309";
> > let myRegex = /[a-z0-9]/ig;
> > jennyStr.match(myRegex);
> > ```
> > 
> 

<hr>
<b>Tags:</b> #javascript #regex