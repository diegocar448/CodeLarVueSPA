<template>
    <div>    

        <ul class="nav bg-dark">
            <li class="nav-item">
                <router-link :to="{name: 'admin.dashboard'}" class="nav-link">Dashboard</router-link>                
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'admin.categories'}" class="nav-link">Categorias ({{totalCategories}})</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'admin.products'}" class="nav-link">Produtos ()</router-link>
            </li>
            <li>
                <a href="#" class="nav-link">
                    {{me.name}} (<a href="#" @click.prevent="logout">Sair</a>)
                    
                </a>                
            </li>
        </ul>

        <div class="container">           
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
export default {
    computed:{
        totalCategories(){            
            return this.$store.state.categories.items.data.length
        },
        me(){
            return this.$store.state.auth.me
        }        
    },
    methods:{
        logout(){
            this.$store.dispatch('logout')

            this.$router.push({name: 'login'})
        }
    }
}
</script>

<style scoped>

</style>
