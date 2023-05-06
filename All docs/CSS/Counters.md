---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Counters
<hr> 

> [!danger] ## Counters
> CSS counters are "variables" maintained by CSS whose values can be incremented by CSS rules
> 
> ```css
> div{
> 	counter-reset:counterExample;       crea o resetea un contador
> 	             nombre de variable
> 	             
> 	counter-increment:counterExample;   incrementa contador
> 	
> 	content: "Section bla" counter()    inserta contenido 
> 	
> 	content: counter(counterExample)    regresa valor del contador
> 					   variable
> }
> ```
> 
> > [!example]
> > ```css
> > body{
> > 	counter-reset: section
> > }
> > h2::before{
> > 	counter-increment:section;
> > 	content: "Section " counter(section) ":";
> > }
> > ```
> > ![[Pasted image 20220920204605.png]]
<hr>
<b>Tags:</b> #css 