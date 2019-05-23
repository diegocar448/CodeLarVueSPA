export default {
    state:{
        items:{
            data:[]
        },

    },
    mutations:{
        LOAD_CATEGORIES(state, categories){
            state.items = categories
        }
    },
    actions:{
        loadCategories(context){
            axios.get('/api/v1/categories')
                .then(response => {
                    console.log(response)

                    context.commit('LOAD_CATEGORIES', response)
                })
                .catch(error => {
                    console.log(errors)
                })
        }
    },
    getters:{
        
    }
}