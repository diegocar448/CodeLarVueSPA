export default{
    state:{
        products: []
    },
    mutations:{
        ADD_PRODUCT_CART(state, product){
            state.products.push(product)
        }
    }

}