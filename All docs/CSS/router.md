---
banner: "https://styde.net/wp-content/uploads/2018/07/Post_VueCLI.png"
banner_y: 0.74121
---


# router 
<hr> 

> [!abstract]
> Indicar la dirección de cada view
> 
> `````js
> import View from '../views/view.vue'
> 
> const routes = [
>   {
>     path: '/',
>     name: 'home',
>     component: HomeView
>   },
>   {
>     path: '/viewRoute',
>     name: 'view',
> 	component: View
>   }
> ]
> 
> const router = createRouter({
>   history: createWebHashHistory(),
>   routes
> })
> 
> export default router

<hr>

<b>Tags:</b> #vue