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
        
    },
    data(){
        return{
            labels:['ja','fe', 'ma'],
            datasets:[
                {
                    labels:'Rel mês',
                    backgroundColor:"transparent",
                    boderColor: '#000',
                    data:[3,4,5]
                }
            ]
        }
    }
}
</script>
