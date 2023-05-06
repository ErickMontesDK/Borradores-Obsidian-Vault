<i class="time"></i>
<div class="head"><h1>Overload functions</h1></div>

``````ad-abstract
Se usa <mark style="background: #ABF7F7A6;">cuando la firma de la función es relativamente compleja y tiene múltiples tipos involucrados</mark>.
Overload signature <mark style="background: #ABF7F7A6;">define el parámetro y los tipos de retorno de la función, y no tiene cuerpo</mark>. 
Una función puede tener múltiples firmas de sobrecarga correspondientes a las diferentes formas en que puede invocar la función.
````ad-example
title: Greet
```typescript
// Primer tipo que recibe solo 1 string
function greet(person: string): string;
//Segundo tipo que recibe un array de strings
function greet(persons: string[]): string[];

// Implementation signature
function greet (person: unknown): unknown {
	if (typeof person === 'string') {
		return `Hello, ${person}!`
	} else if (Array.isArray(person)) {
		return person.map(name => `Hello, ${name}!`)
	}
	throw new Error('Unable to greet')
}

console.log(greet('World')) // 'Hello, World!'
console.log(greet(['Jane', 'Joe'])) // ['Hello, Jane!', 'Hello, Joe!']
```
```ad-bug
title:Console
<code>Hello, World! 
[ 'Hello, Jane!', 'Hello, Joe!' ]</code>
```
````

````ad-example
title: Reservación
```typescript
class Reservation {
	destination: string | undefined
	to: Date | undefined
	// eslint-disable-next-line no-useless-constructor
	constructor (public from: Date) {}

	setDestination (destination: string):void {
		this.destination = destination
	}
	setTo (to: Date):void {
		this.to = to
	}
}

type Reserve = {
	(from: Date, to: Date, destination: string): Reservation
	(from: Date, destination: string): Reservation
}

const reserve: Reserve = (
from: Date, 
toOrDestination: Date | string, 
destination?: string) => {
	const reservation = new Reservation(from)
	if (toOrDestination instanceof Date && destination) {
		reservation.setDestination(destination)
		reservation.setTo(toOrDestination)
	} else if (typeof toOrDestination === 'string') {
		reservation.setDestination(toOrDestination)
	}
	return reservation
}

const fecha = new Date()
const firstReservation = reserve(fecha, fecha, 'Brazil')
const secondReservation = reserve(fecha, 'Brazil')

console.log(firstReservation)
console.log(secondReservation)
```
```ad-bug
title:Console
<code>Reservation { from: 2022-12-01T19:39:48.348Z, destination: 'Brazil', to: 2022-12-01T19:39:48.348Z } 

Reservation { from: 2022-12-01T19:39:48.348Z, destination: 'Brazil' }</code>
```
````
``````
