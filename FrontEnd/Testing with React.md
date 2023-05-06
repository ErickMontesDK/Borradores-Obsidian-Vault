
`button-CloseH2` `button-CloseH3`
# Testing with React
````ad-info
title: Index
```toc
```
````

````ad-abstract
Testing en React es el proceso de verificar que nuestros componentes de React funcionan correctamente y cumplen con los requisitos esperados. Para testear nuestros componentes, podemos usar diferentes herramientas y técnicas, como:

-   Jest: Es un framework de testing que nos permite ejecutar pruebas en JavaScript, incluyendo pruebas de componentes de React. Jest nos ofrece funciones como `describe`, `test`, `expect` y `mock` para organizar, ejecutar y verificar nuestras pruebas.
-   React Testing Library: Es una biblioteca que nos facilita el testing de componentes de React, simulando el comportamiento del usuario y accediendo a los elementos del DOM renderizado. React Testing Library nos ofrece funciones como `render`, `screen`, `fireEvent` y `act` para montar, consultar y manipular nuestros componentes.
-   Enzyme: Es otra biblioteca que nos permite testear componentes de React, usando una API más orientada a los detalles de implementación de los componentes, como sus props, estados y métodos internos. Enzyme nos ofrece funciones como `shallow`, `mount`, `find` y `simulate` para renderizar, buscar y simular eventos en nuestros componentes.
````

## [[Using jest | Jest]]
Jest es un framework de testing que nos permite ejecutar pruebas en JavaScript, incluyendo pruebas de componentes de React. Jest nos ofrece funciones como:

#### describe
Es una función que nos permite agrupar varias pruebas relacionadas bajo un mismo nombre o descripción. La función `describe` recibe como primer argumento el nombre del grupo de pruebas, y como segundo argumento una función que contiene las pruebas individuales. Por ejemplo:

```javascript
describe("Feedback Form", () => {
  // Aquí van las pruebas individuales
});
```

#### test 
Es una función que nos permite definir una prueba individual con un nombre y una función que contiene las instrucciones para ejecutarla. La función `test` recibe como primer argumento el nombre de la prueba, y como segundo argumento una función asíncrona o sincrónica que contiene las expectativas o assertions. Por ejemplo:

```javascript
test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
  // Aquí van las instrucciones y expectativas
});
```

#### expect
Es una función que nos permite hacer assertions o verificaciones sobre los valores o resultados obtenidos en nuestra prueba. La función `expect` recibe como argumento el valor o resultado a verificar, y devuelve un objeto con diferentes métodos para hacer comparaciones o matchers. Por ejemplo:

```javascript
expect(handleSubmit).toHaveBeenCalledWith({
  score,
  comment,
});
```

Este código verifica que la función simulada `handleSubmit` fue llamada con los argumentos `{score, comment}`.

#### mock 
Es una función que nos permite crear funciones simuladas o mocks, que podemos usar para reemplazar las dependencias o callbacks de nuestros componentes. Las funciones simuladas nos permiten controlar su comportamiento y verificar sus llamadas. Por ejemplo:

```javascript
const handleSubmit = jest.fn();
```
Este código crea una función simulada que podemos pasar como prop al componente FeedbackForm, y luego comprobar si fue llamada con los argumentos esperados usando el método `toHaveBeenCalledWith`.


## React Testing Library

React Testing Library es una biblioteca que nos facilita el testing de componentes de React, simulando el comportamiento del usuario y accediendo a los elementos del DOM renderizado. React Testing Library nos ofrece funciones como:

#### render
Es una función que nos permite montar un componente de React en el DOM virtual de <mark style="background: #ABF7F7A6;">jsdom</mark>, que es una implementación de navegador que se ejecuta sobre Node.js. La función `render` recibe como argumento el componente a montar y devuelve un objeto con diferentes utilidades para interactuar con el componente. Por ejemplo:

```javascript
render(<FeedbackForm onSubmit={handleSubmit} />);
```
Este código monta el componente FeedbackForm en el DOM virtual y devuelve un objeto con utilidades como `container`, `debug` o `unmount`.

#### screen
Es un objeto singleton que nos permite acceder a los elementos del DOM renderizado por la función `render`. El objeto `screen` tiene diferentes métodos para consultar los elementos por su rol, texto, etiqueta o atributo. Por ejemplo, el método `getByLabelText` nos devuelve el elemento que tiene asociado un elemento `<label>` con el texto indicado. Estos métodos siguen la filosofía de React Testing Library de acceder a los elementos de la forma más parecida a como lo haría el usuario. Por ejemplo:

```javascript
const scoreInput = screen.getByLabelText(/Score:/);
```
Este código busca un elemento que tenga una etiqueta con el texto “Score:” y lo devuelve. Este elemento podría ser un `<input>` o un `<select>`, pero lo importante es que sea accesible para el usuario.

#### fireEvent
Es una función que nos permite simular eventos del navegador sobre los elementos del DOM. La función `fireEvent` recibe como primer argumento el elemento sobre el que se quiere disparar el evento, y como segundo argumento un objeto con las propiedades del evento. Por ejemplo:

```javascript
fireEvent.change(scoreInput, { target: { value: score } });
```

Este código simula un evento de cambio de valor en el elemento `scoreInput`, asignándole el valor de la variable `score`.

#### act
Es una función que nos permite envolver las llamadas a `render` y `fireEvent` cuando queremos testear componentes que usan hooks o efectos secundarios. La función `act` asegura que todos los cambios en el estado y el DOM se apliquen antes de hacer las assertions. La función `act` recibe como argumento una función que contiene las llamadas a `render` y `fireEvent`. Por ejemplo:

```javascript
act(() => {
  render(<Counter />);
  fireEvent.click(screen.getByText("+"));
});
```

Este código envuelve la llamada a `render` y `fireEvent` en una función `act`, para testear un componente Counter que usa un hook de estado para incrementar un contador.