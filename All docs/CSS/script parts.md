---
banner: "https://styde.net/wp-content/uploads/2018/07/Post_VueCLI.png"
banner_y: 0.74121
---


# script parts 
<hr> 

> [!abstract]
> En un script de un componente hay varias secciones que cumplen una funcion en especifico
> 
> ## Data
> Almacena las variables que hay dentro del componente
> ```html
> <template> 
> 	<span v-text="textoInicio"></span>
> 	<input type=="text" v-model="search">
> </template>
> ```
> ```js
> <script>
> import Component from "./components/Component.vue";
> 
> export default {
> 	data(){     //Informacion que se usará. Variables
> 	    return{
> 		    textoInicio:"Hello world",
> 		    search="",
> 	},
> }
> ```
> <hr> 
> 
> ## Importar y exportar
> ```html
> <template> 
> 	<Component/>
> </template>
> ```
> ```js
> <script>
> import Component from "./components/Component.vue";
> 
> export default {
> 	name:'App',  //Nombre asignado para exportar este componente
> 	components:{ //Lista de componentes importados
> 	    Component
> 	},
> }
> ```
> <hr> 
> 
> ## Methods
> Para funciones que no son reactivas. Solo cuando se ejecutan. Pueden recibir un valor
> ```html
> <template> 
> 	<button @click="function()"></button>
> </template>
> ```
> ```js
> <script>
> 
> export default {
> 	methods:{   
> 	    sendColor(){
> 		    return "MENSAJE"
> 	    }
> 	},
> }
> ```
> <hr> 
> 
> ## Computed
> Para funciones que son reactivas. Detectan el cambio de valor. Util para getters y setters
> ```html
> <template>
> 	<span>{{infoFunction.name}}</span>
> </template>
> 
> ```
> ```js
> <script>
> 
> export default {
> 	computed:{  
> 	    infoFunction(){
> 	      return this.$store.getters.getInformation;
>     },
> }
> ```
> <hr> 
> 
> ## Filters
> Ejecutan funciones que dan un valor filtrado/modificado
> ```html
> <template>
> 	<span v-text="text | uppercase"></span>
> </template>
> ```
> ```js
> <script>
> 
> export default {
> 	filters:{   //Toman un valor regresado por props, y lo modifican
> 	    uppercase(value){
> 		    return value.touppercase();
> 	    }
>     },
> }
> ```
> <hr> 
> 
> ## Created
> Funciones ejecutadas antes de que cargue la View. Util para Api Rest
> ```js
> <script>
> 
> export default {
> 	created:{   
> 	    function(){
> 		    this.$store.dispatch('function')
> 	    }
>     },
> }
> ```
> <hr> 
> 
> ## Mounted
> Funciones ejecutadas despues de que cargue la View
> ```js
> <script>
> 
> export default {
> 	mounted:{   
> 	    function(){
> 		    this.$store.dispatch('function')
> 	    }
>     },
> }
> ```
> <hr> 
> 
> ## Props
> Valores recibidos por los props
> ```html
> <template>
> 	<h2 v-title="title"></h2>
> 	<img :src="color">
> </template>
> ```
> ```js
> <script>
> 
> export default {
> 	props:{    //Datos brindados por el componente padre
>         title:{
> 		    type:String,
> 	        required:true,
> 	        default:"ejemplo",
>         },
>         img:{
> 		    type:String,
> 	        required:false,
> 	        default:"ejemplo",
>         }
> 	},
> }
> ```
> 

<hr>

<b>Tags:</b> #vue