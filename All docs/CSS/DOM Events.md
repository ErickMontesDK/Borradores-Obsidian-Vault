---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# DOM Events
<hr> 

> [!abstract]
> A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.
> 
> ## Al dar clic sobre un elemento
> Asignando la función en HTML
> >onclick='Javascript function'      
> ```html
> <h1 onclick="changeText(this)">Click on this text!</h1>
> ```
> Asignando la función desde JS
> >element.onclick=js function
> ```js
> document.getElementById("myBtn").onclick = displayDate;
> ```
> <hr> 
> 
> ## Entrar o salir página
> The `onload` and `onunload` events are triggered when the user enters or leaves the page.
> >onload="Js Function" --> Cuando entras a la página
> >onunload="Js Function" --> Cuando sales de la página
> ```html
> <body onload="checkCookies()">
> ```
> <hr> 
> 
> ## Cuando el valor de un elemento es cambiado
> The `onchange` event is often used in combination with validation of input fields.
> >onchange="js function"
> ```html
> <input type="text" id="fname" onchange="upperCase()">
> ```
> <hr> 
> 
> ## Al pasar sobre un elemento
> The `onmouseover` and `onmouseout` events can be used to trigger a function when the user mouses over, or out of, an HTML element
> >onmouseover="js function"   -->  Cuando esta encima del elemento
> >onmouseout="js function"    -->  Cuando no está encima del elemento
> >onmoousedown="js function" -->  Cuando esta mantiendo el click al elemento
> >onmouseout="js function"    -->  Cuando se suela el click al elemento
> ```html
> <div onmouseover="mOver(this)" onmouseout="mOut(this)>Mouse Over Me</div>
> ```
> <hr> 
> 
> ## Cuando elemento esta seleccionado (focus)
> >onfocus="js function"  --> cuando input es seleccionadop
> ```html
> <input type="text" onfocus="myFunction(this)">
> ```
> 

<hr>
<b>Tags:</b> #javascript 