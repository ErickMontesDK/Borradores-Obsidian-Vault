---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# If statements
<hr> 

> [!info] Index
> 1. [[#^a729f1 | If]]
> 2. [[#^b1544a | Else]]
> 3. [[#^e53598 | Else if]]

^dff3e5

<hr> 

> [!abstract] ## If
> <mark>if</mark> statements are used to make decisions in code.
> These conditions are known as `Boolean` conditions and they may only be `true` or `false`.
> When the condition evaluates to `true`, the program executes the statement inside the curly braces.
> ```js
> function test (myCondition) {
>   if (myCondition) {
>     return "It was true";
>   }
>   return "It was false";
> }
> 
> test(true); //returns "It was true"
> test(false);//returns "It was false"
> ```

^a729f1

<hr>

> [!abstract] ## Else
> When a condition for an `if` statement is true, the block of code following it is executed. When that condition is false, an alternate block of code can be executed with an `else`.
> ```js
> if (num > 10) {
>   return "Bigger than 10";
> } else {
>   return "10 or Less";
> }
> ```

^b1544a

<hr> 

> [!abstract] ## Else if
> If you have multiple conditions that need to be addressed, you can chain `if` statements together with `else if` statements.
> ```js
> if (num > 15) {
>   return "Bigger than 15";
> } else if (num < 5) {
>   return "Smaller than 5";
> } else {
>   return "Between 5 and 15";
> }
> ```

^e53598

<b>Tags:</b> #javascript #conditionals