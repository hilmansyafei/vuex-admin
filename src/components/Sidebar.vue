<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img
            :src="'assets/dist/img/' + currentUser.image"
            class="img-circle"
            alt="User Image"
          />
        </div>
        <div class="pull-left info">
          <p>{{currentUser.name}}</p>
          <a href="#">{{currentUser.role}}</a>
        </div>
      </div>
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <li>
          <a href="">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
          </a>
        </li>
        <Menu 
          v-for="(menu, index) in menus"
          :dataMenu="menu"
          :key="index"/>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
import Menu from "./Menu";
import { mapGetters } from "vuex";

export default {
  name: "HlmSidebar",
  components: {
    Menu
  },
  computed : {
    ...mapGetters(["menus","currentUser"])
  }
};
</script>
