<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        Cadastro
                    </div>
                    <div class="card-body">
                        <form class="form" @submit.prevent="register">                            
                            <user-form :user="formData" :errors="errors"></user-form>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 


<script>
import userForm from "./UserForm"


export default {
    data(){
        return {
            formData:{
                name:'',
                email:'',
                password:''
            },
            errors: {}
        }
    },
    methods:{
        register(){
            this.$store.dispatch('register', this.formData)
                        .then(() => {
                            this.$router.push({name: 'admin.dashboard'})

                            this.$snotify.success("Sucesso ao cadastra!")
                        })
                        .catch(response =>{
                            this.errors = response.errors                       
                        })
        }
    },
    components:{
        userForm: userForm
    }
}
</script>

