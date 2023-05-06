---
banner: "https://www.niit.com/india/sites/default/files/2022-04/HTML_1920x565px.jpg"
---
<i class="time"></i>
<div class="head"><h1>Media queries</h1></div>

````ad-abstract
Nos permite aplicar estilos diferentes según las características del dispositivo o el medio en el que se está visualizando nuestra página web.

Las media queries pueden aplicarse a diferentes características, como el ancho de pantalla, la resolución de la pantalla, la orientación del dispositivo, etc.
![[Pasted image 20230313012018.png]]
![[Pasted image 20230313012046.png]]
```css
.my-div {
  background-color: #ff4d4d;
  width: 100%;
  height: 200px;
}

@media screen and (min-width: 768px) {
  .my-div {
    background-color: #4d79ff;
  }
}

```
````

`````ad-tip
title: Viewport
collapse:
El viewport o ventana gráfica es el área visible de una página web dentro del navegador. 
Esta área cambia de tamaño dependiendo del dispositivo y de cómo se está visualizando la página (en modo horizontal o vertical). 
El viewport es importante en diseño web, ya que nos permite adaptar nuestros estilos y diseño para diferentes tamaños de pantalla y dispositivos.
![[Pasted image 20230313011124.png]]
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
> Estamos diciéndole al navegador que el viewport debe tener el mismo ancho que el dispositivo (definido por <b>width=device-width</b>) y que la escala inicial debe ser 1 (definido por <b>initial-scale=1.0</b>). 
> Esto significa que la página se ajustará al ancho de la pantalla y que la escala será la misma que la del dispositivo.
`````

`````ad-tip
title: Breakpoint
collapse:
Un breakpoint es un punto de quiebre en el diseño de una página web en el que se aplican cambios en el estilo para adaptarlo a diferentes tamaños de pantalla. Los breakpoints se definen mediante las media queries en CSS y se utilizan para crear diseños responsivos que se adapten a diferentes dispositivos y tamaños de pantalla.

Por ejemplo, si estamos diseñando una página web que se ve bien en una pantalla de escritorio, pero queremos asegurarnos de que también se vea bien en una pantalla más pequeña, podemos definir un breakpoint en el tamaño de pantalla en el que se produce la transición de una versión de escritorio a una versión móvil. Para ello, utilizamos media queries en CSS que se activan cuando se cumple una determinada condición, como el ancho de pantalla.
`````

`````ad-tip
title: Media only
collapse:
"Media only" es una técnica que se utiliza en diseño web para aplicar estilos CSS solamente a dispositivos específicos en función de su tamaño de pantalla o resolución. Es una forma de crear un diseño responsivo que se adapte a diferentes dispositivos y pantallas.
```css
@media only screen and (max-width: 600px) {
  /* estilos CSS para dispositivos con una pantalla de hasta 600px de ancho */
}
```
En este ejemplo, los estilos CSS se aplicarán solo a dispositivos con una pantalla de hasta 600px de ancho. El "screen" especifica que se están aplicando estilos a dispositivos con pantalla, y el "only" asegura que solo se apliquen a dispositivos que cumplan con las condiciones específicas del "media query".
`````
<hr>
<b>Tags:</b> #css 