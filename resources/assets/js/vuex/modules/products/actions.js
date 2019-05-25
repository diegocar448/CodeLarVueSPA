export default {    
    loadProducts(context, params){
        context.commit('PRELOADER', true)
        
        axios.get('/api/v1/products')
            .then(response => {                    
                console.log(response)

                context.commit('LOAD_PRODUCTS', response)
            })
            .catch(error => {
                console.log(errors)
            })
            .finally(() => context.commit('PRELOADER', false))
    },     
}
