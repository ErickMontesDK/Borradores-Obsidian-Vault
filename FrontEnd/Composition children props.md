
`button-CloseH2` `button-CloseH3`
# Composition children props
````ad-info
title: Index
```toc
```
````

````ad-abstract
[La composición de componentes con children props es una forma de reutilizar el código entre componentes y crear componentes más flexibles y personalizables](https://stackoverflow.com/questions/64118702/use-of-children-in-a-react-component)[1](https://stackoverflow.com/questions/64118702/use-of-children-in-a-react-component). 
La idea es que un componente pueda aceptar otros componentes o elementos como sus hijos y renderizarlos en su salida. Esto permite que el componente padre controle el contenido y el estilo de sus hijos, y que el componente hijo reciba las props y los métodos del componente padre.

Un ejemplo de composición de componentes con children props es el siguiente:
```js
// Definir un componente Card que acepta children props
function Card(props) {
  // Definir un estilo para el componente
  const style = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    width: "200px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  // Devolver un elemento div con el estilo y los children props
  return <div style={style}>{props.children}</div>;
}

// Usar el componente Card con diferentes children props
function App() {
  return (
    <div>
      {/* Usar el componente Card con un elemento h1 como hijo */}
      <Card>
        <h1>Card 1</h1>
      </Card>

      {/* Usar el componente Card con un elemento img como hijo */}
      <Card>
        <img src="logo.png" alt="Logo" />
      </Card>

      {/* Usar el componente Card con otro componente como hijo */}
      <Card>
        <Button text="Click me" />
      </Card>
    </div>
  );
}

```
````
En este ejemplo, el componente Card es un componente genérico que puede renderizar cualquier tipo de contenido como su hijo. El componente App usa el componente Card con diferentes children props, como un elemento h1, un elemento img o un componente Button. El componente Card controla el estilo y la disposición de sus hijos, mientras que el componente App controla el contenido y la funcionalidad de sus hijos.