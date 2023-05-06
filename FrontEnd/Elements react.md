
`button-CloseH2` `button-CloseH3`
# Elements react
````ad-info
title: Index
```toc
```
````

````ad-abstract
Los componentes y los elementos son dos conceptos diferentes en React. A veces se usan de forma intercambiable, pero tienen significados distintos.

<mark style="background: #D2B3FFA6;">Un componente es una función o una clase que hace algo y devuelve algo para mostrar en la pantalla. Ese algo que devuelve se llama elemento.</mark> Un componente puede tener variables y hacer cosas cuando cambia algo en la pantalla. Un componente se escribe con mayúscula y se puede usar como si fuera una etiqueta HTML

<mark style="background: #D2B3FFA6;">Un elemento es un objeto que dice cómo se ve algo en la pantalla. Un elemento puede ser una etiqueta HTML o un componente.</mark> Un elemento tiene propiedades como el tipo, los atributos y el contenido. Un elemento no puede tener variables ni hacer cosas cuando cambia algo en la pantalla. Un elemento se escribe con minúscula o con el nombre de un componente.
<mark style="background: #D2B3FFA6;">Un elemento es solo una forma de representar el resultado final HTML como un objeto</mark>
````
## [[Componentes React  | Componentes]]
```js TI:"Componentes"
// Definir un componente como una función
function Button(props) {
  // El componente puede tener variables y hacer cosas
  // ...

  // El componente devuelve un elemento para mostrar en la pantalla
  return (
    <button onClick={() => setCount(count + 1)}>
      {props.text} {count}
    </button>
  );
}

// Usar el componente como una etiqueta HTML
<Button text="Click me" />

```

## Elementos
```js TI:"Elementos" HL:"5-10,16-20"
// Definir un elemento como una etiqueta HTML
<div id="container">Hello</div>

// El elemento es un objeto con estas propiedades
{
  type: "div",
  props: {
    id: "container",
    children: "Hello"
  }
}

// Definir un elemento con el nombre de un componente
<Button text="Click me" />

// El elemento es un objeto con estas propiedades
{
  type: Button,
  props: {
    text: "Click me"
  }
}

```