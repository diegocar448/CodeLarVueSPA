import Axios from "axios";
import { NAME_TOKEN } from '../../../config/configs'

const actions ={
    register(context, params){
        context.commit('PRELOADER', true)

        return new Promise((resolve, reject) => {
            axios.post('/api/register', params)
                    .then(response => {
                        context.commit('AUTH_USER_OK', response.data.user)

                        const token = response.data.token

                        localStorage.setItem(NAME_TOKEN, token)

                        //Incluir o token no Header Authorization assim que for feito o login
                        window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

                        resolve()                        
                    })
                    .catch(error => console.log(error.response))
                    .finally(() => context.commit('PRELOADER', false))
        })
        
    }
}


export default{
    actions: actions,

}