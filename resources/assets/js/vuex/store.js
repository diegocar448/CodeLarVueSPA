import Vue from 'vue'
import Vuex from 'vuex'

import Categories from './modules/categories/categories'
import Products from './modules/products/products'
import preloader from './modules/preloader/preloader'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        categories: Categories,
        products: Products,
        preloader
    }
})


export default store