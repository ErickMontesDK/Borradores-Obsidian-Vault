---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Find More Values Than the First Match g
<hr> 

> [!danger] ## Find More Values Than the First Match g
> To search or extract a pattern more than once, you can use the global search flag: `g`
> 
> > [!example]
> > 
> > ```js
> > let repeatRegex = /Repeat/g;
> > testStr.match(repeatRegex);
> > ```
> > > [!bug]
> > > <code>["Repeat", "Repeat", "Repeat"]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #regex