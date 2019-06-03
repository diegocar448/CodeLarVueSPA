export default{
    state:{
        products: []
    },
    mutations:{
        ADD_PRODUCT_CART(state, product){
            state.products.push(product)
        },
        REMOVE_PRODUCT_CART(state, product) {
            //state.products.push(product)
            //a cada loop ele representa um item, retorna -1 se ñ encontra
           let index = state.products.findIndex(prod => {
                return prod.id === product.id
            })

            //usar metodo splice para remove item do array
            state.products.splice(index, 1)
        }
    }

}