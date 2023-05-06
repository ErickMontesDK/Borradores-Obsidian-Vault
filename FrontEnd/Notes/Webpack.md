
`button-CloseH2` `button-CloseH3`
# Webpack
````ad-info
title: Index
```toc
```
````

````ad-abstract
<mark style="background: #D2B3FFA6;">El bundling es un proceso que toma todos los archivos importados en la aplicación y los une en un solo archivo, llamado bundle</mark>. Una herramienta que se encarga de hacer el bunding en las aplicaciones creadas se conoce como <b>module bundler</b>

Webpack es un module bundler, es decir, una herramienta que toma varios tipos de archivos, como SVG, imágenes, CSS, SCSS, JavaScript y TypeScript, y los agrupa en uno o más archivos que un navegador puede entender y trabajar con ellos.

Esto es importante porque el desarrollo web moderno puede ser complejo y tener muchas dependencias entre los archivos. Webpack construye un grafo de dependencias y agrupa los módulos en uno o más archivos que un navegador puede consumir.

Mientras hace eso, también hace lo siguiente:

-   Convierte el código JS moderno - que solo puede ser entendido por los navegadores modernos - en versiones anteriores de JavaScript para que los navegadores antiguos puedan entender tu código. Este proceso se conoce como transpilación. Por ejemplo, puedes transpilar código ES7 a código ES5 usando webpack.
-   Optimiza tu código para que se cargue lo más rápido posible cuando un usuario visita tus páginas web, igual recursos como imagenes.
-   Puede procesar tu código SCSS en el CSS regular que los navegadores pueden entender.
-   Puede generar source maps de los bloques de construcción del bundle.
-   Puede producir diferentes tipos de archivos basados en reglas y plantillas. Esto incluye archivos HTML, entre otros.

````

## Modos de producción

Webpack tiene dos modos de funcionamiento: producción y desarrollo.

#### Desarrollo 
En el modo de desarrollo, webpack agrupa los archivos y los optimiza para que se actualicen rápidamente cuando se hacen cambios en el código local. También genera source maps para que se pueda inspeccionar el archivo original incluido en el código agrupado.

#### producción
En el modo de producción, webpack agrupa los archivos de manera que estén optimizados para la velocidad. Esto significa que los archivos se minifican y organizan para ocupar la menor cantidad de memoria posible. Así, se optimizan para la velocidad porque estos bundles son rápidos de descargar cuando un usuario visita el sitio web en línea.

## Técnicas de rendimiento
Una vez que todos los archivos fuente de tu aplicación se han agrupado en un solo archivo bundle, ese único archivo bundle se sirve a un visitante que navega por la versión en vivo de tu aplicación en línea, y todo el contenido de la aplicación se sirve de una vez.

Esto funciona bien para aplicaciones más pequeñas, pero si tienes una aplicación más extensa, este enfoque puede afectar a la velocidad de tu sitio. Cuanto más tiempo tarda una aplicación web en cargar, más probable es que el visitante se vaya y pase a otro sitio web no relacionado. Hay varias formas de abordar este problema de un bundle grande.

#### Code-splitting
Una práctica en la que un module bundler como webpack divide el único archivo bundle en varios bundles, que se cargan según se necesiten. Con la ayuda del code-splitting, puedes cargar solo las partes que el visitante de la aplicación necesita tener en cada momento.  Esto tiene varias ventajas:

- | Reduce el tamaño del bundle principal, lo que mejora el tiempo de carga inicial de la aplicación.
- || Permite cargar solo las partes de la aplicación que el usuario necesita en cada momento, lo que mejora el rendimiento y la eficiencia.
- | Facilita la actualización y el mantenimiento del código, al separarlo en módulos más pequeños y reutilizables.

Sin embargo, el code-splitting también tiene algunos inconvenientes:

- |  Requiere una herramienta como webpack o Browserify para crear los bundles y gestionar las dependencias entre ellos.
- ||  Puede aumentar el número de peticiones HTTP al servidor, lo que puede afectar a la velocidad de carga si no se usan técnicas como la precarga o el prefetching.
- |  Puede generar interrupciones o parpadeos en la interfaz de usuario si no se usan técnicas como Suspense o Loadable Components para manejar el estado de carga de los componentes.

