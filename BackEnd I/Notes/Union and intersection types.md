<i class="time"></i>
<div class="head"><h1>Union and intersection types</h1></div>

````ad-abstract
```typescript
type Cat={ name:string, purrs:boolean}
type Dog={name:string, barks:boolean, wags:boolean}
type CatOrDogOrBot= Cat | Dog
type CatAndDog= Cat & Dog

let a:CatOrDogOrBot = {
	name: 'Miguelito',
	purrs: true
}

a = {
	name: 'Ferb',
	barks: true,
	wags: false
}

a = {
	name: 'Sirius',
	barks: true,
	purrs: false,
	wags: true
}

let b:CatAndDog = {
	name: 'Quimera',
	purrs: true,
	barks: false,
	wags: false
}
```
````
`````ad-info
title: Union de types
Puedes unir un type creado anteriormente y agregarle elementos
```typescript
type Food = {
	calories: number
	salty: boolean
}
//Contiene el type Food y un nuevo valor
type Sushi = Food & {
	tasty: boolean
}

//Contiene el type Food y un nuevo valor
type Cafe = Food & {
	sweet: boolean
}
```
Similar a [[interfaces]]
`````
