---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Array.prototype.indexOf()
<hr> 

> [!abstract]
> `indexOf()` allows us to quickly and easily check for the presence of an element on an array.   
> `indexOf()` takes an element as a parameter, and when called, it returns the position, or index, of that element, or `-1` if the element does not exist on the array.
> ```js
> array.indexOf(searchElement, fromIndex])
> ```
> * fromIndex Indica el índice por el que se comienza la búsqueda.
> 
> > [!example]
> > 
> > ```js
> > let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
> > 
> >  //-1
> >  //2
> >  //1
> > console.log( fruits.indexOf('dates') ); //-1
> > console.log( fruits.indexOf('oranges') ); //2
> > console.log( fruits.indexOf('pears')  ); //1
> > ```
> > 
> > > [!bug] Console
> > > <code>-1
> > > 2
> > > 1</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions #arrays