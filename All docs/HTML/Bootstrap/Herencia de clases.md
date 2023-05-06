---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Herencia de clases
<hr> 

> [!abstract]
> Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
> Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
> ```js
> class newClass extends OriginalClass{}
> ```
> Para usar elementos del constructor de la clase padre, se usa el elemento <mark>super</mark>
> 
> > [!example]
> > 
> > ```js
> > class Developer {
> >     constructor(name, mainLang, stack){
> >       this.name =  name
> >       this.mainLang = mainLang
> >       this.stack = stack
> >     }
> >   
> >     get getName() {
> >           return this.name
> >     }
> > }
> > 
> > class LaunchXStudent extends Developer{}
> >   
> > const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir", "groovy", "lisp"])
> > console.log(carloLaunchXDev)
> > console.log(carloLaunchXDev.getName) 
> > ```
> > 
> > > [!bug] Console
> > > <code>LaunchXStudent { 
> > > name: 'Carlo', 
> > > mainLang: 'js', 
> > > stack: [ 'elixir', 'groovy', 'lisp' ] } 
> > > 
> > > Carlo</code>
> > 
> 
> > [!example]
> > 
> > ```js
> > class Explorer{
> >     constructor(name, username, mission){
> >      this.name = name
> >      this.username = username
> >      this.mission = mission
> >     }
> >     getNameAndUsername(){
> >      return `Explorer ${this. name}, username: ${this.username}`
> >     }
> >   }
> >   
> > class Viajero extends Explorer {
> >     constructor(name, username, mission, cycle){
> >       super(name, username, mission)
> >       this.cycle = cycle
> >     }
> >   
> >     getGeneralInfo(){
> >       let nameAndUsername = this.getNameAndUsername() 
> >       return `${nameAndUsername}, Ciclo ${this.cycle}`
> >     }
> >   }
> >   
> >   const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
> >   console.log(viajero1)
> >   console.log(viajero1.getNameAndUsername()) // Método de la clase padre
> >   console.log(viajero1.getGeneralInfo()) // Método de la clase hija
> > ```
> > 
> > > [!bug] Console
> > > <code>Viajero {
> > >   name: 'Carlo',
> > >   username: 'LaunchX',
> > >   mission: 'Node JS',
> > >   cycle: 'Abril 2022',
> > > }
> > > 
> > > Explorer Carlo, username: LaunchX 
> > > 
> > > Explorer Carlo, username: LaunchX, Ciclo Abril 2022
> > > </code>
> > 
> 

<hr>
<b>Tags:</b> #javascript 