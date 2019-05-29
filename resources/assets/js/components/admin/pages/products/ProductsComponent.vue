<template>
    <div>
        <h1>Listagem de Produtos</h1>

        <div class="row">
            <div class="col">
                <button class="btn btn-success" @click.prevent="create">
                    Novo
                </button>

                <vodal                            
                :show="showModal"
                animation="flip"
                @hide="hideModal"
                :width="600"
                :height="500">
                    <product-form 
                    :product="product"
                    :update="update"
                    @success="success">

                    </product-form>
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
                    <td>
                        <a @click.prevent="edit(product.id)" class="btn btn-primary">Editar</a>
                        <a @click.prevent="confirmDelete(product)" class="btn btn-danger">Excluir</a>
                    </td>
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
            product:{
                id:'',
                name:'',
                image:'',
                description:'',               
                category_id:'',
            },
            update:false,
            upload:'',
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
        create(){
            this.update = false

            this.reset()          

            this.showModal = true

            
        },  
        edit(id){
            this.reset()

            this.$store.dispatch('loadProduct', id)
                        .then( response => {
                            console.log(response)
                            this.product = response
                            
                            this.showModal=true

                            this.update = true                           
                            

                        })
                        .catch(errors => {
                            this.$snotify.error('Erro ao carregar produto', 'Erro')                            
                        })
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
            

        },
        reset(){
            this.product = {
                id:'',
                name:'',
                image:'',                
                description:'',               
                category_id:'',
            },
            this.upload = {}

        },
        confirmDelete(product){
            

            this.$snotify.error(`Deseja realmente deletar o produto ${product.name}`, product.name, {
                timeout:10000,
                showProgressBar:true,
                closeOnClick:true,
                pauseOnHover:true,
                buttons:[
                    {text:'Não'},
                    {text:'Sim', action:  (toast)=>{this.destroy(product.id); this.$snotify.remove(toast.id)}},
                ]
            })
        },
        destroy(id){
            this.$store.dispatch('destroyProduct',id)
                        .then(() => {
                            this.$snotify.success('Deletado com sucesso!')
                            this.loadProducts(1)
                        })
                        .catch(() => this.$snotify.error('Erro ao deletar!'))
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


