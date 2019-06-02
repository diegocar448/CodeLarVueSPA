<template>
    <div>
        <h1>Listagem de Categorias</h1>

        <div class="row">
            <div class="col">
                <router-link class="btn btn-success" :to="{name:'admin.categories.create'}">Adicionar Nova Categoria</router-link>
            </div>
            <div class="col">
                <search @searchCategory="search"></search>
            </div>
        </div>
        

        

        <table class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category, index) in categories.data" :key="index">
                    <td>{{ category.id }}</td>
                    <td>{{ category.name }}</td>
                    <td>
                        <router-link :to="{name:'admin.categories.edit', params: {id: category.id}}" class="btn btn-primary">Editar Categoria</router-link>
                        <a href="#" @click.prevent="confirmDestroy(category)" class="btn btn-danger">Remover</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import SearchCategoryComponent from './partials/SearchCategoryComponent'

export default {
    created(){
        this.loadCategories()
    },
    data(){
        return{
            name: '',
        }
    },
    computed:{
        categories(){
            return this.$store.state.categories.items
        }
    },
    methods:{
        loadCategories(){
            this.$store.dispatch('loadCategories', {name: this.name})
        },
        confirmDestroy(category){
            this.$snotify.error(`Deseha realmente deletar a categoria ${category.name}`, 'Deletar?', {
                timeout: 10000,
                showProgressBar: true,                
                closeOnClick: true,
                buttons:[
                    {text: 'Não'},
                    {text: 'Sim', action: () =>  this.destroy(category)}
                ],                
            })
        },
        destroy(category){
           this.$store.dispatch('destroyCategory', category.id) 
                    .then( () => {
                        this.$snotify.success(`Sucesso ao deletar a categoria ${category.name}`)

                        this.loadCategories()
                    })
                    .catch( error => {
                        console.log(erro)

                        this.$snotify.error('Erro ao deletar a categoria', 'Erro')

                        
                    })
        },
        search(filter){
            this.name = filter

            this.loadCategories()
        }    
    },
    components:{
        search: SearchCategoryComponent
    }

}
</script>

<style scoped>

</style>

