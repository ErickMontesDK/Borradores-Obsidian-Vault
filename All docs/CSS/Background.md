---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Background
<hr> 

> [!danger] background
> ## General
> <div style="background-color:DodgerBlue;">Hello World</div>
> 
> ```css
> div{
>   background:red url(wall.jpg) left top repeat-x  border-box content-box scroll
> 			color     image   position/size repeat  origin   clip  attachment
> 	
>   background-color:#d7d6d5;
> 	
>   opacity:0.5;
> }
> ```
> <hr> 
> 
> ### with image
> <div style="height:500px;width:500px;background-image:url(https://storage.gra.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/avatars/7S/7SMK7AR7K2scvWd8.png);color:black;">Hello World</div>
> <hr> 
> 
> ```css
> div{	
> 	background-image:url("url.jpg");
> 	
> 	background-repeat:repeat-x;     repeat,no-repeat,repeat-x,repeat-y,
> 								    space,round
> 								    
> 	background-attachment:fixed;    Si debe de moverse o mantenerse fijo 
> 									al scrollear
> 								    scroll,fixed,local
> 								    
> 	background-position:right top;  left top, right botton, etc.  x% y%, 
> 									xpos ypos
> 									
> 	background-origin:padding-box;  Origen de la posición del background
> 									padding-box, border-box, content-box
> 									
> 	background-size:auto;           auto,x and y length,x and y percent, 
> 	                                cover, contain
> 	                                
> 	background-clip:border-box;     especifica que área va a cubrir
> 									border-box, padding-box,content-box
> }
> ```
> ## [[Gradientes]]
<hr>
<b>Tags:</b> #css 