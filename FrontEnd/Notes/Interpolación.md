<i class="time"></i>
<div class="head"><h1>Interpolación</h1></div>

``````ad-abstract
La interpolación en Angular es una técnica de enlace de datos que <mark style="background: #ABF7F7A6;">permite mostrar valores de propiedades de una clase de componente en la vista HTML</mark>. Para utilizar la interpolación en Angular, se utiliza la sintaxis de doble llave {{...}} dentro de las etiquetas HTML.

````ad-example
Por ejemplo, si se tiene una propiedad llamada "nombre" en una clase de componente, se puede mostrar su valor en la vista HTML de la siguiente manera:
<i>En Html:</i>
```html
<p>Hola {{ nombre }}, bienvenido a mi página.</p>
```
<i>En Typescript:</i>
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html'
})
export class EjemploComponent {
  nombre = 'Juan';
}
```
En este ejemplo, se utiliza la interpolación para mostrar el valor de la propiedad "nombre" en la vista HTML. <mark style="background: #D2B3FFA6;">Cuando se renderiza la vista, la interpolación se resuelve y se muestra el valor de la propiedad</mark> "nombre" en la cadena "Hola Juan, bienvenido a mi página".
````
``````


````ad-tip
title: Regresar una función
collapse:
La interpolación también se puede utilizar para mostrar valores de expresiones y funciones en la vista HTML. Por ejemplo:
```html
<p>Tu edad actual es {{ edad }} años.</p>
<p>Tu edad en un año será {{ calcularEdadEnUnAnio() }} años.</p>

```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html'
})
export class EjemploComponent {
  edad = 25;

  calcularEdadEnUnAnio() {
    return this.edad + 1;
  }
}

```
En este ejemplo, se utiliza la interpolación para mostrar el valor de la propiedad "edad" y el valor de la función "calcularEdadEnUnAnio" en la vista HTML. La función se llama dentro de la interpolación y su valor se muestra en la vista.
````

``````ad-tip
title: Safe Navegator Operator ?
collapse:
Es una característica de TypeScript y Angular que permite evitar errores de referencia nula en el código.

El operador de navegación segura se representa con un signo de interrogación "<b>?</b>" y se coloca después de un objeto o propiedad que podría ser nulo o indefinido. <mark style="background: #BBFABBA6;">Si el objeto o propiedad es nulo o indefinido, el operador de navegación segura devuelve automáticamente un valor nulo en lugar de lanzar un error.</mark>

````ad-example
collapse:
Por ejemplo, supongamos que se tiene una clase de componente con una propiedad "usuario" que puede ser nula, y se quiere mostrar el nombre del usuario en la vista HTML. En lugar de acceder directamente a la propiedad "nombre" del objeto "usuario", se utiliza el operador de navegación segura para evitar errores de referencia nula:

```html
<p>Nombre del usuario: {{ usuario?.nombre }}</p>
```
```typescript
import { Component } from '@angular/core';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html'
})
export class EjemploComponent {
  usuario: Usuario | null = null;
}
```
Si el objeto "usuario" es nulo, la expresión "{{ usuario?.nombre }}" devuelve automáticamente un valor nulo en lugar de lanzar un error.
````
El operador de navegación segura <mark style="background: #BBFABBA6;">es especialmente útil en situaciones en las que se trabaja con datos asincrónicos, como respuestas de API o valores de entrada de usuario, que pueden tardar un tiempo en estar disponibles.</mark> En lugar de verificar constantemente si los objetos o propiedades son nulos o indefinidos, se puede utilizar el operador de navegación segura para evitar errores y simplificar el código.
``````