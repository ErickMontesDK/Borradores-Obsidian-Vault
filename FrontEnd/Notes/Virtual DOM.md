<i class="time"></i>
<div class="head"><h1>Virtual DOM</h1></div>

````ad-abstract
Es una técnica utilizada en frameworks de JavaScript como React, Vue y Angular para mejorar el rendimiento de las aplicaciones web.

En lugar de actualizar directamente el DOM real de la página web cada vez que se produce un cambio, el Virtual DOM crea <mark style="background: #ABF7F7A6;">una representación virtual de la página web en memoria y compara esa representación con la versión anterior para determinar cuáles son los cambios reales que deben aplicarse al DOM real</mark>.

El Virtual DOM <mark style="background: #ABF7F7A6;">reduce la carga de trabajo en el navegador y mejora el rendimiento de las aplicaciones web</mark>, ya que el proceso de comparación es más rápido que la actualización directa del DOM. 

Además, el Virtual DOM permite a los desarrolladores actualizar la página web de manera más eficiente y con menos errores, ya que el framework se encarga de realizar las actualizaciones necesarias de forma automática.
![[Pasted image 20230311210521.png]]
````
