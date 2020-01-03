<template>
	<!-- <div id="menu">
		<label>{{dataMenu.name}}</label>
		<div class="well">
			<SubMenuSetting v-for="(subMenu, index) in dataMenu.subMenu" :dataSubMenu="subMenu" :key="index" :module="dataMenu.module"/>
		</div>
	</div> -->

	<div class="m-section">
		<span class="m-section__sub">
			{{dataMenu.name}}
		</span>
		<div class="m-section__content">
			<div class="m-demo">
				<div class="m-demo__preview">
					<form class="m-form">
						<SubMenuSetting v-for="(subMenu, index) in dataMenu.subMenu" :dataSubMenu="subMenu" :key="index" :module="dataMenu.module"/>
					</form>
				</div>
			</div>
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
