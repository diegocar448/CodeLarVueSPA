import { NAME_TOKEN } from '../../../config/configs'
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

                        localStorage.setItem(NAME_TOKEN, response.data.token)
                    })                    
                    .catch(error => console.log(error))
                    .finally(() => context.commit('PRELOADER', false))
        },
        checkLogin(context){
            return new Promise((resolve, reject) => {
                const token = localStorage.getItem(NAME_TOKEN)

                if(!token){
                    return reject()                    
                }else{
                    axios.get('/api/me')
                            .then( response => {
                                //console.log(response.data.user)
                                context.commit('AUTH_USER_OK', response.data.user)

                                resolve()
                            })
                            .catch( () => reject())
                   }                
            })
        }
    }
}