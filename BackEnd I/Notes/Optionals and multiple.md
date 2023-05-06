<i class="time"></i>
<div class="head"><h1>Optionals and multiple</h1></div>

````ad-abstract
```typescript
let a:{
	b: number
	c?: string    //optional
	[key: number]: boolean   //multiples valores
}
```
```typescript
a={b:7} //ok
a={b:7,c:"hello"} //ok
a={b:7,c:"hello",88:true, 94:false} //ok
```
````
