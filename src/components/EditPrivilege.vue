<template>
  <div class="m-grid__item m-grid__item--fluid m-wrapper">
    <div class="m-subheader">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <h3 class="m-subheader__title m-subheader__title--separator">
            User Profile
          </h3>
          <Breadcrumb :breadCrumbs="breadCrumbs" />
        </div>
      </div>
    </div>

    <div class="m-content">
      <div class="m-portlet m-portlet--tabs">
        <div class="m-portlet__head">
          <div class="m-portlet__head-tools">
            <ul
              class="nav nav-tabs m-tabs-line m-tabs-line--primary m-tabs-line--2x"
              role="tablist"
            >
              <li class="nav-item m-tabs__item">
                <a
                  class="nav-link m-tabs__link active"
                  data-toggle="tab"
                  href="#m_tabs_6_1"
                  role="tab"
                >
                  <i class="la la-cog"></i>
                  User Profile
                </a>
              </li>
              <li class="nav-item m-tabs__item">
                <a
                  class="nav-link m-tabs__link"
                  data-toggle="tab"
                  href="#m_tabs_6_2"
                  role="tab"
                >
                  <i class="la la-briefcase"></i>
                  Privilege
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="m-portlet__body">
          <div class="tab-content">
            <div class="tab-pane active" id="m_tabs_6_1" role="tabpanel">
              <form class="m-form m-form--label-align-right">
                <div class="m-form__section m-form__section--first">
                  <div class="m-form__heading">
                    <h3 class="m-form__heading-title">
                      Profile:
                    </h3>
                  </div>
                  <div class="form-group m-form__group row">
                    <label class="col-lg-2 col-form-label">
                      Full Name:
                    </label>
                    <div class="col-lg-6">
                      <input
                        type="email"
                        class="form-control m-input"
                        placeholder="Enter full name"
                      />
                      <span class="m-form__help">
                        Please enter your full name
                      </span>
                    </div>
                  </div>
                  <div class="form-group m-form__group row">
                    <label class="col-lg-2 col-form-label">
                      Email address:
                    </label>
                    <div class="col-lg-6">
                      <input
                        type="email"
                        class="form-control m-input"
                        placeholder="Enter email"
                      />
                      <span class="m-form__help">
                        We'll never share your email with anyone else
                      </span>
                    </div>
                  </div>
                  <div class="form-group m-form__group row">
                    <label class="col-lg-2 col-form-label">
                      Username:
                    </label>
                    <div class="col-lg-6">
                      <div
                        class="input-group m-input-group m-input-group--square"
                      >
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="la la-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          class="form-control m-input"
                          placeholder=""
                        />
                      </div>
                      <span class="m-form__help">
                        Please enter your username
                      </span>
                    </div>
                  </div>
                  <div class="form-group m-form__group row">
                    <label class="col-lg-2 col-form-label">
                      Phone Number:
                    </label>
                    <div class="col-lg-6">
                      <input
                        type="text"
                        class="form-control m-input"
                        placeholder="Enter phone number"
                      />
                      <span class="m-form__help">
                        Please enter your phone number
                      </span>
                    </div>
                  </div>
                  <div class="form-group m-form__group row">
                    <label class="col-lg-2 col-form-label">
                      User Group:
                    </label>
                    <div class="col-lg-6">
                      <select
                        class="form-control m-input"
                        name="userGroup"
                        required=""
                      >
                        <option value="">Choose option</option>
                        <option value="7" selected="">Developer</option>
                        <option value="1">Administrator</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="m-form__seperator m-form__seperator--dashed"></div>
                <div class="m-form__section m-form__section--last">
                  <div class="m-form__heading">
                    <h3 class="m-form__heading-title">
                      Set Password:
                    </h3>
                  </div>

                  <div class="form-group m-form__group row">
                    <label class="col-lg-2 col-form-label">
                      Current Password:
                    </label>
                    <div class="col-lg-6">
                      <input
                        type="password"
                        class="form-control m-input"
                        placeholder="Type current password"
                      />
                    </div>
                  </div>
                  <div class="form-group m-form__group row">
                    <label class="col-lg-2 col-form-label">
                      New Password:
                    </label>
                    <div class="col-lg-6">
                      <input
                        type="password"
                        class="form-control m-input"
                        placeholder="Type new password"
                      />
                    </div>
                  </div>
                  <div class="form-group m-form__group row">
                    <label class="col-lg-2 col-form-label">
                      New Password Confirmation:
                    </label>
                    <div class="col-lg-6">
                      <input
                        type="password"
                        class="form-control m-input"
                        placeholder="Type new password"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="tab-pane" id="m_tabs_6_2" role="tabpanel">
              <MenuSetting
                v-for="(menu, index) in allMenu"
                :dataMenu="menu"
                :key="index"
              />
            </div>
          </div>
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
    portlet() {
      $("#m_portlet").mPortlet();
    },
    dataTable() {
      $("#m_datatable").mDatatable();
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
          name: "User Management",
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
    this.portlet();
    //Pace.restart();
  }
};
</script>
