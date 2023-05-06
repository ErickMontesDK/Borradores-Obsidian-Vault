<i class="time"></i>
<div class="head"><h1>Classes y herencia</h1></div>

````ad-abstract
La palabra clave **<b>extends</b>** es usada en la declaración o expresión de clases, para crear una clase hija de otra.

La palabra clave extends se puede usar para crear una subclase a partir de clases personalizadas, así como sus objetos incorporados.
````typescript
class Piece {
	protected position: Position
	
	constructor (private readonly color: Color, file: File, rank: Rank) {
		this.position = new Position(file, rank)
	}
	moveTo (position: Position) {
		this.position = position
	}
	abstract canMoveTo (position: Position): boolean
}

class King extends Piece{}
class Queen extends Piece{}
````
````
