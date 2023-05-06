---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Tables
<hr> 

> [!danger] ## Tables
> <table id="table1" style="border:2px solid white;border-collapse:separate;border-spacing:15px 30px;caption-side: bottom;empty-cells:hide;">
> <caption>Ejemplo de descripción</caption>
>   <tr>
>     <th>Firstname</th>
>     <th>Lastname</th>
>   </tr>
>   <tr>
>     <td>Peter</td>
>     <td>Griffin</td>
>   </tr>
>   <tr>
>     <td>Lois</td>
>     <td></td>
>   </tr>
> </table>
> 
> ```css
> table{
> 	border-collapse:collapse;      mezcla los bordes de table,th,td y tr en uno
> 								   separate,collapse
> 								   
> 	border-spacing:15px 30px;      espacio entre los elementos de la tabla
> 				   hor  vert
> 				   
> 	caption-side: top;             posición de descripción de tabla
> 								   top,bottom
> 	
> 	empty-cells:hide;              mostrar o ocultar celdas vacias
> 								   show, hide
> 	
> 	table-layout:fixed;            como se acomodaran las columnas
> 								   auto->ancho de columna de la celda mas ancha
> 								   fixed->ancho de columnas iguales entre todas
> }
> ```
<hr>
<b>Tags:</b> #css 