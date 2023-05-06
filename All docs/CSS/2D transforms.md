---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# 2D transforms
<hr> 

> [!danger] ## 2D transforms
> CSS transforms allow you to move, rotate, scale, and skew elements.
> 
> <div style="background-color:blue;height:100px;width:100px;transform:rotateY(45deg);">Ejemplo tranform 3d</div>
> 
> ```css
> div{
> 
> transform:  matrix(scaleX skewY  skewX  scaleY  translateX  translateY)
> 
> transform:  translate(50px,    100px);
> 					 xlength  ylength
> 					 
> 			rotate(20deg)            --> rotateX() and rotateY()
> 			
> 			scale(  2,        3 )    -->  scaleX() and scaleY()
> 				  N*width  N*height
> 				  
> 			skew(20deg, 10deg)       -->skewX() and skewY()
> 				 Xdeg    Ydeg        rota el elemento respecto a sus ejes
> 
> 
> transform-origin: 20% 40%;  change the position of transformed elements.
> 
> }
> ```
<hr>
<b>Tags:</b> #css 