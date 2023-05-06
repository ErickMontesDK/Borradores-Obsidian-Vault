<i class="time"></i>
<div class="head"><h1>Optional and Default Parameters</h1></div>

``````ad-abstract
````ad-warning
title:## Optional parameter
```typescript
function log (message:string, userId? :string) {
	let time = new Date().toLocaleDateString()
	console.log(time, message, userId || 'Not signed in')
}

log('page loaded')  
log('User signed in ', '12313541')
```
```ad-bug
title:Console
<code>29/11/2022 page loaded Not signed in
29/11/2022 User signed in  12313541
</code>
```
````

````ad-warning
title:## Default parameter
```typescript
function log (message:string, userId= 'Not signed in') {
	let time = new Date().toLocaleDateString()
	console.log(time, message, userId)
}

log('page loaded')  
log('User signed in ', '12313541')
```
```ad-bug
title:Console
<code>29/11/2022 page loaded Not signed in
29/11/2022 User signed in  12313541
</code>
```
````


``````
