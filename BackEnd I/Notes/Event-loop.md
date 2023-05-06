# Event-loop

> [!abstract]
>  Existe un ciclo infinito en el que el motor de JavaScript espera por una tarea, luego ejecuta la tarea requerida y finalmente vuelve a dormir esperando por una nueva tarea.
> > [!danger] El algoritmo general del motor:
> > 1.  Mientras haya tareas:
> >     -   ejecutarlas comenzando por la más antigua.
> > 2.  Dormir hasta que aparezca una tarea, luego volver a 1.
> El motor JavaScript no hace nada la mayoría del tiempo y solo corre cuando un script/controlador/evento se activa.
> 
> > [!example] Ejemplos de tareas
> > -   Cuando un script externo `<script src="...">` se carga, la tarea es ejecutarlo.
> > -   Cuando un usuario mueve el mouse, la tarea es enviar el evento `mousemove` y ejecutar el controlador.
> > -   Cuando llega el momento de un `setTimeout` programado, la tarea es ejecutar su callback.
> 
> >Las tareas son programadas --> el motor las ejecuta --> espera por más tareas (mientras duerme y prácticamente no consume CPU).
> 
> Puede ocurrir que una tarea llegue mientras el motor está ocupado, entonces es puesta en cola.
> 
> Las tareas forman una cola, también llamada <b>“Cola de macrotarea”</b> (Término de v8)
> > [!example]
> > Por ejemplo, mientras el motor está ocupado ejecutando un `script`, un usuario podría mover su mouse causando `mousemove` o también podría ser `setTimeout`, etc. Todas estas tareas forman una cola como se observa en la imagen 
> > ![[Pasted image 20221116134952.png]]
> 
> Las tareas de la cola son ejecutadas según la base “El que primero llega primero se atiende”. Cuando el motor del navegador termina con el `script`, se encarga del evento `mousemove`, continúa con `setTimeout`, etc.
> 
> Dos detalles más:
> 
> 1.  El renderizado nunca ocurre mientras el motor ejecuta una tarea. No importa si la tarea ocupa mucho tiempo. Solo se realizan cambios a DOM una vez que la tarea finaliza.
> 2.  Si una tarea consume demasiado tiempo, el navegador no puede hacer otras tareas, procesos o eventos por lo que después de un tiempo muestra una alerta “La página no responde” sugiriendo detener la tarea con la página completa. Esto ocurre cuando hay muchos cálculos complejos o un error en la programación que lleva a un bucle infinito.