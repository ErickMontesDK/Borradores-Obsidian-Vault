---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Position
<hr> 

> [!danger] ## Position
> specifies the type of positioning method used for an element
> 
> ```css
> div{
> 	position:static;          static,relative,fixed,absolute,sticky
> }
> ```
> 
> > [!example] ## static
> > it is always positioned according to the normal flow of the page:
> > It's not affected by the top, bottom, left, and right properties.
> > <div style="position:static;border:3px dotted cyan;left:30px;">Ejemplo de static</div>
> > [!example] ## relative
> > It's affected by the top, bottom, left, and right properties.
> > <div style="position:relative;border:3px dotted cyan;left:30px;">Ejemplo de relative</div>
> > [!example] ## fixed
> > It is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.
> > 
> > <div style="position:fixed;border:3px dotted cyan;bottom:50%;right:10px;">Ejemplo de fixed</div>
> > [!example] ## absolute
> > It is positioned relative to the nearest positioned ancestor
> > 
> > <div style="position:absolute;border:3px dotted cyan;top:10px;right:10px;">Ejemplo de absolute</div>
> > [!example] ## sticky
> > It is positioned based on the user's scroll position.
> > 
> > <div style="position:sticky;border:3px dotted cyan;top:0px;">Ejemplo de sticky</div>
> > 
> > >No funciona aquí el ejemplo
> 
<hr>
<b>Tags:</b> #css 