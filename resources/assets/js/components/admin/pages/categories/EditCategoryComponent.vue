<template>
    <div>
        <h1>Editar Categoria</h1>


        <form-cat 
            :category="category"
            :updating="true"
            >
        </form-cat>
    </div>
</template>

<script>
import FormCategoryComponent from './partials/FormCategoryComponent'

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
            category:{}
        }
    },
    components:{
        formCat: FormCategoryComponent
    }
    
         
}
</script>

<style scoped>

</style>

