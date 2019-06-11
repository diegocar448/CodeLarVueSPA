<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        Atualizar Perfil
                    </div>
                    <div class="card-body">
                        <form class="form" @submit.prevent="updateProfile">                            
                            <div :class="['form-group', {'has-error': errors.name}]">
                                <div v-if="errors.name">{{ errors.name[0] }}</div>
                                <input type="text" class="form-control" v-model="formData.name" placeholder="Nome">
                            </div>
                            <div :class="['form-group', {'has-error': errors.email}]">
                                <div v-if="errors.email">{{ errors.email[0] }}</div>
                                <input type="email" class="form-control" v-model="formData.email" placeholder="E-mail">
                            </div>
                            <div :class="['form-group', {'has-error': errors.password}]">
                                <div v-if="errors.password">{{ errors.password[0] }}</div>
                                <input type="password" class="form-control" v-model="formData.password" placeholder="Password">
                            </div>
                            <div>
                                <button type="submit" class="btn btn-success btn-block">Atualizar</button>                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 


<script>
export default {

    computed:{
        formData(){
            return this.$store.state.auth.me
        },
    },
    data(){
        return {            
            errors: {}
        }
    },
    methods:{
        updateProfile(){
            this.$store.dispatch('register', this.formData)
                        .then(() => {
                            this.$router.push({name: 'admin.dashboard'})

                            this.$snotify.success("Sucesso ao cadastra!")
                        })
                        .catch(response =>{
                            this.errors = response.errors                       
                        })
        }
    }
}
</script>

