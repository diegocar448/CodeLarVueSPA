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
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="formData.name" placeholder="Nome">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" v-model="formData.email" placeholder="E-mail">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" v-model="formData.password" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-success btn-block">Cadastre-se</button>                                
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
    data(){
        return {
            formData:{
                name:'',
                email:'',
                password:''
            }
        }
    },
    methods:{
        register(){
            this.$store.dispatch('register', this.formData)
                        .then(() => this.$router.push({name: 'admin.dashboard'}))
        }
    }
}
</script>

