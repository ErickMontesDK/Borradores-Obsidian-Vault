
`button-CloseH2` `button-CloseH3`
# Controlled y uncontrolled components
````ad-info
title: Index
```toc
```
````

````ad-abstract
Los componentes controlados y no controlados en React son términos que se usan para describir los componentes que renderizan elementos de formulario HTML. [Cada vez que creas un componente que muestra un elemento de formulario HTML, estás creando uno de esos dos tipos](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/)[1](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/).
````

## Componentes controlados
 son aquellos cuyo valor está vinculado al estado de React de los componentes. Esto significa que el valor del elemento de formulario se actualiza según el [[JSX#State data y Hooks | estado]] del componente, y el [[JSX#State data y Hooks | estado]] del componente se actualiza según el valor del elemento de formulario. Por ejemplo:
```js TI:"Componentes controlados" HL:"2,5,11"
function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleChange} />
      <p>Hello, {name}</p>
    </div>
  );
}


```
En este ejemplo, el componente App tiene un estado llamado name que almacena el valor del input de texto. El valor del input se pasa como una prop al elemento HTML. Cuando el usuario escribe algo en el input, se dispara la función handleChange que actualiza el estado name con el valor del input. De esta forma, el valor del input y el estado name están sincronizados.

## Componentes no controlados
[Los componentes no controlados son aquellos cuyo valor está controlado o almacenado en el DOM directamente y solo se puede acceder desde el DOM usando una ref](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/)[1](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/)[2](https://javascript.plainenglish.io/the-ultimate-guide-to-using-controlled-vs-uncontrolled-components-in-react-a3d1f5058503). Por ejemplo:

```js TI:"Componentes no controlados" HL:"3,12"
function App() {
  // Declaramos una ref para acceder al input de texto
  const inputRef = useRef();

  function handleSubmit(event) {
    // Evitamos el comportamiento por defecto del formulario
    event.preventDefault();
    alert("Your name is " + inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
  
      // Le pasamos la ref como prop al elemento HTML
      <input type="text" ref={inputRef} />
      // Renderizamos un botón para enviar el formulario
      <button type="submit">Submit</button>
    </form>
  );
}

```
El componente App no tiene ningún estado para almacenar el valor del input de texto. El valor del input se guarda en el DOM y se accede a él usando una ref que se pasa como una prop al elemento HTML. Cuando el usuario envía el formulario, se dispara la función handleSubmit que usa la ref para obtener el valor actual del input.
## ¿Cuándo usar componentes controlados o no controlados?

En la mayoría de los casos, se recomienda usar componentes controlados porque te dan más control sobre los datos y la lógica de tu aplicación. [Los componentes controlados te permiten validar, modificar y transformar los valores de los elementos de formulario antes de actualizar el estado o enviarlos al servidor](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/)[1](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/)[3](https://dev.to/katelynjewel/controlled-vs-uncontrolled-components-44e0).

Los componentes no controlados pueden ser útiles cuando quieres usar elementos de formulario nativos sin tener que manejar su estado en React. [Por ejemplo, si quieres usar un input de tipo file para subir archivos, puedes usar un componente no controlado porque React no tiene soporte para este tipo de input](https://qastack.mx/programming/42522515/what-are-react-controlled-components-and-uncontrolled-components)[4](https://qastack.mx/programming/42522515/what-are-react-controlled-components-and-uncontrolled-components). [También puedes usar componentes no controlados cuando quieras integrar una librería externa que requiere acceso directo al DOM](https://dev.to/katelynjewel/controlled-vs-uncontrolled-components-44e0)[3](https://dev.to/katelynjewel/controlled-vs-uncontrolled-components-44e0).