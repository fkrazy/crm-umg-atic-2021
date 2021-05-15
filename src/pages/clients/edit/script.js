import { BaseInput, BaseDropdown } from "@/components";
import moment from 'moment';
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
          errors: {
            nombres: "",
            apellidos: "",
            direccion: "",
            telefono: "",
            email: "",
            fecha_nacimiento: "",
            codigo: "",
            estado: 1,
            departamento: null
          },
          cliente: {
            nombres: "",
            apellidos: "",
            direccion: "",
            telefono: "",
            email: "",
            fecha_creacion: moment(Date.now()).format(),
            fecha_nacimiento: "",
            codigo: "",
            estado: 1,
            departamento: null
          }
        }
      },
  created() {
    let token = JSON.parse(sessionStorage.getItem("token"))
    axios.get("https://crm-umg.herokuapp.com/api/departamentos/", {
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
      axios.get("https://crm-umg.herokuapp.com/api/clientes/" + id, {
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
        axios.post("https://crm-umg.herokuapp.com/api/clientes/", this.cliente, {
          headers: {
            'Authorization': `Bearer ${token.access}`
          }
        }).then(() => {
          this.showSucces("Cliente creado exitosamente")
          router.replace({name:"clientes"})
        }).catch(error => {
          this.errors = error.response.data
          if(error.response.data.detail)
            this.showError(error.response.data.detail)
        })
      },
    edit() {
      let token = JSON.parse(sessionStorage.getItem("token"))
      axios.put(`https://crm-umg.herokuapp.com/api/clientes/${this.cliente.id}/`, this.cliente, {
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
