---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Animations
<hr> 

> [!danger] ## Animations
> Son dos partes, los atributos de animación y la definición de cada keyframe
> ```css
> div{
> 	animation: EXAMPLE   3seg      ease-in      3seg  infinite   reverse;
> 			   name    duration timing-function delay iteration direction
> 	
> 	animation-name:EXAMPLE
> 	
> 	animation-duration:
> 	
> 	animation-delay:2s;                   delay for the start
> 	
> 	animation-iteration-count:infinite;   number of repetitions
> 	
> 	animation-direction:reverse;          direction of animation
> 	
> 	animation-timing-function:ease-in;    speed curve
> 	
> 	animation-fill-mode:backwards;        style when the animation 
> 										  isn't playing
> }
> @keyframes EXAMPLE{
> 	from {attribute:value;}
> 	to {attribute:value;}
> 
> 	0% {attribute:value;}
> 	50% {attribute:value;}
> 	100% {attribute:value;}
> }
> ```
<hr>
<b>Tags:</b> #css 