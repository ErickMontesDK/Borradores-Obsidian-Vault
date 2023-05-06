
`button-CloseH2` `button-CloseH3`
# Eventos sintéticos
````ad-info
title: Index
```toc
```
````

````ad-abstract
Son objetos que envuelven los eventos nativos del navegador y tienen la misma interfaz. 
Los eventos de React no funcionan exactamente igual que los eventos nativos.

Hay muchos tipos de eventos sintéticos en React, según el tipo de elemento o acción que los dispara.

Para usar estos eventos en React, debes seguir las siguientes convenciones:

- |   Los eventos de React se nombran usando camelCase, en vez de minúsculas. Por ejemplo, `onClick` en vez de `onclick`.
- ||   Con JSX pasas una función como el manejador del evento, en vez de una cadena. Por ejemplo, `<button onClick={handleClick}>` en vez de `<button onclick="handleClick()">`.
- |  No puedes retornar `false` para prevenir el comportamiento por defecto. Debes llamar explícitamente a `preventDefault`. Por ejemplo, `<form onSubmit={(e) => e.preventDefault()}>` en vez de `<form onsubmit="return false">`.
- ||  Las funciones que pasas a los eventos deben ser pasadas, no llamadas. Por ejemplo, `<button onClick={handleClick}>` en vez de `<button onClick={handleClick()}>`. 
>La diferencia es que en el primer caso, la función `handleClick` se pasa como una referencia y solo se ejecuta cuando ocurre el evento. En el segundo caso, la función `handleClick` se ejecuta inmediatamente durante el renderizado y su resultado se pasa al evento.
````

## Lista eventos sinteticos
#### onChange
El evento `onChange` se dispara cuando el valor de un elemento cambia, es decir, cuando el usuario modifica el contenido de un input, por ejemplo. Este evento se puede usar para actualizar el estado del componente React que renderiza el elemento, o para hacer otras acciones con el valor.
```js TI:"onChange" HL:"21,8"
import React from "react";

function Form() {
  // Usamos el hook useState para guardar el valor del input
  const [email, setEmail] = React.useState("");

  // Definimos una función que se ejecuta cuando el input cambia
  const handleChange = (e) => {
    const value = e.target.value;
    // Actualizamos el estado con el nuevo valor
    setEmail(value);
    console.log("El email es: " + value);
  };

  return (
    <div>
      <h1>Simple form</h1>
      <form>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

```

#### onBlur
El evento `onBlur` se dispara cuando un elemento pierde el foco, es decir, cuando el usuario deja de interactuar con él. Este evento se puede usar para hacer validaciones o acciones cuando el usuario termina de introducir un dato en un input, por ejemplo.
```js TI:"onBlur" HL:"24,7"
import React from "react";

function Form() {
  const [name, setName] = React.useState("");

  // Definimos una función que se ejecuta cuando el input pierde el foco
  const handleBlur = (e) => {
    const value = e.target.value;
    // Hacemos alguna validación o acción con el valor
    if (value.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres");
    } else {
      alert("El nombre es válido");
    }
  };

  return (
    <div>
      <h1>Simple form</h1>
      <form>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleBlur}
        />
      </form>
    </div>
  );
}

```

#### onFocus
onFocus es un evento sintético de React que se dispara cuando un elemento recibe el foco, es decir, cuando el usuario empieza a interactuar con él. Este evento se puede usar para hacer acciones cuando el usuario entra en un input, por ejemplo.
```js HL:"8,21", TI:"onFocus"
import React from "react";

function Form() {
  // Usamos el hook useState para guardar el valor del input
  const [email, setEmail] = React.useState("");

  // Definimos una función que se ejecuta cuando el input recibe el foco
  const handleFocus = (e) => {
    // Obtenemos el valor del input
    const value = e.target.value;
    console.log("El email es: " + value);
  };

  return (
    <div>
      <h1>Simple form</h1>
      <form>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={handleFocus}
        />
      </form>
    </div>
  );
}

```