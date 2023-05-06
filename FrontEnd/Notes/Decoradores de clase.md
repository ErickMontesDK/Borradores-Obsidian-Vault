<i class="time"></i>
<div class="head"><h1>Decoradores de clase</h1></div>

````ad-abstract
Los decoradores de clase son funciones que se aplican a una clase y se usan para modificar o anotar su comportamiento. 

Los decoradores de clase se definen usando la sintaxis  seguido de la clase que se está decorando. 

Los decoradores de clase se ejecutan en tiempo de carga, lo que significa que se ejecutan antes de que se creen las instancias de la clase. Ten esto en cuenta al utilizar propiedades o métodos que dependen de la instancia.
````
``````ad-example
collapse:
```typescript
function logClass(target: any) {
  console.log(`Clase ${target.name} creada.`);
  console.log(`El valor de la propiedad estática 'foo' es: ${target.foo}`);
  target.staticMethod();
}

class MiClase {
  static foo = 'bar';

  static staticMethod() {
    console.log('Método estático llamado.');
  }
}

@logClass
class OtraClase extends MiClase {
  constructor() {
    super();
    console.log('Instancia de la clase OtraClase creada.');
  }
}

```
````ad-bug
title: Console
```
Clase MiClase creada.
```
````
``````

`````ad-info
title: ¿Qué es target y como modificar la class?
En TypeScript, <b>target</b> es un parámetro especial que se utiliza en los decoradores de clases para <mark style="background: #ABF7F7A6;">hacer referencia a la propia clase que se está decorando.</mark> 

El parámetro <b>target</b>  en un decorador de clase es una referencia al constructor de la clase que está siendo decorada.
````ad-warning
title: Acceder a métodos y propiedades ESTÁTICOS
collapse:
Puedes acceder a las propiedades estáticas y métodos estáticos de la clase utilizando <b>target</b>
```typescript
function logClass(target: any) {
	console.log(`Clase ${target.name} creada.`);
	console.log(`El valor de la propiedad estática 'foo' es: ${target.foo}`);
	target.staticMethod();
}

@logClass
class MiClase {
	static foo = 'bar';
	static staticMethod() {
	console.log('Método estático llamado.');
	}
}
```
````ad-bug
title: Console
```
Clase MiClase creada.
El valor de la propiedad estática 'foo' es: bar
Método estático llamado.
```
````


````ad-warning
title: Agregar o acceder a  métodos y propiedades EN GENERAL
collapse:
Puedes acceder al prototipo de la clase utilizando <B>target.prototype</B>.
Igualmente puedes agregar métodos y propiedades adicionales a la instancia de la clase utilizando el prototipo.

Por ejemplo, puedes agregar un método estático a la clase utilizando target. También puedes agregar propiedades adicionales a la clase utilizando el constructor.

<b>Importante el uso de <mark style="background: #ABF7F7A6;">target.prototype</mark> para asignar estos valores y métodos</b>

```typescript
//Interface para que reconozca que tiene estos métodos
interface MiClaseDecorada extends MiClase {
  newProperty: string;
  staticMethod(): void;
}

//Decorador
function addMethod(target: any) {
//Agrega método
  target.prototype.staticMethod = function() {
    console.log('Método estático añadido.');
  };
//Agrega propiedad
  target.prototype.newProperty = 'Valor de la nueva propiedad.';
}

@addMethod
class MiClase {
  constructor() {
    console.log('Instancia de la clase MiClase creada.');
  }
}

const miInstancia = new MiClase() as MiClaseDecorada;
// "Valor de la nueva propiedad."
console.log(miInstancia.newProperty); 
// "Método estático añadido."
miInstancia.staticMethod(); 

```
````
`````
