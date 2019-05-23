<template>
    <div>
        <h1>
            Adicionar nova categoria
        </h1>

        <form class="form" action="" @submit.prevent="submitForm">
            <div class="form-group">
                <input type="'text'" v-model="name" class="form-control" name="name" placeholder="Nome de Categoria">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Criar</button>
            </div>
        </form>
    </div>
</template> 

<script>
export default {
    data(){
        return {
            name:''
        }
    },
    methods:{
        submitForm(){
            this.$store.dispatch('storeCategory', {name: this.name})
                        .then(() => this.$router.push({name: 'admin.categories'}))
                        .catch()
        }
    }
}
</script>

<style scoped>

</style>


