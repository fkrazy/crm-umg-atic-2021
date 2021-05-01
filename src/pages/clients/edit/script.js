import { BaseInput, BaseDropdown } from "@/components";
const axios = require('axios');
let estados = [{text:"Activo", value: 1}, {text:"Inactivo", value: 0}]
import router from "@/router";

export default {
    name: "ColegioList",
    components: {BaseInput, BaseDropdown},
    data: function () {
        return {
          editing:false,
          estados: estados,
          isBusy: true,
          departamentos: [],
          cliente: {
            nombres: "",
            apellidos: "",
            direccion: "",
            telefono: "",
            email: "",
            fecha_nacimiento: "",
            codigo: "",
            estado: 1,
            departamento: null
          }
        }
      },
  created() {
    let token = JSON.parse(sessionStorage.getItem("token"))
    axios.get("http://crm-umg.herokuapp.com/api/departamentos/", {
        headers: {
          'Authorization': `Bearer ${token.access}`
        }
      }).then(({data}) => {
        this.departamentos = data.map(val => {
          return {text: val.nombre, value: val.id}
        });
    }).catch(error => this.showError(error.response.data.detail))
    let id = this.$route.params.id
    this.editing = !!id
    if (this.editing) {
      axios.get("http://crm-umg.herokuapp.com/api/clientes/" + id, {
        headers: {
          'Authorization': `Bearer ${token.access}`
        }}).then( ({data}) => {
        data.departamento = data.departamento.id
        this.cliente = data
      }).catch(error => this.showError(error.response.data.detail))
    }
  },
  methods: {
    save () {
        let token = JSON.parse(sessionStorage.getItem("token"))
        axios.post("http://crm-umg.herokuapp.com/api/clientes/", this.cliente, {
          headers: {
            'Authorization': `Bearer ${token.access}`
          }
        }).then(() => {
          this.showSucces("Cliente creado exitosamente")
          router.replace({name:"clientes"})
        }).catch(error => {
          this.showError(error.response.data.detail)
        })
      },
    edit() {
      let token = JSON.parse(sessionStorage.getItem("token"))
      axios.put(`http://crm-umg.herokuapp.com/api/clientes/${this.cliente.id}/`, this.cliente, {
        headers: {
          'Authorization': `Bearer ${token.access}`
        }
      }).then(() => {
        this.showSucces("Cliente editado exitosamente")
        router.replace({name:"clientes"})
      }).catch(error => this.showError(error.response.data.detail))
    }
  }
}
