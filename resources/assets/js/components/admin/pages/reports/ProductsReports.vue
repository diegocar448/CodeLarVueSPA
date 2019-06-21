<template>
    <div>
        <h1>Relatório de produtos</h1>   
        <hr>

        <line-chart
            :labels="labels"
            :datasets="datasets"
        >
        </line-chart>
    </div>
</template>


<script>
import LineChart from './charts/LineChart'

export default{
    components:{
        LineChart
    },
    mounted(){
        this.$store.dispatch('reportsProducts')
                .then(response => {                        
                        this.labels = response.data.labels
                        this.datasets[0].data = response.data.datasets
                    })
                .catch(() => {
                    this.$snotify.error('Erro ao atualizar gráficos')
                })
    },
    data(){
        return{
            labels:[],
            datasets:[
                {
                    label:'Mês',
                    backgroundColor:"transparent",
                    boderColor: '#000',
                    data:[]
                }
            ]
        }
    }
}
</script>
