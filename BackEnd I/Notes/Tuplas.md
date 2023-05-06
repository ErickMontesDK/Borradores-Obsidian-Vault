<i class="time"></i>
<div class="head"><h1>Tuplas</h1></div>

````ad-abstract
Una tupla en TypeScript es un array de elementos que están tipados. De esta manera cada vez que haya que insertar un elemento se validará que dicho elemento coincida con el tipo de dato establecido en la tupla.

Permiten expresar un arreglo con un número fijo conocido de elementos, pero que no requieren ser los mismos.

```typescript
let a:[number] = [1]
let b:[string, string, number?] = ["malcom", "test", 132]

b=[malcom, "test", 132,123] //Error
b=[malcom, "test"]

//tuplas[], donde un elemento de las tuplas es opcional
let trainFares: [number, number?][]=[
	[3.75]
	[8.5. 10.12],
	[10]
]

  
//Union de tupla con un numero con tuplas con dos numeros
let moreTrainFares: ([number] | [number, number])[]=[
	[3.75]
	[8.5. 10.12],
	[10]

]
```

````
