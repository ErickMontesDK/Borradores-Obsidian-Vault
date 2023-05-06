---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---

# Clear
<hr> 

> [!danger] ## Clear
> When we use the `float` property, and we want the next element below (not on right or left), we will have to use the `clear` property.
> 
> The `clear` property specifies what should happen with the element that is next to a floating element.
> 
> > [!example] <h2>Without clear</h2>
> > <div class="div1" style="float: left;padding: 10px;border: 3px solid #73AD21;">div1</div>
> > <div class="div2" style="padding: 10px;border: 3px solid red;">div2 - Notice that div2 is after div1 in the HTML code. However, since div1 floats to the left, the text in div2 flows around div1.</div>
> > [!example] <h2>With clear</h2>
> > <div class="div3" style="float: left;padding: 10px;  border: 3px solid #73AD21;">div3</div>
> > <div class="div4" style="padding: 10px;border: 3px solid red;clear: left;">div4 - Here, clear: left; moves div4 down below the floating div3. The value "left" clears elements floated to the left. You can also clear "right" and "both".</div>
> 
> ```css
> div{
> 	clear:left;          left,right,both,none
> }
> ```
<hr>
<b>Tags:</b> #css 