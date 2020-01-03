<template>
  <div
    id="m_aside_left"
    class="m-grid__item	m-aside-left  m-aside-left--skin-dark "
  >
    <!-- BEGIN: Aside Menu -->
    <div
      id="m_ver_menu"
      class="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark "
      data-menu-vertical="true"
      data-menu-scrollable="false"
      data-menu-dropdown-timeout="500"
    >
      <Menu v-for="(menu, index) in accessMenu" :dataMenu="menu" :key="index" />
    </div>
    <!-- END: Aside Menu -->
  </div>
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
    ...mapGetters(["accessMenu", "currentUser", "isLoadingUser"])
  },
  mounted() {
    $("#full-load").hide();
  },
  methods: {
    moveToDashboard() {
      this.$router.push({ name: "Dashboard" });
    },
    logout() {
      $("#full-load").show();
      this.$store.dispatch("logout").then(() => {
        setTimeout(function() {
          window.location.href = BASE_URL;
        }, 1000);
      });
    }
  }
};
</script>
