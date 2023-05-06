<i class="time"></i>
<div class="head"><h1>Declaring and Invoking functions</h1></div>

````ad-abstract
```typescript
// Named function
function greet(name: string) {
	return 'hello ' + name
}
// Function expression
let greet2 = function (name: string) {
	return 'helio ' + name
}
// Arrow function expression
let greet3 = (name: string) =>{
	return 'helio ' + name
}
// Shorthand arrow function expression
let greet4 = (name: string)=>{
	'helio ' + name
}
// Function constructor
let greet = new Function('name','return "hello "+ name')
```
````
