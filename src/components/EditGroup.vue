<template>
  <div class="m-grid__item m-grid__item--fluid m-wrapper">
    <div class="m-subheader">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <h3 class="m-subheader__title m-subheader__title--separator">
            Group Management
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
                Edit Group
              </h3>
            </div>
          </div>
        </div>
				<div class="m-portlet__body">
          <form class="m-form m-form--label-align-right">
            <div class="m-form__section m-form__section--first">
              <div class="m-form__heading">
                <h3 class="m-form__heading-title">
                  Group Info:
                </h3>
              </div>
              <div class="form-group m-form__group row">
                <label class="col-lg-2 col-form-label">
                  Name:
                </label>
                <div class="col-lg-6">
                  <input type="email" class="form-control m-input" placeholder="Enter full name">
                  <span class="m-form__help">
                  </span>
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label class="col-lg-2 col-form-label">
                  Description:
                </label>
                <div class="col-lg-6">
                  <textarea class="form-control m-input" placeholder="Enter full name"></textarea>
                  <span class="m-form__help">
                  </span>
                </div>
              </div>
            </div>
            <div class="m-form__seperator m-form__seperator--dashed"></div>
            <div class="m-form__section m-form__section--last">
              <div class="m-form__heading">
                <h3 class="m-form__heading-title">
                  Group Privilege:
                </h3>
              </div>
              <div class="form-group m-form__group">
                <MenuSetting v-for="(menu, index) in allMenu" :dataMenu="menu" :key="index" />
              </div>
            </div>
          </form>
				</div>
        <div class="m-portlet__foot m-form m-portlet__foot--fit">
					<div class="m-form__actions m-form__actions">
						<button type="reset" class="btn btn-primary">
							Submit
						</button>
						<button type="reset" class="btn btn-secondary">
							Cancel
						</button>
					</div>
				</div>
      </div>
    </div>

  </div>
</template>
<script>
import Breadcrumb from "./Breadcrm";
import MenuSetting from "./MenuSetting";
import { mapGetters } from "vuex";

export default {
	name: "EditSetting",
	components: {
		Breadcrumb,
		MenuSetting
	},
  methods: {
    addBlueHeader() {
      var portlet = $('#m_portlet').mPortlet();
    },
    dataTable() {
      $('#m_datatable').mDatatable();
      $("#example2").DataTable();
    }
  },
	computed: {
		...mapGetters(["allMenu"]),
    breadCrumbs() {
      return [
        {
          name: "Settings",
          action: "#",
          isActive: false
        },
        {
          name: "Group Management",
          action: "#",
          isActive: true
        },
        {
          name: "User Profile",
          action: "#",
          isActive: true
        }
      ];
    }
  },
  mounted() {
    this.addBlueHeader();
    //Pace.restart();
  }
};
</script>
