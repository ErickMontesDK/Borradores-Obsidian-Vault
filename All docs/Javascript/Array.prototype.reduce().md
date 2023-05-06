---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Array.prototype.reduce()
<hr> 

> [!abstract]
> El método `**reduce()**` ejecuta una función **reductora** sobre cada elemento de un array, devolviendo como resultado un único valor total a la suma de todo.
> ```js
> array.reduce(function(previousValue, currentValue, currentIndex, array), initialValue)
> ```
> * previousValue es el valor inicial, anterior o la sumatoria que ya lleva
> * currentValue es el valor a agregar          
> * currentIndex es el index del valor a agregar
> * initialValue es un valor con el que iniciar la cuenta
> * currentIndex,arr e initialValue son opcionales
> 
> > [!example]
> > ```js
> > const array = [1, 2, 3, 4];
> > const initialValue = 10; //Valor inicial de 10
> > const sumWithInitial = array.reduce(
> >   (previousValue, currentValue) => previousValue + currentValue,
> >   initialValue
> > );
> > console.log(sumWithInitial);
> > ```
> > 
> > > [!bug] Console
> > > <code>20</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript  #functions #arrays  
