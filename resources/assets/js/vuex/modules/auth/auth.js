import { NAME_TOKEN } from '../../../config/configs'
import Axios from "axios";
   

export default{
    state:{
        me:{},
        authenticated:false,
        urlBack: 'home'
    },
    mutations:{
        AUTH_USER_OK(state, user){
            state.authenticated = true, 
            state.me = user
        },
        AUTH_USER_LOGOUT(state){
            state.me =  {},
            state.authenticated = false,
            state.urlBack = "home"

        },
        CHANGE_URL_BACK (state, url) {
            state.urlBack = url
        }
    },
    actions:{
        login(context, params){
            context.commit('PRELOADER', true)

            return Axios.post('/api/auth', params)
                    .then(response => {
                        context.commit('AUTH_USER_OK', response.data.user)

                        const token = response.data.token

                        localStorage.setItem(NAME_TOKEN, token)

                        //Incluir o token no Header Authorization assim que for feito o login
                        window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`


                    })                    
                    //.catch(error => {})
                    .finally(() => context.commit('PRELOADER', false))
        },
        checkLogin(context){
            context.commit('PRELOADER', true)

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
                            .finally(() => context.commit('PRELOADER', false))
                   }                
            })
        },
        logout (context){
            localStorage.removeItem(NAME_TOKEN)

            context.commit('AUTH_USER_LOGOUT')
        }
    }
}