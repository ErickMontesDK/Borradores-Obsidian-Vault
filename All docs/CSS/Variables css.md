---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Variables
<hr> 

> [!danger] ## Variables
> The `var()` function is used to insert the value of a CSS variable.
> 
> * Definir variable           
> >--variableName:value;       
> 
> * invocar variable
> >var(--variableName, value(optional))
> 
> ```css
> :root {
> 	--blue: #1e90ff;  
> 	--white: #ffffff;
> }  
>   
> body { background-color: var(--blue);}  
>   
> h2 { border-bottom: 2px solid var(--blue); }
> ```
<hr>
<b>Tags:</b> #css 