---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Use Capture Groups to Search and Replace .replace()
<hr> 

> [!danger] ## Use Capture Groups to Search and Replace .replace()
> You can search and replace text in a string using `.replace()` on a string. The inputs for `.replace()` is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.
> 
> > [!example]
> > ````js
> > let wrongText = "The sky is silver.";
> > let silverRegex = /silver/;
> > let newText=wrongText.replace(silverRegex, "blue");
> > console.log(newText);
> > ````
> > > [!bug]
> > > <code>'The sky is blue.'</code>
> 
> * You can also access capture groups in the replacement string with dollar signs (`---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Use Capture Groups to Search and Replace .replace()
<hr> 

).
> 
> > [!example]
> > ````js
> > "let newText=Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
> > console.log(newText);
> > ````
> > > [!bug]
> > > <code>'Camp Code'</code>
> 

<hr>
<b>Tags:</b> #javascript #regex