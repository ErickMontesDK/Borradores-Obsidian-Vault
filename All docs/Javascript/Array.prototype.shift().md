---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Array.prototype.shift()
<hr> 

> [!abstract]
> El método `**shift()**` elimina el **primer** elemento del array y lo retorna. Este método modifica la longitud del array.
> ```js
> arr.shift()
> ```
> 
> > [!example]
> > 
> > ```js
> >   const ourArray = ["Stimpson", "J", ["cat"]];
> >   const removedFromOurArray = ourArray.shift(); 
> >   console.log(removedFromOurArray); //removedFromOurArray="Stimpson"
> >   console.log(ourArray);
> > ```
> > 
> > > [!bug] Console
> > > <code>"Stimpson"
> > > ["J", ["cat"]]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions #arrays