import axios from 'axios'
import {URL_BASE} from '../../../config/configs'

const RESOURCE = 'products'

//header usado para upload de arquivos
const CONFIGS = {
    headers:{
        'content-type': 'multipart/form-data',
    }
}

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
    storeProduct(context, formData){        
        context.commit('PRELOADER', true)

            return new Promise((resolve, reject) => {

                axios.post(`${URL_BASE}${RESOURCE}`, formData, CONFIGS)
                .then(response => resolve())
                .catch(error => reject(error.response))
                .finally(() => context.commit('PRELOADER', false))
                
            }) 
    },
    
    updateProduct(context, formData){        
        context.commit('PRELOADER', true)

            return new Promise((resolve, reject) => {

                //definir que ele será enviado para o metodo PUT e não POST
                formData.append('_method', 'PUT')

                //Com upload de imagem altera o verbo de put para post
                //axios.put(`${URL_BASE}${RESOURCE}/${formData.get('id')}`, formData)
                axios.post(`${URL_BASE}${RESOURCE}/${formData.get('id')}`, formData)
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
