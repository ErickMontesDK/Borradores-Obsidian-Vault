
`button-CloseH2` `button-CloseH3`
# useRef
````ad-info
title: Index
```toc
```
````

````ad-abstract
[useRef es un Hook de React que te permite referenciar un valor que no es necesario para el renderizado](https://react.dev/reference/react/useRef)[1](https://react.dev/reference/react/useRef). [Por ejemplo, puedes usar useRef para guardar una referencia a un elemento del DOM y manipularlo directamente](https://es.react.dev/reference/react/useRef)[2](https://es.react.dev/reference/react/useRef). [También puedes usar useRef para guardar un valor que persiste entre renderizados sin provocar un re-renderizado al cambiarlo](https://keepcoding.io/blog/useref-en-react/)
````

```js HL:"8,15,26"
import React, { useRef } from 'react';

// Definir el componente que usa useRef
function FocusInput() {
  // Llamar a useRef con el valor inicial null
  // useRef devuelve un objeto con una propiedad current
  // que se puede asignar a un elemento del DOM
  const inputRef = useRef(null);

  // Definir una función que se ejecuta al hacer clic en el botón
  function handleClick() {
    // Acceder a la propiedad current de la ref
    // y llamar al método focus del elemento input
    // Esto hace que el elemento input se ponga en foco
    inputRef.current.focus();
  }

  // Renderizar el componente con la ref y el botón
  return (
    <>
      {/* Renderizar un elemento input con la propiedad ref */}
      {/* Esto hace que la propiedad current de la ref se asigne al elemento input */}
      <input ref={inputRef} type="text" />
      
      //Ejecutar la función handleClick al hacer clic en el botón 
      <button onClick={handleClick}>Focus</button>
    </>
  );
}

```

## Ventajas de useRef
useRef tiene varias ventajas para usarlo en React. Algunas de ellas son:

- |  Te permite persistir valores entre renderizados. [A diferencia de las variables normales, que se reinician en cada renderizado, las refs mantienen el mismo valor entre renderizados](https://react.dev/reference/react/useRef)[1](https://react.dev/reference/react/useRef).
- ||  Te permite cambiar el valor de una ref sin provocar un re-renderizado. [A diferencia del estado, que provoca un re-renderizado al cambiarlo, las refs son mutables y no afectan al ciclo de vida del componente](https://react.dev/reference/react/useRef)[1](https://react.dev/reference/react/useRef).
- |  Te permite acceder a un elemento del DOM directamente. Al pasar una ref como atributo a un elemento JSX, React asigna el elemento DOM a la propiedad current de la ref. [Esto te permite manipular el elemento DOM con métodos nativos](https://react.dev/reference/react/useRef)[1](https://react.dev/reference/react/useRef)[2](https://stackoverflow.com/questions/60554573/what-are-the-advantages-of-useref-instead-of-just-declaring-a-variable).
- ||  Te permite evitar la recreación del contenido de las refs. [A diferencia de las funciones inline, que se crean en cada renderizado, las refs son objetos JavaScript planos que se crean una sola vez y se devuelven en cada renderizado](https://stackoverflow.com/questions/62945951/what-are-the-advantages-for-using-useref-or-createref-rather-than-inline-ref)[3](https://stackoverflow.com/questions/62945951/what-are-the-advantages-for-using-useref-or-createref-rather-than-inline-ref).