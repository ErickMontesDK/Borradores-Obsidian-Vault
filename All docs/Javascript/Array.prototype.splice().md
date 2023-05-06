---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Array.prototype.splice()
<hr> 

> [!abstract]
>  `.splice()` allows us to **remove any number of consecutive elements** from anywhere in an array.  
> `splice()` not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements.
> ```js
> array.splice(start, deleteCount, item1, item2,...itemn)
> ```
> 
> > [!example]
> > 
> > ```js
> > let array = ['today', 'was', 'not', 'so', 'great'];
> > array.splice(2, 2);  //deleted from position 3 (index 2), 2 values
> > console.log(array);
> > ```
> > 
> > > [!bug] Console
> > > <code>['today', 'was', 'great']</code>
> > 
> 
> Also, `.splice()` can add values to the array in the same index specified
> 
> > [!example]
> > 
> > ```js
> > const numbers = [10, 11, 12, 12, 15];
> > const startIndex = 3;
> > const amountToDelete = 1;
> > 
> > numbers.splice(startIndex, amountToDelete, 13, 14); //we add `13` and `14` at the same index.
> > console.log(numbers);
> > ```
> > 
> > > [!bug] Console
> > > <code>[ 10, 11, 12, 13, 14, 15 ]</code>
> > 

<hr>
<b>Tags:</b> #javascript #functions #arrays
