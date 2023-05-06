
`button-CloseH2` `button-CloseH3`
# React.memo
````ad-info
title: Index
```toc
```
````

``````ad-abstract
React.memo es una función que recibe un componente como argumento y devuelve otro componente memoizado. <mark style="background: #D2B3FFA6;">Un componente memoizado es aquel que solo se re-renderiza cuando alguna de sus props cambia</mark>. De esta forma, se puede mejorar el rendimiento de la aplicación al evitar re-renderizados innecesarios.

React.memo se basa en una comparación superficial de las props del componente. Esto significa que <mark style="background: #D2B3FFA6;">solo compara las referencias de las props, no sus valores</mark>. Por ejemplo, si una prop es un objeto o un array, React.memo no detectará si sus propiedades o elementos cambian, solo si la referencia al objeto o array cambia. Por lo tanto, se recomienda usar props simples o inmutables con React.memo. [[#¿Comó usar las referencias y no sus valores]]

`````ad-example
title: Ejemplo de uso de React.memo
Tenemos un componente padre que recibe un contador como prop y lo pasa a un componente hijo que lo muestra. El componente padre también tiene un botón que incrementa el contador.
```js
import React, { useState } from 'react';

// Componente hijo que muestra el contador
function Child({ count }) {
  console.log('Render Child');
  return <p>El contador vale {count}</p>;
}

// Componente padre que pasa el contador al hijo
function Parent() {
  const [count, setCount] = useState(0);

  console.log('Render Parent');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
	      Incrementar
      </button>
      <Child count={count} />
    </div>
  );
}

```

Cada vez que hacemos clic en el botón, se re-renderizan tanto el componente padre como el hijo. Esto es porque el componente hijo recibe una nueva prop cada vez que cambia el contador.

Para evitar este re-renderizado innecesario del componente hijo, podemos usar React.memo para memoizarlo. De esta forma, solo se re-renderizará si la prop count cambia.
```js
import React, { useState } from 'react';

// Componente hijo memoizado que muestra el contador
const Child = React.memo(function Child({ count }) {
  console.log('Render Child');
  return <p>El contador vale {count}</p>;
});

// Componente padre que pasa el contador al hijo
function Parent() {
  const [count, setCount] = useState(0);

  console.log('Render Parent');

  return (
    <div>
	    <button onClick={() => setCount(count + 1)}>
	      Incrementar
		</button>
	    <Child count={count} />
    </div>
  );
}

```
`````


``````
### ¿Comó usar las referencias y no sus valores?
Imagina que tienes un componente que recibe una prop que es un objeto con dos propiedades: name y age. Por ejemplo:
```js TI:"Componente Person que recibe un prop"
import React from 'react';

// Componente que recibe un objeto como prop
function Person({ person }) {
  return (
    <div>
      <p>Nombre: {person.name}</p>
      <p>Edad: {person.age}</p>
    </div>
  );
}

```
Ahora imagina que quieres memoizar este componente con React.memo para evitar re-renderizados innecesarios. Por ejemplo:
```js TI:"Componente memoizado" HL:"4"
import React from 'react';

// Componente memoizado que recibe un objeto como prop
const Person = React.memo(function Person({ person }) {
  return (
    <div>
      <p>Nombre: {person.name}</p>
      <p>Edad: {person.age}</p>
    </div>
  );
});

```
El problema es que <mark style="background: #D2B3FFA6;">React.memo solo compara las referencias de las props, no sus valores. Esto significa que si cambias alguna propiedad del objeto person, pero mantienes la misma referencia al objeto, React.memo no se dará cuenta y no re-renderizará el componente. </mark>Por ejemplo:
```js TI:"Modificar objeto directamente" HL:"19,21"
import React, { useState } from 'react';

const Person = React.memo(function Person({ person }) {
  return (
    <div>
      <p>Nombre: {person.name}</p>
      <p>Edad: {person.age}</p>
    </div>
  );
});

function App() {

  const [person, setPerson] = useState({
    name: 'Juan',
    age: 25,
  });

  // Función para cambiar el nombre del objeto person
  function changeName() {
    // Modificamos el objeto person directamente
    person.name = 'Ana';
    // Actualizamos el estado con la misma referencia al objeto
    setPerson(person);
  }

  return (
    <div>
      <button onClick={changeName}>Cambiar nombre</button>
      <Person person={person} />
    </div>
  );
}

```

Si ejecutamos este código, veremos que al hacer clic en el botón, el nombre del objeto person cambia, pero el componente Person no se re-renderiza y sigue mostrando el nombre anterior. Esto es porque <mark style="background: #D2B3FFA6;">React.memo solo compara la referencia al objeto person, que sigue siendo la misma, y no sus propiedades.</mark>

<mark style="background: #D2B3FFA6;">Para solucionar este problema, se recomienda usar props simples o inmutables con React.memo. Una prop simple es aquella que tiene un tipo de dato primitivo, </mark>como un número, una cadena o un booleano. Una prop inmutable es aquella que no se modifica directamente, sino que se crea una copia con los cambios. Por ejemplo:
```js HL:"19-21,24"
import React, { useState } from 'react';

// Componente memoizado que recibe un objeto como prop
const Person = React.memo(function Person({ person }) {
  return (
    <div>
      <p>Nombre: {person.name}</p>
      <p>Edad: {person.age}</p>
    </div>
  );
});

function App() {
  const [person, setPerson] = useState({
    name: 'Juan',
    age: 25,
  });

  // Función para cambiar el nombre del objeto person
  function changeName() {
    // Creamos una copia del objeto person con el nuevo nombre
    const newPerson = {
      ...person,
      name: 'Ana',
    };
    // Actualizamos el estado con la nueva referencia al objeto
    setPerson(newPerson);
  }

  return (
    <div>
      <button onClick={changeName}>Cambiar nombre</button>
      <Person person={person} />
    </div>
  );
}

```
Si ejecutamos este código, veremos que ahora al hacer clic en el botón, el nombre del objeto person cambia y el componente Person se re-renderiza correctamente. Esto es porque React.memo detecta que la referencia al objeto person ha cambiado y por lo tanto sus propiedades también.
