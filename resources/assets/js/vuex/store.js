import Vue from 'vue'
import Vuex from 'vuex'

import Categories from './modules/categories/categories'
import Products from './modules/products/products'
import preloader from './modules/preloader/preloader'
import cart from './modules/cart/cart'
import auth from './modules/auth/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        categories: Categories,
        products: Products,
        preloader,
        cart,
        auth
    }
})


export default store