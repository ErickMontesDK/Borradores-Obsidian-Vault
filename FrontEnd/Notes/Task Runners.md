<i class="time"></i>
<div class="head"><h1>Task Runners</h1></div>

````ad-abstract
Los task runners son herramientas de automatización que permiten a los desarrolladores automatizar tareas repetitivas de construcción, pruebas, despliegue, entre otras, en un proyecto de software.

En términos simples, un task runner es una herramienta que ejecuta scripts predefinidos en un proyecto de software. Los scripts pueden ser escritos en lenguajes como JavaScript o TypeScript, y pueden realizar tareas como la compilación de código, la ejecución de pruebas, la generación de documentación, la minificación de archivos, la optimización de imágenes, entre otras.

* <mark style="background: #ABF7F7A6;">Trabajan en fragmentos pequeños de CSS y JS</mark> para mejorar la eficiencia y la organización de su código. 
* Para asegurarse de que el sitio web esté optimizado para la producción, también <mark style="background: #ABF7F7A6;">comprimen su CSS y minimizan su JS</mark>. Esto ayuda a reducir el tamaño de los archivos y a mejorar la velocidad de carga del sitio web.
* <mark style="background: #ABF7F7A6;">Optimizan las imágenes del sitio web para reducir su tamaño sin afectar su calidad</mark>. Esto se hace mediante el uso de técnicas de compresión y reducción de tamaño que mantienen la calidad visual de las imágenes, pero reducen su tamaño de archivo.
````

`````ad-warning
title: npm script
collapse:
Herramienta que sirve para <mark style="background: #FF5582A6;">automatizar tareas repetitivas en el desarrollo web</mark>. Es una característica de NPM (Node Package Manager) que permite definir comandos personalizados en un archivo llamado package.json en la raíz de un proyecto.

Estos comandos personalizados se ejecutan desde la línea de comandos y pueden realizar diversas tareas, como compilar archivos CSS o JavaScript, iniciar un servidor local de desarrollo, ejecutar pruebas automatizadas, entre otras.

Los scripts de NPM <mark style="background: #FF5582A6;">se definen en la sección "scripts" del archivo package.json y se ejecutan mediante el comando "npm run" seguido del nombre del script.</mark>

````ad-example
title: En package.json
```json
"scripts": {
   "build": "uglifyjs src/app.js -o dist/app.min.js"
}
```
````
````ad-bug
title: Console
```bash
npm run build
```
````
`````
``````ad-warning
title: pre & post-scripts
Funciones adicionales que podemos agregar a nuestros scripts de NPM para ejecutar tareas antes o después de la ejecución del script principal.

Los pre-scripts se ejecutan antes del script principal y se definen agregando la palabra "pre-" antes del nombre del script principal. 

Los post-scripts se ejecutan después del script principal y se definen agregando la palabra "post-" antes del nombre del script principal.
```json
"scripts": {
   "prebuild": "rm -rf dist",
   "build": "webpack",
   "postbuild": "echo 'Build complete!'"
}
```
``````
