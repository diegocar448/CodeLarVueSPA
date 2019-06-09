<template>
    <div>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'home'}">HOME</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'contact'}">CONTATO</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'cart'}">CARRINHO ( {{ cart.length }} )</router-link>
            </li>
            <li class="nav-item" v-if="me.name">
                <router-link class="nav-link" :to="{name: 'admin.dashboard'}">
                    Olá {{ me.name }}
                </router-link>
            </li>
            <li class="nav-item" v-else>
                <router-link class="nav-link" :to="{name: 'login'}">LOGIN</router-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    computed:{
        cart(){
            return this.$store.state.cart.products
        },
        me(){
            return this.$store.state.auth.me
        }
    }
}
</script>

