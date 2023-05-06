`button-CloseH2` `button-CloseH3`
<div class="head"><h1>JSX </h1></div>

````ad-info
title: Index
```toc
```
````


````ad-abstract
<mark style="background: #D2B3FFA6;">JSX (JavaScript XML) es una extensión de sintaxis que permite escribir código HTML-like dentro de componentes de React.</mark> 

Los elementos JSX se pueden escribir como etiquetas HTML normales, como `<div>` o `<p>`, o como [[Web Components | componentes]] personalizados, como `<Emoji>` o `<Garage>`.

<mark style="background: #D2B3FFA6;">Los componentes personalizados deben comenzar con una letra mayúscula para diferenciarlos de los elementos HTML</mark>

JSX sigue las reglas de XML, y por lo tanto los elementos HTML deben cerrarse correctamente. <mark style="background: #D2B3FFA6;">Los elementos vacíos deben cerrarse con `/>`, como `<input type="text" />` o `<br />`</mark>

JSX hace que la escritura de componentes de React sea más legible y fácil de entender para los desarrolladores, pero los navegadores web no entienden directamente el código JSX, por lo que debe ser [[#^b7fd36 | transpilado]] a JavaScript puro antes de poder ser interpretado.

```js TI:"Ejemplo de transpilación"
// Código JSX
const element = <h1>Hello, world!</h1>;

````

## Transpiling

^b7fd36

El proceso de transpilación JSX implica el uso de una herramienta de compilación que convierte el código JSX en código JavaScript válido. El compilador más comúnmente utilizado para JSX es [Babel ](https://babeljs.io/), que es una herramienta de transpilación de JavaScript de código abierto.

El proceso de transpilación JSX implica dos pasos: la transpilación y la ejecución. En primer lugar, el código JSX se transpila a JavaScript utilizando Babel. Luego, el código JavaScript resultante se ejecuta en el navegador.

```js TI:"Ejemplo de transpilación"
// Código JSX
const element = <h1>Hello, world!</h1>;

// Código transpilado de JSX a JavaScript
const element = React.createElement("h1", null, "Hello, world!");

```
La línea de código JSX define un elemento HTML con el texto "Hello, world!". 

El compilador de Babel convierte este código JSX en una llamada a la función `React.createElement()`, que crea un objeto de elementos de React que representa el elemento HTML.

## Props
Los props <mark style="background: #D2B3FFA6;">son argumentos que se pasan a los componentes de React.</mark> Los props permiten acceder a datos personalizados que se envían al componente como atributos HTML.

Los props son una forma de pasar datos desde un componente padre a un componente hijo, como parámetros. Los props<mark style="background: #D2B3FFA6;"> también se pueden usar para pasar funciones, eventos o estilos a los componentes hijos</mark>

```JS TI:"Ejemplo de Props" 
//Componente padre asignando valor a variable brand
<Car brand="Ford" />

//Componente hijo usando variable brand
function Car(props) {
  return <h2>Yo soy un {props.brand}</h2>;
}
//Se puede acceder de forma mas directa
function Car({ brand }) {
  return <h2>Yo soy un {brand}</h2>;
}
```

Estas variables pueden ser usados igualmente al definir los atributos del elemento html 
```JSX TI:"Adding Style with Props" HL:"5" "FOLD"
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}

  
export default Promo;
```
`````ad-warning
collapse:
title: Diferencias en atributos entre CSS y JS
Suando usas JavaScript para aplicar estilos CSS a un elemento HTML, tienes que seguir algunas reglas diferentes a las del CSS normal. 
Por ejemplo, <mark style="background: #FFF3A3A6;">las propiedades CSS que tendrían un guión en el medio</mark>, como ``font-size:40px``, <mark style="background: #FFF3A3A6;">se escriben con la primera letra de cada palabra en mayúscula, excepto la primera, y se eliminan los guiones.</mark> Esto se llama <b>camelCase</b>. 
<mark style="background: #FFF3A3A6;">Además, el valor de la propiedad se pone entre comillas, como una cadena de texto</mark>.
```js
font-size: 40px --> fontSize:"40px"
```
`````
`````ad-tip
Todo lo que este dentro de los parentesis { } es asignado como javascript, por lo que puedes ejecutar código JS dentro de ellos
```js
//Teniendo la funcion formatName
function formatName( (firstName, surname)
  return firstName + " " + surname;

//Podemos llamar a la función dentro de {}
const result = <p>{ formatName("Jane", "Wilson") }</p>;

```
`````
### Props.children
<b>props.children</b> es una propiedad especial que <mark style="background: #D2B3FFA6;">se usa para pasar los elementos que se colocan entre las etiquetas de apertura y cierre</mark> de un componente. 

<b>props.children </b>permite acceder al contenido de un componente desde el componente padre y manipularlo o transformarlo según se desee

```js TI:"Props Children" HL:"18-21"
// Definimos una función llamada Card que recibe props como parámetro.
function Card(props) {
  return (

    <div className="card">
      <h3 className="card-title">{props.title}</h3>

      <div className="card-body">{props.children}</div>
    </div>
  );
}

// Definimos una función llamada App.
function App() {
  return (

    <div className="App">
      /* Llamamos al componente Card y le pasamos el valor "Hola" como título y un párrafo como contenido. 
      Este parrafo es interpretado como props.children*/
      <Card title="Hola">
        <p>Este es el contenido de la tarjeta.</p>
      </Card>
    </div>
  );
}

```

`````ad-warning
title:¿Por qué usar props.children?
collapse:
La ventaja de usar props.children sobre props es que <mark style="background: #BBFABBA6;">permite pasar cualquier tipo de contenido al componente, sin tener que definir un prop específico para cada tipo de contenido.</mark>
Si queremos pasar un elemento con muchos atributos como imagen o un botón, tendríamos que definir una variable para cada caso:

````ad-example
collapse:
```JSX "FOLD" TI:"Pasando imagen con Props"
function Title(props) {
  return (
    <div className="title">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      {props.image && <img src={props.image} alt={props.alt} />}
      {props.button && <button onClick={props.onClick}>{props.button}</button>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Title
        title="Hola"
        subtitle="Mundo"
        image="logo.png"
        alt="Logo"
        button="Click me"
        onClick={() => alert("Hello")}
      />
    </div>
  );
}
```
````

Esto hace que el componente sea menos flexible y más difícil de mantener. Además, la sintaxis se vuelve más larga y menos intuitiva.

Usando props.children, podemos pasar cualquier tipo de contenido al componente, sin tener que definir ningún prop adicional. <mark style="background: #BBFABBA6;">El componente simplemente muestra el contenido que recibe entre sus etiquetas</mark>:

```jsx TI:"Usando props.children"
function Title(props) {
  return (
    <div className="title">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Title title="Hola" subtitle="Mundo">
        <img src="logo.png" alt="Logo" />
        <button onClick={() => alert("Hello")}>Click me</button>
      </Title>
    </div>
  );
}
```

<mark style="background: #BBFABBA6;">Esto hace que el componente sea más flexible y fácil de reutilizar. </mark> Además, la sintaxis se vuelve más corta y más intuitiva.
`````



## Styling a single component
Agregar estilo a un componente de React significa aplicar reglas de CSS a los elementos HTML que lo conforman.. Hay varias formas de hacerlo, pero para asignarle un estilo definido a un componente desde la funcion JS, esta <mark style="background: #D2B3FFA6;">CSS in JS, que es es una forma de escribir el CSS dentro del mismo archivo JS del componente</mark>

<mark style="background: #D2B3FFA6;">Consiste en declarar los atributos dentro de un objeto, y asignar dicho objeto al valor del atributo <b>style</b></mark>

```jsx TI:"Applying CSS to function" HL:"2-6,9"
function Sidebar() {
     const asideStyle = {}
        background: "azure",
        width: "calc(30x - 10px)",
        marginLeft: "10px"
        }
     return
         <aside
            style={ asideStyle } 
            className= "sidebar-component">
            <h2>Sidebar content here</h2>
        </aside>

```


## State data y Hooks
<mark style="background: #D2B3FFA6;">El state data de un componente es un objeto que almacena los datos locales del componente, que pueden cambiar a lo largo del tiempo por diversas razones]</mark>
Para usar el state data en un componente funcional, se puede usar el hook `useState`

Los hooks son funciones especiales de React que te permiten usar características de React en los componentes funcionales.
Los hooks te dan la posibilidad de hacer lo mismo con los componentes funcionales, que son más simples y fáciles de probar.
+ | Debes importar el hook a usar 
	`import React, { useState } from "react";`
+ || Defines dos variables, una será el nombre del valor que vamos a usar, otra la función que vamos a ejecutar cuando vamos a modificar su valor. 
	`const [var, funtion]`
+ | Estableces el hook a usar y le asignas un primer valor
	`const [var,function]=useState(0)`

```jsx TI:"Estructura de un hook" HL:"1,5,9"
import React, { useState } from "react";

const MyComponent = () => {
  // Usamos el hook useState para crear una variable de estado llamada count
  const [count, setCount] = useState(0);

  // Creamos una función que incrementa el valor de count en uno
  const handleClick = () => {
    setCount(count + 1);
  };

  // Retornamos un elemento JSX con un botón que tiene un manejador de clic
  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={handleClick}>Haz clic aquí</button>
    </div>
  );
};

