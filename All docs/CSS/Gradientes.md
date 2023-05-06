---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Gradientes
<hr> 

> [!danger] ## Gradientes
> CSS gradients let you display smooth transitions between two or more specified colors.
> 
> <mark>linear, radial y conic</mark>
> <code>background-image: linear-gradient(direction, color-stop1, color-stop2, ...);</code>
> 
> ## Linear gradient
> <div style="background-image:linear-gradient(to right,red,yellow 40%);height:50px; width:100%">linear left to right</div>
> 
> ```css
> div{
> background-image: linear-gradient(to right, red,   yellow 40%);
> 								 direction, color1, color2, color3...
> 	/*direction:to right, to left, to bottom right, 180deg...*/
> repeat option->   repeating-linear-gradient(red,yellow 10%, green20%)
> }
> ```
> <hr> 
> 
> ## Radial gradient
> <div style="background-image:radial-gradient(closest-side,  red,  yellow 20%, green 80%);height:50px; width:100%">radial</div>
> 
> ```css
> div{
> background-image: radial-gradient(closest-side,  red,  yellow 20%, green 80%)
> 								    direction   color1   color1    color3...
> 	/*direction:closest-side,farthest-side,closest-corner, farthest-corner*/
> repeat option->   repeating-radial-gradient(red, yellow 10%, green 15%);							  
> }
> ```
> <hr> 
> 
> ## Conic gradient
> <div style="background-image:conic-gradient(from 90deg,red 70deg, yellow 90deg, blue 200deg);height:50px; width:100%">conic</div>
> 
> ```css
> div{
> background-image: conic-gradient(from 90deg,red 70deg, yellow 90deg, blue 200deg);
> 								  direction, color1, color2...
> 	/*direction: at 60% 45%, from 90deg...*/ 	
> repeat option->   repeating-conic-gradient(red 10%, yellow 20%)							  
> }
> ```
<hr>
<b>Tags:</b> #css 