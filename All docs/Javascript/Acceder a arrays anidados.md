---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Acceder a arrays anidados
<hr> 

> [!info] ## Acceder a arrays anidados
> Similar to accessing nested [[Accessing Object Properties | Objects]], array bracket notation can be chained to access nested arrays.
> 
> ~~~javascript
> const ourPets = [
>   {
>     animalType: "cat",
>     names: [
>       "Meowzer",
>       "Fluffy",
>       "Kit-Cat"
>     ]
>   },
>   {
>     animalType: "dog",
>     names: [
>       "Spot",
>       "Bowser",
>       "Frankie"
>     ]
>   }
> ];
> 
> ourPets[0].names[1]; //Fluffy
> ourPets[1].names[0]; //Spot
> ~~~
> 

^445c07

<hr>
<b>Tags:</b> #javascript #arrays