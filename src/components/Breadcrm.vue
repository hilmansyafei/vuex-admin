<template>
  <ol class="breadcrumb">
    <li class="active"><a href=""><i class="fa fa-dashboard"></i> Dashboard</a></li>
    <li class="active" v-for="breadCrumb in breadCrumbs" :key="breadCrumb.name" :class="{ active : breadCrumb.isActive}">
      <a v-if="!breadCrumb.isActive" :href="breadCrumb.action">{{ breadCrumb.name }}</a>
      <span v-if="breadCrumb.isActive">{{ breadCrumb.name }}</span>
    </li>
  </ol>
</template>
<script>
export default {
  name: "HlmBreadcrumb",
  props:{
    breadCrumbs: { type: Array, required: true }
  }
};
</script>
