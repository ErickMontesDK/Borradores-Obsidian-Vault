<i class="time"></i>
<div class="head"><h1>Call signatures</h1></div>

````ad-abstract
En JavaScript, las funciones pueden tener propiedades además de ser invocables. Sin embargo, la sintaxis de expresión de tipo de función no permite declarar propiedades. Si queremos describir algo invocable con propiedades, podemos escribir una firma de llamada <b>call signatures</b>
```typescript
function sum (a:number, b:number): number {
	return a + b
}

const test = sum
```
Donde test aparece asignada un "*tipo de función*"
![[Pasted image 20221201132747.png]]
````
