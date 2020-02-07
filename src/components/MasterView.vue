<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Master View<small>Tables</small></h1>
      <Breadcrumb :breadCrumbs="breadCrumbs" />
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-primary box-solid">
            <div class="box-header"><h3 class="box-title">Master View</h3></div>
            <!-- /.box-header -->
            <div class="box-body">
              <table
                id="example2"
                class="table table-bordered table-hover table-striped"
              >
                <thead>
                  <tr>
                    <th>Field 1</th>
                    <th>Field 2</th>
                    <th>Field 3</th>
                    <th>Field 4</th>
                    <th>Field 5</th>
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
  name: "MasterView",
  components: {
    Breadcrumb
  },
  methods: {
    addBlueHeader() {
      $(".table th").addClass("bg-blue");
    },
    dataTable() {
      $("#example2").DataTable();
    }
  },
  computed: {
    breadCrumbs() {
      return [
        {
          name: "Menu",
          action: "#",
          isActive: false
        },
        {
          name: "Menu 2",
          action: "#",
          isActive: false
        },
        {
          name: "Menu 3",
          action: "#",
          isActive: false
        },
        {
          name: "Menu 4",
          action: "#",
          isActive: false
        },
        {
          name: "Submenu",
          isActive: true
        }
      ];
    }
  },
  mounted() {
    this.addBlueHeader();
    this.dataTable();
  }
};
</script>
