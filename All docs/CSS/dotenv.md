---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# dotenv
<hr> 

> [!abstract]
> dotenv reads key-value pairs from a .env file and can set them as environment variables.
> 
> > [!example] Instalación
> > >Escribir en consola:
> > >npm i dotenv
> > 
> > >Crear archivo .env en la raiz con la variable a usar
> > ```js
> > MONGODB_URL=mongodb+srv://xxxxxxxxxxxx
> > ```
> > 
> > >Agregar dependencia en el archivo que requiera la variable, y usar la variable con <mark>process.env.VARIABLE</mark>
> > ```js
> > require("dotenv").config();
> > 
> > mongoose.connect(process.env.MONGODB_URL)
> > ```
> > 
> 

<hr>
<b>Tags:</b> #javascript 