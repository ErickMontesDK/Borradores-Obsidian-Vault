<i class="time"></i>
<div class="head"><h1>Package manager</h1></div>

````ad-abstract
Un package manager o gestor de paquetes es un software que se encarga de administrar la instalación, actualización, configuración y eliminación de paquetes de software en un sistema operativo.

En lugar de descargar e instalar manualmente cada programa que se necesita en una computadora, el gestor de paquetes permite al usuario buscar, seleccionar e instalar fácilmente los programas deseados desde un repositorio centralizado. Además, el gestor de paquetes también se encarga de resolver las dependencias, es decir, los paquetes de software adicionales que se requieren para que el programa funcione correctamente.
````

``````ad-warning
title: NPM
collapse:
Es el gestor de paquetes predeterminado para Node.js, un entorno de tiempo de ejecución para JavaScript fuera del navegador, y se utiliza para instalar, actualizar y gestionar paquetes de software y dependencias para proyectos basados en Node.js.
````ad-tip
title: Iniciar npm
```
npm init
```
````
````ad-tip
title: Instalar dependencias
collapse:
```
npm install <package name>
```
Cuando se utiliza la opción <b>--save</b>, se indica que el paquete se va a instalar como una dependencia de producción. Esto significa que el paquete es necesario para que la aplicación funcione correctamente en producción
```
npm install --save <package name>
```
<b>--dev</b>, se indica que el paquete se va a instalar como una dependencia de desarrollo. Esto significa que el paquete es necesario solo para el desarrollo y no para la producción. Por ejemplo, una biblioteca de pruebas o una herramienta de construcción como Gulp o Webpack.
```
npm install --dev <package name>
```
````

````ad-tip
title: Actualizar dependencias
collapse:
Cuando se ejecuta el comando <b>npm update</b>, npm busca en el repositorio de paquetes las últimas versiones de los paquetes de software que están instalados en el proyecto y que cumplen con las restricciones de versión establecidas en el archivo <b>package.json</b>. Si se encuentra una versión más reciente que cumple con estas restricciones, npm actualiza automáticamente el paquete a la última versión disponible.
```
npm update <package name>
```
````

````ad-tip
title: Más comandos
collapse:
-   <b>npm audit</b>: Este comando se utiliza para analizar los paquetes instalados en el proyecto en busca de vulnerabilidades de seguridad conocidas. Al ejecutar <b>npm audit</b>, npm comprueba si hay vulnerabilidades en los paquetes y muestra una lista de las vulnerabilidades encontradas y cómo solucionarlas.
    
-   <b>npm bugs</b>: Este comando se utiliza para ver los errores conocidos reportados por otros usuarios para un paquete determinado. Al ejecutar `npm bugs <nombre del paquete>`, npm abre la página de problemas del paquete en el repositorio de GitHub donde se pueden ver los errores conocidos.
    
-   <b>npm cache</b>: El comando npm cache se utiliza para administrar la caché de npm. Con <b>npm cache clean</b>, se puede limpiar la caché de npm para liberar espacio en disco. También es posible ver la información de la caché de npm con <b>npm cache ls</b> y verificar la información de caché de un paquete en particular con <b>npm cache verifynpm cache verify</b>.
    
-   <b>npm doctor</b>: Este comando se utiliza para verificar la configuración de npm en el sistema y proporcionar soluciones a posibles problemas.
    
-   <b>npm search</b>: Con este comando se puede buscar paquetes de npm en el registro público de npm. Al ejecutar `npm search <palabra clave>`, npm devuelve una lista de paquetes que coinciden con la palabra clave especificada.
    
-   <b>npm uninstall</b>: Este comando se utiliza para desinstalar un paquete de npm de un proyecto. Al ejecutar `npm uninstall <nombre del paquete>`, npm elimina el paquete y sus dependencias del proyecto.
    
-   <b>npm view</b>: Con este comando se puede ver la información detallada de un paquete de npm, como su versión, descripción, dependencias, etc. Al ejecutar `npm view <nombre del paquete>`, npm muestra la información detallada del paquete.
````
``````

`````ad-warning
title: npx
collapse:
<b>npx</b> es un comando que se utiliza para ejecutar paquetes de npm sin necesidad de instalarlos globalmente o localmente en el proyecto. Con `npx <paquete>` se puede ejecutar el paquete deseado en el directorio actual.
````ad-example
Por ejemplo, si queremos ejecutar el script <b>eslint</b> para analizar el código de un proyecto sin tener que instalar eslint de forma global o local, podemos utilizar <b>npx</b> para ejecutarlo directamente desde el paquete de npm. El comando sería el siguiente
```
npx eslint src/
```
Este comando utiliza <b>npx</b> para ejecutar el paquete <b>eslint</b> del registro de npm y analiza todos los archivos dentro de la carpeta <b>src/</b> en busca de errores de sintaxis y otros problemas en el código. De esta manera, podemos utilizar <b>eslint</b> sin necesidad de instalarlo en el sistema o en el proyecto, y nos aseguramos de estar utilizando la última versión disponible del paquete
````
`````
`````ad-warning
title: Yarn
collapse:
Yarn es otro gestor de paquetes de JavaScript que se utiliza para descargar, instalar y gestionar paquetes de npm en proyectos de JavaScript. Fue desarrollado por Facebook para mejorar la velocidad y la estabilidad de la gestión de paquetes de npm.

Para utilizar Yarn, es necesario instalarlo en el sistema. Una vez instalado, se pueden crear proyectos de JavaScript y gestionar las dependencias utilizando la CLI de Yarn. Por ejemplo, para crear un nuevo proyecto de React, se puede ejecutar el siguiente comando:
```
yarn create react-app my-app
```
`````
