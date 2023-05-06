<i class="time"></i>
<div class="head"><h1>Generators</h1></div>

``````ad-abstract
Los generadores son funciones de las que se puede salir y volver a entrar. 
Su contexto (asociación de variables) será conservado entre las reentradas. 
Las reentradas son efectuadas gracias a la palabra reservada <b>yield</b>

La función generadora se destaca al escribir un <b>*</b>

Para conseguir el valor del <b>yield</b>, se debe hacer uso del método <b>next()</b>

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen(); // "Generator { }"
console.log(g.next()); 
console.log(g.next()); 
console.log(g.next()); 
console.log(g.next()); 

```


`````ad-example
collapse:
title:Secuencia de numeros hasta el 3
```js
function* idMaker() {
    let index = 0;
    while (index < 3)
        yield index++;
}
let gen = idMaker();
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```
```ad-bug

title:Console
<code>{ value: 0, done: false } 
{ value: 1, done: false } 
{ value: 2, done: false } 
{ value: undefined, done: true }</code>
```
`````
`````ad-example
collapse:
title:Secuencia de numeros sin fin
```typescript
function * createNumbers (): IterableIterator<number> {
	let n = 0
	while (true) {
		yield n++
	}
}
const numbers = createNumbers()
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
```
```ad-bug
title:Console
<code>{ value: 0, done: false } 
{ value: 1, done: false } 
{ value: 2, done: false }</code>
```
`````

`````ad-example
title:Fibonacci sequence (1, 1, 2, 3, 5, 8, 13...)
collapse:
```typescript
function * fibonacci (): IterableIterator<number> {
	let a = 1
	let b = 1
	let c = 0
	
	while (true) {
		yield a
		c = b
		b = a + b
		a = c
	}
}

const numbers = fibonacci()
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
```
```ad-bug
title:Console
<code>{ value: 1, done: false } 
{ value: 1, done: false } 
{ value: 2, done: false } 
{ value: 3, done: false } 
{ value: 5, done: false } 
{ value: 8, done: false } 
{ value: 13, done: false } 
{ value: 21, done: false }</code>
```
`````

``````
