import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props:{
    labels:{
      require: true,
      type:Array
    },
    datasets:{
      require: true,
      type:Array
    }
    
  },
  mounted () {
    this.charts()
  },
  methods:{
    charts(){
      this.renderChart({
        labels: this.labels,
        datasets: this.datasets,      
      }, {responsive: true, maintainAspectRatio: false})
    }
  },
  //assistir e atualizar em tempo real qualquer alteração do banco
  watch:{
      labels(){
        this.charts()
      }
  }
}