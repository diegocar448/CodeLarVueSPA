import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../vuex/store'
import routes from './routers.map'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})

//Antes de cada rota ele vai passar por esse filtro
router.beforeEach((to, from, next) => {
    if(to.meta.auth && !store.state.auth.authenticated){
        store.commit('CHANGE_URL_BACK', to.name)

        return router.push({name: 'login'})
    }

    //some (retorna true ou false caso encontre alguma ocorrência no array)
    //console.log(to.matched.some(record => record.meta.auth))

    if(to.matched.some(record => record.meta.auth) && !store.state.auth.authenticated)
    {
        store.commit('CHANGE_URL_BACK', to.name)

        return router.push({name: 'login'})
    }

    if(to.meta.hasOwnProperty('auth') && !to.meta.auth && store.state.auth.authenticated)
    {   
        return router.push({name: 'admin.dashboard'})
    }

    next()    
})

export default router




