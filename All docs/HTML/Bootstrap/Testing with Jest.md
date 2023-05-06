---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Testing with Jest
<hr> 

> [!question] ## Index
> 
>1. ### [[#^69baaf | Como instalar Jest]]
>2. ### [[Formato de una prueba]]
>	* [[expect(result).function()]]
>3. ### [[Automatizar pruebas en Github]]
>

<hr> 

> [!abstract]
> El _testing_ garantiza que el código cumple con ciertas expectativas y sigue el estándar que queremos mantener. Realizar pruebas a nuestro código, es la mejor estrategia que podemos implementar para reducir al mínimo la posibilidad de que haya errores en producción que quizás rompan tu _app_ o que disminuyan la calidad del producto.
> 
> Jest is a delightful JavaScript Testing
> 

<hr>

<hr> 

> [!info] ## Como instalar Jest
> 
> > [!example] En consola
> > Escribir <code>npm install --save-dev jest</code>
> > <i>--save</i> indica que se agrega a la lista de dependencias usadas
> > <i>-dev</i> indica que solo se usa cuando es desarrollador. No es necesario para su funcionamiento normal 
> 
> > [!example] En package-lock.json
> > Escribir la dirección del módulo 
> > <code>"test": "node --experimental-vm-modules ./node_modules/jest/bin/jest.js"</code>
> > 
> 

^69baaf

<hr>

<b>Tags:</b> #javascript 