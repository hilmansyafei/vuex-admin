<template>
	<div>
		<b>{{dataSubMenu.name}}</b>
		<p style="padding: 5px;">
			<input type="checkbox" name="priviledge[2][5][R]" value="1" class="flat-red" checked=""> Read
			<input type="checkbox" name="priviledge[2][5][W]" value="2" class="flat" checked=""> Write
			<input type="checkbox" name="priviledge[2][5][X]" value="4" class="flat" checked=""> Delete
		</p>
	</div>
</template>
<script>
export default {
	name: "subMenuSetting",
	props: {
    dataSubMenu: { type: Object, required: true }
  }
}
</script>