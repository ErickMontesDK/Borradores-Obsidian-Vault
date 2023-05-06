<i class="time">lunes 21-11-2022</i>
<div class="head"><h1>Conectando Github-Jenkins-Docker</h1></div>
<h4 style="color=white">Erick Montes Bedolla</h4>

````ad-abstract
title:Docker y Jenkins
Docker es una plataforma que facilita la creación y diseño de contenedores, envío de imágenes y creación de versión de la imagen.

Los contenedores incluyen todo lo necesario para que un software se ejecute. Se usan como máquinas virtuales pero suelen utilizarse para levantar máquinas independientes con sistemas operativos muy ligeros. 

Los contenedores virtualizan el sistema operativo de un servidor. Docker se instala en cada servidor y proporciona comandos sencillos que puede utilizar para crear, iniciar o detener contenedores.

Jenkins por su parte es un servidor cuyo uso es compilar y probar proyectos de software de una forma continua, facilitando el integrar cambios de un proyecto e ir entregando al usuario nuevas versiones. Útil en el proceso de Continuous Integration.
````


`````ad-info
title:Desplegar Jenkins en un contenedor Docker
Después de instalar tanto Dockers como Jenkins en la computadora, se elaboró un programa simple que se subió a Github en un repositorio https://github.com/ErickMontesDK/jenkins-docker.

````ad-tip
title:Crear contenedor
Para conectar Jenkins a docker, instalamos la imagen de jenkins en docker con el cmd
<code>docker pull jenkins/jenkins</code>
Una vez instalada, podemos ver nombre del contenedor con el comando
<code>docker images</code>

En mi caso, el contenedor tiene el nombre <mark style="background: #BBFABBA6;">jenkins/jenkins tag=latest</mark>
![[Pasted image 20221117192840.png]]
Para ejecutar el contenedor, se escribe el comando:
<code>docker run -p 8080:8080 -p 5000:5000 -d -v jenkins_home:/var/jenkins_home REPOSITORY:TAG</code>
Si se ejecutó con exito,ya <mark style="background: #FF5582A6;">nos podemos conectar al localhost de Jenkins :8080</mark>.
Normalmente pide una contraseña para ingresar por primera vez. La contraseña se obtiene con los siguientes pasos:

- Obtiene el id de nuestros contenedores 
<code>docker ps</code>
- Ingresamos al docker shell. *Solo me funcionó el windows powershell, no trabajaba en git bash* 
<code>docker exec -i -t <container_id> /bin/bash</code>
- Nos da la contraseña para entrar a Jenkins
<code>jenkins@<container_id>:/$ cat /var/jenkins_home/secrets/initialAdminPassword</code>
![[Pasted image 20221117195846.png]]

````

`````

```ad-info
title:Estructura del repositorio
El repositorio consta de dos archivos ubicados en la raíz. 
El archivo <b>helloWorld.sh</b> que consta de solo enviar un "Hello World!!!" en consola
<code>echo Hello World!!!</code>

El archivo Jenkinsfile, que especifica el proceso de pipeline que ejecutará Jenkins.
![[Pasted image 20221121215723.png]]
```

````ad-info
title:Uso de Ngrok
Dado que Jenkins esta en un servidor local, no podremos conectarlo a Github sin una url que le de acceso, para ello ocuparemos Ngrok.

Una vez descargado, iniciamos el programa y nos abre una consola, primero hay que configurar un token de autentificación. Escribimos el comando
<code>ngrok config add-authtoken AQUIVAELTOKEN</code>

Con esto ya podremos usar Ngrok. Escribimos el comando en la consola
<code>ngrok http 8080 --host-header="localhost:8080"</code>
Con este comando, nos da una url para el servidor en el puerto 8080, en este caso, el servidor de Jenkins.

Existe un segundo comando más sencillo, pero que tiene fallos de conexión en algunas aplicaciones para ciertos usuarios, como fue mi caso en el que no funcionó 
<code>ngrok http 8080</code>

Al hacer la conexión, nos da el url con el que podremos entrar remotamente a nuestro servidor de Jenkins, y que vamos a ocupar para conectar con Github
![[Pasted image 20221121213950.png]]

````

````ad-info
title:Conectar con el repositorio
Primeramente, hay que conseguir accesos por parte de Jenkins, dando <b>click en nuestra cuenta y Configuración</b>, en el apartado de API Token, se presiona "Add New Token" y se guarda. 
![[Pasted image 20221121204559.png]]
Se abre el repositorio en Github, en el apartado de <b>Settings</b>, luego en <b>Webhook</b>, y se agrega un nuevo Webhook

Ahí se colocan en payload en url generado por NGROK mas github-webhook/
<code>https://urldengrok/github-webhook/</code>
Las demás opciones como en la imagen
![[Pasted image 20221121204944.png]]

Se ocupa otro Token por parte de Github, en la ruta <b>Perfil de Github-->Settings-->Developer Settings-->Personal access tokens</b>, seleccionamos los checkbox de los permisos para <b>repo y user</b> y generamos un nuevo token y copiamos
![[Pasted image 20221121205443.png]]

De regreso en Jenkins, en la ruta de <b>Administras Jenkins-->Configurar el Sistema-->Github</b> agregamos un servidor de Github <i>Add Github server</i>, en Credenciales agregamos el token de Github como <b>Secret Text</b>, comprobamos la conexión y aceptamos la casilla de <b>Manage Hooks</b>

![[Pasted image 20221121210650.png]]
````

`````ad-info
title:Creando el Pipeline de Jenkins
Ya dentro de la interfaz de Jenkins, creamos nueva tarea, donde asignamos un nombre y que el proyecto sea de <b>Pipeline</b>
![[Pasted image 20221121210139.png]]

En la configuración general, se selecciona la opción de Github y escribimos el url del repositorio a conectar
![[Pasted image 20221117200535.png]]

En la sección de Build Triggers, se selecciona <b>Github hook trigger for GITScm polling</b>
![[Pasted image 20221121210337.png]]

Y en la sección de Pipeline, se seleccionan las mismas opciones de la imagen.  En credenciales pide ingresar el usuario de github y el token que creamos previamente
![[Pasted image 20221121210508.png]]
Después, escribimos el nombre de la branch que va usarse. En script path, escribimos la ruta de nuestro archivo Jenkinsfile. En mi caso, solo escribo el nombre porque esta en la raíz del repositorio
![[Pasted image 20221121211224.png]]
`````

`````ad-info
title:Ejecución
Ya está todo configurado, solo es necesario hacer la primer construcción manualmente. Una vez que se haya ejecutado, podemos hacer un push a nuestro repositorio y Jenkins iniciará el proceso de construir de nuevo el programa

```ad-example
title:Vista de "builds"
![[Pasted image 20221121211744.png]]
```
```ad-example
title:Console Output
![[Pasted image 20221121211819.png]]
![[Pasted image 20221121212904.png]]
```

```ad-example
title:Señales enviadas de Github y recibidas por Ngrok
![[Pasted image 20221121214119.png]]
```
`````