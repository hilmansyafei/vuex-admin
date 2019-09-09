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
              <form role="form" class="form-horizontal" action="http://35.247.175.95/kobe/settings/userManagement/save.editUser/1.1" method="POST" enctype="multipart/form-data">
            
                <input name="idParam" type="hidden" value="1">
                <div class="box-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="col-sm-2 control-label">Username</label>
                    <div class="col-sm-10">
                            <input type="text" name="username" class="form-control" value="hilman" readonly="">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1" class="col-sm-2 control-label">Name</label>
                    <div class="col-sm-10">
                            <input type="text" name="name" class="form-control" value="Hilman Syafei">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1" class="col-sm-2 control-label">Password</label>
                    <div class="col-sm-10">
                            <input type="password" name="password" class="form-control" value="">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1" class="col-sm-2 control-label">User Group</label>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                      <select class="form-control" name="userGroup" required="">
                        <option value="">Choose option</option>
                        <option value="7" selected="">Developer</option>
                        <option value="1">Administrator</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- /.box-body -->
                <div class="box-footer">
                  <button type="submit" style="margin-right:10px;" class="btn btn-primary">Simpan</button>
                  <a class="btn btn-danger" href="javascript: history.go(-1)">kembali</a>
                </div>
              </form>
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
							<MenuSetting v-for="(menu, index) in allMenu" :dataMenu="menu" :key="index" />
              <button type="submit" style="margin-right:10px;" class="btn btn-primary">Simpan</button>
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
    //Pace.restart();
  }
};
</script>
