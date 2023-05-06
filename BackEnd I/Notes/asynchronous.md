# asynchronous

> [!abstract]
> Asíncrono refiere al concepto de construir código que permita a un programa solicitar que una tarea se realice al mismo tiempo que la tarea (o tareas) original, sin detenerse a esperar a que la primera se haya completado. Cuando la tarea secundaria se completa, la original es notificada usando un mecanismo acordado, de tal forma que sepa que el trabajo se ha completado y que el resultado, si es que existe, está disponible.
> 
> ![[Pasted image 20221116132727.png]]
> [!example]
> ```js
> query( 'SELECT * from db.table')
> . then(result {
> // operate on result
> })
> .catch(err {
> // handle errors
> });
> ```
> 
> ```js
> try {
> const result= await query('SELECT * from db.table');
> // operate on result
> } catch (err) {
> // handle errors
> }
> ```