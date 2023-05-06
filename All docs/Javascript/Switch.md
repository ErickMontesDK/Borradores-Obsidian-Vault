---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Switch
<hr> 

> [!abstract]
> A `switch` statement tests a value and can have many case statements which define various possible values. 
> Statements are executed from the first matched <mark>case</mark> value until a <mark>break</mark> is encountered.

^fd0ee4

>```````ad-info
>title:
>```js
>switch (lowercaseLetter) {
>	case "a":
>		console.log("A");
>		break;
>	case "b":
>		console.log("B");
>		break;
>}
>```

>````ad-warning
If the `break` statement is omitted from a `switch` statement's `case`. If you have multiple inputs with the same output, you can represent them in a `switch` statement
>```js
>let result = "";
>switch (val) {
>	case 1:
>	case 2:
>	case 3:
>		result = "1, 2, or 3";
>		break;
>	case 4:
>		result = "4 alone";
>}

<hr>

> [!info] ## Default
> You can add the `default` statement which will be executed if no matching `case` statements are foundjs
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

<hr>
<b>Tags:</b> #javascript #conditionals 