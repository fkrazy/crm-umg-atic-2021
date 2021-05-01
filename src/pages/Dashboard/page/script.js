import LineChart from '@/components/Charts/LineChart';
import PieChart from "../../../components/Charts/PieChart";
import BarChart from "../../../components/Charts/BarChart";
import config from "../../../config";
const axios = require('axios');


export default {
  name: "Dashboard",
  components: {LineChart, PieChart, BarChart},
  data: function () {
    return {
      totalClients: 0,
      clientMonth: 0,
      ClientYear: 0,
      VentasAnio: 0,
      isBusy: true,
      clientsDepartmentData: [],
      clientsDapartmentLabelData: [],
      edadList: [],
      edadLabel: [],
      VentasAnioData: [],
      VentasAnioLabels: [],
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
    axios.post("https://crm-umg.herokuapp.com/api/dashboard/", {}, {
      headers: {
        'Authorization': `Bearer ${token.access}`
      }
    }).then(({data}) => {
      this.totalClients = data.total_clientes;
      this.clientMonth = data.clientes_este_mes;
      this.ClientYear = data.clientes_este_anio;
      this.VentasAnio = data.ventas_realizadas;
      this.clientsDepartmentData.splice(0)
      this.clientsDapartmentLabelData.splice(0)
      data.clientes_por_departamento.forEach(val => {
        this.clientsDepartmentData.push(val.clientes)
        this.clientsDapartmentLabelData.push(val.departamento)
      })
      this.edadList.splice(0)
      this.edadLabel.splice(0)
      for ( let rango in data.clientes_por_edad){
        this.edadLabel.push(rango)
        this.edadList.push(data.clientes_por_edad[rango])
      }
      this.VentasAnioData.splice(0)
      this.VentasAnioLabels.splice(0)
      data.ventas_del_anio.reverse().forEach( val => {
        this.VentasAnioData.push(val.total)
        this.VentasAnioLabels.push(val.desde)
      })
    }).catch(error => this.showError(error.response.data.detail))
  },
  computed: {
    chartDataClientes: function() {
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
          data: this.clientsDepartmentData
        }],
        labels: this.clientsDapartmentLabelData,
      }
    },
    chartDataEdad: function() {
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
          data: this.edadList
        }],
        labels: this.edadLabel,
      }
    },
    chartDataVentas: function() {
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
          data: this.VentasAnioData
        }],
        labels: this.VentasAnioLabels,
      }
    }
  }
}
