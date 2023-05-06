---
banner: "https://styde.net/wp-content/uploads/2018/07/Post_VueCLI.png"
banner_y: 0.74121
---


# Importar y exportar componentes 
<hr> 

> [!abstract]
> Para importar un componente dentro de otro componente/vista, se tiene que agregar declarar tanto la importación como exportación de este
> 
> ## En hijo
> ```js
> <template>
> 	<div>Aqui va todo el desarrollo de componente</div>
> </template>
> 
> <script>
> export default {
>     name:"NombreDelComponente",
> }
> </script>
> ```
> ## En padre
> ```js
> <template>
>   <div>Aqui va el desarrollo del padre
> 	  <Componente/>
>   </div>
> </template>
> 
> <script>
>   import Componente from "./components/componente.vue"
> export default {
>   components: {
>     Componente,
>   },
> }
> </script>
> ```

<hr>

<b>Tags:</b> #vue