import { BaseTable } from "@/components";
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
      axios.get("http://crm-umg.herokuapp.com/api/clientes/", {
        headers: {
          'Authorization': `Bearer ${token.access}`
        }
      }).then(({data}) => {
        this.clients = data.map((val) => {
          return {
            nombre: `${val.nombres} ${val.apellidos}`,
            telefono: val.telefono,
            estado: val.estado,
            departamento: val.departamento.nombre ,
            actions: val.id
          }
        })
      }).catch(error => this.showError(error.response.data.detail))
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
