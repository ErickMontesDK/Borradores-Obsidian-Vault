<i class="time"></i>
<div class="head"><h1>Arrays</h1></div>

````ad-abstract

```typescript
let a = [1, 2, 3]          //number[]
let b = ["a", "b", "c"]    //string[]
let c:string[] = ['a','b'] //string[]
let d = [1, "test"]        //(number | string)[]

const e = [1, "test"]      //(number | string)[]
e.push('added')            
e.push(true)    //Error

let f= []       //array de anys
f.push(1)
f.push("test")
f.push(true)

let g:  number[] = []  //number[]
g.push(4)
g.push("test")  //error
```
```ad-tip
No mezclar tipos de datos en los strings
```
```typescript
function buildArray():(number | string){
	let a = []       //any[]
	a.push(1)        //number[]
	a.push('test')   //(string|number)[]
	return a
}

  

let myArray = buildArray()  //(string | number)[]
myArray.push(true);       //ERROR, ya quedó fijado como (string|number)[]
```
````
