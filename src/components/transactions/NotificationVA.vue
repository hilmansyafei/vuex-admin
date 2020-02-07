<template>
  <div class="m-grid__item m-grid__item--fluid m-wrapper">
    <!-- Content Header (Page header) -->
    <div class="m-subheader">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <h3 class="m-subheader__title m-subheader__title--separator">
            Notification Virtual Account
          </h3>
          <Breadcrumb :breadCrumbs="breadCrumbs" />
        </div>
      </div>
    </div>

    <div class="m-content">
      <div class="m-portlet m-portlet--mobile">
        <div class="m-portlet__head">
          <div class="m-portlet__head-caption">
            <div class="m-portlet__head-title">
              <h3 class="m-portlet__head-text">
                Notification List
                <!-- <small>
                  initialized from table element
                </small> -->
              </h3>
            </div>
          </div>
        </div>
        <div class="m-portlet__body">
          <div
            class="m_datatable transactionVirtualAccount"
            id="ajax_data"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrm";
import MainDataTable from "@/components/MainDataTable";
import { API_URL } from "@/common/config";

export default {
  name: "UserManagement",
  data() {
    return {
      username: null,
      fullName: null,
      showPage: 3,
      allPage: 6,
      currentPage: 3,
      allData: 33
    };
  },
  components: {
    Breadcrumb,
    MainDataTable
  },
  methods: {
    table() {
      const options = {
        data: {
          type: "remote",
          source: {
            read: {
              // sample GET method
              method: "GET",
              url: `${API_URL}/notification/123`
            }
          },
          pageSize: 10,
          serverPaging: true,
          serverFiltering: true,
          serverSorting: true
        },
        pagination: true,
        search: {
          // enable trigger search by keyup enter
          onEnter: true,
          // input text for search
          input: $("#generalSearch"),
          // search delay in milliseconds
          delay: 400
        },
        layout: {
          theme: "default",
          class: "m-datatable--brand",
          scroll: false,
          height: null,
          footer: false,
          header: true,

          smoothScroll: {
            scrollbarShown: true
          },

          spinner: {
            overlayColor: "#000000",
            opacity: 0,
            type: "loader",
            state: "brand",
            message: true
          }
        },
        // columns definition
        columns: [
          {
            field: "url",
            title: "Url",
            sortable: false,
            filterable: false,
            width: 250,
            responsive: { visible: "lg" }
          },
          {
            field: "transactionStatus",
            title: "Status Transaction",
            sortable: false,
            filterable: false,
            width: 150,
            responsive: { visible: "lg" }
          },
          {
            field: "notificationStatus",
            title: "Status Notification",
            sortable: false,
            filterable: false,
            width: 150,
            responsive: { visible: "lg" }
          }
        ]
      };
      var datatable = $(".m_datatable").mDatatable(options);

      var query = datatable.getDataSourceQuery();

      $("#m_form_status")
        .on("change", function() {
          datatable.search($(this).val(), "Status");
        })
        .val(typeof query.Status !== "undefined" ? query.Status : "");

      $("#m_form_status").selectpicker();
    }
  },
  computed: {
    breadCrumbs() {
      return [
        {
          name: "Transactions",
          action: "#",
          isActive: false
        },
        {
          name: "Virtual Account",
          action: "#",
          isActive: false
        }
      ];
    }
  },
  mounted() {
    this.table();
  }
};
</script>
