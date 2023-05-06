
`button-CloseH2` `button-CloseH3`
# HIgher Order Components
````ad-info
title: Index
```toc
```
````

````ad-abstract
[Los componentes de orden superior (HOC por sus siglas en inglés) son una técnica avanzada en React para reutilizar la lógica de componentes](https://es.reactjs.org/docs/higher-order-components.html)[1](https://es.reactjs.org/docs/higher-order-components.html). [Concretamente, un componente de orden superior es una función que recibe un componente y devuelve un nuevo componente](https://es.reactjs.org/docs/higher-order-components.html)[1](https://es.reactjs.org/docs/higher-order-components.html). [Un HOC es una función pura sin efectos secundarios](https://stackoverflow.com/questions/45935409/understanding-react-higher-order-components)

<mark style="background: #ABF7F7A6;">Los HOC se usan para extender o modificar el comportamiento de un componente sin alterarlo directamente.</mark> Por ejemplo, se puede usar un HOC para añadir funcionalidades como manejo de estado, manejo de eventos, suscripción a fuentes de datos, inyección de props, etc. [De esta manera, se puede separar la lógica transversal de la lógica específica de cada componente](https://es.reactjs.org/docs/higher-order-components.html)[1](https://es.reactjs.org/docs/higher-order-components.html).
````
## ¿Cómo crear un HOC?
Vamos a explicar paso a paso cómo crear un HOC junto con el código que representa cada paso.



- | El ejemplo define una función llamada `withSubscription` que recibe dos argumentos: `WrappedComponent` y `selectData`. Esta función es el HOC que vamos a crear. El argumento `WrappedComponent` es el componente que queremos mejorar o modificar. El argumento `selectData` es una función que define cómo obtener los datos de una fuente de datos externa llamada `DataSource`.
>```jsx
>const withSubscription = (WrappedComponent, selectData) => {
>  // ...
>};
>```


- || El HOC devuelve una función que recibe un objeto `props` como argumento. Esta función es el nuevo componente que envuelve al componente original. Este nuevo componente será el componente mejorado o modificado que queremos obtener. Podemos usar una función o una clase para definir este nuevo componente, pero en este caso usamos una función porque queremos usar los hooks de React.
>```jsx
>const withSubscription = (WrappedComponent, selectData) => {
>  // Devolver una función que recibe un objeto props como argumento
  return (props) => {
  >  // ...
  >};
>};
>```

- | El nuevo componente usa el hook `useState` para definir un estado que guarda los datos obtenidos de la fuente de datos externa. El estado inicial es un array vacío.
>```jsx
>const withSubscription = (WrappedComponent, selectData) => {
>  return (props) => {
>    // Usar el hook useState para definir un estado que guarda los datos
>    const [data, setData] = useState([]);
>    // ...
>  };
>};
>```

- El nuevo componente usa el hook `useEffect` para definir un efecto que se ejecuta después de cada renderizado. El efecto hace lo siguiente:

  - Define una función llamada `handleChange` que obtiene los datos de la fuente de datos externa usando la función `selectData` y los guarda en el estado usando la función `setData`.
  - Añade un listener a la fuente de datos externa usando el método `addListener` y le pasa la función `handleChange`. De esta manera, cada vez que la fuente de datos cambie, se ejecutará la función `handleChange` y se actualizará el estado con los nuevos datos.
  - Devuelve una función de limpieza que elimina el listener de la fuente de datos externa usando el método `removeListener` y le pasa la función `handleChange`. De esta manera, se evita crear listeners innecesarios y se previenen fugas de memoria.
  - 
>```jsx
const withSubscription = (WrappedComponent, selectData) => {
  return (props) => {
    const [data, setData] = useState([]);

    // Usar el hook useEffect para definir un efecto que se ejecuta después de cada renderizado
    useEffect(() => {
      // Definir una función que obtiene los datos y los guarda en el estado
      const handleChange = () => {
        const newData = selectData(DataSource, props);
        setData(newData);
      };

      // Añadir un listener a la fuente de datos externa
      DataSource.addListener(handleChange);

      // Devolver una función de limpieza que elimina el listener
      return () => {
        DataSource.removeListener(handleChange);
      };
    });
    // ...
  };
};
```

- El nuevo componente renderiza el componente original pasándole las props originales y la prop `data`, que contiene los datos obtenidos de la fuente de datos externa. Para pasar las props originales, usa el operador de propagación (`...`). De esta manera, el HOC no altera las props originales del componente, sino que le añade una nueva prop.

```jsx
const withSubscription = (WrappedComponent, selectData) => {
  return (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const handleChange = () => {
        const newData = selectData(DataSource, props);
        setData(newData);
      };

      DataSource.addListener(handleChange);

      return () => {
        DataSource.removeListener(handleChange);
      };
    });

    // Renderizar el componente original pasándole las props originales y la prop data
    return <WrappedComponent data={data} {...props} />;
  };
};
```

Estos son los pasos que sigue el ejemplo para crear un HOC en React. Espero que te haya quedado más claro.
### Buenas prácticas
Algunas buenas prácticas que se deben usar al trabajar con HOC son las siguientes:

-   No mutar el componente original. [En su lugar, usar `React.cloneElement` o `Object.assign` para crear una copia del componente con las props modificadas](https://es.reactjs.org/docs/higher-order-components.html)[1](https://es.reactjs.org/docs/higher-order-components.html).
    
-   No usar el mismo nombre para el componente devuelto que para el componente original. [En su lugar, usar un prefijo o un sufijo para indicar que se trata de un componente mejorado](https://es.reactjs.org/docs/higher-order-components.html)[1](https://es.reactjs.org/docs/higher-order-components.html).
    
-   No usar HOC dentro del método `render` de un componente. Esto puede causar problemas de rendimiento y pérdida de estado. [En su lugar, aplicar los HOC fuera del cuerpo del componente, preferiblemente al inicio del archivo](https://es.reactjs.org/docs/higher-order-components.html)[1](https://es.reactjs.org/docs/higher-order-components.html).
    
-   No usar HOC para condicionar el renderizado de un componente. Esto puede causar inconsistencias en el árbol de componentes y dificultar la depuración. [En su lugar, usar el operador ternario o un componente auxiliar para renderizar condicionalmente un componente u otro](https://blog.logrocket.com/understanding-react-higher-order-components/)[3](https://blog.logrocket.com/understanding-react-higher-order-components/).
    
-   No usar HOC para compartir código entre componentes que no están relacionados. Esto puede acoplar innecesariamente los componentes y dificultar su mantenimiento. [En su lugar, usar hooks personalizados o módulos independientes para compartir código entre componentes](https://blog.logrocket.com/understanding-react-higher-order-components/)[3](https://blog.logrocket.com/understanding-react-higher-order-components/).