#### Server-side rendering SSR
Con el SSR, los componentes React se renderizan a HTML en el servidor, y el visitante descarga el código HTML terminado. 
 Esto tiene varias ventajas:

- |    Reduce el tiempo de carga de la página, ya que el cliente recibe el HTML ya generado y no tiene que esperar a que se descargue y ejecute el código JavaScript de React.
- ||  Mejora el SEO (Search Engine Optimization), ya que los motores de búsqueda pueden indexar mejor el contenido de la página, al no depender de la ejecución de JavaScript.
- |  Mejora la experiencia del usuario, ya que se evita el efecto de pantalla en blanco o contenido parcial mientras se carga la aplicación.

Sin embargo, el SSR también tiene algunos inconvenientes:

- |  Aumenta la carga del servidor, ya que tiene que hacer más trabajo por cada petición.
- || Requiere una configuración más compleja, ya que hay que sincronizar el estado y los eventos entre el servidor y el cliente.
- |  Puede generar inconsistencias o errores si se usan librerías o APIs que dependen del navegador o del DOM.


Una alternativa al SSR es el client-side rendering, que descarga el archivo index.html y luego deja que React inyecte su propio código en un elemento HTML dedicado (el elemento root en create-react-app). 

#### Client-side rendering
El client-side rendering es una técnica que consiste en renderizar los componentes React en el navegador del cliente, en lugar de hacerlo en el servidor. Esto tiene varias ventajas:

- |   Reduce la carga del servidor, ya que solo tiene que enviar el archivo HTML inicial y el código JavaScript de React.
- ||  Permite una mayor interactividad y dinamismo en la aplicación, ya que React puede manejar el estado y los eventos en el cliente.
- |  Facilita el desarrollo y la depuración del código, al no depender de un servidor para renderizar los componentes.

Sin embargo, el client-side rendering también tiene algunos inconvenientes:

- |  Aumenta el tiempo de carga inicial de la aplicación, ya que el cliente tiene que esperar a que se descargue y ejecute el código JavaScript de React.
- || Dificulta el SEO (Search Engine Optimization), ya que los motores de búsqueda pueden no ejecutar JavaScript o tener problemas para indexar el contenido de la aplicación.
- |  Puede generar una mala experiencia del usuario, si se produce un efecto de pantalla en blanco o contenido parcial mientras se carga la aplicación.

## Instalación y uso de Webpack
#### Instalación

Para instalar webpack, debes tener instalado Node.js y npm en tu sistema. Luego, puedes usar el siguiente comando en la terminal para instalar webpack y su interfaz de línea de comandos (webpack-cli) como dependencias de desarrollo en tu proyecto:

```bash
npm install webpack webpack-cli --save-dev
```

#### Crear el archivo de configuración

Webpack usa un archivo llamado webpack.config.js para definir las opciones y reglas para agrupar tus archivos. Este archivo debe estar en la raíz de tu proyecto y debe exportar un objeto con las propiedades que necesites. Por ejemplo, este es un archivo de configuración básico que define el modo de desarrollo, el punto de entrada, el nombre y la ruta del archivo de salida, y la opción de limpiar la carpeta de salida antes de cada compilación:

```js
const path = require('path');

module.exports = {
	mode: 'development',
		entry: {
			app: './src/index.js',
			},
		output: {
			filename: 'main.js',
			path: path.resolve(__dirname, 'dist'),
			clean: true,
		},
};
```

#### Ejecutar webpack

Para ejecutar webpack y generar el archivo bundle, puedes usar el siguiente comando en la terminal, especificando el archivo de configuración a usar:

```js
npx webpack --config webpack.config.js
```

Esto creará una carpeta llamada dist con el archivo main.js dentro.

#### Script en package.json

Puedes definir un script en el archivo package.json para ejecutar webpack con un solo comando. Por ejemplo, puedes agregar estas líneas al objeto scripts:

```js
"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1",
	"start": "webpack-dev-server --config webpack.dev.js",
	"dev": "webpack --config webpack.dev.js",
	"build": "webpack --config webpack.prod.js"
},
```

