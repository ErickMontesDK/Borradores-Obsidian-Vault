---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Updating Object Properties
<hr> 

> [!abstract]
> 
> You can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.
> > [!example]
> > ```js
> > const myDog = {
> > 	"name": "Coder",
> > 	"legs": 4,
> > 	"tails": 1,
> > 	"friends": ["freeCodeCamp Campers"]
> > };
> > //Mismo resultado con ambas opciones
> > myDog["name"]="Happy Coder";
> > myDog.name="Happy Coder";
> > ```
> You can assign a new variable value when [[Destructuring assignment| extracting values.]]
> > [!example]
> > ```js
> > const { name: "Sirius", age: 4 } = myDog;
> ```

^507ecc


<hr>
<b>Tags:</b> #javascript #objects 