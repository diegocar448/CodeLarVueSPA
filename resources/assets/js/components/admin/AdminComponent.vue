<template>
    <div>
        <ul>
            <li>
                <router-link :to="{name: 'admin.dashboard'}">Dashboard</router-link>                
            </li>
            <li>
                <router-link :to="{name: 'admin.categories'}">Categorias</router-link>
            </li>
        </ul>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
