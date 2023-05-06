---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Box shadow
<hr> 

> [!danger] ## Box shadow
> It is used to apply one or more shadows to an element.
> <hr> 
> 
> ## General
> <div style="width: 300px;height: 100px;padding: 15px;background-color: coral;box-shadow: 10px 10px 5px 12px lightblue;">A div element</div>
> <br> <br>
> 
> ```css
> div{
> 	box-shadow: 10px      10px    5px    12px   blue    inset;
> 				xShadow  yShadow  blur  spread  color  inset/outset
> 													   interior/exterior
> }
> ```
> <hr>
> 
> ## Multiples sombras
> <div style="width: 300px;height: 100px;padding: 15px;background-color: coral;box-shadow: 5px 5px blue, 10px 10px red, 15px 15px green;">A div element</div>
> 
> ```css
> div{
> 	box-shadow: 5px 5px blue, 10px 10px red, 15px 15px green;
> }
> ```
<hr>
<b>Tags:</b> #css 