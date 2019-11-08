<template>
  <div id="maindatatable">
    <!-- <DataTableComponent :comments="filteredComments"></DataTableComponent> -->
    <table class="table table-bordered table-hover table-striped"></table>
  </div>
</template>

<script>
import DataTableComponent from "./DataTableComponent";
export default {
  name: "MainDataTable",
  components: {
    DataTableComponent
  },
  data() {
    return {
      comments: [],
      search: "",
      headers: [{ title: "Name" }, { title: "Email" }, { title: "Body" }],
      rows: [],
      dtHandle: null
    };
  },
  computed: {
    filteredComments: function() {
      let self = this;
      let search = self.search.toLowerCase();
      return self.comments.filter(function(comments) {
        return (
          comments.name.toLowerCase().indexOf(search) !== -1 ||
          comments.email.toLowerCase().indexOf(search) !== -1 ||
          comments.body.toLowerCase().indexOf(search) !== -1
        );
      });
    }
  },
  mounted() {
    let vm = this;
    vm.dtHandle = $(".table").DataTable({
      columns: vm.headers,
      //data: vm.rows,
      searching: true,
      paging: true,
      info: false,
      destroy: true,
      // serverSide: true,
      ajax: {
        url: "https://jsonplaceholder.typicode.com/comments",
        type: "GET", // method  , by default get,
        success(res) {
          console.log("jalan");
          vm.rows = [];
          res.forEach(function(item) {
            let row = [];
            row.push(item.name);
            row.push(
              '<a href="mailto://' + item.email + '">' + item.email + "</a>"
            );
            row.push(item.body);
            vm.rows.push(row);
          });
          vm.dtHandle.clear();
          vm.dtHandle.rows.add(vm.rows);
          vm.dtHandle.draw();
        }
      }
    });
    // $.ajax({
    //   url: "https://jsonplaceholder.typicode.com/comments",
    //   success(res) {
    //     console.log("jalan");
    //     vm.rows = [];
    //     res.forEach(function(item) {
    //       let row = [];
    //       row.push(item.name);
    //       row.push(
    //         '<a href="mailto://' + item.email + '">' + item.email + "</a>"
    //       );
    //       row.push(item.body);
    //       vm.rows.push(row);
    //     });
    //     vm.dtHandle.clear();
    //     vm.dtHandle.rows.add(vm.rows);
    //     vm.dtHandle.draw();
    //   }
    // });
  }
};
</script>
