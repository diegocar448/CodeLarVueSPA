import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Primeiro',
          backgroundColor: 'transparent',
          borderColor:'#000',
          data: [40, 39, 10, 40, 39, 80, 40]
        }
       
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}