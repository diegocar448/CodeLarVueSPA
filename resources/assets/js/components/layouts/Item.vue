<template>
    <div class="col-3">
        <router-link :to="{name: 'product.detail', params: {id: item.id}}">
            <div v-if="item.image">
                <img :src="[`storage/${path}/${item.image}`]" :alt="item.name" class="img-list">
            </div> 
            <div v-else>
                <img src="/imgs/no-image.jpg" class="img-list" alt="">
            </div>
            {{item.name}}
        </router-link>
    </div>
</template>

<script>
export default {
    props:['item', 'path']

}
</script>

<style scoped>
.img-list{
    max-width:100px;
}
</style>