```
 
`````ad-info
title:Lista de Hooks
collapse:
![[Pasted image 20230425221212.png]]
`````

### ¿Comó actualizar un valor?
Cuando se quiere actualizar solo una propiedad del objeto de estado, no se debe modificar el objeto directamente, sino crear una copia del objeto y cambiar la propiedad en la copia. Esto se debe a que React compara los objetos por su referencia y no por su contenido. Si se modifica el mismo objeto, React no detecta el cambio y no vuelve a renderizar el componente.

Para crear una copia del objeto se puede usar el operador de propagación (…), que expande las propiedades del objeto en otro objeto. Por ejemplo:

```jsx
const newPerson = { ...person }; // Crea una copia del objeto person
newPerson.name = "Ana"; // Cambia la propiedad name en la copia
setPerson(newPerson); // Actualiza el estado con el nuevo objeto
```

Otra forma de actualizar el objeto de estado es usando una función flecha que recibe el estado anterior y devuelve el nuevo estado. Por ejemplo:
```js
setPerson(prevPerson => ({ ...prevPerson, name: "Ana" })); // Actualiza el estado con el nuevo objeto

```
 En este ejemplo,<mark style="background: #D2B3FFA6;"> prevPerson tiene el valor anterior del estado porque así funciona el hook useState cuando se le pasa una función. La función recibe el estado anterior como argumento y devuelve el nuevo estado.</mark> Esto es útil cuando el nuevo estado depende del anterior, como en un contador o una lista
#### Formas incorrectas de intentar actualizar el objeto de estado

Una forma incorrecta de intentar actualizar el objeto de estado es reasignar la variable de estado directamente. Por ejemplo:

```jsx
person = { name: "Ana", age: 25, gender: "male" }; // Error: Assignment to constant variable
setPerson(person); // No funciona
```

Esto no funciona porque la variable de estado es una constante que no se puede reasignar. Además, aunque se usara let o var en lugar de const, tampoco funcionaría porque se estaría creando un nuevo objeto con la misma referencia que el anterior, y React no lo reconocería como un cambio.

Otra forma incorrecta de intentar actualizar el objeto de estado es modificar una propiedad del objeto directamente. Por ejemplo:

```jsx
person.name = "Ana"; // Modifica el mismo objeto
setPerson(person); // No funciona
```

Esto no funciona porque se está modificando el mismo objeto que tiene el estado, y React no lo detecta como un cambio. Además, esto rompe el principio de inmutabilidad del estado, que dice que el estado no se debe modificar directamente sino crear una nueva versión del mismo.

## Reglas de lo hooks

Los hooks son funciones de JavaScript que te permiten usar el estado y otras características de React sin escribir una clase.  Para usarlos correctamente, debes seguir dos reglas:

- |  <mark style="background: #D2B3FFA6;">Solo llama a los hooks en el nivel superior de un componente funcional. </mark>No llames a los hooks dentro de bucles, condiciones o funciones anidadas. De esta forma, te aseguras de que los hooks se llamen en el mismo orden cada vez que se renderiza el componente. Eso es lo que permite a React preservar correctamente el estado de los hooks entre múltiples llamadas a useState y useEffect.
- ||  <mark style="background: #ABF7F7A6;">Solo llama a los hooks desde componentes funcionales de React o desde hooks personalizados</mark>. No llames a los hooks desde funciones regulares de JavaScript. De esta forma, te aseguras de que toda la lógica con estado de un componente sea claramente visible desde su código fuente.
- |  <mark style="background: #D2B3FFA6;">Puedes usar múltiples hooks en el mismo componente.</mark> No hay límite en el número de hooks que puedes usar, siempre y cuando los llames en el nivel superior y no dentro de bucles, condiciones o funciones anidadas. Usar múltiples hooks te permite separar las preocupaciones y reducir la duplicación de código. Por ejemplo, puedes usar varios hooks de estado o de efecto para manejar diferentes variables o funciones.
- ||  <mark style="background: #ABF7F7A6;">Debes mantener la misma secuencia de los hooks en cada renderizado. No debes cambiar el orden o la cantidad de los hooks que usas entre renderizados, </mark>ya que React se basa en el orden en el que se llaman los hooks para preservar su estado. Si cambias la secuencia de los hooks, puedes causar errores o comportamientos inesperados en tu componente. Por ejemplo, no debes poner un hook dentro de una condición que pueda cambiar entre renderizados.

## Context API
Context API es una característica de React que<mark style="background: #D2B3FFA6;"> permite compartir datos entre componentes sin necesidad de pasarlos como props</mark>

Context API es útil cuando hay datos que se consideran “globales” para una parte de la aplicación, como el tema, el idioma, el usuario autenticado, etc

Context API evita el problema del “<b>prop drilling</b>”, que es cuando se pasa un dato a través de varios componentes intermedios que no lo usan, solo para llegar al componente que lo necesita

### ¿Como funciona Context API?
-[Para usar Context API se deben seguir tres pasos: crear un contexto, proveer un valor y consumir un valor](https://www.geeksforgeeks.org/explain-new-context-api-in-react-16/)[4](https://www.geeksforgeeks.org/explain-new-context-api-in-react-16/).



#### Crear un contexto

Un contexto se crea usando la función `React.createContext()`, que recibe un valor inicial como argumento y devuelve un objeto con dos componentes: `Context.Provider` y `Context.Consumer`.

El valor inicial del contexto se usa cuando no hay ningún proveedor del contexto en el árbol de componentes.

Por ejemplo, para crear un contexto llamado `ThemeContext` con un valor inicial de `"light"`, se puede hacer lo siguiente:
```js TI:"Creando un contexto con un valor inicial definido" HL:"5"
// ThemeContext.js
import React from "react";

