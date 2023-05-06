

<i class="time"></i>
<div class="head"><h1>Terraform and docker</h1></div>

````ad-abstract
Create a terraform config with any provider of choice (Docker if you prefer) and share the terraform config files (with .tf extension) and state file (with .tfstate extension)
````
```ad-info
title:Installing Terraform (Windows 10)
For installing and using terreform, first I downloaded the .exe file from the web https://developer.hashicorp.com/terraform/downloads. After I downloaded, I moved the file to my path <b>D:\Program Files</b>. 
In order to run the program in the cmd, we must set the path in the <b>path enviroment variable</b>. To set this, you must:
1.  Go to **Control Panel->System->Sistem Settings->Environmet Variables**
2. Search for the **PATH** variable
![[Pasted image 20221128203234.png]]
3. Click **edit**, then **New** and add the path where terraform.exe is located
![[Pasted image 20221128203419.png]]
4. Terraform should be already installed. We can check this running the command terreform --version in the cmd.
![[Pasted image 20221128203559.png]]
```
`````ad-info
title:Terraform _configuration_.
The set of files used to describe infrastructure in Terraform is known as a Terraform _configuration_.

Each Terraform configuration must be in its own working directory. We created a directory and the a file called **main.tf**
The main.tf contains Terraform settings, including the required providers Terraform will use to provision your infrastructure.

Here is the code from my main.tf
```tf
terraform {
	required_providers {
		docker = {
			source = "kreuzwerker/docker"
			version = ">= 2.21.0"
		}
	}
}
  
provider "docker" {
	host = "npipe:////.//pipe//docker_engine"
}
  
resource "docker_image" "jenkins" {
	name = "jenkins/jenkins:lts-jdk11"
}

resource "docker_container" "jenkins" {
	image = docker_image.jenkins.image_id
	name  = "jenkins_container_terreform"
	ports {
		internal = 8080
		external = 8080
	}
}
```
* The <mark style="background: #ABF7F7A6;">**terraform {}**</mark> block contains Terraform settings, including the required providers Terraform will use to provision your infrastructure.  In this example configuration, the docker provider's source is defined as **kreuzwerker/docker**
* The <mark style="background: #ABF7F7A6;">provider block</mark> configures the specified provider, in this case docker. A provider is a plugin that Terraform uses to create and manage your resources.
* <mark style="background: #ABF7F7A6;">Resource blocks</mark> define components of your infrastructure. A resource might be a physical or virtual component such as a Docker container, or it can be a logical resource such as a Heroku application. For this case, we are installing <b>jenkins</b> as a Docker container.

Once the main.tf is created, I initialized the directory with the command 
<code>terraform init</code>
Initializing a configuration directory downloads and installs the providers defined in the configuration, which in this case is the docker provider.

In order to vallidate the configuration we made in the main.tf, you can run <b>terraform fmt</b>. It automatically updates configurations in the current directory for readability and consistency. 
<code>terraform fmt</code>
To validate the configuration, we use <code>terraform validate</code>
It must show any mistake that you configuration have, or it shows you a message if there is not problem. 

Shows me a warning
![[Pasted image 20221128210530.png]]
After I corrected the main.tf file it just showed me a message
![[Pasted image 20221128210658.png]]
`````
`````ad-info
title:Create infrastructure
Once the configuration is completed, qe can apply now the configuration with the <b>terraform apply</b>. It shows the actions Terraform will take in order to change your infrastructure to match the configuration and ask you if you want to proceed. You only need to write <b>yes</b> and the process will continue
<code>terraform apply</code>
![[Pasted image 20221128211319.png]]

We can use the command <br>terraform state list</br> to list of the resources in the project's state
![[Pasted image 20221128211603.png]]
Also we can see in docker desktop that our container is already created
![[Pasted image 20221128211800.png]]
`````
