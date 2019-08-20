<template>
  <footer class="main-footer">
    <div class="pull-right hidden-xs"><b>Version</b> 2.0</div>
    <strong>Copyright &copy; 2019 <a href="">Canopu UI [v2]</a>.</strong>All rights reserved.
  </footer>
</template>
<script>
export default {
  name: "HlmFooter",
  mounted() {},
  methods: {},
  watch: {
    '$route' (to, from) {
      var path = $(location).attr('href');
      $('.treeview-menu li')
        .parents()
        .removeClass("active");
      $('li a')
        .parents()
        .removeClass("active");
      // Will only work if string in href matches with location
      $('.treeview-menu li a[href="' + path + '"]')
        .parents()
        .addClass("active");
      $('li a[href="' + path + '"]')
        .parents()
        .addClass("active");
    }
  }
};
</script>