// Creamos el contexto ThemeContext usando la función createContext
const ThemeContext = React.createContext("light");

// Exportamos el contexto ThemeContext por defecto
export default ThemeContext;

```

#### Proveer un valor
Para proveer un valor al contexto se usa el componente `Context.Provider`, que recibe una prop `value` con el valor actual del contexto y envuelve a los componentes hijos que quieren acceder al contexto.

El valor del contexto puede ser cualquier tipo de dato válido en JavaScript, como una cadena, un número, una variable, una función, etc.
Este valor se actualiza cada vez que el componente proveedor se renderiza con un nuevo valor.

Por ejemplo: Para proveer el valor del contexto `ThemeContext` desde el componente `App`, se puede hacer lo siguiente:

```js TI:"Proveer un contexto" HL:"16,20,7"
// App.js
import React from "react";
import ThemeContext from "./ThemeContext";

function App() {
  // Usamos el hook useState para manejar el estado del tema
  const [theme, setTheme] = React.useState("light");

  // Creamos una función para cambiar el tema entre "light" y "dark"
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Retornamos el componente ThemeContext.Provider y le pasamos el estado del tema como value
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <h1>React Context API</h1>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

```

#### Consumir un valor

Para consumir un valor del contexto se pueden usar dos opciones: el componente `Context.Consumer` o el hook `useContext`.

El componente `Context.Consumer` recibe una función como hijo (render prop) que recibe el valor actual del contexto y retorna un elemento JSX.
```js TI:"Enviando valor theme por consumer"
<ThemeContext.Consumer>
      {(theme) => (
        <div className={`child ${theme}`}>
          <p>The current theme is {theme}</p>
        </div>
      )}
    </ThemeContext.Consumer>
```

El hook `useContext` recibe el objeto del contexto como argumento y devuelve el valor actual del contexto.

```jsx TI:"usando useContext para leer el valor theme" HL:"2"
//Usando el hook useContext
const theme = React.useContext(ThemeContext);

  return (
	<div className={`child ${theme}`}>
		  <p>The current theme is {theme}</p>
	</div>
);
```

Ambas opciones permiten suscribirse a los cambios del valor del contexto y actualizar los componentes que lo consumen.

Por ejemplo, para consumir el valor del contexto `ThemeContext` desde el componente `Child`, se puede hacer lo siguiente usando el componente `Context.Consumer`:

```js TI:"Código para recibir el valor"
// Child.js
import React from "react";
import ThemeContext from "./ThemeContext";

function Child() {
  // Usando el Context.Consumer
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className={`child ${theme}`}>
          <p>The current theme is {theme}</p>
        </div>
      )}
    </ThemeContext.Consumer>
  );

  // Usando el hook useContext
  // const theme = React.useContext(ThemeContext);
  // return (
  //   <div className={`child ${theme}`}>
  //     <p>The current theme is {theme}</p>
  //   </div>
  // );
}

export default Child;

```