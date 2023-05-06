---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# DOM Event Listener
<hr> 

> [!danger]
> Los Event pueden ser asignados desde JS, donde se asigna el evento y a que elemento afecta
> 
> ```js
> element.addEventListener('event',jsfunction,useCapture);
> ```
> donde: 
> >* event es el evento sobre el que se activará la función, ex:clic,mouseover,focus, etc [HTML DOM Event Object (w3schools.com)](https://www.w3schools.com/jsref/dom_obj_event.asp)
> >* jsfunction la funcion que se va a ejecutar: function(){ myFunction(p1, p2);,myfunction, etc;
> >* useCapture:establecer el orden en que ejecutará las funciones
> >-----si useCapture:true, do outer to inner function
> >-----si useCapture:false, do inner to outer function (default)
> 
> > [!example]
> > ```js
> > document.getElementById("myDiv").addEventListener("click", myFunction, true);
> > ```
> <hr> 
> 
> ## Eliminar métodos
> The `removeEventListener()` method removes event handlers that have been attached with the addEventListener() method:
> ```js
> element.removeEventListener('event',jsfunction);
> ```
> > [!example]
> > ```js
> > document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
> > ```

<hr>
<b>Tags:</b> #javascript 