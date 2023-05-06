<i class="time"></i>
<div class="head"><h1>Dependency Inversion</h1></div>

````ad-abstract
Estas premisas definen el principio.

>A: _Los módulos de alto nivel no deberían depender de los de bajo nivel. Ambos deberían depender de abstracciones.  
_

>B: _Las abstracciones no deberían depender de los detalles. Son los detalles los que deberían depender de abstracciones._

En la orientación a objetos, lo normal es tener una jerarquía de objetos que se unen porque los de más alto nivel suelen incluir una instancia de los de más bajo nivel.

>*Un bosque contiene árboles, que a su vez contienen hojas, que contienen células…*

Por eso se eligió la palabra “**inversión**”, porque rompe con esta dinámica.

Lo que se pretende es que no exista la necesidad de que los módulos dependan unos de otros, sino que dependan de <mark style="background: #ABF7F7A6;">abstracciones</mark>. De esta forma, nuestros módulos pueden ser más fácilmente reutilizables.
````
`````ad-example
Consideremos un objeto botón y un objeto lámpara. 
El objeto botón reacciona a un estímulo cambiando su estado entre encendido y apagado.

La lámpara si recibe la orden de encenderse o de apagarse actuará en consecuencia, no importa qué tipo de lámpara sea.
![[Pasted image 20221206192806.png]]
El problema de este modelo es que el botón está demasiado acoplado a la lámpara innecesariamente, a este botón le costaría encender y apagar un motor por ejemplo, porque ya tiene la lampara dentro de su estructura.
![[Pasted image 20221206192936.png]]

`````
