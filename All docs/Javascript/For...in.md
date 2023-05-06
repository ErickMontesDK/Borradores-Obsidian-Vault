---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# For...in
<hr> 

> [!abstract]
> The **`for...in` statement** iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
> 
> > [!example]
> > 
> > ```js
> > const users = {
> >   Alan: {online: false},
> >   Jeff: {online: true},
> >   Sarah: {online: false}
> > }
> > 
> > function countOnline(usersObj) {
> >   let onlineUsers=0;
> > 
> >   for(let user in usersObj){   //for...in cycle
> >     if(usersObj[user].online===true){
> >       onlineUsers++;
> >     }
> >   }
> >   return onlineUsers;
> > }
> > 
> > console.log(countOnline(users));
> > ```
> > 
> > > [!bug] Console
> > > <code>1</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript 