
`button-CloseH2` `button-CloseH3`
# Side Effects in React
````ad-info
title: Index
```toc
```
````

````ad-abstract
Un side effect o efecto secundario ocurre en un programa cuando usas código externo en tu función, lo que afecta la capacidad de la función para realizar su tarea. Por ejemplo, un side effect puede ser:

-   Modificar una variable que está fuera del alcance de la función.
-   Hacer una llamada AJAX o una petición HTTP.
-   Manipular el DOM o el HTML.
-   Escribir o leer un archivo.
-   Generar un número aleatorio o una fecha.

Los side effects pueden causar problemas de depuración, rendimiento y mantenibilidad en el código. Por eso se recomienda evitarlos o aislarlos lo más posible.
````

## Pure functions
Una pure function o función pura es una función que no tiene ningún side effect. Es decir, una función pura solo depende de sus argumentos de entrada y devuelve un valor de salida sin alterar nada más. Por ejemplo, una función pura puede ser:

```js TI:"Pure function"
function sum(a, b) {
  return a + b;
}
```

Esta función solo suma dos números y devuelve el resultado. No modifica ninguna variable externa, ni hace ninguna operación que no sea la suma. Una función pura tiene las siguientes características:

- |  Devuelve el mismo resultado si se le pasan los mismos argumentos.
- ||  No cambia el estado de ningún otro código fuera de la función.
- |  Es fácil de leer, entender y probar.

Las funciones puras son muy útiles para la programación funcional, que es un paradigma que se basa en el uso de funciones como unidades básicas de construcción del código.

## Impure functions
Una impure function o función impura es una función que tiene uno o más side effects. Es decir, una función impura depende o modifica algún código externo a la función. Por ejemplo, una función impura puede ser:

```js
let counter = 0;

function increment() {
  counter++;
  return counter;
}
```

Esta función incrementa una variable que está fuera de su alcance y devuelve el nuevo valor. Modifica el estado de una variable externa, y no devuelve el mismo resultado si se le llama varias veces. Una función impura tiene las siguientes características:

- |  Puede devolver resultados diferentes si se le pasan los mismos argumentos.
- ||   Puede cambiar el estado de algún otro código fuera de la función.
- |   Es más difícil de leer, entender y probar.

Las funciones impuras son inevitables en algunos casos, como cuando se necesita interactuar con el mundo exterior (por ejemplo, hacer una petición HTTP o mostrar un mensaje en la pantalla). Sin embargo, se recomienda limitar su uso y separarlas de las funciones puras lo más posible.

## useEffect
useEffect es un hook de React que te permite ejecutar efectos secundarios desde un componente funcional. Un efecto secundario es una función que interactúa con el mundo exterior o fuera del ecosistema de React. Algunos ejemplos de efectos secundarios son:

- |  Obtener datos de una API o una base de datos.
- ||  Actualizar directamente el DOM o el HTML.
- | Usar temporizadores, intervalos o promesas.
- ||  Registrar o eliminar escuchadores de eventos.
- |  Escribir o leer un archivo local o una cookie.

useEffect acepta dos argumentos: una función que contiene el efecto secundario y un array de dependencias. El segundo argumento es opcional.

`useEffect(<función>, <dependencias>)`

Veamos un ejemplo de cómo usar useEffect para obtener datos de una API:
```js HL:"8"
import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState(null);

  // Usamos useEffect para hacer la petición a la API
  useEffect(() => {
    // Definimos la URL de la API
    const url = "https://jsonplaceholder.typicode.com/users";

    // Usamos fetch para obtener los datos
    fetch(url)
      .then((response) => response.json()) // Convertimos la respuesta a JSON
      .then((data) => setData(data)); // Guardamos los datos en el estado
  }, []); // Pasamos un array vacío como dependencias para que el efecto solo se ejecute una vez

  return (
    <div>
      <h1>Users</h1>
      {data ? ( // Si hay datos, los mostramos en una lista
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p> // Si no hay datos, mostramos un mensaje de carga
      )}
    </div>
  );
}

```

Con useEffect podemos separar estas funciones de la lógica principal del componente y controlar cuándo se ejecutan.

#### Ventajas 

