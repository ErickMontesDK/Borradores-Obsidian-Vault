---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Quotes and sequences in strings
<hr> 

> [!danger] List of escape codes
> You can escape a quote or a special symbol from considering it as an end of string,  by using:
> 
> |code in javascript string|result |name|code in javascript string|result |name|
> |---|---|---|---|---|---|
> |`\'`|<samp>'</samp>|single quote|`\r`| \ |carriage return|
> |`\"`|"|double quote|`\t`| \ |tab|
> |`\\`| \ |backslash|`\b`| \ |word boundary|
> |`\n`|<samp>  </samp>|newline|`\f`| \ |form feed|
> 
> > [!example]
> > ```js
> > const myStr="FirstLine\n\\SeconLine\nThirdLine";
> > console.log(myStr)
> > ```
> > > [!bug] Console
> > > FirstLine
> > > \SeconLine
> > > ThirdLine

^5ecad9

<hr>
<b>Tags:</b> #javascript #strings
