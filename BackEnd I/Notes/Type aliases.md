<i class="time"></i>
<div class="head"><h1>Type aliases</h1></div>

````ad-abstract
```typescript
type Age = number //Asignarle un nombre a un tipo

type Person = {
	name:string
	age:Age
}

let age: Age = 55

let driver:Person = {
	name: 'James',
	age
}
```
```typescript
let x = Math.random() < 0.5

type Color='red'

if (x) {
	type Color='blue'
	let b:Color = 'blue' //type blue
} else {
	let c:Color = 'red'  //type red
}
```
````
