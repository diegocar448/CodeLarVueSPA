<template>
    <div>
        <h1>Relatório de produtos</h1>   
        <hr>
            <select class="form-control" v-model="year" @change="charts">
                <option :value="i" v-for="i in years" :key="i">{{ i }}</option>
            </select>
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
    computed:{
        years(){
            //pegar o ano atual
            let year = new Date().getFullYear()
            let startYear = year - 10

            let years = []

            let j = 0

            for (let i = year; i >= startYear; i--) {
                //years[j] = i    
                years.push(i)                
                //j++
            }

            return years
        }
    },
    mounted(){
        this.charts()
    },    
    methods:{
        charts(){
            this.$store.dispatch('reportsProducts', {year: this.year})
                .then(response => {                        
                        this.labels = response.data.labels
                        this.datasets[0].data = response.data.datasets
                    })
                .catch(() => {
                    this.$snotify.error('Erro ao atualizar gráficos')
                })
        }
    },
    data(){
        return{
            year: new Date().getFullYear(),
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
