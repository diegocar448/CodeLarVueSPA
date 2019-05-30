<template>
    <div>
        <ul>
            <li>
                <router-link :to="{name: 'home'}">HOME</router-link>
            </li>
            <li>
                <router-link :to="{name: 'contact'}">CONTATO</router-link>
            </li>
        </ul>

        <router-view></router-view> 

        #footer
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>