Esto te permite usar los comandos npm run dev o npm run build para ejecutar webpack en modo desarrollo o producción, respectivamente. También puedes usar npm start para ejecutar un servidor de desarrollo con webpack-dev-server, que te permite ver los cambios en tu aplicación en tiempo real.

## webpack.config.js

webpack.config.js es el archivo donde se tiene que controlar la configuración de Webpack, de modo que podamos personalizar su comportamiento según las necesidades de cada proyecto. <mark style="background: #D2B3FFA6;">Este archivo se debe colocar en la raíz del proyecto, en la misma carpeta que el package.json</mark>

Un archivo de configuración de Webpack es un objeto de JavaScript que configura una de las opciones de Webpack.
```json TI:"Ejemplo de archivo webpack" "FOLD"
// Importar los plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Exportar el objeto de configuración
module.exports = {
  // Definir los puntos de entrada
  entry: {
    main: './src/index.js',
    about: './src/about.js'
  },
  // Definir el destino y el nombre de los archivos de salida
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  // Definir los plugins a usar
  plugins: [
    // Limpiar el directorio dist antes de cada compilación
    new CleanWebpackPlugin(),
    // Generar un archivo index.html usando una plantilla
    new HtmlWebpackPlugin({
      template: './src/index.html',

```
### Opciones principales
Las opciones principales que se pueden configurar en el archivo webpack.config.js son las siguientes:
````ad-tip
title: <b>entry</b>
collapse:
Indica el punto o los puntos de entrada del código fuente de la aplicación. Puede ser una cadena con la ruta del archivo principal, un arreglo con varios archivos o un objeto con varias propiedades que representan cada punto de entrada. Por defecto, Webpack asume que el punto de entrada es `src/index.js`.
```json
module.exports = { 
	entry: './src/index.js', 
	// otras opciones... 
};
```
```json
module.exports = { 
	entry: { 
		index: './src/index.js', 
		admin: './src/admin.js', 
	},
};
```
````

````ad-tip
title: <b>output</b>
collapse:
Indica el destino y el nombre de los archivos generados por Webpack. Puede ser un objeto con varias propiedades, como `path` para la ruta del directorio de salida, `filename` para el nombre del archivo principal o `chunkFilename` para el nombre de los archivos secundarios. Por defecto, Webpack genera los archivos en el directorio `dist` con el nombre `main.js`.

En este ejemplo, se especifica que el archivo de salida se llamará bundle.js y se colocará en la carpeta dist.
```json
module.exports = { 
	// opciones anteriores... 
	output: { 
		filename: 'bundle.js', 
			path: path.resolve(__dirname, 'dist'), 
	}, 
};
```
````

````ad-tip
title: <b>module</b>
collapse:
Indica cómo Webpack debe tratar los diferentes tipos de módulos. Puede ser un objeto con una propiedad `rules`, que es un arreglo de objetos que definen las reglas para cada tipo de módulo. Cada regla puede tener propiedades como `test` para indicar una expresión regular que filtra los archivos a aplicar la regla, `use` para indicar el cargador o los cargadores a usar para transformar el código o `exclude` para indicar los archivos o directorios a ignorar.

```json
module.exports = { 
	// opciones anteriores... 
	
	module: { 
		rules: [ { 
			test: /\.css$/, 
			use: ['style-loader', 'css-loader'], 
		}, ], 
	}, 
};
```
````

````ad-tip
title: <b>resolve</b>
collapse:
Esta opción permite configurar cómo se resuelven los módulos. Puedes configurar las extensiones de archivo que Webpack debe buscar cuando importa módulos, así como las rutas que se deben buscar.

En este ejemplo, se especifica que Webpack debe buscar archivos con las extensiones .js y .json.

```json
module.exports = {
  // opciones anteriores...
  resolve: {
    extensions: ['.js', '.json'],
  },
};

```
````

````ad-tip
title: <b>plugins</b>
collapse:
Indica los complementos que Webpack debe usar para optimizar o generar archivos estáticos. Puede ser un arreglo de instancias de los complementos que se quieren usar. Los complementos se deben importar al inicio del archivo usando `require` o `import`. Algunos complementos populares son: `HtmlWebpackPlugin` para generar archivos HTML a partir de una plantilla, `MiniCssExtractPlugin` para extraer el CSS en archivos separados o `CleanWebpackPlugin` para limpiar el directorio de salida antes de cada compilación

