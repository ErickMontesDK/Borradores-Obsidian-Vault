---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Match Characters that Occur Zero or More Times Consecutively *
<hr> 

> [!danger] ## Match Characters that Occur Zero or More Times Consecutively *
> Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.
> 
> You can use the `*` character to check if that is the case. 
> Remember, the character or pattern has to be present consecutively.
> 
> > [!example]
> > 
> > ```js
> > let soccerWord = "gooooooooal!";
> > let gPhrase = "gut feeling";
> > let goRegex = /go*/;
> > 
> > soccerWord.match(goRegex);
> > gPhrase.match(goRegex);
> > ```
> > 
> 

<hr>
<b>Tags:</b> #javascript #regex