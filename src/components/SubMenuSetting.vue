<template>
	<div :id="dataSubMenu.path">
		<b>{{dataSubMenu.name}}</b>
		<p style="padding: 5px;">
			<input type="checkbox" name="priviledge[2][5][R]" value="1" class="flat-red" :id="dataSubMenu.path + 'R'"> Read
			<input type="checkbox" name="priviledge[2][5][W]" value="2" class="flat" :id="dataSubMenu.path + 'W'"> Write
			<input type="checkbox" name="priviledge[2][5][X]" value="4" class="flat" :id="dataSubMenu.path + 'X'"> Delete
		</p>
	</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
	name: "subMenuSetting",
	props: {
		dataSubMenu: { type: Object, required: true },
		module: { type: String, required: true },
	},
	computed: {
		...mapGetters(["accessMenu"])
	},
	mounted() {
		let checkModule = this.accessMenu.find(data => data.module == this.module);
		if (checkModule !== undefined){
			let checkSubMenu = checkModule.subMenu.find(subMenu => subMenu.path == this.dataSubMenu.path);
			if (checkSubMenu !== undefined){
				if(checkSubMenu.access.includes(1))
					$(`#${this.dataSubMenu.path + 'R'}`).prop('checked', true);

				if(checkSubMenu.access.includes(2))
					$(`#${this.dataSubMenu.path + 'W'}`).prop('checked', true);

				if(checkSubMenu.access.includes(4))
					$(`#${this.dataSubMenu.path + 'X'}`).prop('checked', true);
			}
		}
	}
}
</script>