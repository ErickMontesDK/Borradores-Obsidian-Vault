<i class="time">Friday 25-11-2022
</i>
<div class="head"><h1>Ansible Homework</h1></div>
<i class="time">Erick Montes Bedolla</i>

````ad-abstract
Ansible is a software that facilitate the management of multiple servers by remotely accessing them and coordinating the automation of tasks, the use of applications, updating, administration, etc. In this way you can standardize the characteristics necessary to develop a task and there is no need to perform these same steps from one machine to one, but all at the same time.

````
````ad-info
title: ## Connecting the servers
For this task I have an ubuntu subsystem on windows that I use as a local server. To use as a remote server, I installed with <b>vagrant</b> an ubuntu 20.04 virtual machine. When creating the machine, I modified the vagrantfile in the <b>config.vm.network</b> option so it appears as another physical device on the network.
![[Pasted image 20221125194704.png]]

Once the machine is created, check its ip by executing
<code>ip --brief addr show</code>
![[Pasted image 20221125180015.png]]

Modify the properties of the ssh connection by entering the sshd_config file,  which is the system-wide configuration file for OpenSSH.
<code>sudo nano /etc/ssh/sshd_config</code>
It opens the file where we have to set the following options as:
<code>PasswordAuthentication yes
ChallengeResponseAuthentication no
</code>
![[Pasted image 20221125175457.png]]
After modified the file, restart the ssh service with the following command, exit the virtual machine and re-enter in the machine
<code>sudo systemctl restart sshd</code>
**![](https://lh6.googleusercontent.com/oqr90p4mrypUJYCF2q-tixNE43yDLFpfWzhrHNWT6crsvjZua9cQC5xV8jYhmE8agEo8_T5xvpyOrZVHR9gCOmFKxHtO5I-7RIcuv2IrwRex_GUScXFkDRkm23H1ahl7axuN90nS09zCLP3grw1cmBZLJ2yNY6JqVSQippPAm9yXWKizBT0yLl7Ri7NIrA)**


Now in our local server, we generate a ssh key with
<code>ssh-keygen -o</code>
Leaving blank each of the options that will appear. Once created, we copy the key to the remote server with
`ssh-copy-id -i ~/.ssh/id_rsa.pub <username>@<remote ip>`
In my case, the default user is <b>vagrant</b> and the ip is 192.168.1.15, so I must run the command as:
`ssh-copy-id -i ~/.ssh/id_rsa.pub vagrant@192.168.1.15`

**![](https://lh4.googleusercontent.com/hDrAXw5SZnI2oBa2iZQ6jZh4jPNiEgwlM9MrbxjuiVNbtRKG9MXeLYjzrNkXJ70Fig1i9WCnPvMAt6n1ThC4GBZr1XoPz2U9g2LDGe7Kj0CZQDM05Qrqd-3e8Ii7uzZ-oVnIIPGARlWDmhlkakHNwin39ZNwy5fyidnouvonknGpjhLm5ZA_l3CyB6pR6A)**

Now with this we are able to connect from the local to the remote server with the command
`ssh <user>@<remote ip>`

**![](https://lh3.googleusercontent.com/nB-JI4N8JBHsGBvN_ifX-P-dwsMxmsVRIsqBdRq07oDGWL0nWNaIUDGtMP1SYwp1h6va7Y2IyGtRHDTH7mbQYw3EzIILVU_TLbXzK2aA_e6UM_HSuaAhJxyg2kRyiXE18jOq4VND0R_RDpj_cgz7SvWPkGGvmSgpXAV1TGRaQty8aSyksFRjnGmzFeTL1Q)**

Exit from the connection
````

```ad-info
title: Installing ansible
In the local server, add the Ansible PPA repository with the command:
<code>sudo apt-add-repository --yes --update ppa:ansible/ansible</code>
**![](https://lh4.googleusercontent.com/chnE728Wh_F-O9DVgwp7fAEhinPcjSHi2_vLKImd3rM3s-mngHyltXra1C-sCz2LE6PMaVnyZ5TiBGa6y82hmzLqwhSafggdUZ8FMc0WVEnacuiIlf7pIoFeSGy2_i-Nj-jGJkLkGD50ZksbcSmqmLwYa2PNCdVu_jk6tc2qrJk_K7wDCvGbjn-3MUms1Q)**
Then, install the program running:
<code>sudo apt install ansible</code>
**![](https://lh3.googleusercontent.com/smZAR5pB24ovmWf2gUaHERZaE4BJvMSqQcEFlgUzzvd02d4kIQjkllaRuMe2IHY6W1XNiKRWmO8det_dsTBfemQIYLhhW_a-ghXNZsz3ukxms0HYC6WV2ELmXBnGJiaCXnR3rXdrjpiACSQ7a5lkuNXlBE5NDyp9iboIjuu-0UPKbd_Ks9WA5xV4mztW6g)**
Ansible should be installed by now. We can check it running the command:
<code>ansible --version</code>
**![](https://lh6.googleusercontent.com/uK6S3bOWn62QyG0EOKSQonNhlId-z5CuOjae0hkIDIIr_HYgMOSECkqDGxXT4BBty6ooCFC0ACvQZhdQiCOYa2jxQXyuXwrolABHwqrVAJd7AX7btJ69CNyOlDQuuYOasmdog_ChkqKakV_pyYfm6pY6gWdHkaPTNZFXuCzZEGH5lwJgsxH1FZdUCrHEaQ)**
```

`````ad-info
title: ## Creating and running hosts file and playbook.yml
Create two files located on the local server, hosts file and playbook.yml.
<br>
###  Hosts file
In <b>ansible_host</b> we write the ip of the remote server. 
In <b>ansible_user</b> we define the name of the remote server user
```hosts
[servers]
server1 ansible_host=192.168.1.15
[all:vars]
ansible_user=vagrant
ansible_python_interpreter=/usr/bin/python3
```
<hr> 

### Playbook.yml
In this file we describe the servers we are going to be working with and the process we need to run. In this case, we need to install VIM in the remote server.
```yml
- hosts: all
  become: true
  tasks:
	- name: Installing VIM
	  apt: name=vim state=latest
	- name: Sending Hello World!
	  shell: echo Hello World!
```
Enter the location of both files 
**![](https://lh4.googleusercontent.com/wKz_76I3javf9NYn3adGwSIF03e3vVPPJ9k1pSnhFWrhwp053GiHNa7EsxIU5C95qOVdYjVISs4lpuUDH9DXKzmq-QSggIzm-CLDKlctGgXlXk_AYIcRCQT0PDnZAmobE3boGc8UtEhoPzdWqYQ03grrEskrVfgXIgfH5zjmCPRUHULfbHhfSckBIR2txw)**

We can verify the information in the hosts file with:
<code>ansible-inventory -i hosts --list -y</code>
**![](https://lh4.googleusercontent.com/6yXwhvfqbSIKrsg6XTj1Y0jFw8zHS85sA_a55yE46eM3BopnhyVVODAZLBl1a1qAqaaEM6U2Hqb4UTWMgWbXyGcL10PmXLuDpz-qpY6E4n6bALJJgZvt3eR5cI2c4iOjmGl-J8C-OyC8uwdOwq7mUtFOc_adNlqGTYs90_LHlHcEmwDDp_x7WRQ6YRO8Uw)**

To run the playbook, we write:
<code>ansible-playbook -i hosts playbook.yml</code>
**![](https://lh6.googleusercontent.com/Nc5HN7B0HMBrvDmCEZ5i00L_wpsewY1HcY513hGXZqrWp8-ElmM6GbZ9yzgVjGIdoYk6Y-vwO2n3vDprjPTaPuachePDnGqesc3OzgzgDb7YsUz5xACKe0XdfrSsbx3ugevvy1qeMJfZ0skKhnatRP6R85YS1OF2IYb0e-tfq1pyqtI7TlOqg0MUWIMkgg)**
With this, we installed VIM in the remote server from the local server using Ansible
`````