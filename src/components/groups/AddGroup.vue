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
                Create User Group
              </h3>
            </div>
          </div>
        </div>

        <form
          class="m-form m-form--label-align-right"
          id="app"
          v-on:submit="checkForm"
        >
          {{ createGroup }}
          <div class="m-portlet__body">
            <div class="m-form__section m-form__section--first">
              <div class="m-form__heading">
                <h3 class="m-form__heading-title">
                  Group Info:
                </h3>
              </div>
              <div class="form-group m-form__group row">
                <label class="col-lg-2 col-form-label">
                  * Name:
                </label>
                <div class="col-lg-6">
                  <input
                    v-model="groupName"
                    class="form-control m-input"
                    placeholder="Enter group name"
                    required
                  />
                  {{ groupName }}
                  <span class="m-form__help"> </span>
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label class="col-lg-2 col-form-label">
                  Description:
                </label>
                <div class="col-lg-6">
                  <textarea
                    v-model="groupDesc"
                    class="form-control m-input"
                    placeholder="Enter group description"
                  ></textarea>
                  {{ groupDesc }}
                  <span class="m-form__help"> </span>
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
                <MenuSetting
                  v-for="(menu, index) in allMenuGroup"
                  :dataMenu="menu"
                  :key="index"
                />
              </div>
            </div>
          </div>

          <div class="m-portlet__foot m-form m-portlet__foot--fit">
            <div class="m-form__actions m-form__actions">
              <input type="submit" class="btn btn-primary" value="Submit" />
              <button type="reset" class="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from "@/components/Breadcrm";
import MenuSetting from "@/components/MenuSetting";
import { mapGetters } from "vuex";

export default {
  name: "AddUserGroup",
  data() {
    return {
      groupName: "",
      groupDesc: "",
      sasa: "",
      checkedNames: []
    };
  },
  components: {
    Breadcrumb,
    MenuSetting
  },
  methods: {
    getMenu() {
      this.$store.dispatch("getMenu");
    },
    checkForm: function(e) {
      console.log("groupName: ", this.groupName);
      console.log("groupDesc: ", this.groupDesc);
      console.log("checkedNames: ", this.checkedNames);

      const dataRequest = {
        name: this.groupName,
        desc: this.groupDesc,
        privilege: this.checkedNames
      };

      this.$store.dispatch("createGroup", dataRequest);
      e.preventDefault();
    }
  },
  computed: {
    ...mapGetters(["allMenu", "allMenuGroup", "createGroup"]),
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
          name: "Add User Group",
          action: "#",
          isActive: true
        }
      ];
    }
  },
  mounted() {
    this.getMenu();
  }
};
</script>
