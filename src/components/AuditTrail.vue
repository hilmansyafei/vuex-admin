<template>
  <div class="m-grid__item m-grid__item--fluid m-wrapper">
    <!-- Content Header (Page header) -->
    <div class="m-subheader">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <h3 class="m-subheader__title m-subheader__title--separator">Audit Trail</h3>
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
                Log List
                <!-- <small>
                  initialized from table element
                </small> -->
              </h3>
            </div>
          </div>
        </div>
        <div class="m-portlet__body">
          <!--begin: Search Form -->
					<div class="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
						<div class="row align-items-center">
							<div class="col-xl-8 order-2 order-xl-1">
								<div class="form-group m-form__group row align-items-center">
									<div class="col-md-4">
										<div class="m-input-icon m-input-icon--left">
											<input type="text" class="form-control m-input m-input--solid" placeholder="Search..." id="generalSearch">
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

          <div class="m_datatable" id="ajax_data"></div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Breadcrumb from "./Breadcrm";
import MainDataTable from "./MainDataTable";
import { API_URL } from "@/common/config";

export default {
  name: "AuditTrail",
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
  },
  methods: {
    table(searchVal = { username: "", fullName: "" },allData) {
      allData = 10;
      const options = {
        data: {
          type: 'remote',
          source: {
            read: {
              // sample GET method
              method: 'GET',
              url: `${API_URL}/auditTrail`,
            },
          },
          pageSize: 10,
          serverPaging: true,
          serverFiltering: true,
          serverSorting: true,
        },
        pagination: true,
        search: {
          // enable trigger search by keyup enter
          onEnter: true,
          // input text for search
          input: $('#generalSearch'),
          // search delay in milliseconds
          delay: 400,
        },
        // columns definition
        columns: [{
            field: "no",
            title: "#",
            sortable: false,
            width: 40,
        }, {
            field: "user.username",
            title: "Username",
            sortable: false,
            filterable: false,
            width: 150,
            responsive: {visible: "lg"},
        }, {
            field: "ip",
            title: "IP",
            sortable: false,
            filterable: false,
            width: 150,
            responsive: {visible: "lg"},
        }, {
            field: "path",
            title: "path",
            sortable: false,
            filterable: false,
            width: 150,
            responsive: {visible: "lg"},
        },{
            field: "action",
            title: "Action",
            sortable: false,
            filterable: false,
            width: 150,
            responsive: {visible: "lg"},
        }, {
            field: "createdAt",
            title: "Time",
            sortable: false,
            filterable: false,
            width: 150,
            responsive: {visible: "lg"},
        }, {
    				field: "Actions",
    				width: 110,
    				title: "Actions",
    				sortable: false,
    				overflow: 'visible',
    				template: function (row, index, datatable) {
    					var dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';

    					return '\
    						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View ">\
                  <i class="la la-edit"></i>\
                </a>\
    					';
    				}
    			}
        ],
      };
      var datatable = $(".m_datatable").mDatatable(options);

      // var query = datatable.getDataSourceQuery();
    }
  },
  computed: {
    breadCrumbs() {
      return [
        // {
        //   name: "Dashboard",
        //   action: "#",
        //   isActive: false
        // },
        {
          name: "Settings",
          action: "#",
          isActive: false
        },
        {
          name: "Audit Trail",
          action: "#",
          isActive: false
        }
        // {
        //   name: "User Management",
        //   isActive: true
        // }
      ];
    }
  },
  mounted() {
    this.table({},this.currentPage);
  }
};
</script>
