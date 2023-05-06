<i class="time"></i>
<div class="head"><h1>bigint</h1></div>

````ad-abstract
BigInt values represent numeric values which are too large to be represented by the number primitive 
<code>max_integer = 9007199254740991n = 2^53 - 1</code>

Es creado agregando n al final de un literal entero, o llamando a la función BigInt() (sin el operador new) y dándole un valor entero o un valor de cadena.
```typescript
let a =1234n    //bigint
const b = 5678n //5678n
var c=a+b       //bigint

let d = a < 1235 //boolean
let e : 88.5n    //ERROR
let f : bignit = 100n //bigint
let g : 100n= 100n    //bigint
let h : biginit = 100 //ERROR
const i = 2n ** 53n +2n //bigint
```
````
