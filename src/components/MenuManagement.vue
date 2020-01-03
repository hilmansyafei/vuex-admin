<template>
  <div class="m-grid__item m-grid__item--fluid m-wrapper">
    <!-- Content Header (Page header) -->
    <div class="m-subheader">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <h3 class="m-subheader__title m-subheader__title--separator">
            Master View<small>Tables</small>
          </h3>
        </div>
        <Breadcrumb :breadCrumbs="breadCrumbs" />
      </div>
    </div>

    <div class="m-content">
      <div class="m-portlet m-portlet--mobile">
        <div class="m-portlet__head">
          <div class="m-portlet__head-caption">
            <div class="m-portlet__head-title">
              <h3 class="m-portlet__head-text">
                User Management
                <small>
                  initialized from table element
                </small>
              </h3>
            </div>
          </div>
        </div>
        <div class="m-portlet__body">
          <div class="m_datatable" id="local_data">
          <table id="example2" class="table table-bordered table-hover table-striped">
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
        </div>
      </div>
    </div>

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
      $('#m_datatable').mDatatable();
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

