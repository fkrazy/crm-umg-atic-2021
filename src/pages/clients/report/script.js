import LineChart from '@/components/Charts/LineChart';
import config from "../../../config";
const axios = require('axios');

export default {
    name: "ClientReport",
    components: {LineChart},
    data: function () {
        return {
          dataAcumulada: [],
          labelsAcumulada: [],
          dataLastYear: [],
          labelLastYear: [],
          dataDataMonth: [],
          labelDataMonth: [],
          chartOptions: {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            responsive: true,
          }
        }
      },
  created() {
    let token = JSON.parse(sessionStorage.getItem("token"))
    let clientId = this.$route.params.id
    axios.get("https://crm-umg.herokuapp.com/api/clientes/" + clientId, {
      headers: {
        'Authorization': `Bearer ${token.access}`
      }
    }).then(({data}) => {
      this.dataAcumulada.splice(0)
      this.labelsAcumulada.splice(0)
      data.ventas_acumuladas.reverse().forEach(val => {
        this.dataAcumulada.push(val.total)
        this.labelsAcumulada.push(val.desde)
      })
      this.dataLastYear.splice(0)
      this.labelLastYear.splice(0)
      data.ventas_ultimo_anio.reverse().forEach(val => {
        this.dataLastYear.push(val.total)
        this.labelLastYear.push(val.desde)
      })
      this.dataDataMonth.splice(0)
      this.labelDataMonth.splice(0)
      data.ventas_ultimo_mes.forEach(val => {
        this.dataDataMonth.push(val.total)
        this.labelDataMonth.push(val.fecha)
      })
    }).catch(error => this.showError(error.response.data.detail))
  },
  computed: {
    totalAcumulado() {
        const total = this.chartDataAcumulada.datasets[0].data.reduce((a, b) => a + b, 0)
        return total.toFixed(2)
      },
    totalAnio() {
        const total = this.chartData.datasets[0].data.reduce((a, b) => a + b, 0)
        return total.toFixed(2)
      },
    totalMes() {
        const total = this.chartDataMonth.datasets[0].data.reduce((a, b) => a + b, 0)
        return total.toFixed(2)
      },
    chartDataAcumulada() {
      return {
        datasets: [{
          fill: true,
          borderColor: config.colors.primary,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: config.colors.primary,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: config.colors.primary,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.dataAcumulada
        }],
        labels:  this.labelsAcumulada
      }
    },
    chartData() {
      return  {
        datasets: [{
          fill: true,
          borderColor: config.colors.primary,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: config.colors.primary,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: config.colors.primary,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.dataLastYear
        }],
        labels: this.labelLastYear,
      }
    },
    chartDataMonth() {
      return {
        datasets: [{
          fill: true,
          borderColor: config.colors.primary,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: config.colors.primary,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: config.colors.primary,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.dataDataMonth
        }],
        labels: this.labelDataMonth,
      }
    }
  },
  methods : {
    deleteCourse(snap) {
      this.$swal({
        title: 'Estas Seguro?',
        text: `Se va a eliminar el colegio ${snap.data().name}`,
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
          } catch (e) {
            alert('error')
          }
          snap.ref.delete()
        }
      })
    },
    validateSchool(snap) {
      this.$swal({
        title: 'Estas Seguro?',
        text: `Se va a validar el colegio ${snap.data().name}`,
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await snap.ref.update({state: 'validated'})
          this.$swal('Colegio Validado')
        }
      })
    }
  }
}
