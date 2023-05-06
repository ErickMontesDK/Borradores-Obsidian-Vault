---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Specify How Many Repetitions Should Be for a Character { , }
<hr> 

> [!danger] ## Specify How Many Repetitions Should Be for a Character { , }
> You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets (`{` and `}`). 
> You put two numbers between the curly brackets - for the lower and upper number of patterns.
> 
> > [!example]
> > 
> > ```js
> > let A4 = "aaaah";
> > let A2 = "aah";
> > let multipleA = /a{3,5}h/;
> > 
> > multipleA.test(A4); //true
> > multipleA.test(A2); //false
> > ```
> 
> * Sometimes you only want to specify the lower number of patterns with no upper limit.
> 
> > [!example]
> > 
> > ```js
> > let haStr = "Hazzzzah";
> > let haRegex = /Haz{4,}ah/; // 4 or more "a"
> > let result = haRegex.test(haStr);
> > ```
> 
> * To specify a certain number of patterns, just have that one number between the curly brackets.
> 
> > [!example]
> > 
> > ```js
> > let timStr = "Timmmmber";
> > let timRegex = /Tim{4}ber/; //just 4 "m"
> > let result = timRegex.test(timStr);
> > ```
> 

<hr>
<b>Tags:</b> #javascript #regex