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

            <div :class="['form-group', {'has-error': errors.category_id}]">
                <div v-if="errors.category_id">{{ errors.category_id[0] }}</div>
                <select class="form-control" v-model="product.category_id">
                    <option value="">Selecione a Categoria</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
                </select>
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
            },            
        }
    },    
    data(){
        return {            
            errors: ''
        }
    },
    computed:{
        categories(){
            return this.$store.state.categories.items.data
        }
    },
    methods:{
        onSubmit(){
            this.$store.dispatch('storeProduct', this.product)
                        .then(() => {
                            this.$snotify.success('Successo ao cadastrar')

                            this.reset()

                            this.$emit('success')

                            
                        })
                        .catch(errors => {
                            this.$snotify.error('Algo Errado', 'Erro')
                            
                            console.log(errors.data.errors)
                            console.log(this.Vodal)
                            this.errors = errors.data.errors
                        })
        },

        reset(){
            this.errors = {}
            this.product = {
                    id:'',
                    name:'',
                    description:'',               
                    category_id:'',
            }

        }
    },
    
}
</script>
