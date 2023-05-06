<i class="time"></i>
<div class="head"><h1>Decoradores de propiedades</h1></div>

````ad-abstract
Un decorador de propiedad es una función que se utiliza para modificar la definición de una propiedad en una clase. Los decoradores de propiedad se colocan directamente encima de la definición de la propiedad que se va a modificar, utilizando el prefijo  <b>@</b>.
````
````ad-example
```typescript
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

class MiClase {
  @enumerable(false)
  get prop1() { return 10; }

  @enumerable(true)
  get prop2() { return 20; }
}

```
````
