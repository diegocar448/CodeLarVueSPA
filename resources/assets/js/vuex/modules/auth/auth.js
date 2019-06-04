import Axios from "axios";

export default{
    state:{
        me:{},
        authenticated:false
    },
    mutations:{
        AUTH_USER_OK(state, user){
            state.authenticated = true, 
            state.me = user
        }
    },
    actions:{
        login(context, params){
            context.commit('PRELOADER', true)

            return Axios.post('/api/auth', params)
                    .then(response => {
                        context.commit('AUTH_USER_OK', response.data.user)
                    })                    
                    .catch(error => console.log(error))
                    .finally(() => context.commit('PRELOADER', false))
        }
    }
}