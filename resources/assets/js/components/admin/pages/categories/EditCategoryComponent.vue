<template>
    <div>
        <h1>Editar Categoria</h1>


        <form class="form" action="" @submit.prevent="submitForm">
            <div class="form-group">
                <input type="'text'" v-model="category.name" class="form-control" name="name" placeholder="Nome de Categoria">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Criar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props:{
        id:{
            require:true
        }
    },
    created(){
        return this.$store.dispatch('loadCategory', this.id)
                    .then(response => this.category = response)
                    .catch(error => {
                        console.log(error)
                    })
    },

    data(){
        return {
            category:{
                name:''
            }
        }
    }
         
}
</script>

<style scoped>

</style>

