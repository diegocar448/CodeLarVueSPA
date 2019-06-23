<template>
    <div class="col-3">
        <router-link :to="{name: 'product.detail', params: {id: item.id}}">
            <div v-if="item.image">
                <img :src="[`storage/${path}/${item.image}`]" :alt="item.name" class="img-list">
            </div> 
            <div v-else>
                <img src="/imgs/no-image.jpg" class="img-list" alt="">
            </div>
            <p>{{item.name}}</p>
            
        </router-link>

        <button-cart :product="item "></button-cart>
        
    </div>
</template>

<script>
import ButtonCart from './ButtonCart'

export default {
    props:['item', 'path'],
    components:{
        ButtonCart
    },
}
</script>

<style scoped>
.img-list{
    max-width:100px;
}
</style>

