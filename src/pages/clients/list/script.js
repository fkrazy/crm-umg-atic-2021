import { BaseTable } from "@/components";
import router from "@/router";
const axios = require('axios');


export default {
    name: "ClientList",
    components: {BaseTable},
    data: function () {
        return {
          fields: [
            {key: 'nombre', label: 'Nombre'},
            {key: 'telefono', label: 'Telefono'},
            {key: 'estado', label: 'Estado'},
            {key: 'departamento', label: 'Departamento'},
            {key: 'actions', label: 'Acciones'}
          ],
          clients: [],
          isBusy: true
        }
      },
  created() {
    let token = JSON.parse(sessionStorage.getItem("token"))
    let request
    if (this.$route.params.search) {
      request = axios.post("https://crm-umg.herokuapp.com/api/clientes_search/", {
        search: this.$route.params.search
        },
  {
        headers: {
          'Authorization': `Bearer ${token.access}`
        }
      }).then(({data}) => {
        this.setList(data.results)
      })
    }
    else {
      request = axios.get("https://crm-umg.herokuapp.com/api/clientes/", {
        headers: {
          'Authorization': `Bearer ${token.access}`
        }
      }).then(({data}) => {
        this.setList(data)
      })
    }
    request.catch(error => this.showError(error.response.data.detail))
  },
  methods: {
    deleteClient(id) {
      this.$swal({
        title: 'Estas Seguro?',
        text: `Se va a eliminar el cliente ${id}`,
        showCancelButton: true,
      }).then(async (result) => {
        let token = JSON.parse(sessionStorage.getItem("token"))
        if (result.isConfirmed) {
          axios.delete("https://crm-umg.herokuapp.com/api/clientes/" + id, {
            headers: {
              'Authorization': `Bearer ${token.access}`
            }}).then( _ => {
            this.showSucces("Cliente eliminado correctamente")
            this.clients = this.clients.filter(client => client.actions !== id)
          }).catch(error => this.showError(error.response.data.detail))
        }
      })
    },
    setList: function (data) {
      return this.clients = data.map((val) => {
        return {
          nombre: `${val.nombres} ${val.apellidos}`,
          telefono: val.telefono,
          estado: val.estado,
          departamento: val.departamento.nombre,
          actions: val.id
        }
      })
    },
  }
}
