---
banner: "https://icreate.agency/wp-content/uploads/2015/10/html5-1300x470.gif"
---
# Inputs
> [!abstract]
> ````
> The ``input`` tag specifies an input field where the user can enter data. The input element is the most important form element. The input element can be displayed in several ways, depending on the type attribute.
> 
> <hr>
> ```ad-note
title:Tipos de inputs
> [!example] ## Meh
> 
> |Ejemplo|Nombre|Código|
> |---|---|---|
> |<label for="cars">Choose a car:</label> <select id="cars" name="cars"> <option value="volvo">Volvo</option> <option value="saab">Saab</option> <option value="fiat">Fiat</option> <option value="audi">Audi</option> </select>|[[select & option]]|<select&gt; and <option&gt;|
> |<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"><label for="vehicle1"> I have a bike</label><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"><label for="vehicle2"> I have a car</label>|[[type checkbox]]|<input type="checkbox"&gt; and <label&gt;|
> |<input type="radio" id="html" name="fav_language" value="HTML"> <label for="html">HTML</label> <input type="radio" id="css" name="fav_language" value="CSS"> <label for="css">CSS</label>|[[type radio]]|<input type="radio"&gt; and <label&gt;|
> [!example] ## Input abierto
> 
> |Ejemplo|Nombre|Código|
> |---|---|---|
> |<label for="fname">First name:</label><input type="text" id="fname" name="fname"><br> <label for="lname">Last name:</label><input type="text" id="lname" name="lname">|[[type text]]|<input="text"&gt;|
> |<input type="number" id="quantity" name="quantity" min="1" max="50" placeholder="num">	|[[type number]]|<input type="number"&gt;|
> |<input type="email" id="email" name="email" placeholder="email">|[[type email]]|<input type="email"&gt;|
> |<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">|[[type tel]]|<input type="tel"&gt;|
> |<input type="search" id="gsearch" name="gsearch">|[[type search]]|<input type="search"&gt;|
> |<label for="password">password:</label> <br> <input type="text" id="password" name="password" placeholder="contraseña">|[[type password]]|<input type="password"&gt;|

> [!example] ## Fecha y tiempo
> 
> |Ejemplo|Nombre|Código|
> |---|---|---|
> |<input type="date" id="birthday" name="birthday">|[[type date]]|<input type="date"&gt;|
> |<input type="datetime-local" id="birthdaytime" name="birthdaytime">	|[[type datetime-local]]|<input type="datetime-local"&gt;|
> |<input type="month" id="bdaymonth" name="bdaymonth">	|[[type month]]|<input type="month"&gt;|
> |<input type="week" id="week" name="week">	|[[type week]]|<input type="week"&gt;|

> [!example] ## Botones
> 
> |Ejemplo|Nombre|Código|
> |---|---|---|
> |<input type="button" value="boton">|[[type button]]|<input type="button">|
> |<input type="submit">|[[type submit]]|<input type="submit"&gt;|
> |<input type="reset">|[[type reset]]|<input type="reset"&gt;|
> |<input type="file" id="myfile" name="myfile">	|[[type file]]|<input type="file"&gt;|

> [!example] ## Otros
> 
> |Ejemplo|Nombre|Código|
> |---|---|---|
> |<input type="color" id="favcolor" name="favcolor">	|[[type color]]|<input type="color"&gt;|
> |<input type="hidden" id="custId" name="custId" value="3487">	|[[type hidden]]|<input type="hidden"|
```````

<hr> 


## Atributos de input
> [!tip] Atributos
> * [[accept-charset]]
> * [[action]]
> * [[autocompleted]]   -->Activar autocompletado
> * [[autofocus]] --> Seleccionada al cargar la página
> * [[checked]]
> * [[datalist]]
> * [[disabled]]  --> No disponible
> * [[enctype]]
> * [[fielset]]
> * [[label]]  -->Texto para la opción
> * [[legend]]
> * [[maxlength]]  -->Cantidad máx de caracteres
> * [[methods]]
> * [[min and max]] -->Valor máximo de número
> * [[multiple]]      -->Aceptar más de un valor en el mismo campo
> * [[name]]       
> * [[novalidate]]
> * [[optogroup]]
> * [[output]]
> * [[pattern]]      -->Patrón que debe cumplir la respuesta pattern="[A-Za-z]{3}"
> * [[placeholder]]  -->Pista sobre tipo de respuesta
> * [[readonly]]     -->El campo solo se lee, no se modifica
> * [[required]]     -->Obligatorio contestar
> * [[select]]
> * [[size]]         -->Tamaño en caracteres del input
> * [[step]]         -->Intervalo de número posible a usar
> * [[textarea]]
> * [[value]]        -->Valor pre-escrito

<hr> 

## Form and form atributes
> [!info] [[Form]]
> ![[Form#^4146cc]]
> 
> 
> > [!info] [[Form#Atributos | Atributos]]
> > ![[Form#Atributos]]
![[Pasted image 20220922142209.png]]
<hr>
<b>Tags:</b> #html #elementos  #inputs