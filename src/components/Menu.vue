<template>
  <li class="treeview">
    <a href="#">
      <i class="fa fa-cube"></i> <span>{{dataMenu.name}}</span>
      <span class="pull-right-container">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul class="treeview-menu">
      <li v-for="(subMenu, index) in dataMenu.subMenu" :key="index">
        <router-link :to="'/' + module + '/'+ subMenu.path"><i class="fa fa-circle-o"></i> {{subMenu.name}}</router-link>
      </li>
    </ul>
  </li>
</template>
<script>

export default {
  name: "HlmMenu",
  props: {
    dataMenu: { type: Object, required: true }
  },
  computed: {
    url() {
      return "http://localhost:8080";
    },
    module() {
      return this.dataMenu.module
    }
  },
	mounted() {}
};
</script>
