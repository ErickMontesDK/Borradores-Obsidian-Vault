---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# DOM functions
<hr> 

> [!abstract]
> ## Finding HTML Elements
> |code|Uso|Ejemplo|
> |---|---|---|
> |document.getElementById(id) |Find element by Id|(IdName)-->#IdName|
> |document.getElementsByClassName(name)|Find elements by class name|(ClassName)--> .ClassName|
> |document.getElementByTagName(name)|Find element by tag name|(li)--> < li>|
> |document.querySelectorAll("p.intro");|HTML elements that match a specified CSS selector|(css selector)-->< p class=intro>|
> 
> ### More specific finding functions
> |code|Uso|
> |---|---|
> |document.anchors|Returns all < a> elements that have a name attribute|
> |document.body|Returns the < body> element|
> |document.documentElement|Returns the < html> element|
> |document.embeds|Returns all < embed> elements|
> |document.forms|Returns all < form> elements|
> |document.head|Returns the < head> element|
> |document.images|Returns all < img> elements|
> |document.links|Returns all < area> and <a> elements that have a href attribute|
> |document.scripts|Returns all < script> elements|
> |document.title|Returns the < title> element|
> 
> <hr> 
> 
> ## Changing HTML Elements
> |code|Uso|Ejemplo|
> |---|---|---|
> |element.innerHTML=new html content|Change inner html of an element|.innerHTML=hello|
> |document.getElementById(_id_)._attribute = new value_|Change attribute value|document.getElementById("myImage").src = "landscape.jpg";|
> |element.setAttribute("attr", "value");|Change attribute value|element.setAttribute("class", "democlass");|
> |element.style.property = new style|Change the style of an HTML element|element.style.backgroundColor = "red";|
> |document.write()|Write some text directly to the HTML output|document.write("< h2>Hello World!</h2>< p>Have a nice day!</p>");|
> 

<hr>
<b>Tags:</b> #javascript 