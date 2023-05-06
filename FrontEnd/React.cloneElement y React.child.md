
`button-CloseH2` `button-CloseH3`
# React.cloneElement y React.child
````ad-info
title: Index
```toc
```
````

## React.cloneElement

React.cloneElement es una función que nos permite clonar un elemento de React y modificar sus props. Esto es útil cuando queremos reutilizar un componente y cambiar algunos de sus atributos sin afectar al original.

La sintaxis de React.cloneElement es la siguiente:

```jsx
React.cloneElement(elemento, [nuevasProps], [...hijos])
```

- |  `elemento`: el elemento de React que queremos clonar. Puede ser un componente funcional o de clase, o un elemento HTML.
- ||  `nuevasProps`: un objeto con las props que queremos modificar o añadir al elemento clonado. Si no se especifica, se mantienen las mismas props que el elemento original.
- |  `hijos`: los elementos hijos que queremos renderizar dentro del elemento clonado. Si no se especifican, se mantienen los mismos hijos que el elemento original.

Veamos un ejemplo de cómo usar React.cloneElement:

```jsx TI:"Ejemplo React.cloneElement" HL:"12"
// Definimos un componente Boton que recibe una prop color y renderiza un botón con ese color de fondo
function Boton(props) {
  return <button style={{ backgroundColor: props.color }}>{props.children}</button>;
}


function App() {
  // Creamos un elemento Boton con color rojo y texto "Hola"
  const botonRojo = <Boton color="red">Hola</Boton>;

  // Clonamos el elemento Boton y le cambiamos el color a verde y el texto a "Adiós"
  const botonVerde = React.cloneElement(botonRojo, { color: "green", children: "Adiós" });

  // Renderizamos los dos botones
  return (
    <div>
      {botonRojo}
      {botonVerde}
    </div>
  );
}
```

El resultado sería algo así:

<button style=“background-color: red”>Hola</button> 
<button style=“background-color: green”>Adiós</button>

Como vemos, React.cloneElement nos permite crear una copia del elemento Boton y modificar sus props sin afectar al original.

## React.child

React.child es una propiedad que nos permite acceder a los elementos hijos de un componente de React. Esto es útil cuando queremos manipular o renderizar los hijos de un componente de forma dinámica.

La sintaxis de React.child es la siguiente:

```jsx
React.child.propiedad
```

- &  `propiedad`: la propiedad que queremos usar para acceder a los hijos. Algunas propiedades comunes son:
    
    - |   `React.child.count`: nos devuelve el número de hijos que tiene un componente.
    - ||  `React.child.map`: nos permite iterar sobre los hijos de un componente y aplicarles una función.
    - |  `React.child.toArray`: nos convierte los hijos de un componente en un array.
    - ||  `React.child.only`: nos devuelve el único hijo de un componente. Si el componente tiene más de un hijo o ninguno, lanza un error.

Veamos un ejemplo de cómo usar React.child:

```jsx TI:"Ejemplo React.child" HL:"17"
// Definimos un componente Lista que recibe una prop items y renderiza una lista con esos items
function Lista(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}


function App() {
  // Creamos un elemento Lista con tres items: "A", "B" y "C"
  const listaABC = <Lista items={["A", "B", "C"]} />;

  // Usamos React.child.count para obtener el número de hijos de la lista
  const numeroHijos = React.child.count(listaABC);

  // Usamos React.child.map para añadir un punto a cada hijo de la lista
  const listaABCConPunto = React.child.map(listaABC, (hijo) => {
    // Clonamos el hijo y le añadimos un punto al final de su texto
    return React.cloneElement(hijo, { children: hijo.props.children + "." });
  });

  // Renderizamos la lista original y la lista modificada
  return (
    <div>
      {listaABC}
      {listaABCConPunto}
    </div>
  );
}
```

## Ejemplo React.Childen y React.cloneElement

