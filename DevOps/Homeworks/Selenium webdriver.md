<i class="time"></i>
<div class="head"><h1>Selenium webdriver</h1></div>

````ad-abstract
Create a simple selenium webdriver script for browser/programming language of your choice 
Step 1: Install selenium and its language binding of your choice 
Step 2 : Create a simple test which launches the URL and then does a click somewhere
````
```ad-info
title: Installing dependencies
As I chose Javascript and NodeJs to do this assignment, after initialized the node project and created the package.json, I just install selenium-webservice running
<code>npm install selenium-webdriver --save</code>


Also, in order to work with the browser Chrome, I downloaded a component called <b>chromedriver.</b>
I just set the path of the executable in my systems PATH
![[Pasted image 20221204151328.png]]
```

`````ad-info
title:Code
```js
const {Builder, By} = require('selenium-webdriver');

async function searching() {
	let driver = await new Builder().forBrowser('chrome').build();
	
	await driver.get('https://www.thingiverse.com/');
	await driver
	.findElement(By.className('SearchResult__searchResultItem--c4VZk'))
	.findElement(By.className('ThingCardBody__cardBodyWrapper--ba5pu'))
	.click();
}
searching();
```
<b>Donde</b>:
Import the required selenium-webdriver functions:
```js
const {Builder, By} = require('selenium-webdriver');
```
<hr> 

It opens browser that will be used in the test and directs to the page that you want to analyze
```js
	let driver = await new Builder().forBrowser('chrome').build();
	
	await driver.get('https://www.thingiverse.com/');
```
<hr> 

Detect the first page result <i>(they all have the same class SearchResult_searchResultItem--c4VZk )</i>, then it looks for the link inside <i>(with the ThingCardBody__cardBodyWrapper--ba5pu class)</i> and send a click

```js
	await driver
	.findElement(By.className('SearchResult__searchResultItem--c4VZk'))
	.findElement(By.className('ThingCardBody__cardBodyWrapper--ba5pu'))
	.click();
`````