```json
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // opciones anteriores...
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

```
````

### Separar la configuración en dev y producción

<mark style="background: #D2B3FFA6;">Una buena práctica es tener dos archivos de configuración separados para los entornos de desarrollo y producción. De esta forma, se puede ajustar el comportamiento de Webpack según las necesidades de cada caso</mark>. 

Por ejemplo, en desarrollo se puede usar un mapa de código fuente más detallado y un servidor local con recarga en vivo o reemplazo de módulos en caliente. En producción, se puede enfocar en optimizar el código, usando un mapa de código fuente más ligero, eliminando código muerto, minimizando, comprimiendo, etc.

[Para separar la configuración en dev y producción, se pueden usar los siguientes pasos](https://backbencher.dev/take-different-builds-for-dev-and-production-environment-using-webpack)[1](https://backbencher.dev/take-different-builds-for-dev-and-production-environment-using-webpack):

- |   Definir dos archivos de configuración separados para los entornos de desarrollo y producción. 	
>Se pueden nombrar como webpack.config.dev.js y webpack.config.prod.js, respectivamente. 
>En el archivo de configuración de desarrollo, se debe establecer el modo a development, y en el archivo de configuración de producción, se debe establecer a production.
- ||  Definir un archivo de configuración común para las opciones que se comparten entre los dos entornos. 
>Se puede nombrar como webpack.config.common.js. En este archivo se pueden definir las opciones como entry, output, module o plugins que se usan tanto en desarrollo como en producción.
- |  Usar una utilidad llamada [[#webpack-merge]] para combinar el archivo de configuración común con el archivo de configuración específico de cada entorno. 
>Esta utilidad permite fusionar objetos de JavaScript sin perder ninguna propiedad. Se debe instalar como una dependencia de desarrollo usando npm o yarn.
- ||  Modificar los scripts de npm para usar el archivo de configuración correspondiente según el entorno. 
>Se puede usar la opción --config para indicar a Webpack qué archivo de configuración usar.

#### Ejemplo
A continuación se muestra un ejemplo de cómo separar la configuración en dev y producción usando [[#webpack-merge]].
```js TI:"Common code"
// webpack.common.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
```js TI:"Dev code"
// webpack.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
});
```
```js TI:"Prod code"
// webpack.prod.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
```

Para usar estos archivos, podemos modificar nuestros scripts de npm para pasar el parámetro --config con el nombre del archivo que queremos usar:

```json
"scripts": {
  "build": "webpack --config webpack.prod.js",
  "builddev": "webpack --config webpack.dev.js"
}
```
Así podríamos ejecutar `npm run build` para generar el código optimizado para producción o `npm run builddev` para generar el código adecuado para desarrollo.
<br>
### webpack-merge
Webpack-merge es un paquete que permite combinar diferentes archivos de configuración de Webpack según el modo que queramos usar¹. Esto es útil cuando tenemos configuraciones comunes y específicas para el modo de desarrollo y el modo de producción.

Para usar webpack-merge, primero tenemos que instalarlo como una dependencia de desarrollo:

```sh
npm i -D webpack-merge
```

Luego, tenemos que crear los archivos de configuración que queramos combinar. Por ejemplo, podemos tener un archivo webpack.common.js con las opciones comunes, un archivo webpack.dev.js con las opciones de desarrollo y un archivo webpack.prod.js con las opciones de producción.

Después, tenemos que importar el paquete webpack-merge y la configuración común en los archivos específicos, y usar la función merge para combinarlos:

```js
// webpack.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // Opciones de desarrollo
});
```

Finalmente, podemos usar el parámetro --config para indicar a Webpack qué archivo de configuración queremos usar:

```sh
webpack --config webpack.dev.js
```

O podemos definir scripts de npm para facilitar el uso:

```json
"scripts": {
  "build": "webpack --config webpack.prod.js",
  "builddev": "webpack --config webpack.dev.js"
}
```

Esto nos permitiría ejecutar `npm run build` o `npm run builddev` según el modo que queramos.




