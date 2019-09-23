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
        <div class="col-xs-12">
          <div class="box box-primary box-solid">
            <div class="box-header"><h3 class="box-title">User Management</h3></div>
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

export default {
  name: "UserManagement",
  components: {
    Breadcrumb
  },
  methods: {
    addBlueHeader() {
      $(".table th").addClass("bg-blue");
    },
    table() {
      let table = $('#example2').DataTable({
        "scrollX": true,
        "paging": true,
        "lengthChange": false,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: 'http://localhost:1322/userManagement',
            type: "GET",  // method  , by default get,
            dataFilter: function(reps) {
              console.log(reps)
              return reps;
            },
            error:function(err){
              console.log(err);
            }
        },
        "columnDefs": [ {
          "targets": -1,
          "data": null,
          "defaultContent": "<a style='margin:1px' class='btn btn-success' href='/#/settings/user-management/edit-user' title='edit' data-id='1'><span class='fa fa-pencil'></span></a>"
        } ]
      });
      // $('#example2 tbody').on( 'click', 'button', function () {
      //   var data = table.row( $(this).parents('tr') ).data();
      //   alert( data[0] +"'s salary is: "+ data[ 2 ] );
      // });

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
    this.table();
  }
};
</script>

