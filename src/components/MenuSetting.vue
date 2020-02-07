<template>
  <div class="m-section">
    <span class="m-section__sub">
      {{ dataMenu.name }}
    </span>
    <div class="m-section__content">
      <div class="m-demo">
        <div class="m-demo__preview">
          <SubMenuSetting
            v-for="(subMenu, index) in dataMenu.subMenu"
            :dataSubMenu="subMenu"
            :key="index"
            :module="dataMenu.module"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SubMenuSetting from "./SubMenuSetting";

export default {
  name: "MenuSetting",
  components: {
    SubMenuSetting
  },
  props: {
    dataMenu: { type: Object, required: true }
  }
};
</script>
