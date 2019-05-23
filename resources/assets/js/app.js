require('./bootstrap');

window.Vue = require('vue');

import router from './routes/routers'
import store from './vuex/store'

/**
 * Componentes Globais
 * 
 */

 Vue.component('admin-component', require('./components/admin/AdminComponent').default)
 Vue.component('preloader-component', require('./components/layouts/PreloaderComponent').default)

//Vue.component('categories-component', require('./components/admin/pages/categories/CategoriesComponent').default)
//Vue.component('test-component', require('./components/TestComponent').default)
//Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    router,
    store,
    el: '#app',

});
