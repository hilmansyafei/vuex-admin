<template>
  <div id="maindatatable">
    <DataTableComponent :comments="filteredComments"></DataTableComponent>
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
      search: ""
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
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/comments",
      success(res) {
        vm.comments = res;
      }
    });
  }
};
</script>
