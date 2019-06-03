<template>
    <div>
        <div v-if="notCart">
            <button class="btn btn-info" @click.prevent="addCart">
                Adicionar Carrinho
            </button>        
        </div>
        <div v-else>
            <button class="btn btn-danger" @click.prevent="notCart">
                Remover Carrinho
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props:['product'],

    computed:{
        notCart(){
            return this.$store.state.cart.products.indexOf(this.product) < 0
        }
        
    },

    methods:{
        addCart(){
            this.$store.commit('ADD_PRODUCT_CART', this.product)
        }
    }
}
</script>


