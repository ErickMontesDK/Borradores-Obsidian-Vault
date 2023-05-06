---
banner: "https://miro.medium.com/max/1400/0*Nlx2hoPlEhSNZ1ne.png"
---
<hr> 
<i class="time"></i>
<div class="head"><h1>Grid System in Bootstrap </h1></div>

````ad-abstract
El sistema de rejilla (grid system) de Bootstrap está construido con Flexbox y permite dividir la página en hasta 12 columnas. Cada fila de la rejilla se divide en un número de columnas, y los elementos del contenido se pueden colocar dentro de esas columnas para crear diseños complejos y flexibles.

El sistema de rejilla de Bootstrap es completamente sensible (responsive), lo que significa que se adaptará automáticamente al tamaño de la pantalla o dispositivo en el que se esté visualizando el sitio web. A medida que el tamaño de la pantalla cambia, las columnas se reorganizan automáticamente para garantizar que el contenido se vea siempre bien y sea fácil de leer.

<mark>Cada row debe sumar 12</mark>
![[Pasted image 20220922194717.png]]
````

``````ad-warning
title: Bootstrap automatically handle the layout
![[Pasted image 20230314192157.png]]
```html
<div class="row">  
	<div class="col"></div>       All the same width
	<div class="col"></div>  
	<div class="col"></div>  
</div>
```
``````


``````ad-warning
title: Control the column width and how they appear on different devices
```html
<!--<div class="col + ResponsiveTag + AreaAsigment">-->

<div class="col-sm-4"></div>  
```
![[Pasted image 20230314193350.png]]
![[Pasted image 20230314193425.png]]
```html
<div class="row">  
	<div class="col-sm-4"></div>  
	<div class="col-sm-8"></div>      
</div>  
<div class="row">  
	<div class="col-sm-6"></div>  
	<div class="col-sm-6"></div>  
</div>   
```
``````

<hr>

<b>Tags:</b> #bootstrap