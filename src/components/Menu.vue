<template>
  <ul
    class="m-menu__nav m-menu__nav--dropdown-submenu-arrow"
    style="padding: 0"
  >
    <li class="m-menu__section">
      <h4 class="m-menu__section-text">{{ dataMenu.name }}</h4>
      <i class="m-menu__section-icon flaticon-more-v3"></i>
    </li>
    <li
      v-for="(subMenu, index) in dataMenu.subMenu"
      :key="index"
      class="m-menu__item  m-menu__item--submenu"
      aria-haspopup="true"
      data-menu-submenu-toggle="hover"
    >
      <router-link
        :to="'/' + module + '/' + subMenu.path"
        class="m-menu__link m-menu__toggle"
        @click.native="log(subMenu.name)"
      >
        <i class="m-menu__link-icon flaticon-layers"></i>
        <span class="m-menu__link-text">{{ subMenu.name }}</span>
        <i class="m-menu__ver-arrow la la-angle-right"></i>
      </router-link>
    </li>
  </ul>
</template>
<script>
import { LOG } from "@/store/actions.type";
import { BASE_URL } from "@/common/config";
export default {
  name: "HlmMenu",
  props: {
    dataMenu: { type: Object, required: true }
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
    log(submenu) {
      console.log("submenu", submenu);
      this.$store.dispatch(LOG, { submenu }).then(() => {});
    }
  },
  computed: {
    url() {
      return "http://localhost:8080";
    },
    module() {
      return this.dataMenu.module;
    }
  },
  mounted() {}
};
</script>
