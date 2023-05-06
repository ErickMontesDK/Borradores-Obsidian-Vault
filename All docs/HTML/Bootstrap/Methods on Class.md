---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Methods on Class
<hr> 

> [!abstract]
> Las clases pueden poseer funciones dentro que son heredaras a los objetos creados por dicha clase
> ```js
> 
> ```
> 
> > [!example]
> > 
> > ```js
> > class Repository {
> >     constructor(name, author, language, stars){
> >      this.name = name
> >      this.author = author
> >      this.language = language
> >      this.stars = stars
> >     }
> >   
> >     getInfo(){
> >       return `Repository ${this.name} has ${this.stars} stars`
> >     }
> >   }
> > 
> >   const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100)
> >   console.log(myRepo.getInfo())
> >   
> > ```
> > 
> > > [!bug] Console
> > > <code>Repository LaunchX has 100 stars</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript 