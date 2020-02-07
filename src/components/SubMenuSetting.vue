<template>
  <div :id="dataSubMenu.path" class="m-form__group form-group">
    <label for="">
      {{ dataSubMenu.name }}
    </label>
    <div class="m-checkbox-inline">
      <label class="m-checkbox">
        <input
          type="checkbox"
          v-model="checkedNames"
          value="1"
          class="flat-red"
          :id="dataSubMenu.path + 'R'"
        />
        Read
        <span></span>
      </label>
      <label class="m-checkbox">
        <input
          type="checkbox"
          v-model="checkedNames"
          value="2"
          class="flat"
          :id="dataSubMenu.path + 'W'"
        />
        Write
        <span></span>
      </label>
      <label class="m-checkbox">
        <input
          type="checkbox"
          v-model="checkedNames"
          value="4"
          class="flat"
          :id="dataSubMenu.path + 'X'"
        />
        Delete
        <span></span>
      </label>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "subMenuSetting",
  data() {
    return {
      checkedNames: []
    };
  },
  props: {
    dataSubMenu: { type: Object, required: true },
    module: { type: String, required: true }
  },
  computed: {
    ...mapGetters(["accessMenu"])
  },
  mounted() {
    let checkModule = this.accessMenu.find(data => data.module == this.module);
    if (checkModule !== undefined) {
      let checkSubMenu = checkModule.subMenu.find(
        subMenu => subMenu.path == this.dataSubMenu.path
      );
      if (checkSubMenu !== undefined) {
        if (checkSubMenu.access.includes(1)) {
          $(`#${this.dataSubMenu.path + "R"}`).prop("checked", true);
        }

        if (checkSubMenu.access.includes(2)) {
          $(`#${this.dataSubMenu.path + "W"}`).prop("checked", true);
        }

        if (checkSubMenu.access.includes(4)) {
          $(`#${this.dataSubMenu.path + "X"}`).prop("checked", true);
        }
      }
    }
  }
};
</script>
