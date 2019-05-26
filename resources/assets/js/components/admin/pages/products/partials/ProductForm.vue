<template>
    <div>
        <form class="form" action="" @submit.prevent="onSubmit">
            <div :class="['form-group', {'has-error': errors.name}]">
                <div v-if="errors.name">{{ errors.name[0] }}</div>
                <input type="'text'" v-model="product.name" class="form-control" name="name" placeholder="Nome do Produto">
            </div>

            <div :class="['form-group', {'has-error': errors.description}]">
                <div v-if="errors.description">{{ errors.description[0] }}</div>
                <textarea v-model="product.description" cols="30" rows="10" class="form-control" placeholder="Descrição do Produto"></textarea>
            </div>          


            <div class="form-group">
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            product:{
                name:'',
                description:'',
            },
            errors: ''
        }
    }
}
</script>
