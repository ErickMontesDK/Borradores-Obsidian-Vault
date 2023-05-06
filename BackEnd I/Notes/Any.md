<i class="time">martes 22-11-2022
</i>
<div class="head"><h1>Any type</h1></div>

``````ad-abstract
**Any** es un tipo de datos en TypeScript. **Any** type se usa cuando tratamos con programas de terceros y esperamos cualquier variable pero no sabemos el tipo exacto de variable. Se utiliza **any** porque ayuda a optar por la verificación de tipos durante la compilación.

El tipo any es esencialmente una escotilla de escape del sistema de tipos. Como desarrolladores, esto nos da mucha libertad: TypeScript nos permite realizar cualquier operación que queramos en valores de tipo any sin tener que realizar ningún tipo de verificación de antemano.

`````ad-example
```typescript
let a:any = 666        //any
let b:any =['danger']  //any
let c= a + b           //any
```
`````
Para que TypeScript se queje de anys implícitos, sea asegúrese de habilitar el indicador nolmplicitAny en su tsconfig.json
``````