useEffect sirve para controlar los side effects o efectos secundarios que pueden causar problemas en el código. Algunos problemas que pueden causar los side effects son:

- |   Fugas de memoria, cuando se crea un efecto que no se elimina correctamente al desmontar el componente.
- ||  Inconsistencias de datos, cuando se actualiza el estado con datos obsoletos o inválidos.
- |  Renderizados innecesarios, cuando se ejecuta un efecto que no depende del estado o las props actuales.

Con useEffect podemos separar estas funciones de la lógica principal del componente y controlar cuándo se ejecutan.

- |  Permite usar efectos secundarios en componentes funcionales, sin necesidad de usar clases o métodos del ciclo de vida.
- ||  Permite agrupar los efectos secundarios por su propósito y no por su fase del ciclo de vida, lo que facilita la lectura y el mantenimiento del código.
- |  Permite optimizar el rendimiento del componente al evitar ejecutar efectos innecesarios o repetidos.

Para evitar estos problemas, useEffect nos permite:

- |  Limpiar los efectos secundarios al desmontar el componente o al cambiar las dependencias, usando una función de limpieza que se devuelve desde el efecto.
- ||  Especificar las dependencias del efecto en un array, para que solo se ejecute cuando cambien dichas dependencias y no en cada renderizado.
- |  Omitir las dependencias del efecto si no son necesarias, pasando un array vacío, para que solo se ejecute una vez al montar el componente.

### useEffect cuando una variable cambia entre renders
useEffect se ejecuta cuando una variable cambia entre renders si dicha variable está incluida en el array de dependencias del efecto. Por ejemplo, si tenemos una variable de estado llamada count y queremos ejecutar un efecto cada vez que cambie su valor, podemos hacer lo siguiente:
```js
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Aquí podemos hacer lo que queramos con el contador
    console.log(`El contador vale ${count}`);
  }, [count]); // Pasamos el contador como dependencia del efecto

  return (
    <div>
      <p>El contador vale {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Incrementar</button>
    </div>
  );
}

```
En este caso, el efecto se ejecutará después del primer renderizado y después de cada renderizado en el que el contador cambie. Si el contador no cambia, el efecto no se ejecutará.

### Agrupar grupos lógicos con un mismo efecto

useEffect nos permite agrupar grupos lógicos con un mismo efecto si estos comparten las mismas dependencias. Por ejemplo, si tenemos dos funciones que dependen del mismo estado o prop, podemos usar un solo useEffect para ejecutarlas. Por ejemplo: 

```js  HL:"8-22"
import { useState, useEffect } from "react";

function App() {
  // Declaramos una variable de estado para guardar el nombre
  const [name, setName] = useState("");

  // Usamos useEffect para ejecutar dos funciones que dependen del nombre
  useEffect(() => {
    // Una función que muestra un saludo en la consola
    function sayHello() {
      console.log(`Hola ${name}`);
    }

    // Otra función que muestra la longitud del nombre en la consola
    function showLength() {
      console.log(`El nombre tiene ${name.length} letras`);
    }

    // Ejecutamos las dos funciones dentro del efecto
    sayHello();
    showLength();
  }, [name]); 
  // Pasamos el nombre como dependencia del efecto

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
```

En este caso, el efecto se ejecutará después del primer renderizado y después de cada renderizado en el que el nombre cambie. Si el nombre no cambia, el efecto no se ejecutará.

### Cómo usar una función de limpieza después de que se ejecute una función

useEffect nos permite usar una función de limpieza después de que se ejecute una función si dicha función crea algún efecto secundario que necesita ser eliminado al desmontar el componente o al cambiar las dependencias. Por ejemplo, si tenemos una función que registra un escuchador de eventos en el documento, podemos usar una función de limpieza para eliminar ese escuchador. Por ejemplo:
```js HL:"14-15,18-20"
import { useState, useEffect } from "react";

function App() {
  // Declaramos una variable de estado para guardar la posición del ratón
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Usamos useEffect para registrar un escuchador de eventos en el documento
  useEffect(() => {
    // Definimos la función que actualiza la posición del ratón
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }

    // Registramos el escuchador de eventos en el documento
    document.addEventListener("mousemove", handleMouseMove);

    // Devolvemos la función de limpieza que elimina el escuchador de eventos
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Pasamos un array vacío como dependencia para que el efecto solo se ejecute una vez

  return (
    <div>
      <p>La posición del ratón es: {mousePosition.x}, {mousePosition.y}</p>
    </div>
  );
}
``
```

