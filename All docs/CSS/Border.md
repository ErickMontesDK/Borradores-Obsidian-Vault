---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Border
<hr> 

``````ad-danger
title:Border
## General
<br> 
<div style="border-width:5px 10px 2px 15px;border-color: red green blue yellow;border-style:dotted solid double dashed;border-radius: 5px 7px 8px 10px;;">Ejemplo</div>

```css
div{
	border: 5px  solid  red; 
 	       width style color
	
	border-width:5px  3px   1px   7px;
	             top right bottom left
	             
	border-color: red green  blue yellow;
				  top right bottom left
				  
	border-style:dotted solid double dashed;         estilo de borde
				   top  right bottom  left

	border-radius: 5px       7px        8px          10px;
				   top/left  top/right  bottom/right bottom/left
}
```
<hr> 

## Border image
![[Pasted image 20220921180544.png]]

```css
div{
	border-image: url(image.png) 33%   10px  5px    stretch;
				  source         slice width outset repeat
				 
	border-image-source: url(image.png);
	
	border-image-slice:33%        Selecciona donde hacer el corte para esquinas 
							      Repite el medio, lo no seleccionado
							      
	border-image-width:10px;      Tamaño de borde
	
	border-image-outset:10px;     Tamaño lejos del border-box
	
	border-image-repeat:round;    Como ajustar la imagen
								  stretch,repeat,round,space
}
```
<hr>
<b>Tags:</b> #css 