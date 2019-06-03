import Axios from "axios";

export default{
    state:{
        me:{},
        authenticated:false
    },
    mutations:{

    },
    actions:{
        login(context, params){
            Axios.post('/api/auth', params)
                    .then(response =>console.log(response))
                    .catch(error => console.log(error))
        }
    }
}