---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Selectores
<hr> 

> [!danger] ## Selectores
> 
> ### Selectores básicos:
> |Codigo|Uso|Ejemplo
> |---|---|---|
> |#id|id||#valueName
> |.class|clases|.container|
> |*|todo|*|
> |h1,h2,p|varios elementos a la vez|ul,li,p|
> <hr>
> 
> ### Por Atributos: Cuando el elemento tiene cierto atributo
> <code>element[attribute]</code> 
> 
> |Codigo|Uso|Ejemplo|
> |---|---|---|
> |a[target]|link con atributo target definido||
> |a[target="value"]|link con atributo target igual a un valor en especifico||
> |[title~=flower]|contiene una palabra|title="klematis flower"|
> |[class I=top]|el valor especifico o seguido con -|class="top-text"|
> |[class^="top"]|inicia o es igual con una palabra|class="topcontent"|
> |[class$="test"]|termina con el valor|class="mytest"|
> |[class*="te"]|contiene el valor en cualquier lugar|class="mytest"|
> <hr> 
> 
> ### Combinaciones
> |Codigo|Nombre|Uso|
> |---|---|---|
> |div p|Descendientes|Todos los descendientes de un elemento|
> |div>p|child|Descendiente directo|
> |div+p|a sibling|El sig. elemento del mismo nivel|
> |div~p|all sibling|Todos los hermanos, mismo nivel|
> <hr> 
> 
> ### Pseudo-clases Cuando el objeto tiene un estado especial
> |Codigo|Uso|
> |---|---|
> |p:first-child, p:last-child, p:nth-child(2)|Descendiente con posición en especifico|
> |p:first-of-type, p:last-of-type, p:nth-of-type(3)|Tipo de elemento y posición en especifico|
> |:focus,:valid,:required,:enabled,:disabled|estado de un input|
> |:visited,:active,:hover|links|
> <hr> 
> 
> ### Pseudoelementos
> |Codigo|Uso|
> |---|---|
> |::first-line|primer linea en un p,span,li,etc|
> |::first-letter|primer letra del elemento|
> |:before and :after|antes o despues de un elemento|
> |:marker|punto de una lista|
> |:selection|texto seleccionado por el usuario con el cursor|
> 

<hr>
<b>Tags:</b> #css 