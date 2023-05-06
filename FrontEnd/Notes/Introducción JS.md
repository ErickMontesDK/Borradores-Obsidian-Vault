<i class="time"></i>
<div class="head"><h1>Introducción JS</h1></div>

````ad-abstract
title:## ¿Qué es Javascript?
Es un lenguaje asincrono concurrente que corre sobre un solo hilo. 
**![](https://lh3.googleusercontent.com/C12EbX5giCJ2ohu0Z6hlBJrdOPPTrq9HRssK6WdmTV4buyyfr7N9FPFHkVx0DQK49dGjUDzuboi5j8gt1dR3lA23ZDIEtR1wdcBOvsqdgdoTgCZK7ZTmDJLpz4Cpjno8YaChVMENuB6Fx89HKwGu8EeXM8TfDcQwcucyrDmxNFS3rxIVMtkzP9NVPzWLRQ)**
````
``````ad-info
title:## Paradigmas de programación
`````ad-warning
title:POO
collapse:
Object-oriented programming **AKA _Imperative prgramming_** by the name implies it's a pattern of programming using objects, it consists of classes _objects_ and prototypes eg;
```js
const John = {
  skills: ["Python", "Javascript", "SQL"],
  age: 22,
  language: "English",
  skilled: function skilled() {
    if (this.skills.length > 2) {
      return "He's got some skills";
    } else {
      return "Fair Enough";
    }
  },
};
```
`````
`````ad-warning
title:Functional
collapse:
Functional programming **AKA _Declarative programming**_ is a programming pattern centered around functions is involves closures and lambdas to execute some certain task.

Pure functions. No side effects.

Here is an example below.

```js
const developers = [
  {
    name: "James",
    yearsOfExperience: 2,
    language: "javascript",
  },
  {
    name: "Adam",
    yearsOfExperience: 5,
    language: "javascript",
  },
  {
    name: "Will",
    yearsOfExperience: 1,
    language: "javascript",
  },
  {
    name: "Sam",
    yearsOfExperience: 7,
    language: "javascript",
  },
];

function listDevelopers() {
  developers.forEach((developer) => {
    const { name, experience_year, language } = developer;
    console.log(
      `${name} has ${yearsOfExperience} years of experience in ${language}`
    );
  });
}
```

`````
`````ad-warning
title:Imperative
collapse:
Imperative programming consists of sets of detailed instructions that are given to the computer to execute in a given order. It's called "imperative" because as programmers we dictate exactly what the computer has to do, in a very specific way.

Imperative programming focuses on describing _how_ a program operates, step by step.

```javascript
const nums = [1,4,3,6,7,8,9,2]
const result = []

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) result.push(nums[i])
}

console.log(result) // Output: [ 6, 7, 8, 9 ]
```

See that we're telling the program to iterate through each element in the array, compare the item value with 5, and if the item is bigger than 5, push it into an array.

We're being detailed and specific in our instructions, and that's what imperative programming stands for.

`````
``````
