require('./bootstrap');

window.Vue = require('vue');

import Snotify from 'vue-snotify'

import router from './routes/routers'
import store from './vuex/store'

Vue.use(Snotify, {toast: {showProgresBar: false}})

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
    Snotify,
    router,
    store,
    el: '#app',

});
