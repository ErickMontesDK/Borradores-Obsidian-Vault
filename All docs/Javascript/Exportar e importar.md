---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
<i class="time"></i>
<div class="head"><h1> Exportar, importar y require</h1></div>

##  Export 
En JavaScript hay más de una forma de exportar un módulo.
En general, hay dos formas de exportar módulos en JavaScript:

1.  Usando exportaciones por defecto (<b>default exports</b>)
2.  Usando exportaciones con nombre (<b>named exports</b>)

Cuando se usa una exportación por <mark style="background: #ABF7F7A6;">defecto, se puede exportar solo un valor por módulo. </mark>
En cambio, <mark style="background: #ABF7F7A6;">las exportaciones con nombre permiten exportar varios valores del módulo.</mark>

### %%fold %% Default
Se utiliza esta sintaxis si solo se va a exportar <mark style="background: #ABF7F7A6;">un valor de un archivo.</mark> También se utiliza para crear un valor de respaldo para un archivo o módulo.

Solo se puede tener un valor como exportación por defecto en cada módulo o archivo. 
Además, no se puede utilizar la palabra clave `export default` junto con las exportaciones con nombre en el mismo archivo o módulo.


```JS HL:"5" TI:"Exportacion default" 
function addTwo(a, b) {
    console.log(a + b);
}

export default addTwo;
```

### Named Exports
Con las exportaciones por defecto, solo puedes exportar un elemento por módulo, que es la exportación por defecto. Cuando importas el módulo, puedes elegir darle el nombre que desees. Por ejemplo:

```JS HL:"1-2, 6,10" TI:"Exportacion con nombre" 
//Escribiendo "export" en cada componente que se va a exportar
export const add = (x, y) => {
 return x + y;
}

//o escribiendo todos los componentes en un statement
const add = (x, y) => {
 return x + y;
}
export { add };
```
## Import
Importar módulos en JavaScript es como importar objetos de otro lugar para ser utilizados en tu propio código. Hay varias formas de importar módulos, y la sintaxis exacta depende de cómo se exportó el módulo.

### Importar una exportación Default
Para importar una exportación por defecto, debes

```js TI:"Exportación default" HL:"8"
// En un archivo utils.js
export default function sum(a, b) {
  return a + b;
}

// En un archivo app.js
//Se importa la función de utils.js, se requiere definirle un nuevo nombre
import mySumFunction from './utils.js';

console.log(mySumFunction(2, 3)); 
// output: 5
```

### Importar un solo objeto en específico
Para importar solo un objeto o valor específico de un archivo en JavaScript, puedes utilizar la sintaxis de importación de desestructuración.

```js TI:"Exportación en especifico" HL:"8,10"
//En un archivo person.js
export const person = {
  name: 'John',
  age: 30
}

// En un archivo greeting.js importamos la funcion person
import { person } from './person.js';
//O bien, le podemos cambiar el nombre a uno nuevo
import { person as myPerson } from './person.js';

console.log(`Hello, ${myPerson.name}!`); 
// output: Hello, John!
```

### Importar todo de un módulo
Supongamos que tienes un archivo del cual deseas importar todo su contenido en otro archivo. Esto se puede hacer utilizando la sintaxis `import * as` en JavaScript.
```js TI:"Importar todo" HL:"11"
//Dos funciones en archivo utils.js
export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Importamos ambas funciones en app.js con *
import * as MyUtils from './utils.js';

console.log(MyUtils.sum(2, 3)); // output: 5
console.log(MyUtils.multiply(2, 3)); // output: 6

```

## Require 
`require()` es una función en Node.js que se utiliza para cargar módulos en una aplicación de Node.js. Cuando utilizas `require()`, Node.js lee el archivo especificado, ejecuta su código y devuelve los objetos que se están exportando.

A diferencia de los módulos de ES6 que usan `import` y `export`, <mark style="background: #ABF7F7A6;">los módulos de Node.js utilizan <b>module.exports </b></mark>. 
>`module.exports` es una propiedad de un objeto que se utiliza para exponer objetos desde un archivo de Node.js. Se utiliza para exportar un objeto completo o una sola función o valor. 
>
>`exports` es una variable que se utiliza para exponer objetos de forma parcial. Es una palabra reservada en ES6 que se utiliza para exportar objetos en un entorno de navegador.

```JS TI:"Importar y exportar usando Require y module.exports" HL:"10,12,15"
// archivo.js
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}
//Exportar solo uno
module.exports = suma
//Exportar más de uno
module.exports = { suma, resta };

//Importando en archivo.js
const { sumar, restar } = require('./operaciones');

console.log(sumar(2, 3)); // 5
console.log(restar(2, 3)); // -1
```