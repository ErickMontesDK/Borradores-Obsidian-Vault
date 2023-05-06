---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Declaración y tipos de variables
<hr> 

## Formas de declarar una variable
Existen 3 formas de declarar una variable, con sus ventajas y desventajas


> [!danger] Var
> >Declare a variable by putting the keyword <mark>var</mark> in front of it  
> 
> > [!example]
> > ```js
> > var=ourName;
> > ```
> 
> >You can store a value in a variable with the assignment operator (`=`). 
> 
> > [!example]
> > ```js
> > a=7;
> > ```
> 
> >You can also declare a string variable like this: 
> 
> > [!example]
> > ```js
> > var myLastName="Montes";
> > ```


> [!danger] Let
> Unlike `var`, when you use `let`, a variable with the same name can only be declared once. 
> > [!example]
> > ```js
> > let catName="Oliver";
> > let catName="Cheeto";  //Aquí marca error porque no se puede declara nuevamente
> > ```

> [!danger] Const
> Variables declared using `const` are <mark>read-only</mark>. They are a constant value, which means that once a variable is assigned with `const`, <mark>it cannot be reassigned</mark>:
> > [!example]
> > ```js
> > const FAV_PET = "Cats";
> > FAV_PET = "Dogs"; //Marca error porque no se puede reasignar valor
> > ```

^8e9678

<hr>
<b>Tags:</b> #javascript #variables