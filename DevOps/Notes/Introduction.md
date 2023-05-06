<i class="time"></i>
<div class="head"><h1>Introduction</h1></div>

````ad-abstract
title:What is Devops?
DevOps es una combinación de prácticas y herramientas que aumentan la habilidad organizativa con el fin de entregar aplicaciones y servicios a alta velocidad

 ![[Pasted image 20221114201647.png]]

Es la fusión del equipo de Desarrollo y Operaciones, trabajando a la par
- Operaciones es responsable del mantenimiento de la infraestructura y el entorno de las soluciones que se ofrecen
- A veces se agrega el equipo de Seguridad para implementarla desde el inicio del ciclo de vida de la app. Esto se llama <b>DevSecOps</b>
````

````ad-info
title:DevOps Cycle
![[Pasted image 20221114201813.png]]
```ad-warning
title:Plan
collapse:
Identify the business requirement and collect end-user feedback. They create a project roadmap to maximize the business value and deliver the desired product during this stage.
```
```ad-warning
title:Code
collapse:
The **code development** takes place at this stage
```
```ad-warning
title:Build
collapse:
Once developers finish their task, they commit the code to the shared code repository using build tools
```
```ad-warning
title:Test
collapse:
It is deployed to the test environment first to perform several types of testing like user acceptance test, security test, integration testing, performance testing, etc.
```
```ad-warning
title:Release
collapse:
Once the build passes all tests, the operations team schedules the releases or deploys multiple releases to production
```
```ad-warning
title:Deploy
collapse:
Infrastructure-as-Code helps build the production environment and then releases the build with the help of different tools.
```
```ad-warning
title:Operate
collapse:
The release is live now to use by customers. The operations team at this stage takes care of server configuring and provisioning using tools
```
```ad-warning
title:Monitor
collapse:
The DevOps pipeline is monitored based on data collected from customer behavior, application performance, etc. Monitoring the entire environment helps teams find the bottlenecks impacting the development and operations teams’ productivity.
```
````

````ad-info
title:Benefits of DevOps
* `Speed`-Adopting to customer needs
* `Rapid Delivery`- Releasing the products very often w/ feature improvements
* `Reliability`- Continuous testing and monitoring
* `Scale`- Automation and consistency helps complex and changing systems
* `Improved Collaboration`- Dev and Ops always in sync
* `Security`- Implementing policy as code etc...
````

