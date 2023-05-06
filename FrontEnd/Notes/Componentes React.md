<i class="time"></i>
<div class="head"><h1>Componentes React</h1></div>

React proporciona dos tipos de componentes, los componentes funcionales y los componentes de clase. 
+ | Los componentes funcionales actúan de manera similar a las funciones tradicionales en JavaScript, <mark style="background: #D2B3FFA6;">toman ciertos parámetros y devuelven elementos de React.</mark>
+ | Componentes de clase: son clases de JavaScript que extienden la clase Componente de React y tienen un estado interno y ciclo de vida específicos. Tienen acceso a los métodos de ciclo de vida de React y son útiles para manejar estados complejos y realizar acciones adicionales.

En una aplicación React, <mark style="background: #D2B3FFA6;">al menos un componente es necesario y se llama el componente raíz</mark>. Este componente se carga mediante la instrucción de importación. La sintaxis para renderizar un componente es similar a una etiqueta de cierre automático en HTML, simplemente colocas el nombre del componente dentro de los corchetes angulares y no olvides la barra diagonal. 

El componente raíz puede contener otros componentes que los desarrolladores crean para representar las diversas partes de la interfaz de usuario de la aplicación.

## Creación de un componente

```js
// Importa el archivo CSS que contiene estilos para la aplicación
import './App.css'; 

function Header(){ // Declaración de la función "Header"
  // Devuelve el componente encabezado que contiene "Hello World"
  return <h1>Hello World</h1>; 

}
// Declaración de la función "App"
function App() { 
// Devuelve el componente "Header" dentro del componente "App"
  return <Header/>; 
}

// Exporta la función "App" como el componente predeterminado de este archivo
export default App; 

```
