---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Box sizing
<hr> 

> [!danger] ## Box sizing
> Allows us to include the padding and border in an element's total width and height.
> 
> >width + padding + border = actual width of an element  
> >height + padding + border = actual height of an element
> 
> <mark>Box sizing allows us to include the padding and border in an element's total width and height.</mark>
> 
> <div class="div1" style="width:300px;height:100px;border:1px solid blue;">This div is smaller (width is 300px and height is 100px).</div>
> <br>
> <div class="div2" style="width:400px;height:200px;padding:50px;border:1px solid red;">This div is bigger (width is also 300px and height is 100px).</div>
> <div class="div2" style="width:300px;height:100px;padding:50px;border:1px solid red;">Both divs are the same size now!.</div>
> 
> ```css
> div{
> 	box-sizing:border-box;                   border-box, content-box
> }
> ```
<hr>
<b>Tags:</b> #css 