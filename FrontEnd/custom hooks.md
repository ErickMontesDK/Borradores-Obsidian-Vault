
`button-CloseH2` `button-CloseH3`
# custom hooks
````ad-info
title: Index
```toc
```
````

````ad-abstract
[Un custom hook en React es una función que empieza con la palabra `use` y que puede llamar a otros hooks](https://blog.logrocket.com/create-your-own-custom-react-hooks/)[1](https://blog.logrocket.com/create-your-own-custom-react-hooks/). [Un custom hook te permite extraer la lógica de estado de un componente en una función reutilizable](https://es.reactjs.org/docs/hooks-custom.html)[2](https://es.reactjs.org/docs/hooks-custom.html). Por ejemplo, si tienes una lógica que se repite entre varios componentes, como suscribirse a una API o validar un formulario, puedes crear un custom hook para encapsular esa lógica y usarla en diferentes componentes.
````

### Crear un custom hook

- |   Paso 1: Importar los hooks que vas a usar dentro del custom hook. En este caso, importamos useState y useEffect.
>```jsx
>import { useState, useEffect } from 'react';
>```

- || Paso 2: Definir el custom hook como una función que empieza con `use` y que recibe un parámetro. En este caso, definimos el custom hook useFetch que recibe un parámetro url.
>```jsx
>function useFetch(url) {
>// ...
>}
>```

- |   Paso 3: Definir el estado local con useState dentro del custom hook. En este caso, definimos el estado con tres propiedades: data, loading y error.
>```jsx 
>function useFetch(url) {
> // Definir el estado local con useState
> const [data, setData] = useState(null);
> const [loading, setLoading] = useState(true);
> const [error, setError] = useState(null);
>// ...
>}
>```

- ||  Paso 4: Definir el efecto con useEffect dentro del custom hook. En este caso, definimos el efecto que llama a la API con fetch y actualiza el estado según el resultado. El efecto depende del parámetro url.
>```jsx
>function useFetch(url) {
>  // ...
>  // Definir el efecto con useEffect
 > 	useEffect(() => {
 > 	 // Llamar a la API con fetch
 >		fetch(url)
 > 	    .then(response => response.json())
 > 	    .then(data => {
 > 	      // Actualizar el estado con los datos
> 	       setData(data);
> 	       setLoading(false);
> 	     })
> 	     .catch(error => {
> 	       // Actualizar el estado con el error
> 	       setError(error);
> 	       setLoading(false);
> 	     });
 > 	}, [url]); // Dependencia del efecto
 > // ...
>}
>```

- |   Paso 5: Devolver algo desde el custom hook. En este caso, devolvemos el estado con las tres propiedades.
>```jsx
>function useFetch(url) {
>  // ...
>  // Devolver el estado desde el custom hook
>  return { data, loading, error };
>}
>```