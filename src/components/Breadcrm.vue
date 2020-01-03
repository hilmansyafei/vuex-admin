<template>
  <!-- <ol class="breadcrumb">
    <li class="active"><a href=""><i class="fa fa-dashboard"></i> Dashboard</a></li>
    <li class="active" v-for="breadCrumb in breadCrumbs" :key="breadCrumb.name" :class="{ active : breadCrumb.isActive}">
      <a v-if="!breadCrumb.isActive" :href="breadCrumb.action">{{ breadCrumb.name }}</a>
      <span v-if="breadCrumb.isActive">{{ breadCrumb.name }}</span>
    </li>
  </ol> -->

  <ul class="m-subheader__breadcrumbs m-nav m-nav--inline">
		<li class="m-nav__item m-nav__item--home">
			<a href="#" class="m-nav__link m-nav__link--icon">
				<i class="m-nav__link-icon la la-home"></i>
			</a>
		</li>

    <!-- <li class="m-nav__separator">-</li> -->

    <li class="m-nav__item" v-for="breadCrumb in breadCrumbs" :key="breadCrumb.name" :class="{ active : breadCrumb.isActive}">
      <a class="m-nav__link" :href="breadCrumb.action">
        <span class="m-nav__separator" style="padding: 0 3px"> - </span>
        <span class="m-nav__link-text">
          {{ breadCrumb.name }}
        </span>
      </a>
    </li>
	</ul>
</template>
<script>
export default {
  name: "HlmBreadcrumb",
  props:{
    breadCrumbs: { type: Array, required: true }
  }
};
</script>
