<i class="time"></i>
<div class="head"><h1>Angular components</h1></div>

````ad-abstract
En Angular, un componente es <mark style="background: #ABF7F7A6;">una parte reutilizable y modular de la interfaz de usuario de una aplicación</mark>. Cada componente tiene su propio controlador y vista, que están definidos en un archivo TypeScript y un archivo HTML respectivamente. El controlador se encarga de manejar la lógica y la funcionalidad del componente, mientras que la vista define cómo se renderiza el componente en la interfaz de usuario.

Un componente en Angular se compone de los siguientes elementos:

1.  <mark style="background: #ABF7F7A6;">**Clase de componente**: Una clase de TypeScript que define la lógica del componente, como propiedades, métodos y eventos.</mark> La clase de componente está decorada con el decorador "@Component" y se define en un archivo TypeScript.
    
2.  <mark style="background: #ABF7F7A6;">**Plantilla de componente**: Un archivo HTML que define la vista del componente.</mark> La plantilla de componente utiliza enlaces de datos para mostrar y actualizar las propiedades de la clase de componente en la interfaz de usuario.
    
3.  <mark style="background: #ABF7F7A6;">**Metadatos de componente**: Un objeto que describe las características del componente, como el selector de componente, las rutas de componente y los estilos CSS del componente.</mark> Los metadatos del componente se definen utilizando el decorador "@Component".
````

`````ad-example
<b>Clase de componente y metadatos</b>
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent {
  titulo = 'Mi componente';

  cambiarTitulo() {
    this.titulo = 'Nuevo título';
  }
}
```

<b>Plantilla HTML</b>
```html
<h1>{{ titulo }}</h1>
<button (click)="cambiarTitulo()">Cambiar título</button>
```
`````
