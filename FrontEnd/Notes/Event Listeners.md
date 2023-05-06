```button
name Contraer H2
type command
action Creases: Toggle fold for H2
color blue
```
^button-04bt

```button
name Contraer H3
type command
action Creases: Toggle fold for H3
color red
```
^button-f4lw

<div class="head"><h1>Event Listeners</h1></div>

````ad-abstract
[Los eventos de JS son sucesos que ocurren cuando el usuario interactúa con la página web o cuando se produce algún cambio en el estado de la aplicación (afectando el[[DOM]])](https://uniwebsidad.com/libros/javascript/capitulo-6/modelo-basico-de-eventos-2)[1](https://uniwebsidad.com/libros/javascript/capitulo-6/modelo-basico-de-eventos-2). 

[Los eventos permiten ejecutar código JS en respuesta a estas situaciones, usando funciones llamadas manejadores o listeners](https://www.arkaitzgarro.com/javascript/capitulo-15.html)[2](https://www.arkaitzgarro.com/javascript/capitulo-15.html). 

Hay muchos tipos de eventos de JS según el tipo de interacción o cambio que se produce. Algunos de los más comunes son:
>Eventos de ratón, teclado, formulario, ventana, tiempo, etc

+ | Para usar los eventos de JS, se puede usar el atributo HTML correspondiente al evento, precedido por el prefijo on.
+ || También se puede usar el método addEventListener del objeto que representa al elemento sobre el que se quiere escuchar el evento.

```html TI:"event listeners" HL:"4"
<!--Usando el atributo html-->
<button 
	id="boton" 
	onclick="alert('Hola')">Haz click aquí
</button>
```
```js
// Usando el método addEventListener
  boton.addEventListener("click", function() {
    alert("Has hecho click en el botón");
  });
```

````
