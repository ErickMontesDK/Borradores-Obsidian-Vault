<i class="time"></i>
<div class="head"><h1>readonly</h1></div>

````ad-abstract
```typescript
let as: readonly number[]=[1, 2, 3] //No se puede modificar
as.push(4)  //ERROR, no se puede modificar directamente

//Se modifica indirectamente con otra variable
let bs: readonly number[] = as.concat(4) 
let value = bs[3]   //Se guarda en otra variable

bs[0]=9 //ERROR, no se puede modificar directamente

let cs=bs.concat(5)
cs.push(6)

let copy = bs.slice()
copy.push(7)

let spread = [... bs]
spread.push(8)
```
Declarar read-only arrays y tuplas
```typescript
type A = readonly string[]      //readonly string[]
type B = ReadonlyArray<string>  //readonly string[]
type C = Readonly<string[]>     //readonly string[]

type D = readonly [number, string]  //readonly [number,string]
type E = Readonly<[number, string]> //readonly [number,string] 
```
````
