<template>
    <div>
        <div v-if="notCart">
            <button class="btn btn-info" @click.prevent="addCart">                
                Add <icon name="lock"/>
            </button>        
        </div>
        <div v-else>
            <button class="btn btn-danger" @click.prevent="removeCart">
                Remover Carrinho
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props:['product'],

    computed:{
        //remove o produto do carrinho
        notCart(){
            return this.$store.state.cart.products.indexOf(this.product) < 0
        }
        
    },

    methods:{
        //adicionar o produto no carrinho
        addCart(){
            this.$store.commit('ADD_PRODUCT_CART', this.product)
        },

        //metodo para remove do carrinho 
        removeCart(){
            this.$store.commit('REMOVE_PRODUCT_CART', this.product)
        }

    }
}
</script>


