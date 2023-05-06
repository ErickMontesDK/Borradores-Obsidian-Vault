<i class="time"></i>
<div class="head"><h1>Historia de Javascript</h1></div>

````ad-abstract
Javascript fue creado en 1995 por Brendan Eich en 10 días. Era un prototipo que se ejecutaba en el navegador Netscape, dado que HTML no era suficiente para definir un entorno de desarrollo de aplicaciones nuevas. 
Naciendo como Mocha, luego Livescript para terminar como Javascript
![](https://lh3.googleusercontent.com/XA-SzUqK9xmwgcL4qSQ4XtQDmHRSvH3knGdW6AvjwpcDbpfXPEAJO-a1M1SNSX74g2KvuEOS5KFDzgM7cJ_5fpdBQsGWbtKWg2ERc6vMfUqDOUE_nZaF9nafhKlspJy4zHvigfmfKcLPaTAprrrv_i7THQ5Ca7LKesk_F5M0vTIqfznrM7A61sDSUjigqQ)
````

````ad-info
title:Estandarización
Netscape decide estandarizar su lenguaje Javascript en 1997, enviando su version a la ECMA (European Computer Manufacturers Association, luego llamada Ecma Internacional)

Ecma crea el comité TC39 para estandarizar y crear un lenguaje multiplataforma independiente de cualquier empresa, este estandar es llamado <b>ECMA-262</b>, llamado ECMAScript. 
 
Existe otro estandar frente la ISO/IEC, conocida como <b>ISO/IEC 16262</b>

Javascript y ECMAScript es tecnicamente lo mismo, solo es su nombre de registro. Se nombra como ECMAScript cuando hablamos de estandars y versiones del lenguaje. 

```ad-tip
 -   ES1 (Junio 1997) — La primera edición estándar
 -   ES2 (Junio 1998) — Se hacen cambios para adaptarlo al estándar ISO/IEC-16262
 -   ES3 (Diciembre 1999) — Versión base de los navegadores.
 	- Se agrego regular expressions, try/catch, switch, do-while
 -   ES4 — Fue abandonada debido a diferencias políticas
 -   ES5 (Diciembre 2009) - Versión actual de la mayoría de los navegadores
 	-Se agregó "strict mode", JSON support, String.trim(), Array.isArray(), Array iteration methods
 -   ES6 (2015)
 - Agrego Added let and const, default parameter values, Array.find(), Array.findIndex()
```

En un inicio, cada version de ECMAScript era acompañado de su numero de version, pero saliendo ES6 se decide cambiarle el nombre a ES2015, reflejando el año en que ha sido lanzado cada versión 
````

`````ad-info
title: Technical Committee 39
Es un grupo de desarrolladores de JS, academicos, etc colaborando para estandarizar Javascript bajo la especificación de ECMAScript.
Se dedica a:
> -Mantener y actualizar el estandar para ECMAScript
> -Identificar, desarrollar y mantener estandars para librerias que amplien las capacidades de ECMAScript
> -Desarrollar pruebas que verifiquen la implementación de los estandars
> -Evaluar y considerar propuestas tecnológicas complementarias o adicionales

````ad-tip
title:Proceso

```ad-warning
title:Strawman
collapse:
Cualquier discusión, idea, cambio o adición que aún no se haya presentado como una propuesta formal se considera una propuesta de “testimonio” (<i>Strawman</i>) en esta etapa. 
Solo los miembros de TC39 pueden crear estas propuestas.
```
```ad-warning
title:Proposal
collapse:
Se formaliza una propuesta y se espera que aborde preocupaciones transversales, interacciones con otras propuestas y preocupaciones de implementación. 
Las propuestas en esta etapa identifican un problema discreto y ofrecen una solución concreta a ese problema.
```
```ad-warning
title:Draft
collapse:
Las propuestas en esta etapa deben ofrecer un borrador inicial de la especificación.
```
```ad-warning
title:Candidate
collapse:
Las propuestas en esta etapa son candidatos por recomendación. En esta etapa avanzada, el editor de especificaciones y los revisores designados deben haber firmado la especificación final. 
Es poco probable que una propuesta de la Etapa 3 cambie más allá de las soluciones a los problemas identificados en la naturaleza.
Debe ser apoyada por implementadores para seguir el proceso
```
```ad-warning
title:Finished
collapse:
Finalmente, las propuestas llegan a esta etapa cuando hay al menos dos implementaciones independientes que pasan las pruebas de aceptación.
Las propuestas que lleguen a la etapa 4 se incluirán en la próxima revisión de ECMAScript. 
Cuando la especificación pasa por su ratificación anual como estándar, la propuesta se ratifica como parte de ella
```
````

`````
