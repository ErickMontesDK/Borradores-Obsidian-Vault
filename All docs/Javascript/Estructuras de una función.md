---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Estructuras de una función
<hr> 

> [!important] Distintas formas de escribir una función
> > [!danger] ## _Anonima_
> > Sin especificar la función con una variable
> > > [!example]
> > > ```js
> > > function nombre_funcion(parametro) 
> > > {
> > >   code block;
> > > }
> > > 
> > > nombre_de_funcion(parametro); //Llamar funcíon
> > ```
> 
> > [!danger] ## _Con nombre_
> > Proporcionar un nombre (con variable) permite que la función se refiera a sí misma y facilita la identificación de la función en el seguimiento de la pila de un depurador
> > > [!example]
> > > ```js
> > > const nombre = function(parametro) 
> > > { 
> > >   code block
> > > }
> > > 
> > > var x = nombre(parametro) // x tiene el resultado de la función
> > ```
> 
> > [!danger] ## _Funciones Flecha_
> > Alternativa compacta a una expresión de función tradicional, pero es limitada. 
> > We don't need to name these functions because we do not reuse them anywhere else.
> > > [!example]
> > > ```js
> > > const nombre=(parametros) => {
> > >   code block
> > > }
> > > 
> > > nombre(parametros); //Llamar a la función
> > ```
> 

^247dce

<hr>
<b>Tags:</b> #javascript #functions