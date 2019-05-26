<template>
    <div>
        <h1>Listagem de Produtos</h1>

        <div class="row">
            <div class="col">
                <button class="btn btn-success" @click.prevent="showModal = true">
                    Novo
                </button>

                <vodal
                :show="showModal"
                animation="flip"
                @hide="hideModal"
                :width="600"
                :height="500">
                <product-form @success="success"></product-form>
                </vodal>
            </div>
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
import Vodal from 'vodal'
import axios from 'axios'
import PaginationComponent from '../../../layouts/PaginationComponent'
import SearchComponent from '../../layouts/SearchComponent'
import ProductForm from './partials/ProductForm'



export default {
    created(){
        this.loadProducts(1)
    },    
    data(){
        return {
            search:'',
            showModal:false,
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
        },
        hideModal(){
            this.showModal = false
        },
        success(){
            //após cadastrado com sucesso fechar modal
            this.hideModal()
            //atualizar a listagem de produtos
            this.loadProducts(1)
            

        }
          
    },
    components:{
        pagination: PaginationComponent,
        search: SearchComponent,
        Vodal,
        ProductForm,

    }
    
    
}
</script>

<style scoped>

</style>


