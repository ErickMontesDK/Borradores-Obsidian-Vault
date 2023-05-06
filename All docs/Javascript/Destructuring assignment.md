---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Destructuring assignment
<hr> 

> [!question] ## Index
> 
>1. ### [[#^c75312 | Updating values]]
>2. ### [[#^06db6f | Assign Variables from Nested Objects]]
>3. ### [[#^54b64e | Assign Variables from Arrays]]
>4. ### [[#^e6cae3 | Pass an Object as a Function's Parameters]]
>

<hr> 

> [!abstract]
> Destructuring assignment is special syntax for neatly assigning values taken directly from an <mark>object</mark> or <mark>array</mark>. You can extract as many or few values from the object as you want.
> 
> > [!example]
> > Instead of: 
> > ```js
> > const user = { name: 'John Doe', age: 34 };
> > 
> > const name = user.name;
> > const age = user.age;
> > console.log(name, age);
> > ```
> > You just use:
> > 
> > ```js
> > const user = { name: 'John Doe', age: 34 };
> > const { name, age } = user;
> > console.log(name, age);
> > ```
> > 
> > ```
> Also, destructuring allows you to assign a new variable name when extracting values
> 
> > [!example]
> > ```js
> > const user = { name: 'John Doe', age: 34 };
> > const { name: userName, age: userAge } = user; 
> > // userName="John Doe" and userAge="34"
> > console.log(userName, userAge);
> > ```
> 

^8663bc

> [!info] ## Updating values
> You can assign a new variable value when extracting values.
> > [!example]
> > ```js
> > const { name: "Sirius", age: 4 } = myDog;
> ```

^c75312

> [!info] ## Assign Variables from Nested Objects
> You can access a nested object with the next structure
> 
> > [!example]
> > ```js
> > const user = {
> >   johnDoe: { 
> >     age: 34,
> >     email: 'johnDoe@freeCodeCamp.com'
> >   }
> > };
> > 
> > const { johnDoe: { age, email }} = user;
> > //age=34 and email='johnDoe@freeCodeCamp.com'
> > 
> > ```

^06db6f

> [!info] ## Assign Variables from Arrays
> You can use Destructuring Assigments in arrays with teh next structures
> 
> > [!danger] ### Basic form
> > > [!example]
> > > ```js
> > > const [a, b] = [1, 2, 3, 4, 5, 6];
> > > console.log(a, b);//where a=1, b=2
> > > ```
> > > > [!bug] Console
> > > > <code>1,2</code>
> 
> > [!danger] ### Using commas
> > You can use commas to reach the desired index
> > > [!example]
> > > ```js
> > > const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
> > > console.log(a, b);//where a=1, b=2 and c=5;
> > > ```
> > > > [!bug] Console
> > > > <code>1,2,5</code>
> 
> > [!danger] ### Using Rest Parameter
> > In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
> > > [!example]
> > > ```js
> > > const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
> > > console.log(a, b); //a=1 and b=2
> > > console.log(arr); //arr=[3,4,5,7]
> > > ```
> > > > [!bug] Console
> > > > <code>1,2</code>
> > > > <code>[3,4,5,7]</code>
> 

^54b64e

> [!info] ## Pass an Object as a Function's Parameters
> You can destructure the object in a function argument itself.
> 
> > [!example]
> > ```js
> > const profileUpdate = (profileData) => {
> >   const { name, age, nationality, location } = profileData;
> > }
> > 
> > //but also this can also be writted in-place:
> > 
> > const profileUpdateToo = ({ name, age, nationality, location }) => {
> > }
> > 
> > //More complex case
> > const stats = {
> >   max: 56.78,
> >   standard_deviation: 4.34,
> >   median: 34.54,
> >   mode: 23.87,
> >   min: -0.75,
> >   average: 35.85
> > };
> > 
> > const half = ({max,min}) => (max+min) / 2.0; 
> > console.log(half(stats))
> > ```
> > > [!bug] Console
> > > <code>28.015</code>

^e6cae3

<hr>
<b>Tags:</b> #javascript 