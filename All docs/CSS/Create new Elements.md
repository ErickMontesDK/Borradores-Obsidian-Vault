---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Create new Elements
<hr> 

> [!abstract]
> To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element.
> <hr> 
> 
> ## Creating new HTML elements
> ```js
> document.createElement(element)   //Create an element
> 		.createElement("p")
> 		
> document.createTextNode("New text")  //Create just text
> 
> element.appendChild(Node)  //appended the new element as the last child of the parent.
> 
> insertBefore(element,node) // inserts a child node before an existing child
> ```
> <hr> 
> 
> ## Delete HTML elements
> ```js
> element.remove()    //Borrar elemento completo
> document.getElementById("p1").remove();
> 
> element.removeChild(element child)    //Borrar al hijo del elemento
> list.removeChild(list.children[0]);
> ```
> <hr> 
> 
> ## Replacing HTML elements
> ```js
> element.replaceChild(newNode, elementToReplace) //replaces a child node with a new node
> list.replaceChild(newNode, list.childNodes[0]);
> ```
> 
> 

<hr>
<b>Tags:</b> #javascript 