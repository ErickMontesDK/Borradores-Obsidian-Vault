<i class="time"></i>
<div class="head"><h1>Symbol</h1></div>

````ad-abstract
En TypeScript, el símbolo es un tipo de datos primitivo. Un tipo de datos primitivo no es un objeto, no posee propiedades ni métodos y no se pueden modificar.

En general, los símbolos solo se tratan como un tipo. Para tratar los símbolos como literales únicos, typescript tiene un tipo especial llamado **unique symbol**. Es un subtipo de Symbol(). El 'símbolo único' solo se puede usar con aquellas variables que se declaran constantes o en propiedades de solo lectura. No se les puede reasignar un nuevo valor a las unique symbol. 

Las symbol si se pueden reasignar

```typescript
let a = Symbol('a') //symbol
let b: symbol = Symbol('a') //symbol
let c = a === b //Boolean, false

const e = Symbol('e')   //typeof e
const f:unique symbol = Symbol('f')   //typeof f
let g:unique symbol = Symbol('g')   //Error, siempre es const

let h = e ===e //boolean
let i = e ===f //ERROR
```
````
