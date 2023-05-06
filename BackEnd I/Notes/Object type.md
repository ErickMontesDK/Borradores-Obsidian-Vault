<i class="time"></i>
<div class="head"><h1>Object</h1></div>

````ad-abstract

```typescript
let a:object = {
	b: 'x'
}
a.b //ERROR

let b = {
	c: {
		d: 'f'
	}
}
b.c.d

let b2:{
	c:{
		d:'f'
	}
} = {
	c: {
		d: 'f'
	}
}

let b3: {
	c:{
		d:string
	}
} = {
	c: {
		d: 'f'
	}
}
```

```typescript
let c:{
	firstName:string
	lastname:string
} = {
	firstname: 'john',
	lastname: 'barrowman'
}
```

````
