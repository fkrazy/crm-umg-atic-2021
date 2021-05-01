import { BaseInput } from "@/components";
import router from "@/router";
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
          sessionStorage.setItem("token", JSON.stringify(response.data))
          router.replace("/")
        }).catch(error => {
          this.showError(error.response.data.detail)
      })
    }
  }
}
