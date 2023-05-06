<i class="time"></i>
<div class="head"><h1>POO: Classes</h1></div>

````````ad-abstract
title:## Classes
Las clases <mark style="background: #ABF7F7A6;">son una plantilla para crear objetos. 
Encapsulan datos con código para trabajar en esos datos. </mark>
Las clases en JS se basan en prototipos, pero también tienen una sintaxis y una semántica que no se comparten con la semántica similar a la clase de ES5.

Las clases son, de hecho, "funciones especiales", y así como puede definir expresiones de función y declaraciones de función, <mark style="background: #ABF7F7A6;">la sintaxis de clase tiene dos componentes: expresiones de clase y declaraciones de clase.</mark>

```ad-warning
collapse:
title: ### Class declarations
One way to define a class is using a **class declaration**. To declare a class, you use the **class** keyword with the name of the class ("Rectangle" here).
```js
class Rectangle {
	constructor(height, width){
		this.height = height;
		this.width = width;
	}
}
```
`````ad-warning
collapse:
title: ### Class Expressions
A **class expression** is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. However, it can be accessed via the **name** property.
```js
//unnamed
let Rectangle = class {
	constructor (height, width){
		this.height = height;
		this. width= width;
	}
};
console. log ( Rectangle.name ) ;
// output; - Rectangle-

//named
let Rectangle2 = class Rectangle2 {
	constructor ( helght, width){
		this.height = height;
		this.width = width;
	}
};
console.log ( Rectangle2.name);
// output: - RectangIe2*
```
`````

````````

