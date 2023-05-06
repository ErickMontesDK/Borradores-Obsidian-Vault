<i class="time"></i>
<div class="head"><h1>Unión de interfaces</h1></div>

````ad-abstract
Puedes crear una interface en base a una ya creada previamente agregando el termino <b>extends</b> y refiriendo a la interface original
```typescript
interface Food {
	calories: number
	salty: boolean
}

interface Sushi extends Food{
	tasty: boolean
}

interface Cake extends Food{
	tasty: boolean
}

```
````