Tenemos el siguiente código que define dos componentes: **RadioGroup** y **RadioOption**. Estos componentes sirven para crear un grupo de opciones de radio que el usuario puede seleccionar.
```js TI:"Codigo raíz App.js usando RadioGroup y Radiooption" HL:"10-16" "FOLD"
import "./App.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;
```

```js TI:"Componente RadioGroup y RadioOption"
import * as React from "react";
import "./styles.css";
export const RadioGroup = ({ onChange, selected, children }) => { 
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, { 
	    onChange, 
	    checked: child.props.value === selected });
  });

  return <div className="RadioGroup">{RadioOptions}</div>;
};
export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element

  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
```

#### Explicación del código

- | El componente **RadioGroup** recibe tres props: **onChange**, **selected** y **children**. El prop **onChange** es una función que se ejecuta cuando el usuario cambia la opción seleccionada. El prop **selected** es el valor de la opción que está seleccionada actualmente. El prop **children** son los elementos hijos que se pasan al componente, en este caso, los componentes **RadioOption**.
>```jsx
>export const RadioGroup = ({ onChange, selected, children }) => {
 > // ...
>};
>```


- || El componente **RadioGroup** usa la función `React.Children.map` para iterar sobre los elementos hijos y clonarlos con la función `React.cloneElement`. Esta función permite modificar las props de los elementos hijos sin alterarlos directamente, ya que las props son inmutables en React. 
>Al clonar los elementos hijos, se les pasa dos props adicionales: **onChange** y **checked**. El prop **onChange** es el mismo que recibe el componente **RadioGroup**, y el prop **checked** es un booleano que indica si la opción está seleccionada o no. 
>Para determinar el valor de **checked**, se compara el prop **value** de cada elemento hijo con el prop **selected** del componente **RadioGroup**.
>```jsx
>export const RadioGroup = ({ onChange, selected, children }) => {
 > // Usa React.Children.map y React.cloneElement para clonar los hijos
>  // y pasarles las props correctas a cada RadioOption
>  const RadioOptions = React.Children.map(children, (child) => {
>    return React.cloneElement(child, {
>      onChange,
>      checked: child.props.value === selected
>    });
>  });
>
>  return <div className="RadioGroup">{RadioOptions}</div>;
>};
>```

- | El componente **RadioOption** recibe cuatro props: **value**, **checked**, **onChange** y **children**. 
	El prop **value** es el valor de la opción, que debe ser único dentro del grupo. El prop **checked** es el booleano que indica si la opción está seleccionada o no. El prop **onChange** es la función que se ejecuta cuando el usuario cambia la opción seleccionada. El prop **children** es el contenido que se muestra junto al input de tipo radio.
>```jsx
>export const RadioOption = ({ value, checked, onChange, children }) => {
>  // ...
>};
>```

- || El componente **RadioOption** usa un elemento `<input>` de tipo radio para representar la opción. Al elemento `<input>` se le pasan las props **id**, **type**, **name**, **value**, **checked** y **onChange**. 
>La prop **id** es igual al prop  **value**, para asociar el input con el elemento `<label>` correspondiente. 
>La prop **type** es `"radio"`, para indicar que se trata de una opción de radio. 
>La prop **name** es igual al prop **value**, para agrupar las opciones de radio bajo el mismo nombre. 
>La prop **value** es igual al prop **value**, para asignarle un valor a la opción. 
>La prop **checked** es igual al prop **checked**, para indicar si la opción está seleccionada o no. 
>La prop **onChange** es una función que llama al prop **onChange** pasándole el prop **value**, para actualizar el estado del componente padre.
>```js
>export const RadioOption = ({ value, checked, onChange, children }) => {
>  // Conecta el manejador onChange para llamar al prop onChange pasado a RadioGroup
  >// También, asegúrate de pasar la prop correcta checked al elemento input
  >return (
>    <div className="RadioOption">
>      <input
>        id={value}
>        type="radio"
>        name={value}
>        value={value}
>        checked={checked}
>        onChange={(e) => {
>          onChange(e.target.value);
>        }}
>      />
>      // ...
>    </div>
>  );
>};
>```