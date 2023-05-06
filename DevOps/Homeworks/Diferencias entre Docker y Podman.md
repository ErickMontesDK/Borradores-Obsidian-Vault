<i class="time">miércoles 23-11-2022
</i>
<div class="head"><h1>Diferencias entre Docker y Podman</h1></div>

````ad-abstract
title:
Tanto Docker como Podman tienen el mismo fin, automatizar el despliegue de aplicaciones dentro de contenedores de software, sin embargo, tienen una diferencia principal. 

Docker requiere un proceso llamado <mark style="background: #CACFD9A6;">**Daemon**</mark>. Es el proceso que en el motor de Docker se utiliza como servidor que permite el control central de Docker. A su vez, se encarga de crear y administrar todas las imágenes, contenedores y redes. 

Ya que docker depende de que se esté ejecutando Daemon en un segundo plano, si algún problema relacionado con Daemon surge, la gestión de los contenedores se detiene. La CLI de Docker depende de una conexión con Daemon. La CLI envía los comandos a Daemon y él interactúa con los contenedores.

Caso contrario, Podman ejecuta y corre los comandos directamente al sistema sin un intermediario.
````
