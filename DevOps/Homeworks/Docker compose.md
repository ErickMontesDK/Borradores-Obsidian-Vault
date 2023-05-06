<i class="time"></i>
<div class="head"><h1>Docker compose</h1></div>

````ad-abstract
For this homework, we supossed a simple project thats needs the installation of NodeJS and Mongo containers to work
````
`````ad-warning
title:docker-compose.yml
```yaml
version: "3"

services: 
    node: 
	  container_name: nodeapp
	  image: node:14
	  restart: always
	  ports:
	    - "5000:3000"
	  links:
	    - mongo
	  volumes:
  	    - .:/usr/src/app
	mongo:
	  container_name: mongodatabase
	  image: mongo
	  ports:
	    - "27018:27017"
```
<ul> 
<li><b>Services: </b>We specified the services to be used</li>
<li><b>node: </b> Name that we assign to the service. It can be anyone</li>
<li><b>container_name: nodeapp: </b>Name of the container. It can be anyone</li>
<li><b>image: node:14: </b>Image on which it will be based. Here we specify that we would use Node 14</li>
<li><b>restart: always: </b>Make it restart automatically in case of an error</li>
<li><b>ports:
			- "5000:3000": </b>We define the ports. The app that we supposed uses port 3000, but we specify that it must run on port 5000</li>
<li><b>links:
			- mongo: </b>We specify that the container is linked to the mongo service, which we specify below.</li>
<li><b>volumes:
			- .:/usr/src/app: </b>Copies the files created at the specified address. Everything created in the system is copied to the container, everything created in the container is copied to the system at the specified path</li>
<li><b>mongo: </b>Name that we assign to the service.
This is the name that is written in the links section.</li>
<li><b>container_name: mongodatabase: </b>Name of the container</li>
<li><b>image: mongo: </b>Image on which it will be based</li>
<li><b>ports:
			- "27018:27017": </b>Define ports. Mongo typically works with port 27017, but here I am binding it to 27018</li>
</ul>

```ad-example
title:Screenshot de docker-compose.yml
![[Pasted image 20221130082615.png]]
```
`````

``````ad-info
title:Running docker-compose
In order to run the docker-compose file, write the command <code>docker-compose up -d</code>
We can verify the containers where create running the line<code>docker-compose ps</code>
````ad-example
title:Screenshots
<br> 

### docker-compose up -d
![[Pasted image 20221130075937.png]]
<hr> 

### docker-compose ps
![[Pasted image 20221130083020.png]]
````
``````