---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Static methods
<hr> 

> [!abstract]
> Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
> 
> Podemos llamar el método static directamente con el nombre de la clase. 
> Si intentamos instanciar un objeto, no podremos llamar este método static en el objeto.
> ```js
> 
> ```
> 
> > [!example]
> > 
> > ```js
> > class Toolbox {
> >     static getMostUsefulTools(){
> >       return ["Command line", "git", "Text Editor"]
> >     }
> >   }
> >   
> >   console.log(Toolbox.getMostUsefulTools())
> > ```
> > 
> > > [!bug] Console
> > > <code>[ 'Command line', 'git', 'Text Editor' ]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript 