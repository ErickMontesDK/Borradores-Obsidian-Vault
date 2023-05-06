
`button-CloseH2` `button-CloseH3`
# Assests React

`````ad-abstract
Los assets en React son <mark style="background: #D2B3FFA6;">recursos estáticos que se pueden utilizar en la aplicación, como imágenes, fuentes, iconos, etc</mark>. 

Hay varias formas de manejar los assets en React, dependiendo de cómo se configure el proyecto:

```ad-warning
title: Si el archivo es indispensable para renderizar
Usando la carpeta **public/** que se crea con **create-react-app**¹. Esta carpeta permite acceder a los archivos que se pongan dentro de ella desde la web. Por ejemplo, si se pone un archivo **image.png** dentro de la carpeta public/, se puede acceder a él en <tu dirección de host>/image.png³.
```

````ad-warning
title: Si el archivo no es indispensable
Usar la carpeta **src/** y crear una subcarpeta llamada **assets/** donde se guarden los recursos. Esta opción tiene algunas ventajas, como que los archivos se minifican y se agrupan para evitar peticiones extra a la red, y que se pueden importar directamente en los componentes de React¹². Por ejemplo, si se tiene un archivo **Twitter.svg** dentro de la carpeta src/assets/, se puede importar así:

```js TI:"Importar un asset"
import logo from '../../assets/Twitter.svg';

// Y luego usarlo en un componente así:

<img src={logo} alt="Logo de Twitter" />
```
Es importante tener en cuenta que los assets deben tener un nombre único y no usar caracteres especiales o espacios¹.
````
`````

## Importar un asset
Para importar un asset en React, se puede usar alguna de las siguientes formas:

#### Usar la sintaxis de importación de ES6
se puede importar el asset como si fuera un módulo de JavaScript y asignarlo a una variable. Luego, se puede usar esa variable como el valor del atributo src de un elemento img o como el valor del atributo href de un elemento link.

```js
// Importar el asset
import logo from "./logo.png";

// Usar el asset en el componente
function App() {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
}
```

#### Usar la función require
se puede requerir el asset y asignarlo a una variable. Luego, se puede usar esa variable como el valor del atributo src de un elemento img o como el valor del atributo href de un elemento link. Por ejemplo:

```js
// Requerir el asset
const logo = require("./logo.png");

// Usar el asset en el componente
function App() {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
}
```

#### Usar imports dinámicos
se puede usar la sintaxis import() para importar el asset de forma dinámica y asíncrona. Esto nos permite dividir el código en chunks más pequeños y cargarlos bajo demanda. Por ejemplo, podemos importar una imagen cuando el usuario hace clic en un botón o cuando se cumple una condición. Por ejemplo:

```js
// Importar el asset de forma dinámica
function App() {
  const [logo, setLogo] = useState(null);

  const handleClick = () => {
    import("./logo.png").then((image) => {
      setLogo(image.default);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Cargar logo</button>
      {logo && <img src={logo} alt="Logo" />}
    </div>
  );
}
```
