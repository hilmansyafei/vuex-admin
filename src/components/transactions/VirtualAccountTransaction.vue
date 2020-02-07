<template>
  <div class="m-grid__item m-grid__item--fluid m-wrapper">
    <!-- Content Header (Page header) -->
    <div class="m-subheader">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <h3 class="m-subheader__title m-subheader__title--separator">
            Virtual Account Transactions
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
                Virtual Account List
                <!-- <small>
                  initialized from table element
                </small> -->
              </h3>
            </div>
          </div>
        </div>
        <div class="m-portlet__body">
          <!--begin: Search Form -->
          <div
            class="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30"
          >
            <div class="row align-items-center">
              <div class="col-xl-8 order-2 order-xl-1">
                <div class="form-group m-form__group row align-items-center">
                  <div class="col-md-4">
                    <div class="m-form__group m-form__group--inline">
                      <div class="m-form__label">
                        <label>
                          Status:
                        </label>
                      </div>
                      <div class="m-form__control">
                        <select
                          class="form-control m-bootstrap-select m-bootstrap-select--solid"
                          id="m_form_status"
                        >
                          <option value="">
                            All
                          </option>
                          <option value="1">
                            Active
                          </option>
                          <option value="2">
                            Inactive
                          </option>
                          <option value="3">
                            Locked
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="d-md-none m--margin-bottom-10"></div>
                  </div>
                  <div class="col-md-4">
                    <div class="m-input-icon m-input-icon--left">
                      <input
                        type="text"
                        class="form-control m-input m-input--solid"
                        placeholder="Search..."
                        id="generalSearch"
                      />
                      <span class="m-input-icon__icon m-input-icon__icon--left">
                        <span>
                          <i class="la la-search"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end: Search Form -->

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
              url: `${API_URL}/virtualAccountTransaction`
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
            field: "no",
            title: "#",
            sortable: false,
            width: 40
          },
          {
            field: "vaNumber",
            title: "Number",
            sortable: false,
            filterable: false,
            width: 150,
            responsive: { visible: "lg" },
            template: function(row) {
              return `<a href="#/transactions/virtualAccountTransaction/123456789">${
                row.vaNumber
              }</a>`;
            }
          },
          {
            field: "name",
            title: "Name",
            sortable: false,
            filterable: false,
            width: 150,
            responsive: { visible: "lg" }
          },
          {
            field: "bank",
            title: "Bank",
            sortable: false,
            filterable: false,
            width: 150,
            responsive: { visible: "lg" }
          },
          {
            field: "amount",
            title: "Amount",
            sortable: false,
            filterable: false,
            width: 150,
            responsive: { visible: "lg" },
            template: function(row) {
              return `Rp ${row.amount}`;
            }
          },
          {
            field: "status",
            title: "Status",
            sortable: false,
            filterable: false,
            width: 150,
            responsive: { visible: "lg" },
            template: function(row) {
              var status = {
                0: { title: "Pending", class: "m-badge--metal" },
                1: { title: "Settlement", class: "m-badge--success" },
                2: { title: "Expired", class: " m-badge--danger" }
              };
              return (
                '<span class="m-badge ' +
                status[row.status].class +
                ' m-badge--wide">' +
                status[row.status].title +
                "</span>"
              );
            }
          },
          {
            field: "Actions",
            width: 110,
            title: "Actions",
            sortable: false,
            overflow: "visible",
            template: function(row, index, datatable) {
              var dropup = datatable.getPageSize() - index <= 4 ? "dropup" : "";

              return `<div class="dropdown ${dropup}">
            <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">
              <i class="la la-ellipsis-h"></i>
            </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#/transactions/virtualAccountTransaction/123456789"><i class="la la-edit"></i> Detail Transaction</a>
                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Update to Expired</a>
                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Resend Notification</a>
              </div>
          </div>
          <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View ">
            <i class="la la-edit"></i>
          </a>`;
            }
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
