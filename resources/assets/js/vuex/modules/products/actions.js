import axios from 'axios'
import {URL_BASE} from '../../../config/configs'

const RESOURCE = 'products'

export default {    
    loadProducts(context, params){
        context.commit('PRELOADER', true)
        
        axios.get(`${URL_BASE}${RESOURCE}`, {params})
            .then(response => {                    
                console.log(response)

                context.commit('LOAD_PRODUCTS', response.data)
            })
            .catch(error => {
                console.log(errors)
            })
            .finally(() => context.commit('PRELOADER', false))
    },
    loadProduct(context, id){
        context.commit('PRELOADER', true)

        return new Promise((resolve, reject) => {
            axios.get(`${URL_BASE}${RESOURCE}/${id}`)
                .then(response => resolve(response.data))
                .catch(error => reject())
                .finally(() => context.commit('PRELOADER', false))
        })
    },   
    storeProduct(context, params){        
        context.commit('PRELOADER', true)

            return new Promise((resolve, reject) => {

                axios.post(`${URL_BASE}${RESOURCE}`, params)
                .then(response => resolve())
                .catch(error => reject(error.response))
                .finally(() => context.commit('PRELOADER', false))
                
            }) 
    },
    
    updateProduct(context, params){        
        context.commit('PRELOADER', true)

            return new Promise((resolve, reject) => {

                axios.put(`${URL_BASE}${RESOURCE}/${params.id}`, params)
                .then(response => resolve())
                .catch(error => reject(error.response))
                .finally(() => context.commit('PRELOADER', false))
                
            }) 
    },

    destroyProduct(context, id){
        context.commit('PRELOADER', true)

            return new Promise((resolve, reject) => {

                axios.delete(`${URL_BASE}${RESOURCE}/${id}`)
                .then(response => resolve())
                .catch(error => {
                    reject()
                    context.commit('PRELOADER', false)
                })
                //.finally(() => context.commit('PRELOADER', false))
                
            })
    }
}
