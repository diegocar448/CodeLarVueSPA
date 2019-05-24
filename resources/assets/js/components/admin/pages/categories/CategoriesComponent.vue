<template>
    <div>
        <h1>Listagem de Categorias</h1>

        

        <router-link class="btn btn-success" :to="{name:'admin.categories.create'}">Adicionar Nova Categoria</router-link>

        <table class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category, index) in categories.data" :key="index">
                    <td>{{ category.id }}</td>
                    <td>{{ category.name }}</td>
                    <td>
                        <router-link :to="{name:'admin.categories.edit', params: {id: category.id}}" class="btn btn-primary">Editar Categoria</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    created(){
        this.$store.dispatch('loadCategories')
    },
    computed:{
        categories(){
            return this.$store.state.categories.items
        }
    }

}
</script>

<style scoped>

</style>

