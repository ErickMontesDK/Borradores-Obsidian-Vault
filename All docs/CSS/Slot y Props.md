---
banner: "https://styde.net/wp-content/uploads/2018/07/Post_VueCLI.png"
banner_y: 0.74121
---

# Slot y Props 
<hr> 

> [!abstract]
> Existen dos formas de pasar un valor de un componente padre a un hijo. 
> > [!example] ## Plots
> > ### En padre
> > 
> > ```js
> > <componenteHijo>
> >     <template #SlotA>
> > 	    Valor que se le quiere dar a Slot A
> >     </template>
> >     <template #SlotB>
> >         Valor que se le quiere dar a Slot B
> >     </template>
> > </componenteHijo>
> > ```
> > ### En hijo
> > ```js
> > <button>
> >     <slot name="SlotA">
> > 	    Valor default de Slot A
> >     </template>
> >     <slot name="SlotB">
> >         Valor default de Slot B
> >     </template>
> > </button>
> > ```
> 
> > [!example] ## Props
> > ### En padre
> > 
> > ```js
> > <componenteHijo 
> > 	:text="variable"
> > 	:img="variable"
> > 	:title="variable"
> > />
> > 
> > ```
> > ### En hijo
> > ```js
> > <div>
> > 	<h2 v-text="text"></h2>
> > 	<img :src="img">
> > 	<p v-text="text"></p>
> > </div>
> > 
> > <script> 
> > export default{
> > 	props:{
> > 		text:{
> > 			type:Number,
> > 			default:"Sin titulos",
> > 			required:true,
> > 		}
> > 	}
> > }
> > </script>
> > ```
> 

<hr>

<b>Tags:</b> #vue