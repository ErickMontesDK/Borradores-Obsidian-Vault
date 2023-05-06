
`button-CloseH2` `button-CloseH3`
# Render Props
````ad-info
title: Index
```toc
```
````

````ad-abstract
<mark style="background: #ABF7F7A6;">Las render props son una técnica en React para compartir código entre componentes usando una prop cuyo valor es una función¹</mark>. Un componente con una render prop recibe una función que devuelve un elemento de React y la llama en lugar de implementar su propia lógica de renderizado¹.

<mark style="background: #ABF7F7A6;">Las render props se usan para extender o modificar el comportamiento de un componente sin alterarlo directamente.</mark> Por ejemplo, se puede usar una render prop para añadir funcionalidades como manejo de estado, manejo de eventos, suscripción a fuentes de datos, inyección de props, etc. De esta manera, se puede separar la lógica transversal de la lógica específica de cada componente¹.

````
Un ejemplo sencillo de cómo usar una render prop es el siguiente:
- | Definir un componente que recibe una prop llamada `render` cuyo valor es una función. Este componente define la lógica común que queremos compartir con otros componentes. Por ejemplo:

```jsx TI:"Definir componente que recibe un render prop" HL:"2,12"
// Definir un componente que recibe una prop llamada render cuyo valor es una función
const Counter = ({ render }) => {
  // Definir un estado para llevar el conteo de clics
  const [count, setCount] = useState(0);

  // Definir un método para incrementar el conteo
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Llamar a la función render pasándole el estado y el método como argumentos
  return render(count, incrementCount);
};
```

En este ejemplo, hemos definido un componente llamado `Counter` que recibe una prop llamada `render`. El componente define un estado y un método para llevar el conteo de clics. El componente llama a la función `render` pasándole el estado y el método como argumentos.

- || Definir otro componente que usa el componente anterior pasándole una función como prop `render`. Esta función define cómo se quiere renderizar el componente anterior. Por ejemplo:

```jsx TI:"Definir componente que pasa el render prop" HL:"5-12"
// Definir otro componente que usa el componente Counter pasándole una función como prop render
const App = () => {
  return (
    <div>
      <h1>Render prop example</h1>
      <Counter
        // Pasar una función como prop render
        render={(count, incrementCount) => (
          // Definir cómo se quiere renderizar el componente Counter
          <div>
            <button onClick={incrementCount}>Click me</button>
            <p>You clicked {count} times</p>
          </div>
        )}
      />
    </div>
  );
};
```

En este ejemplo, hemos definido un componente llamado `App` que usa el componente `Counter` pasándole una función como prop `render`. Esta función devuelve un elemento JSX que contiene un botón y un párrafo. El botón usa el método `incrementCount` que recibe de la función `render` para incrementar el conteo. El párrafo muestra el valor del estado `count` que también recibe de la función `render`.

De esta manera, hemos logrado compartir la lógica del conteo entre componentes usando una render prop. Podríamos usar el mismo componente `Counter` con otras funciones `render` para personalizar su aspecto y su contenido.
