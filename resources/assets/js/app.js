require('./bootstrap');

window.Vue = require('vue');

import router from './routes/routers'

/**
 * Componentes Globais
 * 
 */

 Vue.component('test-component', require('./components/TestComponent').default)

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    router

});
