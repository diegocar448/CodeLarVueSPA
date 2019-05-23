require('./bootstrap');

window.Vue = require('vue');

import router from './routes/routers'
import store from './vuex/store'

/**
 * Componentes Globais
 * 
 */

 Vue.component('app-component', require('./components/App').default)

//Vue.component('categories-component', require('./components/admin/pages/categories/CategoriesComponent').default)
//Vue.component('test-component', require('./components/TestComponent').default)
//Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    router,
    store,
    el: '#app',

});
