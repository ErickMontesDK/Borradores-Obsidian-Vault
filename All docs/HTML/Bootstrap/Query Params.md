---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Query Params
<hr> 

> [!abstract]
> Query parameters are a defined set of parameters attached to the end of a url. They are extensions of the URL that are used to help define specific content or actions based on the data being passed.
> 
> Existen 2 valores, Query y Params.
> Query: despues de la url, se coloca un ?, seguido del nombre de la variable que quermos mandar, un signo =, y el valor de la variable
> ```js
> /url?varName=Value
> 
> app.get('/url',(req, res) => {
>     res.send(req.query.varName)
> })
> ```
> 
> Params: Despues de la url terminando con /, escribes el valor a enviar. La variable ya está asignada
> ```js
> /url/:ValorQueryParams
> 
> app.get('/url/:ValorQueryParams',(req, res) => {
>     res.send(req.params.ValorQueryParams)
> })
> ```
> El objeto `req` contiene la propiedad `params`, esta propiedad contiene los `Query Params` (parámetros) enviados por la url. <mark>(req.params)</mark>
> 
> > [!example]
> > 
> > ```js
> > //La variable query params es :explorerName. Dependiendo de lo que escribas aquí, cambia el valor de la variable
> > app.get('/explorers/:explorerName',(req, res) => {
> >     res.send(req.params)
> > })
> > 
> > //Si localhost:3000//explorers/Erick ==>  req.params={"explorerName":"Erick"}
> > ```
> > 
> 

<hr>
<b>Tags:</b> #javascript 