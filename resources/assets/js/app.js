require('./bootstrap');

window.Vue = require('vue');

import router from './routes/routers'
import store from './vuex/store'

/**
 * Componentes Globais
 * 
 */

 Vue.component('test-component', require('./components/TestComponent').default)

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    router,
    store,
    el: '#app',

});
