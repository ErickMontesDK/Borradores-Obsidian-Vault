<i class="time"></i>
<div class="head"><h1>Enums</h1></div>

``````ad-abstract
Un <b>enum</b> es una forma de definir un conjunto de constantes con nombres significativos en un lenguaje de programación.
Los enum se pueden utilizar para definir opciones fijas en una aplicación

````ad-example
title:Dias de las semana
Hemos definido un enum llamado DiaDeLaSemana que contiene los días de la semana. El primer miembro, Lunes, se establece en 0 de forma predeterminada, y cada miembro posterior se incrementa en 1
```typescript
enum DiaDeLaSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo
}

let hoy: DiaDeLaSemana = DiaDeLaSemana.Miercoles;

if (hoy === DiaDeLaSemana.Miercoles) {
  console.log("¡Hoy es miércoles!");
}

```
````
````ad-example
title:Asignando valores a los miembros de un enum
collapse:
Hemos definido un enum llamado Color que contiene varios colores. Se les ha asignado un color rgb.

* Al acceder a Color.Red nos regresa el valor asignado. Color.Green no existe por lo que no está definido
* Al acceder a Color[1] nos regresa el segundo valor, #0x5000, al no existir un 7mo valor, Color[6] está indefinido 
```typescript
enum Color {
	Red= '#x20000',
	Blue = '#0x5000',
	Pink = '#0x1000',
	White= '#100'
}
let red = Color.Red //#x2000
let green = Color.Green //ERROR, it must exist

let blue=Color[1]   //#0x5000
let green= Color[6] //undefined
```
````

````ad-example
title:Enum como constante
collapse:
Cuando se define un <b>enum</b> como constante, TypeScript lo trata como un objeto inmutable en tiempo de compilación y se optimiza el código resultante al eliminar el objeto en sí y en su lugar utilizar sus valores directamente.

Hemos definido un enum llamado Language4 que contiene varios lenguajes. Se les ha asignado un numero.

* Al acceder a Lenguage4[0] nos regresa un error, ya que al definir el enum con un <b>const</b>, no podremos acceder a sus valores
* En su lugar, se debe acceder al valor directamente a través del nombre del miembro, por ejemplo, `let c = Languaje4.English`.
```typescript
const enum Languaje4{
	English=0,
	Spanish=1,
	Russian=2
}

let c = Languaje4[0]  //No se puede acceder si enum es un constante

let c = Languaje4.English //0
```
````


```ad-tip
Asegúrese de notar sobre valores numéricos y enums no constantes.
```
``````
