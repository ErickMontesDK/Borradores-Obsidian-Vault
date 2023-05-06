---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# async await
<hr> 

> [!abstract]
> An async function is a function declared with the `async` keyword, and the `await` keyword is permitted within it. The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
> ```js
> 
> ```
> 
> > [!example]
> > 
> > ```js
> > const getUsers=()=>{
> >   return new Promise((resolve,reject)=>{
> >     setTimeout(()=>{
> >     resolve([{usuario:"Erick", Username:"Jordi"},{usuario:"Meme", Username:"Adal"}])
> >     },2000); //Demora 2 seg en enviar los datos
> >   });
> > }
> > const getCities=()=>{
> >   return new Promise((resolve,reject)=>{
> >     setTimeout(()=>{
> >     resolve(["Morelia","Querétaro","Saltillo","Monterrey"])
> >     },5000); //Demora 5 seg en eviar los datos
> >   });
> > }
> > 
> > async function sendData(){
> >   const users=await getUsers(); //Espera a recibir dato
> >   const cities=await getCities(); //Espera a recibir dato
> >   //Sigue ejecución de código
> >   console.log(cities);
> >   console.log(users);
> > }
> > 
> > sendData();
> > ```
> > 
> > > [!bug] Console
> > > <code>[ 'Morelia', 'Querétaro', 'Saltillo', 'Monterrey' ]
> > > [
> > >   { usuario: 'Erick', Username: 'Jordi' },
> > >   { usuario: 'Meme', Username: 'Adal' }
> > > ]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript 