---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Corrección eslint
<hr> 

> [!abstract]
> eslint sirve para corregir problemas dentro del código y establecer un formato dentro del código

<hr>

> [!info] ## Instalación
> 
> Se instala eslint por consola y se configura
> 
> > [!bug] Console
> > 
> > 1-Instalación de dependencia <code>npm install --save-dev eslint</code>
> > 2-Configuración del linter <code>npm init @eslint/config</code>
> 
> Se creó un archivo .eslintrc.js que se debe configurar agregando las reglas que debe revisar eslint
> 
> > [!example] .eslintrc.js
> > ```js
> > module.exports = {
> >     "env": {
> >         "browser": true,
> >         "commonjs": true,
> >         "es2021": true,
> >         "jest": true
> >     },
> >     "extends": "eslint:recommended",
> >     "parserOptions": {
> >         "ecmaVersion": "latest"
> >     },
> >     "rules": {
> >         indent: ["error", 4],
> >         "linebreak-style": ["error", "unix"],
> >         quotes: ["error", "double"],
> >         semi: ["error", "always"]
> >     }
> > };
> > 
> > ```
> > 
> 
> Finalmente se automatiza el proceso agregando el proceso en el package.json
> 
> > [!example] package.json
> > ```js
> >   "scripts": {
> >     "linter": "node ./node_modules/eslint/bin/eslint.js .",
> >     "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"
> >   }
> > ```
> Para ejecutar el proceso, se escribe en consola
> > [!bug] Console
> > <code>npm run linter</code>
> > <code>npm run linter-fix</code>
> 

<hr>

<b>Tags:</b> #javascript 