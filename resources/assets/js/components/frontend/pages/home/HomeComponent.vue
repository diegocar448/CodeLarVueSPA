<template>
    <div>
        
    </div>
</template>

<script>
export default {
    created(){
        //verifica se o existe products no vuex caso contrario faça a requisição para api
        if( this.products.data.length == 0 ){
            this.$store.dispatch('loadProducts', {})
        }
    },
    computed:{
        products(){
            return this.$store.state.products.items
        }
    }
}
</script>

