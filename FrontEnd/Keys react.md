
`button-CloseH2` `button-CloseH3`
# Keys react
````ad-info
title: Index
```toc
```
````

````ad-abstract
Las keys son un atributo especial que debes incluir al crear listas de elementos en React. <mark style="background: #D2B3FFA6;">Ayudan a React a identificar qué ítems han cambiado, son agregados o son eliminados. </mark>[Las keys deben ser dadas a los elementos dentro del array para darles una identidad estable](https://es.reactjs.org/docs/lists-and-keys.html)[1](https://es.reactjs.org/docs/lists-and-keys.html).
````

#### ¿Por qué son importantes las keys?

Las keys son importantes porque permiten a React<mark style="background: #D2B3FFA6;"> optimizar el proceso de re-renderizado de los componentes. Cuando un componente muestra más de un mismo tipo de elemento, React necesita saber qué elemento es cuál para poder actualizarlo correctamente. Sin keys, React tendría que comparar cada elemento con el anterior y el siguiente,</mark> lo que sería muy costoso en términos de rendimiento. [Con keys, React puede comparar los elementos por su identidad y evitar re-renderizar los que no han cambiado](https://reactiveprogramming.io/blog/es/react/key)[2](https://reactiveprogramming.io/blog/es/react/key)[3](https://es.community.revelo.com/guia-profunda-sobre-react-key/).

#### ¿Cómo elegir una key?

La mejor forma de elegir una key es usando un string que identifique únicamente a un elemento de la lista entre sus hermanos. [Habitualmente vas a usar IDs de tus datos como key](https://es.reactjs.org/docs/lists-and-keys.html)[1](https://es.reactjs.org/docs/lists-and-keys.html). Por ejemplo:

```jsx
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```
Si no tiene un id, [lo ideal es usar una librería que te genere un UUID (identificador único universal) dinámico para cada elemento](https://reactiveprogramming.io/blog/es/react/key)[2](https://reactiveprogramming.io/blog/es/react/key).