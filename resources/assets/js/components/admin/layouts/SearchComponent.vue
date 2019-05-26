<template>
    <div>
        <form class="form form-inline" @submit.prevent="search">            
            <input type="text" v-model="filter" placeholder="Pesquisar:" class="form-control mr-sm-2">            

            <button type="submit" class="btn btn-outline-success">Pesquisar</button>                                     
        </form>
        <br>
        <div v-if="filter">
            <p>Resultados para: {{ filter }}</p>
        </div>  
    </div>
</template>

<script>
export default {
    data(){
        return{
            filter:''
        }
    },
    methods:{
        search(){
            this.$emit('search', this.filter)
        }
    }
}
</script>