import Axios from "axios";
import { URL_BASE } from "../../../config/configs";

export default{
    state:{

    },
    actions:{
        reportsProducts(context){
            context.commit('PRELOADER',true)

            return axios.get(`${URL_BASE}reports-products`)
                        .finally(() => context.commit('PRELOADER',false))

        }
    }
}