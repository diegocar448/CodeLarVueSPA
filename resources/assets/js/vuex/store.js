import Vue from 'vue'
import Vuex from 'vuex'

import Categories from './modules/categories/categories'
import Products from './modules/products/products'
import preloader from './modules/preloader/preloader'
import cart from './modules/cart/cart'
import auth from './modules/auth/auth'
import profile from './modules/users/profile'
import chart from './modules/charts/charts'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        categories: Categories,
        products: Products,
        preloader,
        cart,
        auth,
        profile,
        chart
    }
})


export default store