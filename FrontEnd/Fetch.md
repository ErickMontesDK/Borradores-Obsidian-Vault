
`button-CloseH2` `button-CloseH3`
# Fetch
````ad-info
title: Index
```toc
```
````

````ad-abstract
La función fetch es una API de JavaScript que <mark style="background: #D2B3FFA6;">se usa para hacer peticiones HTTP de forma asíncrona en el navegador.</mark> 

La función fetch recibe como primer argumento la URL a la que quieres hacer la petición. Opcionalmente, puedes pasar un segundo argumento con un objeto de opciones para configurar la petición (por ejemplo, el método, los headers, el cuerpo, etc.). 
<mark style="background: #D2B3FFA6;">La función fetch devuelve una promesa que se resuelve con un objeto Response que contiene información sobre la respuesta</mark> (por ejemplo, el status, los headers, el cuerpo, etc.). 
Para obtener el cuerpo de la respuesta en formato JSON, puedes usar el método json() del objeto Response, que también devuelve una promesa.

```js
// Hacemos una petición GET a la API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // Comprobamos si la respuesta es exitosa
    if (response.ok) {
      // Devolvemos el cuerpo de la respuesta como JSON
      return response.json();
    } else {
      // Lanzamos un error si la respuesta falla
      throw new Error("Something went wrong");
    }
  })
  .then((data) => {
    // Hacemos algo con los datos obtenidos como JSON
    console.log(data);
  })
  .catch((error) => {
    // Manejamos el error si ocurre
    console.error(error);
  });

```
````
