<template>
	<div id="menu">
		<label>{{dataMenu.name}}</label>
		<div class="well">
			<SubMenuSetting v-for="(subMenu, index) in dataMenu.subMenu" :dataSubMenu="subMenu" :key="index" :module="dataMenu.module"/>
		</div>
	</div>
</template>
<script>
import SubMenuSetting from "./SubMenuSetting";

export default {
	name: "MenuSetting",
	components: {
		SubMenuSetting
	},
	props: {
		dataMenu: { type: Object, required: true }
  }
}
</script>