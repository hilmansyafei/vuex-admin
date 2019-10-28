<template>
  <table class="table table-bordered table-hover table-striped"></table>
</template>
<script>
export default {
  name: "DataTableComponent",
  props: ["comments"],
  data() {
    return {
      headers: [{ title: "Name" }, { title: "Email" }, { title: "Body" }],
      rows: [],
      dtHandle: null
    };
  },
  watch: {
    comments(val) {
      let vm = this;
      vm.rows = [];
      val.forEach(function(item) {
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
  },
  mounted() {
    let vm = this;
    vm.dtHandle = $(this.$el).DataTable({
      columns: vm.headers,
      data: vm.rows,
      searching: true,
      paging: true,
      info: false
    });
  }
};
</script>
