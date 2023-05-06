---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# res.function()
<hr> 

> [!abstract]
> This property holds a reference to the response object that relates to this request
> 
> ```js
> res.send("Hello World")
> res.json({name:"Erick",age:27})
> res.status(200) //200 cuando get, 201 cuando post
> ```
> `````

> [!danger] Lista de funciones
> 
> |   |   |
> |---|---|
> |res.send()|sends the HTTP response.Puede llamarse 1 sola vez|
> |res.json()|sends a JSON response|
> |res.write()|sends the HTTP response multiple times|
> |res.end()|finish the HTTP response when res.write() is used|
> |res.sendFile(__dirname+RelativePath)|send a file|
> 

<hr>
<b>Tags:</b> #javascript 