### Dependency Array
El dependency array o array de dependencias es el segundo argumento opcional que se le pasa al hook useEffect. <mark style="background: #D2B3FFA6;">Es un array que contiene las variables del componente (estado, props, contexto o valores derivados de estos) que afectan al efecto secundario que se ejecuta en el primer argumento.</mark>

``useEffect(<función>, <dependencias>)``

<mark style="background: #D2B3FFA6;">El dependency array sirve para controlar cuándo se ejecuta el efecto secundario. </mark>Por defecto, <mark style="background: #FF5582A6;">useEffect se ejecuta después de cada renderizado del componente. Sin embargo, si pasamos un dependency array, useEffect solo se ejecutará después del primer renderizado y después de cada renderizado en el que alguna de las dependencias haya cambiado.</mark>

```ad-warning
title: Cómo usar el dependency array
collapse:
Para usar el dependency array correctamente, debemos seguir estas reglas:

-  <mark style="background: #CACFD9A6;"> Incluir todas las variables que se usan dentro del efecto secundario y que pueden cambiar entre renderizados.</mark> Si omitimos alguna variable, podemos causar bugs o comportamientos inesperados en el efecto.
-  <mark style="background: #CACFD9A6;"> No incluir variables que no se usan dentro del efecto secundario o que nunca cambian entre renderizados.</mark> Si incluimos variables innecesarias, podemos causar renderizados innecesarios o efectos indeseados en el efecto.
-  <mark style="background: #CACFD9A6;"> No incluir funciones que se definen dentro del componente o que dependen de su estado o props.</mark> Si incluimos funciones, podemos causar bucles infinitos o errores en el efecto. En su lugar, podemos usar el hook useCallback para memorizar las funciones y evitar que cambien entre renderizados.
```

```js TI:"Dependency Array vacio" HL:"11"
import { useState, useEffect } from "react";

function App() {
  // Declaramos una variable de estado para guardar un mensaje
  const [message, setMessage] = useState("Hola");

  // Usamos useEffect para mostrar un mensaje de alerta al montar el componente
  useEffect(() => {
    // Mostramos un mensaje de alerta usando el mensaje
    alert(message);
  }, []); // Pasamos un array vacío como dependencia del efecto

  return (
    <div>
      <p>El mensaje es: {message}</p>
      <button onClick={() => setMessage("Adiós")}>Cambiar mensaje</button>
    </div>
  );
}

// Pasamos un array vacío como dependencia del efecto porque no queremos que el efecto se ejecute más de una vez. Así, el efecto solo se ejecutará al montar el componente y mostrará un mensaje de alerta con el mensaje inicial. Si cambiamos el mensaje, el efecto no se volverá a ejecutar.
```

```js TI:"dependency array con variables" HL:"21"
import { useState, useEffect } from "react";

function App() {
  // Declaramos una variable de estado para guardar un nombre
  const [name, setName] = useState("");

  // Declaramos una función para saludar al nombre
  function greet() {
    console.log(`Hola ${name}`);
  }

  // Usamos useEffect para llamar a la función greet cada segundo
  useEffect(() => {
    // Creamos un intervalo que llama a la función greet cada segundo
    const interval = setInterval(greet, 1000);

    // Devolvemos una función de limpieza que elimina el intervalo
    return () => {
      clearInterval(interval);
    };
  }, [name]); // Pasamos el nombre como dependencia del efecto

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

//pasamos el nombre como dependencia del efecto porque lo usamos dentro de la función greet y puede cambiar entre renderizados. Así, el efecto se ejecutará cada vez que el nombre cambie y creará un nuevo intervalo que llamará a la función greet con el nombre actualizado. También devolvemos una función de limpieza que elimina el intervalo anterior para evitar fugas de memoria o comportamientos inesperados.

```
### [[Fetch]] function
