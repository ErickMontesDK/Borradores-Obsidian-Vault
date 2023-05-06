<i class="time"></i>
<div class="head"><h1>apply, call and bind</h1></div>

````ad-abstract
```typescript
function add (a: number, b: number): number {
	return a + b
}

console.log(add(10, 20))
console.log(add.apply(null, [10, 20]))
console.log(add.call(null, 10, 20))
console.log(add.bind(null, 10, 20)())
```
````
