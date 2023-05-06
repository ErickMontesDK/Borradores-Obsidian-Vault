<i class="time"></i>
<div class="head"><h1>abstract</h1></div>

````ad-abstract
Una clase abstract no se puede instanciar. Solo se puede crear clases hijas a partir de ella

```typescript
abstract class Piece{
	constructor(private color: Color, file: File)
}

let king=new Piece ('red', 'E')// ERROR, NO SE PUEDE INSTANCIAR
```

````
