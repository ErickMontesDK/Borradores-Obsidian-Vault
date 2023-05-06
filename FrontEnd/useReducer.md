
`button-CloseH2` `button-CloseH3`
# useReducer
````ad-info
title: Index
```toc
```
````

````ad-abstract
useReducer es un Hook que te permite manejar el estado de tu componente con una función que se llama reducer. 
<mark style="background: #D2B3FFA6;">Un reducer es una función que recibe el estado actual y una acción, y devuelve el estado nuevo</mark>. Una acción es un objeto que tiene un tipo que indica qué quieres hacer con el estado. Por ejemplo, si quieres aumentar o disminuir un contador, puedes tener acciones con tipos `increment` y `decrement`.

Para usar useReducer en tu componente, tienes que hacer lo siguiente:

- |   Definir la función reducer que tenga un switch que haga algo diferente según el tipo de acción.
>- || El primer parametro es el valor actual del state
>- | El segundo parametro es un objeto que tiene la propiedad type que indica el valor que se le va a poner al state
>```js
>function reducer(color, action) {
>	switch (action.type) {
>	case 'red':
>	  return 'red'; // Devolver el color rojo
>	case 'green':
>	  return 'green'; // Devolver el color verde
>	case 'blue':
>	  return 'blue'; // Devolver el color azul
>	default:
>	  return color; // Devolver el color actual
>	}
>	}
>```
- ||  Llamar al Hook useReducer con la función reducer y el estado inicial. El estado inicial puede ser cualquier valor, pero normalmente es un objeto con propiedades. useReducer te devuelve dos valores: el estado actual y la función dispatch.
>```js
>  // Llamar al Hook useReducer con la función reducer y el color inicial
  const [color, dispatch] = useReducer(reducer, 'white');
>```
- |   Usar la función dispatch para enviar acciones al reducer y cambiar el estado. <mark style="background: #D2B3FFA6;">La función dispatch toma un objeto con el tipo de acción como argumento.</mark> El reducer se encarga de actualizar el estado según la acción y devolver el estado nuevo.
>```js
>/* Renderizar un botón que cambia el color a rojo */
><button onClick={() => dispatch({ type: 'red' })}>Red</button>
>```
- ||  Usar el estado actual para renderizar tu componente y mostrar los datos que quieras. Cada vez que cambia el estado, se vuelve a renderizar el componente.
>```js
><div style={{ backgroundColor: color }}>
>```
````
## Estructura de useReducer

```js HL:"4-14,20,24,26,28,30"
import React, { useReducer } from 'react';

// Definir la función reducer que recibe el color y la acción
function reducer(color, action) {
  switch (action.type) {
    case 'red':
      return 'red'; // Devolver el color rojo
    case 'green':
      return 'green'; // Devolver el color verde
    case 'blue':
      return 'blue'; // Devolver el color azul
    default:
      return color; // Devolver el color actual
  }
}

// Definir el componente que usa el reducer
function ColorButton() {
  // Llamar al Hook useReducer con la función reducer y el color inicial
  const [color, dispatch] = useReducer(reducer, 'white');

  // Renderizar el componente con el color y el dispatch
  return (
    <div style={{ backgroundColor: color }}>
      {/* Renderizar un botón que cambia el color a rojo */}
      <button onClick={() => dispatch({ type: 'red' })}>Red</button>
      {/* Renderizar un botón que cambia el color a verde */}
      <button onClick={() => dispatch({ type: 'green' })}>Green</button>
      {/* Renderizar un botón que cambia el color a azul */}
      <button onClick={() => dispatch({ type: 'blue' })}>Blue</button>
    </div>
  );
}


```