---
banner: "https://icreate.agency/wp-content/uploads/2015/10/html5-1300x470.gif"
---
# colgroup & col
> [!abstract]
> ````
> `<colgroup>` specifies a group of one or more columns in a table for formatting. 
> `<col>` Specifies column properties for each column within a `<colgroup>` element. 
> Useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row. ^d585cf
> 
> <hr>
> ad-example
<table>
	<colgroup>
		<col span="2" style="background-color:red;">
		<col style="background-color:blue; ">
	</colgroup>
		<tr>
			<th>Person 1</th><th>Person 2</th><th>Person 3</th>
		</tr>
		<tr>
			<td>Emily</td><td>Tobias</td><td>Marlen</td>
		</tr>
		<tr>
			<td>16</td><td>14</td><td>17</td>
		</tr>
</table>

> [!bug] Code
> ~~~html
> <table>
> 	<colgroup>
> 		<col span="2" style="background-color:red;">
> 		<col style="background-color:blue; ">
> 	</colgroup>
> 		<tr>
> 			<th>Person 1</th><th>Person 2</th><th>Person 3</th>
> 		</tr>
> 		<tr>
> 			<td>Emily</td><td>Tobias</td><td>Marlen</td>
> 		</tr>
> 		<tr>
> 			<td>16</td><td>14</td><td>17</td>
> 		</tr>
> </table>
> ~~~


````

<hr>
<b>Tags:</b> #html #elementos  #tables