---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Text
<hr> 

> [!danger] ## Text
> ## General, dirección y posición
> <p style="writing-mode:vertical-lr;">Ejemplo de texto</p>
> 
> ```css
> p{
> 	color:cyan;
> 	
> 	text-align:right;             right,left,centerer,justify
> 	
> 	text-align-last:left;         ajustar ultima linea
> 	
> 	direction:rtl;                Voltear orden de las letras
> 								  rtl,ltr
> 								  
> 	unicode-bidi:bidi-override;   Voltea las letras
> 								  normal,bidi-override  
> 								  
> 	vertical-align: super;        alineacion vert de un objeto con el texto
> }
> p{
> 	writing-mode:vertical-rl;  Specifies if text laids horizontally or vertically
> 							   horizontal-tb, vertical-rl, vertical-lr
> }
> ```
> <hr> 
> 
> ## Decoración
> <p style="color:cyan; text-decoration:overline green 2px double; letter-spacing:5px; text-shadow:1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;">Ejemplo de texto con atributos</p>
> 
> ```css
> p{
> 	text-decoration: overline green double 5px;
> 					   line   color  style thickness;
> 	
> 	text-decoration-line:overline;      decoration line to text;
> 	
> 	text-decoration-color:green;
> 	
> 	text-decoration-style:double;
> 	
> 	text-decoration-thickness:5px;
> 
> 	text-transform:uppercase;               Convierte todo a mayusculas
> 											o minusculas
> 											uppercas,lowercase,capitalize
> 
> 	text-shadow:1px 1px   2px  black, 0 0 25px blue, 0 0 5px darkblue;
> 			   xHor Yvert blur color    more shadows
> }
> 
> ```
> <hr> 
> 
> ## Espaciados
> <p style="text-indent:15px; letter-spacing:-1px;">Ejemplo de texto con atributos.Ejemplo de texto con atributos.Ejemplo de texto con atributos.Ejemplo de texto con atributos.Ejemplo de texto con atributos.Ejemplo de texto con atributos</p>
> 
> ```css
> p{
> 	text-indent:50px;              Sangría
> 	
> 	letter-spacing: -2px;
> 	
> 	line-height: 1.8;
> 	
> 	word-spacing:5px;
> 	
> 	white-space:wrap or nowrap.     El espacio en blanco salta renglón o sigue
> }
> ```
> <hr> 
> 
<hr>
<b>Tags:</b> #css 