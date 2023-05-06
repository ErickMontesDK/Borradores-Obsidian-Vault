<i class="time"></i>
<div class="head"><h1>Access modifiers</h1></div>

````ad-abstract
TypeScript admite modificadores de acceso a nivel de clase. El modificador de acceso en TypeScript es bastante útil y recomendado porque <mark style="background: #ABF7F7A6;">preserva la seguridad de los miembros de la clase, como propiedades y atributos, y evita que se usen de manera inapropiada</mark>. 
También podemos usarlo para controlar la accesibilidad de los miembros de datos de una clase para que no se pueda usar abruptamente en ninguna parte del archivo de script. 

Si la clase no tiene que configurar ningún modificador de acceso, TypeScript establece automáticamente el acceso del modificador público a todos los miembros de la clase como un modificador predeterminado
```ad-warning
title:Public
collapse:
Se puede acceder a los miembros públicos en todas partes sin restricciones, incluso desde las subclases de múltiples niveles sin ningún error de compilación.
```
```ad-warning
title:Private
collapse:
No se puede acceder a un miembro privado fuera de su clase contenedora. Solo se puede acceder a los miembros privados dentro de la clase e incluso sus subclases no podrán usar sus propiedades y atributos privados.
```
```ad-warning
title:Protected
collapse:
No se puede acceder a un miembro protegido fuera de su clase contenedora. Solo se puede acceder a los miembros protegidos dentro de la clase y por la instancia de su subclase/clase secundaria.
```
````
