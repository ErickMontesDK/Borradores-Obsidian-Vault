---
banner: "https://icreate.agency/wp-content/uploads/2015/10/html5-1300x470.gif"
---
# map & area
> [!abstract]
> ````
> * The HTML `<map>` tag defines an image map. An image map is an image with clickable areas.  ^0dd165
> * The areas are defined with one or more `<area>` tags. They define a clickable area inside an image map
> 
> <hr>
> ad-example
Click on the computer, the phone, or the cup of coffee to go to a new page and read more about the topic:

<img src="https://www.w3schools.com/html/workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="https://www.google.com/">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="https://www.google.com/">
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="https://www.google.com/">
</map>

> [!bug] Code
> ~~~html
> <img src="https://www.w3schools.com/html/workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">
> 
> <map name="workmap">
>   <area shape="rect" coords="34,44,270,350" alt="Computer" href="https://www.google.com/">
>   <area shape="rect" coords="290,172,333,250" alt="Phone" href="https://www.google.com/">
>   <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="https://www.google.com/">
> </map>
> ~~~


````

<hr>

## Area shapes
> [!note] Las áreas clickeables pueden ser de distintas formas
> 
| Tag               | Definición |Ejemplo|Coords|
| ----------------- | --- |---|---|
|shape circle  |defines a circular region |<code><area shape="circle" coords="337, 300, 44" href="coffee.htm"&gt;</code>|Locate the center of the circle ("337,300"), then the radius (44px)|
| shape default |defines the entire region     |<code><area shape="default"&gt;</code>|It covers all the picture|
| shape poly   | defines a polygonal region |<code><area shape="poly" coords="140,121,181,116,204,160" href="croissant.htm"&gt;</code>|It locates a lot of points. Each pair is a point (140,121. Then 181,116. After 204,160)|
| shape rect   | defines a rectangular region    |<code><area shape="rect" coords="34, 44, 270, 350" href="computer.htm"&gt;</code>| It locates two rectangles corners (first in 34,44, second in 270,350)|

<hr>
<b>Tags:</b> #html #elementos #imagen 