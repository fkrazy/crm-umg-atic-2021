import LineChart from '@/components/Charts/LineChart';
import config from "../../../config";

export default {
    name: "ColegioList",
    components: {LineChart},
    data: function () {
        return {
          chartDataAcumulada: {
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
              data: Array.from({length: 30}, () => Math.floor(Math.random() * 101))
            }],
            labels:  Array.from({length: 30}, (_, index) => new Date().getFullYear() -30 + index),
          },
          chartData: {
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
              data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100]
            }],
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          },
          chartDataMonth: {
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
              data: Array.from({length: 31}, () => Math.floor(Math.random() * 11))
            }],
            labels: Array.from({length: 31}, (_, index) => index + 1),
          },
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
