<template>
  <nav class="navbar navbar-expand-lg navbar-absolute"
       :class="{'bg-white': showMenu, 'navbar-transparent': !showMenu}">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-toggle d-inline" :class="{toggled: $sidebar.showSidebar}">
          <button type="button"
                  class="navbar-toggler"
                  aria-label="Navbar toggle button"
                  @click="toggleSidebar">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <a class="navbar-brand" href="#pablo">{{routeName}}</a>
      </div>
      <button class="navbar-toggler" type="button"
              @click="toggleMenu"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
      </button>

      <collapse-transition>
        <div class="collapse navbar-collapse show" v-show="showMenu">
          <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">
            <div class="search-bar input-group" @click="searchModalVisible = true">
              <!-- <input type="text" class="form-control" placeholder="Search...">
              <div class="input-group-addon"><i class="tim-icons icon-zoom-split"></i></div> -->
              <button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal">
                <i class="tim-icons icon-zoom-split"></i>
              </button>
              <!-- You can choose types of search input -->
            </div>
            <modal :show.sync="searchModalVisible"
                   class="modal-search"
                   id="searchModal"
                   :centered="false"
                   :show-close="true">
              <input slot="header" v-model="searchQuery" type="text" class="form-control"
                     @keypress.enter="searchClient"
                     id="inlineFormInputGroup" placeholder="Buscar Cliente">
            </modal>
            <base-dropdown tag="li"
                           :menu-on-right="!$rtl.isRTL"
                           title-tag="a"
                           class="nav-item"
                           menu-classes="dropdown-navbar">
              <a slot="title" href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
                <div class="photo">
                  <img src="img/anime3.png">
                </div>
                <b class="caret d-none d-lg-block d-xl-block"></b>
                <p class="d-lg-none">
                  Log out
                </p>
              </a>
              <li class="nav-link">
                <button class="nav-item dropdown-item" @click="logout()">Cerrar Sesi&oacute;n</button>
              </li>
            </base-dropdown>
          </ul>
        </div>
      </collapse-transition>
    </div>
  </nav>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions';
  import Modal from '@/components/Modal';
  import router from "@/router";

  export default {
    components: {
      CollapseTransition,
      Modal
    },
    computed: {
      routeName() {
        const { name } = this.$route;
        return this.capitalizeFirstLetter(name);
      },
      isRTL() {
        return this.$rtl.isRTL;
      }
    },
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchModalVisible: false,
        searchQuery: ''
      };
    },
    methods: {
      logout() {
        sessionStorage.clear();
        router.replace({name: "Login"})
      },
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      toggleNotificationDropDown() {
        this.activeNotifications = !this.activeNotifications;
      },
      closeDropDown() {
        this.activeNotifications = false;
      },
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      searchClient() {
        this.searchModalVisible = false
        router.push({name:"clientes busqueda", params:{search: this.searchQuery}})
      }
    }
  };
</script>
<style>
</style>
