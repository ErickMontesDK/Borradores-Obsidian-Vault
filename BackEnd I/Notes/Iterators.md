<i class="time"></i>
<div class="head"><h1>Iterators</h1></div>

````ad-abstract
Un objeto se considera iterable si tiene una implementación para la propiedad <b>* Symbol.iterator</b>.
La función * Symbol.iterator en un objeto es responsable de devolver la lista de valores para iterar.
```typescript
const number = {
	* [Symbol.iterator] () {
		for (let n = 1; n <= 10; n++) {
			yield n
		}
	}
}
  
const allNumbers = [...number]
const [one, two, ...rest] = number

console.log(allNumbers)
console.log(...rest)

for(let a of number){
	console.log(a)
}
```
```ad-bug
title:Console
<code>[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] 

3 4 5 6 7 8 9 10

1
2
3
4
5
6
7
8
9
10</code>
```
````
