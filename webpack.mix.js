let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');


//Configurando BrowserSync para ele compilar JS sozinho a cada alteração
//mix.browserSync('http://laravel-web-service.local/')





mix.browserSync({
   proxy: 'http://laravel-web-service.local/',
   notify: false,
   open: false,
   port: 3001
})