
`button-CloseH2` `button-CloseH3`
# Componetes especializados
````ad-info
title: Index
```toc
```
````

````ad-abstract
[La especialización de componentes en React es una técnica que consiste en crear componentes más específicos a partir de componentes más generales, aprovechando la composición de componentes](https://www.coursera.org/courses?query=react)[1](https://www.coursera.org/courses?query=react). La idea es que los componentes generales definan la estructura y el comportamiento común, y los componentes específicos personalicen los detalles y las variaciones. De esta manera, se puede reutilizar el código y evitar la duplicación.

````
Un ejemplo de especialización de componentes es el siguiente:
```js
// Componente general que define un botón
const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

// Componente específico que define un botón de color rojo
const RedButton = ({ onClick, children }) => {
  return <Button onClick={onClick} style={{ backgroundColor: "red" }}>{children}</Button>;
};

// Componente específico que define un botón de color verde
const GreenButton = ({ onClick, children }) => {
  return <Button onClick={onClick} style={{ backgroundColor: "green" }}>{children}</Button>;
};

// Componente que usa los componentes RedButton y GreenButton
const App = () => {
  return (
    <div>
      <RedButton onClick={() => console.log("Red")}>Red</RedButton>
      <GreenButton onClick={() => console.log("Green")}>Green</GreenButton>
    </div>
  );
};

```
