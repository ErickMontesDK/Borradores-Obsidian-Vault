<i class="time"></i>
<div class="head"><h1>Single Page Application</h1></div>

Es una aplicación web que carga una única página HTML y actualiza dinámicamente el contenido de esa página a medida que el usuario interactúa con ella. 

<mark style="background: #ABF7F7A6;">El contenido de las single page applications se carga solo una vez, ya que esta aplicación (como su nombre indica) consiste en una sola página. </mark>

Esto significa que <mark style="background: #ABF7F7A6;">solo hay un documento HTML, que cambia con las interacciones del usuario debido a la constante manipulación del código Javascript</mark> integrado. De esta manera, la página web no necesita actualizarse con frecuencia, ya que funciona directamente en el navegador.

<br>

## Funcionamiento
![[Pasted image 20230426195136.png]]
![[Pasted image 20230426195146.png]]
<mark style="background: #D2B3FFA6;">Cuando el usuario realiza una acción que requiere contenido adicional, la SPA solicita al servidor solo los datos necesarios para actualizar la página,</mark> en lugar de descargar una página completamente nueva. 

Esto significa que las SPA minimizan la cantidad de datos que se envían y reciben entre el cliente y el servidor, lo que puede reducir la carga en los servidores y mejorar la velocidad y capacidad de respuesta de la aplicación.

Además, las SPA a menudo utilizan técnicas de caché para almacenar localmente los recursos que se necesitan con frecuencia, como archivos de JavaScript y CSS, lo que significa que estos recursos no tienen que descargarse cada vez que el usuario accede a la aplicación. Esto reduce aún más la carga en los servidores y mejora el rendimiento de la aplicación.
<hr> 

### Ventajas
1. | <b>Experiencia de usuario más rápida:</b> Al cargar solo una página HTML y actualizar el contenido dinámicamente, las SPA pueden proporcionar una experiencia de usuario más rápida y fluida que las aplicaciones tradicionales de varias páginas.
2. || <b>Interacciones más fluidas:</b> Al evitar la carga completa de una nueva página con cada interacción del usuario, las SPA pueden proporcionar una experiencia más fluida y natural para el usuario. Las animaciones y transiciones entre páginas pueden ser más suaves y la sensación general de la aplicación puede ser más rápida y ágil.
3. | <b>Mejora del rendimiento:</b> Al reducir la cantidad de datos que se descargan y procesan con cada interacción, las SPA pueden mejorar el rendimiento general de la aplicación. Además, las SPA pueden utilizar técnicas de caché para reducir aún más el tiempo de carga.
4. || <b>Mayor facilidad de mantenimiento:</b> Las SPA tienen un solo punto de entrada, lo que significa que es más fácil para los desarrolladores hacer cambios en la aplicación y mantenerla en el tiempo.
5. | <b>Menor consumo de ancho de banda:</b> Al cargar solo una página HTML, las SPA pueden reducir el consumo de ancho de banda y reducir los costos de alojamiento.
6. || <b>Funciona bien en dispositivos móviles:</b> Debido a que las SPA se ejecutan principalmente en el navegador, suelen funcionar bien en dispositivos móviles y proporcionar una experiencia de usuario móvil mejorada.