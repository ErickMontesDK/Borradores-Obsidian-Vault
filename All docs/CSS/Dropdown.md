---
banner: "https://miro.medium.com/max/1400/0*Nlx2hoPlEhSNZ1ne.png"
---


# Dropdown 
<hr> 

> [!abstract]
> A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list:
> ![[Pasted image 20220924010411.png]]
> 
> Para activar elemento se escribe la class ".dropdown-toggle" y data-bs-toggle="dropdown"
> ```html
> <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown">
> </button>
> ```
> Para escribir el menu es la clase "dropdown-menu" y "dropdown-item" a cada elemento
> ```html
> <ul class="dropdown-menu">  
> 	<li><a class="dropdown-item" href="#">Link 1</a></li>   
> </ul>
> ```
> > [!example]
> > ```html
> > <div class="dropdown">  
> > 	<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">  
> > 	Dropdown button  
> > 	</button>  
> > 	<ul class="dropdown-menu">  
> > 		<li><a class="dropdown-item" href="#">Link 1</a></li>  
> > 		<li><a class="dropdown-item" href="#">Link 1</a></li>  
> > 		<li><a class="dropdown-item" href="#">Link 1</a></li>   
> > 	</ul>  
> > </div>

<hr>

<b>Tags:</b> #bootstrap