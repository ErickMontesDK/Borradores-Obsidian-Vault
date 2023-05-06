<i class="time"></i>
<div class="head"><h1>Using jest</h1></div>

````ad-abstract
title:## Instalación para typescript
Para instalar ts-jest y sus dependencias de una vez, se usa el sig. comando
<code>npm i -D jest ts-jest @types/jest</code>

Se crea un archivo de configuración
<code>npx ts-jest config:init</code>
En el archivo verificar que este escrito el siguiente código
```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node'
}
```

Se configura el package.json para correr jest
<code>"scripts":{
	"test": "jest --coverage"
}</code>
De forma que se ejecutaran los test en una carpeta test jest al escribir en el cmd
<code>npm run test</code>
![[Pasted image 20221204191747.png]]
````
`````ad-example
collapse:
title:## Ejemplo de Unit testing
```js
import Position from '../src/position'

import King from '../src/king'

describe('Unit Test for King', () => {
	let king: King
	
	beforeEach(() => {
		king = new King('White', 'E', 1)
	})

	// King
	it('Should move one place forward', () => {
		const position = new Position('E', 2)
		expect(king.canMoveTo(position)).toBe(true)
	})
	it("Shouldn't move to the same place", () => {
		const position = new Position('E', 1)
		expect(king.canMoveTo(position)).toBe(false)
	})

	it('Should move one place to the left', () => {
		const position = new Position('D', 1)
		expect(king.canMoveTo(position)).toBe(true)
	})
	it("Shouldn't move forward more than 1 space", () => {
		const position = new Position('E', 3)
		expect(king.canMoveTo(position)).toBe(false)
	})
})
```
`````
