---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Array.prototype.filter()
<hr> 

> [!abstract]
> `filter` calls a function on each element of an array and returns a new array containing only the elements for which that function returns `true`. 
> In other words, it filters the array, based on the function passed to it.
> ```js
> array.filter(function(currentValue, index, arr),  thisValue)
> ```
> 
> > [!example]
> > 
> > ```js
> > const users = [
> >   { name: 'John', age: 34 },
> >   { name: 'Amy', age: 20 },
> >   { name: 'camperCat', age: 10 }
> > ];
> > 
> > const usersUnder30 = users.filter(user => user.age < 30);
> > console.log(usersUnder30); 
> > ```
> > 
> > > [!bug] Console
> > > <code>[ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions #arrays