---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Lectura de Json
<hr> 

> [!abstract]
> Se puede transformar un documento Json en un array que pueda ser usado por javascript
> 
> ```js
> //Se importa el módulo fs
> const fs=require("fs");
> 
> //Se llama a la funcion readFileSync perteneciente al modulo fs,
> //mandando la direccion el archivo json (empezando desde la raíz)
> //Esto manda la info como si fuera texto
> const rawdata=fs.readFilseSync(pathfile);
> 
> //se usa la función JSON.parse() para transformar el texto a JSON
> const utilArray=JSON.parse(rawdata);
> 
> 
> ```
> 
> > [!example]
> > 
> > ```js
> > const fs = require("fs");
> > 
> > class Reader{
> >     static readJsonFile(pathFile){
> >         const rawdata = fs.readFileSync(pathFile);
> >         const explorers = JSON.parse(rawdata); 
> >         return explorers;
> >     }
> > }
> > 
> > module.exports = Reader
> > ```
> > 
> > 
> 

<hr>
<b>Tags:</b> #javascript 