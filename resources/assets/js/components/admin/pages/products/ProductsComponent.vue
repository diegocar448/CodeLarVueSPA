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

        <pagination
            :pagination="products"
            :offset="6"
            @paginate="loadProducts">
        </pagination>        
    </div>
</template>

<script>
import axios from 'axios'
import PaginationComponent from '../../../layouts/PaginationComponent'


export default {
    created(){
        this.loadProducts(1)
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
    components:{
        pagination: PaginationComponent
    }
    
    
}
</script>

<style scoped>

</style>


