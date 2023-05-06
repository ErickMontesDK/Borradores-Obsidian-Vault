<i class="time"></i>
<div class="head"><h1>Unknown</h1></div>

````ad-abstract
El tipo **Unknown** solo se puede asignar a [[Any]] type y al propio tipo Unknown. Intuitivamente, esto tiene sentido: solo un contenedor que es capaz de contener valores de tipos arbitrarios puede contener un valor de tipo Unknown

Se aplica cuando no conocemos que tipo de dato vamos a recibir

TypeScript no nos permitirá realizar operaciones arbitrarias en valores de tipo desconocido. En su lugar, <mark style="background: #FF5582A6;">primero tenemos que realizar algún tipo de verificación de tipo</mark> para restringir el tipo de valor con el que estamos trabajando.

```typescript
let a:unknown = 30 //Unknown
let b = a === 30   //Boolean
let c = a + 10     //Error

if(typeof a === 'number'){
	let d = a + 10  //number 
}
```
````
