<i class="time"></i>
<div class="head"><h1>In functions</h1></div>

````ad-abstract
```typescript
type Return=string|null

function trueOrNull (isTrue:boolean):Return {
	if (isTrue) {
		return 'true'
	} else {
		return null
	}
}

let test=trueOrNull(true)   //Return
let test2=trueOrNull(false) //Return
```
````
