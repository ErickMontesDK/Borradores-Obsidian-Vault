---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Array.prototype.slice()
<hr> 

> [!abstract]
> `slice()` copies or _extracts_ a given number of elements to a new array, leaving the array it is called upon untouched.  
> `slice()` takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index).
> ```
> arr.slice(inicio , fin)
> ```
> 
> > [!example]
> > 
> > ```js
> > let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
> > let todaysWeather = weatherConditions.slice(1, 3);
> > console.log(todaysWeather);
> > ```
> > 
> > > [!bug] Console
> > > <code>[]'snow', 'sleet']</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #functions #arrays