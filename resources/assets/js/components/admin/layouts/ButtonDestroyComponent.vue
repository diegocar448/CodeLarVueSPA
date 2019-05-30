<template>

    <div>
        <a @click.prevent="confirmDelete(item)" class="btn btn-danger">
            Deletar
        </a>
    </div>
    
</template>

<script>
    export default{
        props:{
            item:{
                require:true,
                type:Object
            }
        },

        methods:{
            confirmDelete(item){
                this.$snotify.error(`Deseja realmente deletar o registro ${item.name}`,              
                'Confirma?',
                {
                    timeout:10000,
                    showProgressBar:true,
                    closeOnClick: true,
                    pauseOnHover:true,
                    //aqui vamos passar os botões q vamos usar
                    buttons:[
                        {text: 'Não', action: (toast) => {console.log('Clicked: Later'); this.$snotify.remove(toast.id); } },
                        //{text: 'Sim', action: (toast) => this.$emit('destroy', item.id)}
                        //alteração paara adicionar ao botão Sim para apagar o registro e em seguida fechar o snotify ButtonDestroy                        
                        {text: 'Sim', action: (toast) => {this.$emit('destroy', item.id); this.$snotify.remove(toast.id); } },
                        
                    ]                 

                    
                
            })
            },

            
        }
    }

</script>