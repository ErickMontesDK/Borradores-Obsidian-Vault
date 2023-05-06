---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Columns
<hr> 

> [!danger] ## Columns
> The CSS multi-column layout allows easy definition of multiple columns of text
> 
> <div class="newspaper" style="column-count: 3;column-gap:15px;column-rule-style:double;column-rule-color:cyan;">
> <p style="column-span:all;">Big title of text just to see how it spans across the columns</p>
> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
> </div>
> 
> <hr> 
> 
> ## adjust quantity of columns
> ```css
> div{
> 	column-count:3;                           How many columns
> 
> 	column-width:100px;
> 	
> 	column-fill:balance;            Fills each column
> 									balance(almost same), auto (fill height)
> 
> 	column-span:all;                how many columns an element should span
> 									none, all
> }
> ```
> <hr> 
> 
> ## Adjust space between columns
> ```css
> div{
> 	column-gap:10px;                Gap between columns
> 
> 	colum-rule: 10px  dotted cyan;
> 				width  style color
> 
> 	column-rule-style:inset;       line between columns in gap
> 								   none,dotted,hidden,solid,double,ridge...
> 	column-rule-width:10px;
> 	
> 	column-rule-color:cyan;
> }
> ```
> <hr> 
> 
<hr>
<b>Tags:</b> #css 