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
      <ul
        class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow"
        style="padding-bottom: 0"
      >
        <li class="m-menu__item  m-menu__item--active" aria-haspopup="true">
          <a href="#" class="m-menu__link " v-on:click="log">
            <i class="m-menu__link-icon flaticon-line-graph"></i>
            <span class="m-menu__link-title">
              <span class="m-menu__link-wrap">
                <span class="m-menu__link-text"> Dashboard </span>
              </span>
            </span>
          </a>
        </li>
      </ul>

      <Menu v-for="(menu, index) in accessMenu" :dataMenu="menu" :key="index" />
    </div>
    <!-- END: Aside Menu -->
  </div>
</template>
<script>
import { LOG } from "@/store/actions.type";
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
    },
    log() {
      this.$store.dispatch(LOG).then(() => {});
    }
  }
};
</script>
