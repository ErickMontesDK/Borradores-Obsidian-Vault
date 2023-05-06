<i class="time"></i>
<div class="head"><h1>Atributos de configuración</h1></div>

````ad-abstract
Debugging configurations are stored in a `launch.json` file located in your workspace's `.vscode` folder. 

The following attributes are supported in launch configurations of type `launch` and `attach`:
````

````````ad-example
title:Lista de comandos
-   `runtimeArgs` - optional arguments passed to the runtime executable.
-   `args` - arguments passed to the program to debug. This attribute is of type array and expects individual arguments as array elements.

<iframe src="https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_launch-configuration-attributes" allow="fullscreen" allowfullscreen="" style="height: 100%; width: 100%; aspect-ratio: 16 / 9;"></iframe>

`````ad-bug
collapse:
title:Ejemplo launch.json con Args
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "runtimeArgs": [
                "-r","ts-node/register",
                "-r","tsconfig-paths/register",
            ],
            "args":[
                "${workspaceFolder}/src/index.ts"
            ]
        }
    ]
}
```
`````
````````
