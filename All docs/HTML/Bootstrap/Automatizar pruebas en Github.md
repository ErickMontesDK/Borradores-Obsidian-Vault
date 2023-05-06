---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Automatizar pruebas en Github
<hr> 

> [!abstract]
> Una vez configuradas los test con Jest, puedes ejecutar una prueba de ellas cada vez que actualices su repositorio en Github. Para esto, se debe crear
> 
> > [!bug]
> > 1.- Crear una carpeta en la raiz <mark>.github</mark>, dentro de ella la carpeta <mark>workflows</mark>
> > 2-Dentro de workflows, se crea el archivo test.yml con el siguiente código
> > 
> > ```javascript
> > name: Run Tests in my project every push on GitHub
> > on:
> >   push:
> >     branches: [ main ]
> >   pull_request:
> >     branches: [ main ]
> > jobs:
> >   build:
> >     runs-on: ubuntu-latest
> >     steps:
> >     - uses: actions/checkout@v3
> >     - name: Use Node.js ${{ matrix.node-version }}
> >       uses: actions/setup-node@v3
> >       with:
> >         node-version: ${{ matrix.node-version }}
> >         cache: 'npm'
> >     - run: npm ci
> >     - run: npm run build --if-present
> >     - run: npm test
> >     #
> > ```
> > 
> 

<hr>
<b>Tags:</b> #javascript 