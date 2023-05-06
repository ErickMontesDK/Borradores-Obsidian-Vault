<i class="time"></i>
<div class="head"><h1>Procesadores CSS</h1></div>

````ad-abstract
Los procesadores CSS son herramientas que se utilizan para simplificar y mejorar el proceso de escritura de CSS. Los procesadores CSS te permiten escribir CSS de manera más eficiente y organizada, utilizando características como variables, anidamiento, funciones y mixins.
````

<h2 style="display: none">SASS</h2>

^d0bd2d

``````ad-tip
title: ## SASS
`````ad-note
title: Variables
```scss
$variableColor: #dfdfdf 
```
`````
`````ad-note
title: Nesting
```scss
nav { 
	ul { 
		margin: 0;
		padding: 0;
	}
	li { display: inline-block }
}
```
`````
`````ad-note
title: Mixins
```scss
@mixin estilo-texto {
  background-color: #eee;
  font-size: 16px;
}

.elemento {
  @include estilo-texto;
}
```
`````
`````ad-note
title: Operators
<b>Sass:math</b> es un módulo de Sass que proporciona funciones matemáticas avanzadas para ayudarte a realizar operaciones matemáticas en tus hojas de estilo.
```scss
@use "sass:math";

// Redondear un valor numérico a dos decimales
.rounded-value {
  width: round(1.2345, 2); // devuelve 1.23
}

// Calcular la raíz cuadrada de un valor numérico
.square-root {
  width: sqrt(64); // devuelve 8
}

// Calcular el seno de un ángulo en grados
.trig-function {
  width: sin(90deg); // devuelve 1
}

// Convertir un valor en píxeles a em
.unit-conversion {
  font-size: convert(16px, em); // devuelve 1em
}

```
`````
``````
