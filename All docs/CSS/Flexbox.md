---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

<i class="time"></i>
<div class="head"><h1>Flexbox</h1></div>

````ad-abstract
Flexbox es un sistema de diseño de cajas flexible, que <mark style="background: #ABF7F7A6;">se utiliza para distribuir y alinear elementos HTML de manera dinámica dentro de un contenedor</mark>. 

Flexbox permite crear diseños flexibles y responsivos para la interfaz de usuario de una página web, sin la necesidad de utilizar técnicas complejas de posicionamiento CSS

> <div style="background:purple;height:300px;width:150px;display:flex;flex-direction:column;justify-content:space-around;align-items:center;"> 
> 	<div style="background:cyan;height:70px;width:100px;""> </div>
> 	<div style="background:cyan;height:70px;width:100px;""> </div>
> 	<div style="background:cyan;height:70px;width:100px;""> </div>
> </div>
````


`````ad-info
title: ## Flexbox Options

```css
div{
display: flex;

<!--combina direction y wrap-->
flex:flow:  direction wrap;
			column    no-wrap;

flex-direction: column;      
				column, row, column-reverse, row-reverse
flex-wrap: wrap;
		   wrap, no-wrap, wrap-reverse

<!--align items in the principal axe-->
justify-content: center;     
				 flex-start, flex-end, center, 
				 space-between, space-around, space-evenly
				 
<!--align each item in the secundary axe-->
align-items: left;           
			 same options that justify-content, but also 
			 stretch and baseline
			 
<!--align the container the flex lines-->
align-content: center           
			   same options than justify-content
}


div > img {
	<!--align just one item-->
	align-self: center           
				same options than align-items
}
```
````ad-note
title:### Gap
collapse: true
![[Pasted image 20230311230748.png]]
```css
div { 
	display: flex

	row-gap: 50px 
	column-gap: 50px

	<!--o bien se usan row y column a la vez con-->
	gap: 50px
}
```
````
````ad-note
title:### Tamaño
collapse: true
![[Pasted image 20230311232605.png]]
```css
div > img {
	
<!--especifica la proporción del espacio disponible que debe ser ocupado por el elemento-->
flex-grow: 3;           
		   Ocupa 3 espacios. 3 veces más grande
		
<!--establece la capacidad de un elemento flexible para reducir su tamaño si no hay suficiente espacio disponible en el contenedor-->
flex-shrink: 2;           
		   Ocupa la mitad de espacio. 2 veces más pequeño

<!--establece el tamaño inicial de un elemento flexible antes de que se aplique cualquier distribución adicional-->
flex-basis: 100px;           
		   Ocupa 100px
		   
<!--Combina las tres opciones anteriores-->
flex: 3 2 auto;
}
```
````
`````

<hr>
<b>Tags:</b> #css 