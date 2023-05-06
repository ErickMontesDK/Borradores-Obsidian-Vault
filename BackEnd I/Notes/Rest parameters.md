<i class="time"></i>
<div class="head"><h1>Rest parameters</h1></div>

``````ad-abstract
Recibir varios parametros sin tener definido un limite en la función
`````ad-example
Enviando un array
```typescript
function sum (numbers: number[]): number {
	return numbers.reduce((total, n) => total + n, 0)
}

console.log(sum([1, 2, 3, 5, 6]))
```
`````

`````ad-example
Enviando varios parametros
<b>Array.from( )</b> crea una nueva instancia de Array a partir de un objeto iterable
<b>arguments</b> es un objeto tipo Array accesible dentro de las funciones que contiene los valores de los argumentos pasados a esa función.
```js
//En typescript no funciona. Si en javascript
function sumVariadic(){
	return Array
		.from(arguments)
		.reduce((total, n )=> total+n, 0)
}
console.log(sumVariadic(1, 2, 3))
```
`````
`````ad-example
Enviar varios parámetros en typescript
```typescript
function sumVariadicSafe (...numbers: number[]): number {
	return numbers.reduce((total, n) => total + n, 0)
}
console.log(sumVariadicSafe(1, 2, 3, 4))
```
`````
``````
