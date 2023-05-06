<i class="time"></i>
<div class="head"><h1>interfaces</h1></div>

````ad-abstract
"Las interfaces son como un contrato", en el que se especifica las cosas que debe contener una clase para que pueda implementar una interfaz o cumplir el contrato declarado por esa interfaz.

Las interfaces en TypeScript se declaran de manera bastante similar a la de las clases, <mark style="background: #ABF7F7A6;">indicando la lista de propiedades y métodos que contendrán</mark>. Solo hay un detalle fundamental, que <mark style="background: #ABF7F7A6;">las propiedades no pueden tener valores y los métodos no pueden tener código</mark> para su implementación
```typescript
interface sumergibleInterface {
  tiempoMaxBajoElAgua: number;
  profundidadMaxima: number;

  repelerAgua(): void;
}
```
A nivel de programación tradicional, lo más típico que puedes hacer con una interfaz es implementarla en una clase.

Una vez definida tu interfaz, podrás implementarla en todas las clases que desees mediante la palabra "implements" en la cabecera de la clase.
```typescript
class relojSumergible implements sumergibleInterface {
  tiempoMaxBajoElAgua = 1;
  profundidadMaxima = 10;
  repelerAgua() {
    console.log('El agua me resbala');
  }
}
```
````
