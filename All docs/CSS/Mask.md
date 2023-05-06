---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Mask
<hr> 

> [!danger] ## Mask
> With CSS masking you create a mask layer to place over an element to partially or fully hide portions of the element
> <div style="-webkit-mask-image: url(https://cdn.iconscout.com/icon/free/png-256/batman-20-282256.png);mask-image: url(https://cdn.iconscout.com/icon/free/png-256/batman-20-282256.png);-webkit-mask-repeat: no-repeat;mask-repeat: no-repeat;">
> 	<img src="https://www.w3schools.com/css/img_5terre.jpg" alt="Cinque Terre" width="256px" height="256px">
> </div>
> 
> ```css
> div{  
>   mask-image: url(w3logo.png);          Establece imagen que recortará
>   -webkit-mask-image: url(w3logo.png); 
> 
>   mask-repeat: no-repeat;               specifies if a mask will be repeated   
>   -webkit-mask-repeat: no-repeat;       repeat,repeat-y,space,round,no-repeat
> 
>   mask-origin:padding-box;              specifies the origin position of the 
> 										mask
> 								        border-box,content-box,padding-box,
> 								        margin-box,fill-box,stroke-box,view-box
> 
>   mark-position:left top;               starting position of a mask
> 								        right bottom, center center, 31px, 15%
> 
>   -webkit-mask-image:linear-gradient(black,transparent);  Mask with Gradient
> }
> ```
> <hr> 
> 
> Tambien se pueden crear masks con un svg en html
> ```html
> <svg width="600" height="400">  
> 	<!--Mask define forma de recorte-->
> 	<mask id="svgmask1">   
> 		<polygon fill="#ffffff" points="200 0, 400 400, 0 400"></polygon>  
> 	</mask>
> 
> 	<!--Define imagen a cortar y que el objeto #svgmask1 lo recortará-->
> 	<image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img_5terre.jpg" mask="url(#svgmask1)"></image>   
> </svg>
> ```
<hr>
<b>Tags:</b> #css 