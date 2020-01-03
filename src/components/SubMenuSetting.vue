<template>
	<!-- <div :id="dataSubMenu.path">
		<b>{{dataSubMenu.name}}</b>
		<p style="padding: 5px;">
			<input type="checkbox" name="priviledge[2][5][R]" value="1" class="flat-red" :id="dataSubMenu.path + 'R'"> Read
			<input type="checkbox" name="priviledge[2][5][W]" value="2" class="flat" :id="dataSubMenu.path + 'W'"> Write
			<input type="checkbox" name="priviledge[2][5][X]" value="4" class="flat" :id="dataSubMenu.path + 'X'"> Delete
		</p>
	</div> -->

	<div :id="dataSubMenu.path" class="m-form__group form-group">
		<label for="">
			{{dataSubMenu.name}}
		</label>
		<div class="m-checkbox-inline">
			<label class="m-checkbox">
				<input type="checkbox" name="priviledge[2][5][R]" value="1" class="flat-red" :id="dataSubMenu.path + 'R'"> Read
				<span></span>
			</label>
			<label class="m-checkbox">
				<input type="checkbox" name="priviledge[2][5][W]" value="2" class="flat" :id="dataSubMenu.path + 'W'"> Write
				<span></span>
			</label>
			<label class="m-checkbox">
				<input type="checkbox" name="priviledge[2][5][X]" value="4" class="flat" :id="dataSubMenu.path + 'X'"> Delete
				<span></span>
			</label>
		</div>

		<!-- <div>
			<div class="m-form__group form-group row">
				<div class="col-6">
					<div class="row">
						<div class="col-4">
							<div class="row">
							<label class="col-6 col-form-label">
								Read
							</label>
							<div class="col-6">
								<span class="m-switch m-switch--icon">
									<label>
										<input type="checkbox" name="priviledge[2][5][R]" value="1" class="flat-red" :id="dataSubMenu.path + 'R2'">
										<span></span>
									</label>
								</span>
							</div>
						</div>
						</div>
						<div class="col-4">
							<div class="row">
							<label class="col-6 col-form-label">
								Write
							</label>
							<div class="col-6">
								<span class="m-switch m-switch--icon">
									<label>
										<input type="checkbox" name="priviledge[2][5][W]" value="2" class="flat" :id="dataSubMenu.path + 'W2'">
										<span></span>
									</label>
								</span>
							</div>
						</div>
						</div>
						<div class="col-4">
							<div class="row">
							<label class="col-6 col-form-label">
								Delete
							</label>
							<div class="col-6">
								<span class="m-switch m-switch--icon">
									<label>
										<input type="checkbox" name="priviledge[2][5][X]" value="4" class="flat" :id="dataSubMenu.path + 'X2'">
										<span></span>
									</label>
								</span>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div> -->


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
				if(checkSubMenu.access.includes(1)) {
					$(`#${this.dataSubMenu.path + 'R'}`).prop('checked', true);
					// $(`#${this.dataSubMenu.path + 'R2'}`).prop('checked', true);
				}

				if(checkSubMenu.access.includes(2)) {
					$(`#${this.dataSubMenu.path + 'W'}`).prop('checked', true);
					// $(`#${this.dataSubMenu.path + 'W2'}`).prop('checked', true);
				}

				if(checkSubMenu.access.includes(4)) {
					$(`#${this.dataSubMenu.path + 'X'}`).prop('checked', true);
					// $(`#${this.dataSubMenu.path + 'X2'}`).prop('checked', true);
				}
			}
		}
	}
}
</script>
