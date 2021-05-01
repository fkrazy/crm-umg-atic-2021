/*
 =========================================================
 * Vue Black Dashboard - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTimes, faEye, faDollarSign, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import NotificationTemplate from "@/pages/Notifications/NotificationTemplate";

library.add(faEdit, faTimes, faEye, faDollarSign, faUsers)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.mixin({
  methods: {
    showError: function (message) {
      this.$notify({
        message: message,
        title: "Error",
        icon: "tim-icons icon-bell-55",
        horizontalAlign: "right",
        verticalAlign: "bottom",
        type: "danger",
        timeout: 0
      });
    },
    showSucces: function (message) {
      this.$notify({
        message: message,
        title: "Exito",
        icon: "tim-icons icon-bell-55",
        horizontalAlign: "right",
        verticalAlign: "bottom",
        type: "success",
        timeout: 0
      });
    },
  },
})

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
