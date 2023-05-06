<i class="time"></i>
<div class="head"><h1>Jenkins</h1></div>

````ad-abstract
Jenkins es un software de servidor de automatización que se usa con frecuencia para lograr integración y entrega continua en proyectos de software.

Tradicionalmente, los desarrolladores empujan su código (commits) a un
servidor de control de versiones. Una vez que hubo suficiente código para construir un lanzamiento, alguien invocaría una herramienta de compilación que toma todo el código enviado y crea un **build** a partir de él, que podría liberarse en un entorno específico (Dev, QA, UAT/ Stag o Producción)

Con la integración continua, esta operación de 'construcción' se ejecuta cada vez que se "empuja" un código al repositorio. 

Jenkins, en este caso, también ejecutaría tests para asegurarse de que la compilación sea estable y esté bien para la entrega. Si hay problemas con la compilación, Jenkins notificaría a los desarrolladores que hay un problema.

Los desarrolladores invocan a Jenkins de varias maneras. Algunos escriben un programa que ejecuta periódicamente (un trabajo cron) que le permite a Jenkins elegir el código más reciente del repositorio y construirlo. También puede ser condicionado para actuar cada vez ue hay un nuevo commit en el repositorio.
````
