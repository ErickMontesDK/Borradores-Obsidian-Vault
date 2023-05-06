---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Api with Express
<hr> 

> [!question] ## Index
> 
>1. ### [[#^d3f271 | Instalación]]
>2. ### [[Http methods]]
>	* [[Query Params]]
>4. ### [[res.function()]]
>5. [[req.function()]]


> [!abstract]
> Express básicamente es un marco de desarrollo minimalista para Node.js que permite estructurar una aplicación de una manera ágil, nos proporciona funcionalidades como el enrutamiento, opciones para gestionar sesiones y cookies, etc.
> 

<hr>

> [!info] ## Instalación
> 
> > [!example] Console
> > Se escribe en la consola 
> > <code>npm install --save express</code>
> > [!example] En archivo
> > Se escribe dentro del archivo que contendrá el código
> > ```js
> > const express=require('express'); 
> > const app = express();
> > const port=3000;
> > 
> > //Este código inicializa el puerto. Se usa por default
> > app.listen(port,() => {
> >     console.log(`Example app listening on port ${port}`);
> > });
> > ```
> > 
> 

^d3f271

<hr>

<b>Tags:</b> #javascript 