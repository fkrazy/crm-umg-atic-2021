import LineChart from '@/components/Charts/LineChart';
import PieChart from "../../../components/Charts/PieChart";
import BarChart from "../../../components/Charts/BarChart";
import config from "../../../config";


export default {
    name: "ColegioList",
    components: {LineChart, PieChart, BarChart},
    data: function () {
        return {
          isBusy: true,
          chartDataClientes: {
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
            labels: ['QUET', 'TOTO', 'MAZATE', 'SOLOLA', 'HUEHUE', 'SAN MARCOS', 'QUICHE', 'REU', 'GUATE', 'PETEN', 'SUCHI', 'ANTIGUA'],
          },
          chartDataEdad: {
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
              data: [100, 70, 90, 70, 85]
            }],
            labels: ['15-20', '21-35', '40-50', '50-60', '>60'],
          },
          chartDataVentas: {
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
  methods: {
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
