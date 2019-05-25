<template>
    <div>
        <h1>Listagem de Produtos</h1>


        <table class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Categoria</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Imagem</th>
                    <th>Ações</th>
                 
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products.data" :key="index">
                    <td>{{ product.id}}</td>
                    <td>{{ product.category_id}}</td>
                    <td>{{ product.name}}</td>
                    <td>{{ product.description}}</td>
                    <td>{{ product.image}}</td>
                
                    <td>
                        
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    created(){
        this.loadProducts()
    },
    data(){
        return{
            name: '',
        }
    },
    computed:{
        products(){
            return this.$store.state.products.items
        }
    },
    methods:{
        loadProducts(){
            this.$store.dispatch('loadProducts')
        },       
          
    },
    
    
}
</script>

<style scoped>

</style>


