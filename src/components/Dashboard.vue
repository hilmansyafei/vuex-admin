<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Dashboard<small>Control panel</small></h1>
      <ol class="breadcrumb">
        <li>
          <a href="#"><i class="fa fa-dashboard"></i> Home</a>
        </li>
        <li class="active">Dashboard</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Small boxes (Stat box) -->
      <div class="row">
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-aqua">
            <div class="inner">
              <div v-if="!isLoadingDashboard" class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
              <h3 v-if="isLoadingDashboard">150</h3>
              <p>New Orders</p>
            </div>
            <div class="icon"><i class="ion ion-bag"></i></div>
            <a href="#" class="small-box-footer">
              More info <i class="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
              <div v-if="!isLoadingDashboard" class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
              <h3 v-if="isLoadingDashboard">53<sup style="font-size: 20px">%</sup></h3>
              <p>Bounce Rate</p>
            </div>
            <div class="icon"><i class="ion ion-stats-bars"></i></div>
            <a href="#" class="small-box-footer">
              More info <i class="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-yellow">
            <div class="inner">
              <div v-if="!isLoadingDashboard" class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
              <h3 v-if="isLoadingDashboard">44</h3>

              <p>User Registrations</p>
            </div>
            <div class="icon"><i class="ion ion-person-add"></i></div>
            <a href="#" class="small-box-footer">
              More info <i class="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <div v-if="!isLoadingDashboard" class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
              <h3 v-if="isLoadingDashboard">65</h3>

              <p>Unique Visitors</p>
            </div>
            <div class="icon"><i class="ion ion-pie-graph"></i></div>
            <a href="#" class="small-box-footer">
              More info <i class="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <!-- ./col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "HlmDashboard",
  mounted(){
    // this.$store
    // .dispatch("getDashboard")
    // .catch(() => {});
  },
  computed: {
    ...mapGetters(["isLoadingDashboard"])
  },
};
</script>
