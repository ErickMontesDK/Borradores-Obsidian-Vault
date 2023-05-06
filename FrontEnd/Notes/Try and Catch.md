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

<div class="head"><h1>Try and Catch</h1></div>

Try y catch son palabras clave que se usan para manejar las excepciones en JS. 

<mark style="background: #ABF7F7A6;">Una excepción es un error o una situación anormal que ocurre durante la ejecución de un programa y que puede interrumpir su flujo normal. </mark>

Por ejemplo, una excepción puede ser tratar de acceder a un elemento de un arreglo que no existe, o tratar de convertir una cadena de texto a un número cuando no es posible.

+ | El bloque try contiene el código que se quiere probar y que puede lanzar una excepción. 
+ | El bloque catch contiene el código que se quiere ejecutar si se captura una excepción en el bloque try. Recibe como parámetro un objeto que representa la excepción capturada y que contiene información sobre el tipo y el mensaje de error
```js TI:"Try and Catch" 
try {
	// Código que se quiere probar
	let numero = Number("abc");
	
	if (isNaN(numero)) {
		throw new Error("No es un número válido");
	}
	
} catch (error) {
	// Código que se quiere ejecutar si se captura una excepción
  console.log("Ha ocurrido un error: " + error.message);
}

```