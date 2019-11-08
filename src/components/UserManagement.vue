<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>User Management<small>Tables</small></h1>
      <Breadcrumb :breadCrumbs="breadCrumbs" />
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-5">
          <!-- general form elements -->
          <div class="box box-primary box-solid">
            <div class="box-header with-border">
              <h3 class="box-title">Search Parameter</h3>
            </div>
            <!-- /.box-header -->
            <form v-on:submit.prevent="onSubmit(username, fullName);">
              <div class="box-body">
                <div class="form-group">
                  <label for="" class="col-sm-3 control-label">Username</label>
                  <div class="col-sm-9">
                    <input
                      v-model="username"
                      type="text"
                      id="username"
                      class="form-control"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div class="box-body">
                <div class="form-group">
                  <label for="" class="col-sm-3 control-label">Full Name</label>
                  <div class="col-sm-9">
                    <input
                      v-model="fullName"
                      type="text"
                      id="fullName"
                      class="form-control"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div class="box-footer">
                <button type="submit" class="btn btn-primary">Search</button>
              </div>
            </form>
          </div>
          <!-- /.box -->
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-primary box-solid">
            <div class="box-header">
              <h3 class="box-title">User Management</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <table
                  id="example2"
                  class="table table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Username</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
                <Pagination :showPage=showPage :allPage=allPage :currentPage=currentPage :allData=allData />
              <!-- <MainDataTable /> -->
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
import MainDataTable from "./MainDataTable";
import Pagination from "./Pagination";

function hilman(){
  console.log(currentPage);
}

export default {
  name: "UserManagement",
  data() {
    return {
      username: null,
      fullName: null,
      showPage:3,
      allPage:6,
      currentPage:3,
      allData:33
    };
  },
  components: {
    Breadcrumb,
    MainDataTable,
    Pagination
  },
  methods: {
    addBlueHeader() {
      $(".table th").addClass("bg-blue");
    },
    updateData(){
      console.log("jalan");
    },
    table(searchVal = { username: "", fullName: "" },allData) {
      allData = 10;
      let table = $("#example2").DataTable({
        scrollX: true,
        paging: false,
        lengthChange: false,
        searching: false,
        ordering: false,
        info: true,
        autoWidth: false,
        processing: true,
        serverSide: true,
        destroy: true,
        ajax: {
          url: "http://localhost:1322/userManagement",
          type: "GET", // method  , by default get,
          dataFilter: function(json) {
            let data  = JSON.parse(json);
            //allData = data.RecordsTotal;
            // console.log(allData);
            
            return json;
            // call your function here
          },
          data: {
            username: searchVal.username,
            fullName: searchVal.fullName
          }
        },
        columnDefs: [
          {
            targets: -1,
            data: null,
            defaultContent:
              "<a style='margin:1px' class='btn btn-success' href='/#/settings/user-management/edit-user' title='edit' data-id='1'><span class='fa fa-pencil'></span></a>"
          },
          {
            targets: 4,
            render: function(data, type, row, meta) {
              let status = { "0": "Tidak Aktif", "1": "Aktif" };
              return status[row[4]];
            }
          }
        ]
      });
    },
    onSubmit(username, fullName) {
      let searchVal = {
        username: username,
        fullName: fullName
      };
      this.table(searchVal,this.allData);
    }
  },
  computed: {
    breadCrumbs() {
      return [
        {
          name: "Dashboard",
          action: "#",
          isActive: false
        },
        {
          name: "Settings",
          action: "#",
          isActive: false
        },
        {
          name: "User Management",
          isActive: true
        }
      ];
    }
  },
  mounted() {
    this.addBlueHeader();
    this.table({},this.currentPage);
  }
};
</script>
