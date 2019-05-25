<template>
    <div>
        <h1>Listagem de Produtos</h1>


        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>ID</th>           
                    <th>Descrição</th>
                    <th>Ações</th>                 
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products.data" :key="index">
                    <td>{{ product.image}}</td>
                    <td>{{ product.name}}</td>
                    <td>{{ product.id}}</td>               
                    <td>{{ product.description}}</td>                
                    <td></td>
                </tr>
            </tbody>
        </table>

        <ul v-if="products.last_page > 1">
            <li v-if="products.current_page > 1">
                <a class="btn btn-primary" @click.prevent="loadProducts(products.current_page - 1)">
                    Anterior
                </a>
            </li>
            <li v-if="products.current_page < products.last_page">
                <a class="btn btn-primary" @click.prevent="loadProducts(products.current_page + 1)">
                    Próxima
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    created(){
        this.loadProducts(1)
    },
    data(){
        return{
            name: '',
        }
    },
    computed:{
        products(){
            return this.$store.state.products.items
        },
        params(){
            return{
                page: this.products.current_page
            }
        }
    },
    methods:{
        loadProducts(page){
            this.$store.dispatch('loadProducts', {...this.params, page})
        },       
          
    },
    
    
}
</script>

<style scoped>

</style>


