
`button-CloseH2` `button-CloseH3`
# Navegación Router
````ad-info
title: Index
```toc
```
````

````ad-abstract
React Router es una librería que <mark style="background: #FFB8EBA6;">nos permite crear rutas en una aplicación web con React. Las rutas son las diferentes vistas o pantallas que podemos mostrar al usuario según la URL de la página.</mark> Por ejemplo, si tenemos una aplicación de comercio electrónico, podemos tener rutas como `/home`, `/products`, `/cart`, etc.
````

## Composición del router
Veamos un ejemplo sencillo de cómo usar React Router para crear una aplicación con tres rutas: `/home`, `/about` y `/contact`. Para ello, necesitamos instalar la librería con el comando: 
```js TI:"Instalar Router"
npm install react-router-dom
```

Creamos los componentes que se van a renderizar en cada ruta
```js TI:"Componentes de ejemplo" "FOLD"
// Home.js
import React from "react";

function Home() {
  return <h1>Home</h1>;
}

export default Home;

// Home.js
import React from "react";

function Home() {
  return <h1>Home</h1>;
}

export default Home;

// Home.js
import React from "react";

function Home() {
  return <h1>Home</h1>;
}

export default Home;

```

Creamos el componente principal <b>(App)</b>, donde vamos a definir las rutas y enlaces con el formato, e importamos el modulo ``BrowserRouter`` y ``Route`` para que funcione correctamente
```js TI:"Definir rutas"
import { BrowserRouter, Route, Link } from "react-router-dom";


<div>
	<nav>
	    <Link to="/rutaDeElemento" className="nav-item">Texto Link</Link>
    </nav>
     
	<Routes> 
	    <Route path="/rutaDeElemento" element={<Componente />}></Route>
    </Routes>
</div>
```
### Componentes de Router
React Router nos ofrece varios componentes para definir y manejar las rutas de nuestra aplicación, como:
- |   `BrowserRouter`: Es el componente principal que envuelve a nuestra aplicación y nos permite usar el historial del navegador para navegar entre las rutas.
- ||   `Route`: Es el componente que define una ruta específica y el componente que se debe renderizar cuando la URL coincide con esa ruta.
- |  `Switch`: Es el componente que agrupa varias rutas y solo renderiza la primera que coincide con la URL actual. Esto nos ayuda a evitar renderizar rutas innecesarias o conflictivas.
- ||  `Link`: Es el componente que nos permite crear enlaces a otras rutas de nuestra aplicación, usando el atributo `to`.
- |  `Redirect`: Es el componente que nos permite redirigir al usuario a otra ruta de nuestra aplicación, usando el atributo `to`.
- ||  `useParams`: Es un hook que nos permite acceder a los parámetros de la ruta actual, como por ejemplo `/products/:id`.
- |  `useHistory`: Es un hook que nos permite acceder al historial del navegador y usar sus métodos para navegar entre las rutas, como por ejemplo `push` o `goBack`.
- ||  `useLocation`: Es un hook que nos permite acceder a la información de la ubicación actual, como por ejemplo la URL o la consulta.


