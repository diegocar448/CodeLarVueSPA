<template>
    <div>
        <form class="form" action="" @submit.prevent="onSubmit">
            <div :class="['form-group', {'has-error': errors.image}]">                
                <div v-if="errors.image">{{ errors.image[0] }}</div>                
                <div v-if="imagePreview" class="text-center">
                    <img :src="imagePreview" class="image-preview">
                    <button class="btn btn-danger" @click.prevent="removePreviewImage">Remover</button>
                </div>
                <div v-else>
                    <input type="file" class="form-control" name="image" @change="onFileChange">
                </div>
            </div>

            <div :class="['form-group', {'has-error': errors.name}]">
                <div v-if="errors.name">{{ errors.name[0] }}</div>
                <input type="text" v-model="product.name" class="form-control" name="name" placeholder="Nome do Produto">
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
            
                     
        },
        
    },    
    data(){
        return {            
            errors: {},
            upload: null,
            imagePreview: null,
        }
    },
    computed:{
        categories(){
            return this.$store.state.categories.items.data
        }
    },
    methods:{
        onSubmit(){
            let action = this.update ? 'updateProduct' : 'storeProduct'

            const formData = new FormData()

            if(this.upload != null)
            {
                formData.append('image', this.upload)
            
                formData.append('id', this.product.id)
                formData.append('name', this.product.name)
                formData.append('description', this.product.description)
                formData.append('category_id', this.product.category_id)
            }

            this.$store.dispatch(action, formData)
                        .then(() => {
                            this.$snotify.success('Successo ao enviar!')

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
            this.errors = {},
            
            this.imagePreview = null
            this.upload = null

        },
        onFileChange(e){
            e.target.files

            let files = e.target.files || e.dataTransfer.files
            if(!files.length){
                return
            }else{
                this.upload = files[0]
                this.previewImage(files[0])
            }
        },
        //para mostrar imagem
        previewImage(file){
            let reader = new FileReader()

            reader.onload = (e) => {
                this.imagePreview =  e.target.result
            }

            reader.readAsDataURL(file)
        },
        removePreviewImage(){
            this.imagePreview = null
            this.upload =null
        }
    },
    
}
</script>


<style scoped>
.image-preview{max-width:60px;}
</style>

