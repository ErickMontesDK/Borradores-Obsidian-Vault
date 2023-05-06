---
banner: "https://styde.net/wp-content/uploads/2018/07/Post_VueCLI.png"
banner_y: 0.74121
---


# Directivas 
<hr> 

> [!abstract]
> Las **directivas de Vue** son atributos especiales que se colocan en las etiquetas HTML y están prefijados por `v-`, como por ejemplo, `v-for`, `v-bind` o `v-on`, entre muchas otras. Estas directivas permiten realizar **acciones dinámicas potentes** (_bucles, condicionales, etc..._) que no se pueden realizar en HTML por si solo, pero que **Vue** permite utilizar en sus etiquetas `<template>`.
> 
> | | | |
> |---|---|---|
> |v-text|<p v-text="text"&gt;</p&gt;|Asignar texto a un elemento. Solo por buena practica|
> |v-bind|<a :href="link.href" v-bind:title="link.title" v-text="link.text"&gt;</a&gt;|Asignar propiedades a los atributos|
> |v-html="message"|<div v-html="html"&gt;</div&gt;|En lugar de texto, pasa como html|
> |v-show|<p v-show="status">Esto se oculta si TRUE</p>|Se muestra el elemento si show==true, display:none|
> |v-if|<span v-if="status">Esto existe si TRUE</span>|Elimina elemento si v-if==false|
> |v-else-if|<span v-else-if="statusElif">Esto existe si statusIf==FALSE y statusELIF=TRUE</span>|Muestra elemento si if==false y if2=true|
> |v-else|<span v-else>Esto aparece si FALSE y FALSE</span>|Si if y elif es falso, ejecuta el elemento else|
> |v-for|<li v-for="(element,key,index) in object" :key="index"&gt;{{key}}:{{element}}</li&gt;|Itera entre una lista de elementos|
> |v-on: y @|<button type="button" v-on:click="sendColor"&gt;mandar</button&gt;|Ejecutar funciones en Methods y Computed|
> |[[Slot y Props]]|Manda valores al componente hijo|
> |v-pre|<span v-pre&gt;{{elemento}}</span&gt;|no renderizar valores|
> |v-cloak|<span v-cloak&gt;{{elemento}}</span&gt;|no muestra información hasta que la pagina este cargada|
> |v-once|<span v-once>{{elemento}}</span>|el valor no muestra ningun cambio en su valor|
> 

<hr>

<b>Tags:</b> #vue