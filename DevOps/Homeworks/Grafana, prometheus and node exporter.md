<i class="time">miércoles 30-11-2022
</i>
<div class="head"><h1>Grafana, Prometheus and Node Exporter</h1></div>
<i class="time">Erick Montes Bedolla
</i>

````ad-abstract
Create a docker-compose file with Prometheus, Grafana and Node-exporter
````

`````ad-info
title:docker-compose.yml
```yml
version: '3.7'

volumes:
	grafana-data:
	prometheus-data:

services:
	node-exporter:
		image: quay.io/prometheus/node-exporter:latest
		container_name: node-exporter
		restart: unless-stopped
		volumes:
			- /proc:/host/proc:ro
			- /sys:/host/sys:ro
		command:
			- '--path.procfs=/host/proc'
			- '--path.sysfs=/host/sys'
			- --collector.filesystem.ignored-mount-points
			- "^/(sys|proc|dev|host|etc|rootfs/var/lib/docker/containers|rootfs/var/lib/docker/overlay2|rootfs/run/docker/netns|rootfs/var/lib/docker/aufs)($$|/)"
		ports:
			- 9100:9100
		expose:
			- 9100
	prometheus:
		image: prom/prometheus:latest
		container_name: prometheus
		restart: unless-stopped
		volumes:
			- ./prometheus.yml:/etc/prometheus/prometheus.yml
			- prometheus-data:/prometheus
		command:
			- '--config.file=/etc/prometheus/prometheus.yml'
			- '--storage.tsdb.path=/prometheus'
			- '--storage.tsdb.retention.time=1y'
			- '--web.enable-lifecycle'
		ports:
			- 9090:9090
		expose:
			- 9090
	grafana:
		image: grafana/grafana:8.0.6
		container_name: grafana
		restart: unless-stopped
		ports:
			- 3000:3000
		volumes:
			- grafana-data:/var/lib/grafana
	cadvisor:
		image: gcr.io/cadvisor/cadvisor:latest
		container_name: cadvisor
		restart: unless-stopped
		expose:
			- 8080
		volumes:
		- /:/rootfs:ro
		- /var/run:/var/run:rw
		- /sys:/sys:ro
		- /var/lib/docker/:/var/lib/docker:ro
	app_example:
		image: quay.io/brancz/prometheus-example-app:v0.3.0
		container_name: app_example
		restart: unless-stopped
		ports:
		- 80:8080
```
`````
`````ad-info
title:Running docker-compose
In order to run the docker-compose file, write the command
<code>docker-compose up -d</code>
**![](https://lh4.googleusercontent.com/MOH-WFO_ooucx7hb6jwCcsD6dnknwyFsq4Dks-8tsPHFP6Y0MZqbFgoC3S8H47ZCwHNlrGSZ0-y5HkdVjh8HOLwyO3hKvy0Uvb1ja65vPl5zliSJOCVHZJMv2UnYX8fATdUG2Up0mUsp5GDARNm41Zo96JKyD8EMhZ6ShDDIYePMydLBYYaQKqnxVEptOg)**

We can verify the containers where created running the line
<code>docker-compose ps</code>
**![](https://lh5.googleusercontent.com/yAoz20h7hTNbRpIywvyRDKgdXqG7EolgjYKt5CyFzIr8DOpdLFKLWgadyJWcGr6WzIUmf0sUnyZ3sxoMIOp154Xl5ZTIGTMqNOj_xlGJJYBb377ErVddUUrje5AyLTVVzCUrIFV_ThG6w2Hx3kxOqppiGJdkdIfZqJTkv-4_ljEjVc0i6FKsgFbxkbjnFA)**

We can check the ports that we specify in the docker-compose file for each container
```ad-example
title:### localhost:9090 for Prometheus
**![](https://lh3.googleusercontent.com/WYQ3WiKN4ybMHk3tYqXr4TmVHpnRmTrFY736JhgLsW9ZORVFfUAhHQUcSm373pTHVsRueEH3oBUPocAEqf3LgBNNTb7D7o8BQliIuWVyO22p8xtgyg-Y48RsN2WEgO33qhOrRrwfxp1Epe7ArMPi1ghOtzqjxZb5g-94B0_-L--h9ehn6R9iJPI91xmzhA)**
```
```ad-example
title:### localhost:3000 for Grafana
**![](https://lh4.googleusercontent.com/OYggXj3bRLc5gGbvDzqwinWibfRyfVNZsTv7BhNuTaYjrbSHDBp1gM6vYVvCkQA1i9OL5pVUkXAabMerDwAF_3Pp3XuZ-esv95Z25x35MuspvKOStq4CEQPbus5e4ghf9dgQ5GEtLZVfyQ7bJqqaYUCfOSDywCD_SeYZNIpbbSTcDMRqsOMWd31vC9oJDQ)**
```
```ad-example
title:### localhost:9100 for Node Exporter
**![](https://lh5.googleusercontent.com/r7g0pPFOdVNCojMJeMljLd6TSc7bonvOnfIJPC01mYan0zlFhNEeNqveCJwExp9SKBtCnAJUZF_5QVbTYFmx1xPvJBdzcMu3ulz1ROst7_cOcwp2_sb7vYqfKmJnufqMus7Up9TUhmowtyy5aXVsRBu3Wi7nUvtt7JK7IhEX83IxOSyPHDUotEP-bWVTJg)**
**![](https://lh3.googleusercontent.com/yDAnqa6IxhU6JfQ-PMc2PV6rGUtl2WktLJ0PC5Bm6UNiDxFXXHPxdi-_GDJ6pXGi4hfrCQGHTVUV0-KSvmugF8f3yXFZVTjVCVzYWcKJUpSV_6sPfNJsm3zJqZdpw9PSlX6NDKZcGMkbNQ5Lmsd0q1LcCm1YM-D7-ze5xrTG_h7K8e4EpZpEmavt3LQZpw)**
```

`````
