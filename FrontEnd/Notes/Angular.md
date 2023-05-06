<i class="time"></i>
<div class="head"><h1>Angular</h1></div>

````ad-abstract
AngularJS, es un framework de JavaScript utilizado para crear aplicaciones web de una sola página ([[Single Page Application | SPA]], por sus siglas en inglés).

AngularJS te permite crear aplicaciones web altamente interactivas y dinámicas utilizando una arquitectura MVC ([[Model-View-Controller]]) en el lado del cliente. La arquitectura MVC significa que hay una separación clara entre los datos de la aplicación (el Modelo), la presentación de la aplicación (la Vista) y la lógica de control de la aplicación (el Controlador).

En términos de cómo funciona, AngularJS es un framework que se ejecuta en el lado del cliente y se integra con la API RESTful en el lado del servidor para obtener y actualizar datos. AngularJS utiliza enlaces de datos bidireccionales para sincronizar automáticamente los cambios en la interfaz de usuario con los datos subyacentes. También cuenta con un sistema de eventos que permite a los componentes de la aplicación comunicarse entre sí.
````

``````ad-warning
title:## AngularCli
Angular CLI (Command Line Interface) es una herramienta de línea de comando para crear, construir y administrar proyectos de Angular.
Proporciona una estructura de proyecto predefinida, herramientas para generar componentes, servicios, directivas y mucho más. Además, Angular CLI también facilita la compilación y la creación de una versión optimizada de la aplicación para producción.

````ad-danger
title: Main commands
collapse:
```ad-tip
title: ng new
collapse:
Este comando se utiliza para crear un nuevo proyecto de Angular
`ng new my-project
`
```

```ad-tip
title: ng serve
collapse:
Este comando se utiliza para compilar el proyecto y lanzar un servidor de desarrollo. 
La aplicación se actualizará automáticamente cuando realices cambios en los archivos del proyecto
`ng serve
`
Esto compilará la aplicación y lanzará un servidor de desarrollo en [http://localhost:4200](http://localhost:4200/).
```

```ad-tip
title: ng generate
collapse:
Este comando se utiliza para generar componentes, servicios, directivas, pipes y otros elementos de Angular. 
Puedes especificar el nombre del elemento y otras opciones como la ubicación y el módulo en el que se va a registrar.
`ng generate component my-component`
Esto generará una nueva carpeta en el directorio "src/app" llamada "my-component" que contiene los archivos necesarios para el componente <mark style="background: #ABF7F7A6;">(archivo TypeScript, archivo HTML y archivo CSS)</mark>. Además, se registrará automáticamente el componente en el módulo <mark style="background: #ABF7F7A6;">"app.module.ts".</mark>
```

```ad-tip
title: ng build
collapse:
Este comando se utiliza para compilar el proyecto y crear una versión optimizada para producción en la carpeta "dist".
`ng build`
Esto compilará la aplicación en modo de producción y generará los archivos optimizados en la carpeta "dist". También puedes agregar otras opciones como el nombre del proyecto o la ubicación de salida.
```

```ad-tip
title: ng test
collapse:
Este comando se utiliza para ejecutar pruebas unitarias utilizando Karma y Jasmine.
`ng test`
```

```ad-tip
title: ng lint
collapse:
Este comando se utiliza para ejecutar el linter de TypeScript en el código del proyecto.
`ng lint`
```

````
``````

