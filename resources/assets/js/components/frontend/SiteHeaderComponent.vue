<template>
    <div style="background:#00800075">
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
            <!-- <li class="nav-item" v-if="me.name">
                <router-link class="nav-link" :to="{name: 'admin.dashboard'}">
                    Olá {{ me.name }}! ( <a @click.prevent="logout">Sair</a> ) 
                </router-link>
            </li> -->           
            <li class="nav-item dropdown show" v-if="me.name">                
                <a class="dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Olá {{ me.name }}!
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">                    
                    <router-link class="dropdown-item" :to="{name: 'profile'}">Meu Perfil</router-link>
                    <a class="dropdown-item" @click.prevent="logout">
                        Sair
                    </a>                    
                </div>               
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
    },
    methods:{
        logout(){
            this.$store.dispatch('logout')
        }
    }

}
</script>

