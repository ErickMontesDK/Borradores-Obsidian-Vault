---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Z-index
<hr> 

> [!danger] ## Z-index
> The `z-index` property specifies the stack order of an element (which element should be placed in front of, or behind, the others).
> 
> Entre más grande el index, mas en frente está el elemento
> 
> <div class="container" style="color:black; position:relative;">
>   <div class="black-box" style="position: relative;z-index: 1;border: 2px solid black;height: 100px;margin: 30px;">Black box (z-index: 1)</div>
>   <div class="gray-box" style="  position: absolute;z-index: 3;background: lightgray;height: 60px;  width: 70%;left: 50px;top: 50px;">Gray box (z-index: 3)</div>
>   <div class="green-box" style="position: absolute;z-index: 2;background: lightgreen;width: 35%;left: 270px;top: -15px;height: 100px;">Green box (z-index: 2)</div>
> </div>
> 
> ```css
> div{
> 	z-index: 1;
> }
> ```
<hr>
<b>Tags:</b> #css 