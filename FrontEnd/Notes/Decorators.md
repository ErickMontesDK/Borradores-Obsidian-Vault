<i class="time"></i>
<div class="head"><h1>Decorators</h1></div>

````ad-abstract
Los decoradores son una característica de TypeScript y JavaScript que permiten agregar metadatos o funcionalidades adicionales a clases, métodos, propiedades o parámetros de funciones.

Se definen como funciones que reciben como argumento la clase, método, propiedad o parámetro al que se aplican y devuelven el mismo objeto modificado con las nuevas funcionalidades. Por ejemplo, un decorador de método podría registrar el tiempo de ejecución de una función o realizar algún tipo de validación antes de que se ejecute.
````

``````ad-info
title: Activar decoradores
collapse:
En el archivo <b>tsconfig.json</b> tiene que estar activa la opción 
```json
{
  "compilerOptions": {
    "target": "es5",
    "experimentalDecorators": true
  }
}

```

``````

``````ad-info
title: Tipos de decoradores
The decorator function depends on which you will decorate, that's mean it doesn't get the same parameters when it is working over a class, methods or properties
`````ad-warning
title: Class
collapse:
Se aplican a una clase y se usan para modificar o anotar su comportamiento.
Los decoradores en clases toman la función constructora como parámetro, lo que significa que podemos cambiar la forma en que se inicializa la clase.
[[Decoradores de clase]]
`````
`````ad-warning
title: Methods
collapse:
Se aplican a un método y se usan para modificar o anotar su comportamiento.
Esta vez, el decorador recibe tres argumentos: <b>target, propertyKey y descriptor</b>
[[Decoradores de metodo]]
`````
`````ad-warning
title: Properties
collapse:
Se aplican a un parámetro de un método o constructor y se usan para modificar o anotar su comportamiento.
El decorador de propiedad es una función que se aplica a la declaración de propiedad en nuestras clases.
[[Decoradores de propiedades]]
`````
`````ad-warning
title: Decorator factory
collapse:
Función que devuelve un decorador. A diferencia de un decorador normal que se aplica directamente a una clase, método o propiedad, un decorator factory permite personalizar la creación del decorador.
[[Decorator factory]]
`````
``````
