<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="index2.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>C</b>UI</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Canopus UI</b> [v2]</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button -->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img
                :src="'assets/dist/img/' + currentUser.foto"
                class="user-image"
                alt="User Image"
              />
              <span class="hidden-xs">{{currentUser.fullName}}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img
                  :src="'assets/dist/img/' + currentUser.foto"
                  class="img-circle"
                  alt="User Image"
                />
                <p>{{currentUser.fullName}}</p>
                <p><small>{{currentUser.group}}</small></p>
              </li>
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" @click="logout" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/store/actions.type";
import { BASE_URL } from "@/common/config";

export default {
  name: "HlmHeader",
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    logout() {
      $("#full-load").show();
      this.$store.dispatch(LOGOUT).then(() => {
        setTimeout(function(){ 
          window.location.href = BASE_URL;
        }, 500);
      });
    }
  }
};
</script>
