import axios from 'axios'
import {URL_BASE} from '../../../config/configs'

const RESOURCE = 'products'

export default {    
    loadProducts(context){
        context.commit('PRELOADER', true)
        
        axios.get(`${URL_BASE}${RESOURCE}`)
            .then(response => {                    
                console.log(response)

                context.commit('LOAD_PRODUCTS', response.data)
            })
            .catch(error => {
                console.log(errors)
            })
            .finally(() => context.commit('PRELOADER', false))
    },     
}
