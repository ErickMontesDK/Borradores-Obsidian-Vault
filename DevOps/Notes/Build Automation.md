<i class="time"></i>
<div class="head"><h1>Build Automation</h1></div>

````ad-abstract
Build se refiere al proceso que convierte archivos y otros activos bajo la responsabilidad de los desarrolladores en un producto de software en su versión final o forma consumible.

La construcción puede incluir: 
- Compilando archivos fuente 
- Archivos compilados en formatos comprimidos (como jar, Zip) 
- Instaladores productores 
- Creación o actualización del esquema o datos de la base de datos.

La construcción está automatizada cuando estos pasos son repetibles, no requieren humanos directos intervención, y se puede realizar en cualquier momento sin más información que lo que es almacenado en el repositorio de control de código fuente.
````

````ad-info
title:Errores comunes
- La práctica de la automatización de "build automation" no debe confundirse con la integración continua: el último consiste en "ejecutar" el proceso de compilación con la mayor frecuencia posible (idealmente cada vez que se registra un cambio de código en el repositorio de control de código fuente) y '"verificar" la corrección del producto resultante, en particular mediante pruebas unitarias
- Las herramientas de integración continua (CruiseControl, Jenkins, etc.) son una categoría distintas de las herramientas de automatización de compilación (make, Ant. Maven, rake, etc.)
- Ser capaz de desencadenar algunas operaciones de compilación desde un entorno de desarrollo (IDE) por lo general no es suficiente: como sucede a menudo, algunas operaciones de compilación no son compatible con el IDE, debe ser posible realizar una compilación fuera del IDE.
- La duración de un proceso de compilación debe ser inferior a diez minutos, incluida la ejecución de pruebas automatizadas
````

````ad-info
Con la integración continua, esta operación de 'build' invoca cada vez que un desarrollador empuja su código al repositorio, Jenkins, en este caso, también ejecutaría pruebas para asegurarse de que la compilación sea estable y esté bien para la entrega. Si hay problemas con la compilación, Jenkins notificaría a los desarrolladores que hay un problema.

Los desarrolladores invocan a Jenkins de varias maneras. Algunos escriben un programa que ejecuta periódicamente (un trabajo cron) que le permite a Jenkins elegir el código más reciente del repositorio y construirlo. También puede ser condicionado para actuar tan pronto como haya un nuevo cometer en el repositorio.
````