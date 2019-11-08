<template>
  <footer class="main-footer">
    <div class="pull-right hidden-xs"><b>Version</b> 2.0</div>
    <strong>Copyright &copy; 2019 <a href="">Canopu UI [v2]</a>.</strong>All
    rights reserved.
  </footer>
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
      let pathAll = $(location).attr('href');
      let pathSplit = pathAll.split('/');
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
    let adminLTE = document.createElement('script');    
    adminLTE.setAttribute('src',"/assets/dist/js/adminlte.js");
    document.body.appendChild(adminLTE);
  }
};
</script>
