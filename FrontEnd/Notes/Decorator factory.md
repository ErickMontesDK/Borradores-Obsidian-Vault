<i class="time"></i>
<div class="head"><h1>Decorator factory</h1></div>

````ad-abstract
Un decorator factory es una función que devuelve un decorador. A diferencia de un decorador normal que se aplica directamente a una clase, método o propiedad, un decorator factory permite personalizar la creación del decorador.

Un decorator factory <mark style="background: #ABF7F7A6;">recibe argumentos y devuelve una función decoradora</mark>. La función decoradora es la que se aplica directamente a la clase, método o propiedad.

Por ejemplo, si queremos crear un decorador que acepte un argumento para determinar el valor máximo de una propiedad numérica, podemos utilizar un decorator factory para crear un decorador que nos permita especificar ese valor máximo en tiempo de ejecución.
````

````ad-example
```typescript
function withLogging(logMessage) {
  return function(target, property, descriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args) {
      console.log(logMessage);
      const result = originalMethod.apply(this, args);
      return result;
    };
    
    return descriptor;
  };
}

class Calculator {
  @withLogging('Addition operation executed')
  add(a, b) {
    return a + b;
  }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3)); // Output: "Addition operation executed" followed by 5

```
<b>withLogging</b> es un decorator factory que toma un mensaje de registro como argumento y devuelve un decorador que envuelve un método con un registro adicional.
````
