<template>
  <!-- begin::Footer -->
  <footer class="m-grid__item		m-footer ">
    <div
      class="m-container m-container--fluid m-container--full-height m-page__container"
    >
      <div
        class="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop"
      >
        <div
          class="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last"
        >
          <span class="m-footer__copyright">
            2019 &copy; Canopu UI [v2] All rights reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
  <!-- end::Footer -->
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "HlmFooter",
  mounted() {
    this.setMenuActive();
  },
  methods: {
    setMenuActive: () => {
      let pathAll = $(location).attr("href");
      let pathSplit = pathAll.split("/");
      let path = pathSplit[3] + "/" + pathSplit[4] + "/" + pathSplit[5];
      $(".treeview-menu li")
        .parents()
        .removeClass("active");
      // $("li a")
      //   .parents()
      //   .removeClass("active");
      // Will only work if string in href matches with location
      $(".treeview-menu li a[href='" + path + "']")
        .parents()
        .addClass("active");
      $("li a[href='" + path + "']")
        .parents()
        .addClass("active");
    }
  },
  watch: {
    $route() {
      this.setMenuActive();
    }
  },
  computed: {
    ...mapGetters(["isLoadingUser"])
  },
  created() {
    let adminLTE = document.createElement("script");
    adminLTE.setAttribute("src", "/assets/dist/js/adminlte.js");
    document.body.appendChild(adminLTE);
  }
};
</script>
