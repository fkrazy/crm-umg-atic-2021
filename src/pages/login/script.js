import { BaseInput } from "@/components";
const axios = require('axios');

export default {
    name: "LoginView",
    components: {BaseInput},
    data() {
        return {
          username: "",
          password: "",
          isBusy: true
        }
      },
  created() {
  },
  methods: {
    ingresar() {
      axios
        .post(' https://crm-umg.herokuapp.com/api/token/', {
          username: this.username, password: this.password
        })
        .then(response => {
          debugger
        }).catch(error => {
          this.showError(error.response.data.detail)
      })
    }
  }
}
