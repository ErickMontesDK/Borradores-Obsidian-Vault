---
banner: "https://icreate.agency/wp-content/uploads/2015/10/html5-1300x470.gif"
---
# picture
> [!abstract]
> ````
> Defines a container for multiple image resources.This way the browser can choose the image that best fits the current view. ^96a329
> * The first `<source>` element where the media query matches the current viewport width, and then it will display the proper image (specified in the srcset attribute). The `<img>` element is required as the last child of the `<picture>` element, as a fallback option if none of the source tags matches.
> 
> <hr>
> ad-example
<picture>
	<source media="(min-width: 650px)" srcset="https://www.w3schools.com/html/img_food.jpg">
	<source media="(min-width: 465px)" srcset="https://www.w3schools.com/html/img_car.jpg">
<img src="https://www.w3schools.com/html/img_girl.jpg">
</picture>

> [!bug] Code
> ~~~html
> <picture>
> 	<source media="(min-width: 650px)" srcset="https://www.w3schools.com/html/img_food.jpg">
> 	<source media="(min-width: 465px)" srcset="https://www.w3schools.com/html/img_car.jpg">
> <img src="https://www.w3schools.com/html/img_girl.jpg">
> </picture>
> ~~~


````

<hr>
<b>Tags:</b> #html #elementos #imagen 