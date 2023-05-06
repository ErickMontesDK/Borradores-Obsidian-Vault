<i class="time"></i>
<div class="head"><h1>Web Components</h1></div>

`````ad-info
title: Index
collapse:
```toc
```
`````


Un Web Component es una tecnología web que permite crear componentes web reutilizables y personalizados utilizando HTML, CSS y JavaScript.

<b>Se componen de 3 tecnologías principales:</b>
### Custom Elements
Permiten definir elementos HTML personalizados y su comportamiento, que luego se pueden utilizar en la interfaz de usuario según sea necesario. Hay dos tipos de  Custom Elements:
+ || Elementos personalizados autónomos: Estos elementos no heredan de ningún elemento HTML estándar. Es decir, son completamente nuevos y no tienen ninguna relación con los elementos HTML predefinidos. Pueden tener cualquier nombre que comience con una letra minúscula y se compone de dos o más palabras separadas por un guión (-). Por ejemplo, < mi-elemento-personalizado >.
+ || Elementos HTML personalizados: Estos elementos se basan en los elementos HTML predefinidos, como ``<button>``, ``<input>``, `<select>`, etc. 
> Estos elementos personalizados heredan las propiedades y comportamientos de los elementos HTML predefinidos, pero pueden extenderlos y personalizarlos según sea necesario. Se pueden utilizar para agregar funcionalidad adicional o para cambiar la apariencia del elemento original. Los nombres de estos elementos personalizados deben incluir un guión (-) y no pueden ser iguales a los nombres de los elementos HTML predefinidos. Por ejemplo, `< my-button >`

#### Creación
+ | Se define la clase <b>MiComponente</b> que extiende <b>HTMLElement</b>. 
+ || En el constructor de la clase, se obtiene el contenido del <b>template</b> HTML y se crea un Shadow DOM utilizando el método <b>attachShadow</b>. 
+ | Luego, se clona el contenido del <b>template</b> y se lo agrega al Shadow Root. 
+ || Finalmente, se registra el Custom Element utilizando el método <b>customElements.define</b>. 
>El primer argumento de customElements.define es el nombre del elemento personalizado que se va a crear (en este caso, <i>mi-componente</i>). 
>El segundo argumento es la clase que se creó anteriormente.

```html TI:"Creacion Custom Element"
<!-- Crear el Custom Element --> 
<script> 
class MiComponente extends HTMLElement { 
	constructor() { 
		super(); 
		const template = document.getElementById('mi-componente').content; 
		const shadowRoot = this.attachShadow({mode: 'open'}); 
		shadowRoot.appendChild(template.cloneNode(true)); 
	} 
} 

customElements.define('mi-componente', MiComponente); </script>
```
+ | Se utiliza el componente personalizado simplemente utilizando la etiqueta <b>< mi-componente ></b> en el HTML

```html TI:"Uso Custom Element" HL:"3"
<!-- Utilizar el componente --> 
<h1>Mi página web</h1> 
<mi-componente></mi-componente>
```
<hr>

### [[Shadow DOM]]
Permite encapsular estilos y comportamiento de un componente en un ámbito separado del resto de la página web

<hr>

### HTML Template
Usando el elemento <b>template</b> se utiliza para contener código HTML que no se renderiza de manera inmediata cuando se carga una página, sino que se instancia posteriormente durante la ejecución del código JavaScript. Es decir, el contenido del elemento `<template>` no se mostrará en la página hasta que se cree una instancia del mismo

```html TI:"Crear un template para el componente" HL:"8" "FOLD"
<!--Aquí se crea un `<template>` HTML que define la estructura y los estilos de nuestro componente personalizado. 

En este ejemplo, estamos creando un botón personalizado con un fondo rojo y texto blanco.-->

<template id="mi-componente"> 

	/* Estilos personalizados para el componente */
	<style>  
		button { 
			background-color: red; 
			color: white; 
			padding: 10px 20px; 
			border: none; 
			border-radius: 4px; 
			cursor: pointer; 
			} 
	</style> 
	
	<button>¡Haz clic aquí!</button> 
</template>
```
<hr>




