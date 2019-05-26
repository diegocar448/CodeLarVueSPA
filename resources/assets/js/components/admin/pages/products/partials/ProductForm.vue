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
    props:{
        update:{
            require:false,
            type:Boolean,
            default:false
        },
        product:{
            required:false,
            type:Object,
            default:()=>{
                return{
                    id:'',
                    name:'',
                    description:'',               
                    category_id:1,
                }
            }
        }
    },
    data(){
        return {            
            errors: ''
        }
    },
    methods:{
        onSubmit(){
            this.$store.dispatch('storeProduct', this.product)
                        .then(() => {
                            this.$snotify.success('Successo ao cadastrar')

                            this.$router.push({name: 'admin.products'})
                        })
                        .catch(errors => {
                            this.$snotify.error('Algo Errado', 'Erro')
                            
                            console.log(error.response.errors)
                            this.errors = errors.response.errors
                        })
        }
    }
}
</script>
