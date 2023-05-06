---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# JSON.parse( )
<hr> 

> [!abstract]
> The **`JSON.parse()`** method parses a JSON string, constructing the JavaScript value or object described by the string.
> ```js
> JSON.parse(stringJson);
> ```
> 
> > [!example]
> > 
> > ```js
> > const json = '{"result":true, "count":42}';
> > const obj = JSON.parse(json);
> > 
> > console.log(obj.count);// expected output: 42
> > console.log(obj.result);// expected output: true
> > ```
> > 
> > > [!bug] Console
> > > <code>42
> > > true</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript 