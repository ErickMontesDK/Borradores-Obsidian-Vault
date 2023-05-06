<i class="time"></i>
<div class="head"><h1>apply</h1></div>

````ad-abstract
La función <b>apply</b> es un método de los objetos de función de JavaScript que permite llamar a la función con un determinado valor <b>this</b> y un conjunto de argumentos dados como un arreglo.

```js
func.apply(thisArg, argsArray)
```
<b>Donde</b>:

- <b>func</b>: Es la función que se va a llamar.
- <b>thisArg</b>: Es el valor que se utilizará como <b>this</b> dentro de la función. Si este parámetro es <b>null</b> o <b>undefined</b>, se usará el objeto global (en el caso del navegador, el objeto <b>window</b>).
-  <b>argsArray</b>: Es un arreglo con los argumentos que se pasan a la función. Si no se pasan argumentos, este parámetro puede ser omitido o pasarse como un arreglo vacío ( [ ] ).
````

````ad-example
title: Example asignando multiples argumentos
```js
// Definimos una función que suma dos números
function sum(a, b) {
  return a + b;
}

// Creamos un arreglo de números
const numbers = [1, 2, 3, 4, 5];

// Usamos apply para llamar a la función sum con los elementos del arreglo numbers como argumentos
// En este caso, el primer parámetro de apply es null, ya que no se utiliza en la función sum
const sumOfNumbers = sum.apply(null, numbers);

// Imprimimos el resultado de la suma de los números del arreglo
console.log(sumOfNumbers); // Output: 15


```
````
````ad-example
title: Example asignando this
```js
function sayHello(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = { name: 'John' }; 
// Creamos un objeto 'person' con la propiedad 'name'
const name = 'Alice'; 
// Creamos una variable 'name' con el valor 'Alice'

// Llamamos a la función 'sayHello' usando apply, pasando 'person' como el valor de 'this',
// y el arreglo [name] como argumentos de la función
sayHello.apply(person, [name]);

```
````
