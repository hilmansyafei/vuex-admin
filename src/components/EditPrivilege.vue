<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>User<small>Tables</small></h1>
      <Breadcrumb :breadCrumbs="breadCrumbs" />
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-5">
          <div class="box box-primary box-solid">
            <div class="box-header"><h3 class="box-title">User</h3></div>
            <!-- /.box-header -->
            <div class="box-body">

            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
				<div class="col-xs-7">
          <div class="box box-primary box-solid">
            <div class="box-header"><h3 class="box-title">Privilege</h3></div>
            <!-- /.box-header -->
            <div class="box-body">
							<MenuSetting v-for="(menu, index) in allMenu" :dataMenu="menu" :key="index"/>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
  </div>
</template>
<script>
import Breadcrumb from "./Breadcrm";
import MenuSetting from "./MenuSetting";
import { mapGetters } from "vuex";

export default {
	name: "EditSetting",
	components: {
		Breadcrumb,
		MenuSetting
	},
	computed: {
		...mapGetters(["allMenu"]),
    breadCrumbs() {
      return [
        {
          name: "Settings",
          action: "#",
          isActive: false
        },
        {
          name: "User Management",
          action: "#",
          isActive: true
        }
      ];
    }
  },
  mounted() {
    Pace.restart();
  }
};
</script>
