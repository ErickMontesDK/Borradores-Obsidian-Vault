<i class="time"></i>
<div class="head"><h1>Decoradores de metodo</h1></div>

````ad-abstract
Los decoradores de método en TypeScript son funciones que se aplican a los métodos de una clase para extender, modificar o alterar su comportamiento. 
Al igual que los [[Decoradores de clase]], los decoradores de método se definen con la sintaxis <b>@nombreDecorador</b> encima del método que se desea decorar.

Los decoradores de método pueden ser utilizados para <mark style="background: #ABF7F7A6;">realizar acciones antes o después de la ejecución del método, para interceptar y modificar los argumentos o el valor de retorno del método, o para agregar metadatos y anotaciones adicionales a un método.</mark>
````
``````ad-example
title: Example y estructura
<b>Ejemplo completo</b>
```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Antes de llamar al método ${propertyKey}`);
    const result = originalMethod.apply(this, args);
    return result;
  };

  return descriptor;
}

class MiClase {
  @log
  miMetodo() {
    console.log("Método ejecutado.");
  }
}

const instancia = new MiClase();
instancia.miMetodo(); // Imprime "Antes de llamar al método miMetodo" seguido de "Método ejecutado"

```
`````ad-tip
title: linea por linea
```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
```
Donde:
-<b>target</b> representa la clase que contiene el método decorado 
-<b>propertyKey</b> representa el nombre del método decorado
-<b>descriptor</b> describe el comportamiento del método.

```typescript
  const originalMethod = descriptor.value;
```
<b>originalMethod</b> almacena una referencia a la función original del método

```typescript
  descriptor.value = function(...args: any[]) {
```
Se modifica el método original, aqui <b>...args</b> hace referencia a los parametros que enviamos a la función, en este caso no hay ninguno

```typescript
    console.log(`Antes de llamar al método ${propertyKey}`);
    const result = originalMethod.apply(this, args);
    return result;
  };

  return descriptor;
}
```
se llama a la función original del método utilizando la función <b>[[apply]]</b> para pasarle los argumentos que se le pasaron a la función nueva. El valor de retorno de la función original se almacena en la variable <b>result</b>.

Finalmente, se devuelve el <b>descriptor</b> modificado para aplicar los cambios al método decorado. En este caso, el descriptor se modificó para reemplazar la función original del método por una nueva función que imprime un mensaje antes de la ejecución del método.
```typescript
class MiClase {
  @log
  miMetodo() {
    console.log("Método ejecutado.");
  }
}

const instancia = new MiClase();
instancia.miMetodo(); // Imprime "Antes de llamar al método miMetodo" seguido de "Método ejecutado"
```
`````
``````
