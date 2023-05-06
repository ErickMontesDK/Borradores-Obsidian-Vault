---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

<i class="time"></i>
<div class="head"><h1>Grid</h1></div>

````ad-abstract
Propiedad que se utiliza en contenedores de diseño para crear una cuadrícula de filas y columnas en las que se colocan los elementos. La propiedad <b>grid</b> permite crear diseños complejos de manera flexible y eficiente, permitiendo controlar el tamaño, la posición y el orden de los elementos.
```css
.container {
  display: grid;
  grid-template-rows: repeat(3, 1fr); /* 3 filas con altura fraccionada */
  grid-template-columns: repeat(3, 1fr); /* 3 columnas con ancho fraccionado */
}

```
> <div class="grid-container" style="display: grid;grid-template-columns: auto auto auto;background-color: #2196F3;padding: 10px;">
>   <div class="grid-item" style="background-color: rgba(255, 255, 255, 0.8);
>   border: 1px solid rgba(0, 0, 0, 0.8);padding: 20px;font-size: 30px;text-align: center;">1</div>
>   <div class="grid-item" style="background-color: rgba(255, 255, 255, 0.8);
>   border: 1px solid rgba(0, 0, 0, 0.8);padding: 20px;font-size: 30px;text-align: center;">2</div>
>   <div class="grid-item" style="background-color: rgba(255, 255, 255, 0.8);
>   border: 1px solid rgba(0, 0, 0, 0.8);padding: 20px;font-size: 30px;text-align: center;">3</div>  
>   <div class="grid-item" style="background-color: rgba(255, 255, 255, 0.8);
>   border: 1px solid rgba(0, 0, 0, 0.8);padding: 20px;font-size: 30px;text-align: center;">4</div>
>   <div class="grid-item" style="background-color: rgba(255, 255, 255, 0.8);
>   border: 1px solid rgba(0, 0, 0, 0.8);padding: 20px;font-size: 30px;text-align: center;">5</div>
>   <div class="grid-item" style="background-color: rgba(255, 255, 255, 0.8);
>   border: 1px solid rgba(0, 0, 0, 0.8);padding: 20px;font-size: 30px;text-align: center;">6</div>  
>   <div class="grid-item" style="background-color: rgba(255, 255, 255, 0.8);
>   border: 1px solid rgba(0, 0, 0, 0.8);padding: 20px;font-size: 30px;text-align: center;">7</div>
>   <div class="grid-item" style="background-color: rgba(255, 255, 255, 0.8);
>   border: 1px solid rgba(0, 0, 0, 0.8);padding: 20px;font-size: 30px;text-align: center;">8</div>
>   <div class="grid-item" style="background-color: rgba(255, 255, 255, 0.8);
>   border: 1px solid rgba(0, 0, 0, 0.8);padding: 20px;font-size: 30px;text-align: center;">9</div>  
> </div>
````

``````ad-info
title: Grid Options
`````ad-tip
title: Definir distribución
collapse:
![[Pasted image 20230311234430.png]]
```css
div{
/*Establece cantidad de columnas y su ancho*/
grid-template-columns: 40px 50px auto 50px 40px;

/*Establece cantidad de filas y su tamaño*/
grid-template-rows: 25% 100px auto ;
}

/*Permite definir áreas específicas de la rejilla mediante un nombre*/
grid-template-areas: 
	"header header header header"
	"main main . sidebar"
	"footer footer footer footer";
}

item-a { grid-area: header }

item-b { grid-area: main }

item-c { grid-area: sidebar }

item-d { grid-area: footer }
```
`````
`````ad-tip
title: Gaps
collapse:
Specifies the size of the grid lines
![[Pasted image 20230313001209.png]]
```css
div{
	/*espacio entre filas*/
	grid-row-gap: 15px;

	/*espacio entre columnas*/
	grid-column-gap: 10px;

	/*espacio entre filas y columnas*/
	gap: 15px 10px;
}
```
`````
`````ad-tip
title: Definir espacio de cada elemento individual
collapse:
Se utilizan para definir la ubicación de elementos HTML dentro de una rejilla (grid)

<div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 10px; grid-template-rows: repeat(3, 100px);">
  <div style="grid-column-start: 1; grid-column-end: 3; grid-row-start: 1; grid-row-end: 2; background-color: #ff4d4d;">Item 1</div>
  <div style="grid-column-start: 2; grid-column-end: 4; grid-row-start: 2; grid-row-end: 4; background-color: #ffb84d;">Item 2</div>
  <div style="grid-column-start: 1; grid-column-end: 2; grid-row-start: 2; grid-row-end: 3; background-color: #4d79ff;">Item 3</div>
  <div style="grid-column-start: 3; grid-column-end: 4; grid-row-start: 3; grid-row-end: 4; background-color: #4dff4d;">Item 4</div>
</div>
```css
/*Teniendo un contenedor*/
.container{
	display: grid; 
	grid-template-columns: repeat(3, 1fr); 
	grid-gap: 10px; 
	grid-template-rows: repeat(3, 100px);
}
```
```css
/*Podemos asignar el espacio de cada elemento*/
.item-1 { 
	/*Empieza en columna 1*/
	grid-column-start: 1;
	/*Termina en columna 3*/
	grid-column-end: 3; 
	/*Empieza en fila 1*/
	grid-row-start: 1; 
	/*Termina en fila 2*/
	grid-row-end: 2; 
	background-color: #ff4d4d; 
} 

/*Se puede simplificar de la siguiente forma*/
.item-1 { 
	grid-area: 1 1 2 3;
		row-start column-start row-end column-end;
} 
```
`````
`````ad-tip
title: Subgrip
collapse:
Permite hacer que una rejilla secundaria use las líneas definidas en una rejilla primaria como sus propias líneas. En otras palabras, <b>subgrid</b> permite que una rejilla anidada use las dimensiones de la rejilla principal
```css
.nested-grid { 
display: grid; 
grid-template-columns: subgrid; 
grid-template-rows: subgrid; }
```
<div class="container" style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 100px);">
  <div style="grid-column-start: 1; grid-column-end: 3; grid-row-start: 1; grid-row-end: 2; background-color: #ff4d4d;">Item 1</div>
  <div class="nested-grid" style="display: grid; grid-template-columns: subgrid; grid-template-rows: subgrid;">
    <div style="background-color: #ffb84d;">Item 2A</div>
    <div style="background-color: #4d79ff;">Item 2B</div>
  </div>
  <div style="grid-column-start: 3; grid-column-end: 4; grid-row-start: 2; grid-row-end: 4; background-color: #4dff4d;">Item 3</div>
</div>

````ad-example
collapse:
Teniendo un codigo html con un elemento nested

```html
<div class="container">
  <div class="item-1">Item 1</div>
  <div class="nested-grid">
    <div class="item-2A">Item 2A</div>
    <div class="item-2B">Item 2B</div>
  </div>
  <div class="item-3">Item 3</div>
</div>
```
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: #ff4d4d;
}

/*Definimos que vamos a usar las líneas de la rejilla principal para definir las líneas de la rejilla anidada */
.nested-grid {
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.item-2A {
  background-color: #ffb84d;
}

.item-2B {
  background-color: #4d79ff;
}

.item-3 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  background-color: #4dff4d;
}
```
````
`````
``````

<hr>
<b>Tags:</b> #css 