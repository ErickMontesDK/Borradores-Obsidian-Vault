---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Http methods
<hr> 

> [!abstract]
> HTTP define un conjunto de **métodos de petición** para indicar la acción que se desea realizar para un recurso determinado.
> Son 4 métodos los más usados:
> 
	1. [[]]

> [!danger] ## Get
> El método `GET` solicita una representación de un recurso específico. Las peticiones que usan el método `GET` sólo deben recuperar datos.
> Status=200;
> ```js
> app.get("/",(req,res)=>{
>     res.status(200).json({message: "Fizzbuzz Api Welcome!"});
> });
> ```
> 

> [!danger] ## Post
> El método `POST` se utiliza para enviar datos y crear una nueva entidad a un recurso en específico
> Status=201;
> ```js
> app.post("/api/v1/products/create", (req, res)=>{
> 	const {name,year,color,pantone_value}=req.body;
> 	const newProduct= {
> 		id:products.length+1,
> 		name,
> 		year,
> 		color,
> 		pantone_value
> 	};
> 	products.push(newProduct);
> 	res.send(newProduct);
> });
> ```
> 

> [!danger] ## Put
> El método `Put` actualiza por completo un elemento en la lista con todos sus variables
> Status=201;
> ```js
> app.post("/api/v1/products/:productId", (req, res)=>{
> 	const id=parseInt(req.params.productId);
>     const {name,year,color,pantone_value}=req.body;
>     const index=products.findIndex((item)=>item.id==id);
> 
>     if(index !=-1) {
>         const product=products[index];
>         console.log(product);
> 
>         products[index]={
>             id:product.id,
>             name: name || product.name,
>             year: year || product.year,
>             color: color || product.color,
>             pantone_value: pantone_value || product.pantone_value
>         };
>         console.log(products[index]);
>         res.send({data: products[index]});
>     }else{
>         res.status(404).send({data: {error: "Not Found"}});
>     }
> };
> ```
> 

> [!danger] ## Patch
> El método `Patch` actualiza parcialmente un elemento en la lista, solo sus valores que deseemos cambiar en particular
> Status=201;
> ```js
> app.post("/api/v1/products/:productId", (req, res)=>{
> 	const id=parseInt(req.params.productId);
>     const {name,year,color,pantone_value}=req.body;
>     const index=products.findIndex((item)=>item.id==id);
>     if(index !=-1) {
>         products[index]={
>             id,
>             name,
>             year,
>             color,
>             pantone_value
>         };
>         res.send({data: products[index]});
>     }else{
>         res.status(404).send({data: {error: "Not Found"}});
>     }
> };
> ```
> 

> [!danger] ## Delete
> El método `DELETE` borra un recurso en específico.
> Status=201;
> ```js
> app.delete("/api/v1/products/:productId", (req, res)=>{
>   const id=parseInt(req.params.productId);
>   const index=products.findIndex((item)=>item.id==id);
>   
>   if(index !=-1) {
>   	products.splice(index,1);
>   	res.send({});
>   }else{
>   	res.status(404).send({data: {error: "Not Found"}});
> });
> ```
> 

<hr>
<b>Tags:</b> #javascript 