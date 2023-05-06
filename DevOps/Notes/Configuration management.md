<i class="time"></i>
<div class="head"><h1>Configuration management</h1></div>

````ad-abstract
La gestión de la configuración (CM) es un <mark style="background: #ABF7F7A6;">proceso</mark> de ingeniería de sistemas <mark style="background: #ABF7F7A6;">para establecer y mantener la consistencia del rendimiento, los atributos funcionales y físicos de un producto con sus requisitos, diseño e información operativa a lo largo de su vida.</mark>

Ayuda a los equipos de ingeniería a construir sistemas robustos y estables mediante el uso de herramientas que administran y monitorean automáticamente las actualizaciones de los datos de configuración.
````
`````ad-info
title:Ansible
Ansible es un <mark style="background: #BBFABBA6;">software que facilita la gestión de múltiples servidores accediendo a ellos de forma remota y coordinando la automatización de tareas,</mark> el uso de aplicaciones, la actualización, la administración, etc. 
De esta forma<mark style="background: #BBFABBA6;"> puede estandarizar las características necesarias para desarrollar una tarea y no hay necesita realizar estos mismos pasos de una máquina a otra</mark>, pero todos al mismo tiempo.
![[Pasted image 20221127194616.png]]

Se ocupan de crear dos archivos, [[hosts]] y [[playbook.yml]]

````ad-warning
title:Hosts file
collapse:
En ansible, los archivos de <mark style="background: #FFF3A3A6;">host son aquellos archivos que se utilizan para almacenar información sobre la información de los nodos remotos, que necesitamos administrar</mark>. 
Este es uno de esos archivos importantes sin los cuales tendrá que hacer mucho trabajo adicional para solucionarlo. Cada vez que ansible ejecuta un playbook.yml, busca los hosts enumerados en el archivo del host y obtiene la información disponible contra esos hosts, luego usa esta información para conectarse, iniciar sesión y ejecutar tareas en hosts remotos.

```
[servers]
server1 ansible_host=192.168.1.15
[all:vars]
ansible_user=vagrant
ansible_python_interpreter=/usr/bin/python3
```
- En **ansible_host** escribimos la ip del servidor remoto.
- En **ansible_user** definimos el nombre del usuario del servidor remoto
````
````ad-warning
title:Playbook.yml
````
`````
