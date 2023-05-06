---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# 3D transforms
<hr> 

> [!danger] ## 3D transforms
> CSS also supports 3D transformations.
> 
> <div style="background-color:blue;height:100px;width:100px;transform:rotateX(30deg) rotateZ(30deg) rotateY(30deg)">Ejemplo tranform 3d</div>
> 
> ```css
> div{
> 
> transform:  matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
> 
> transform:  translate3d(50px,    100px,  10px);
> 					   xlength  ylength  zlength
> 					 
> 			rotate3d(20deg 15deg 5deg)   --> rotateX() rotateY() & rotateZ()
> 			
> 			scale3d(  2,       3,      1.5 ) -->  scaleX() scaleY() & scaleZ()
> 				   N*width  N*height  N*deep
> 				   
> perspective:100px;              how far is the user from. More distortion  
> 
> perspective-origin:right top;   from which position the user is looking
> 								right, bottom, 50%, 40px...
> 
> transform-style:preserve-3d;    how 3d nested elements are rendered
> 								flat, preserve-3d
> 
> transform-origin: 20% 40%; 15%  change the position of transformed elements.
> 
> backface-visibilty: hidden;     whether or not the back face of an element 
> 								should be visible when facing the user
> 								visible, hidden
> 
> }
> ```
<hr>
<b>Tags:</b> #css 