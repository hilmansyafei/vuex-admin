<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img
            :src="'assets/dist/img/' + currentUser.foto"
            class="img-circle"
            alt="User Image"
          />
        </div>
        <div class="pull-left info">
          <p>{{ currentUser.fullName }}</p>
          <a href="#">{{ currentUser.group }}</a>
        </div>
      </div>
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul v-if="!isLoadingUser" class="sidebar-menu" data-widget="tree">
        <li class="header">Main Menu</li>
        <li class="treeview" v-on:click="moveToDashboard">
          <router-link href="" to="/">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
          </router-link>
        </li>
        <Menu v-for="(menu, index) in accessMenu" :dataMenu="menu" :key="index" />
        <li class="header">Action</li>
        <li>
          <a href="#" @click="logout">
            <i class="fa fa-circle-o text-red"></i> 
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
import Menu from "./Menu";
import { mapGetters } from "vuex";
import { BASE_URL } from "@/common/config";

export default {
  name: "HlmSidebar",
  components: {
    Menu
  },
  computed: {
    ...mapGetters(["accessMenu", "currentUser","isLoadingUser"])
  },
  mounted() {
    $("#full-load").hide();
  },
  methods: {
    moveToDashboard(){
      this.$router.push({name: "Dashboard"});
    },
    logout() {
      $("#full-load").show();
      this.$store.dispatch("logout").then(() => {
        setTimeout(function(){ 
          window.location.href = BASE_URL;
        }, 1000);
      });
    }
  }
};
</script>
