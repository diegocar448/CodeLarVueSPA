<template>
    <div>
        <h1>Listagem de Produtos</h1>

        <div class="row">
            <div class="col">#add</div>
            <div class="col">
                <search @search="searchForm"></search>
            </div>
        </div>


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
import SearchComponent from '../../layouts/SearchComponent'



export default {
    created(){
        this.loadProducts(1)
    },    
    data(){
        return {
            search:'',
        }
    },
    computed:{
        products(){
            return this.$store.state.products.items
        },
        params(){
            return{
                page: this.products.current_page,
                filter: this.search,
            }
        }
    },
    methods:{
        loadProducts(page){
            this.$store.dispatch('loadProducts', {...this.params, page})
        },     
        searchForm(filter){
            this.search = filter
            this.loadProducts(1)
        }  
          
    },
    components:{
        pagination: PaginationComponent,
        search: SearchComponent

    }
    
    
}
</script>

<style scoped>

</style>


