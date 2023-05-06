<i class="time">martes 22-11-2022
</i>
<div class="head"><h1>Construye y corre un contenedor con un Dockerfile</h1></div>

^e00ee8

````ad-info
title:## Crear el contenedor
Se creó primero una app sencilla con Node.js usando el modulo de <b>Express</b>
<code> npm init
npm install -save express
</code>

En la raíz se creó un archivo con el servidor <b>main.js</b> y se configuró la ruta en el package.json para que se ejecutara este archivo al escribir en consola `npm start`
```js
'use strict';
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
```
La app de Node.js ya está terminada
````

````ad-info
title:## Creando Dockerfile
En la misma carpeta de la app se creó el archivo Dockerfile, en ella se especificó las caracteristicas del contenedor
```dockerfile
#Especifica la imagen a usar como base, Node 16
FROM node:16  
#Especifica la carpeta de trabajo dentro del contenedor
WORKDIR /usr/src/app 
#Copia los ficheros de origen en destino. Copia solo el package.json y package-lock.json
COPY package*.json ./
#Ejecuta el comando en el momento de la creación de la imagen
RUN npm install
#Para agrupar el código adentro de la imagen de Docker
COPY . .
#Informamos que el puerto que usa es el 8080
EXPOSE 8080
#Ejecuta el comando al ejecutar el contenedor. Inicia el archivo main.js
CMD [ "node", "main.js" ]
```
<br>

## .dockerignore

Se crea el .dockerignore, que evita que ciertos archivos especificados se copien en la imagen de Docker
```.dockerignore
node_modules 
npm-debug.log
```
````

````ad-info
title:## Construir y ejecutar la imagen
En el CMD en la ubicación donde se encuentra el <b>Dockerfile</b> se ejecuta el comando
`docker build . -t nombreDeImagen`
Podemos ver que la imagen ya esta instalada con: 
`docker images`
![[Pasted image 20221122191643.png]]
Para ejecutar la imagen, se escribe el comando
`docker run -p 49160:8080 -d nombreDeImagen`
Podemos ver el contenedor activado con el comando`docker ps` y tambien podemos ver el mensaje asignado en el localhost:49160
![[Pasted image 20221122185911.png]]
![[Pasted image 20221122190405.png]]
Con la función <b>curl</b>, redirigimos la respuesta del localhost al cmd, pudiendo ver la respuesta del servidor en consola
![[Pasted image 20221122190619.png]]

Con docker kill cerramos el contenedor 
`docker kill CONTAINER_ID`
````
