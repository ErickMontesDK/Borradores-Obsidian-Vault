---
banner: "https://styde.net/wp-content/uploads/2018/07/Post_VueCLI.png"
banner_y: 0.74121
---


# emit 
<hr> 

> [!abstract]
> Sincroniza valores de un componente hijo a un padre ejecutando una funcion
> 
> ### En hijo 
> ```js
> <button v-text="like?'Favorito':'Agregar a Favoritos'" @clic="$emit('update:like,!like')"></button>
> ```
> 
> ### En padre
> <component 
> 	:like.sync="movie.like"/>
> 
> 

<hr>

<b>Tags:</b> #vue