<template>
  <div class="m-form__section">
    <div class="m-form__heading">
      <h3 class="m-form__heading-title">
        Method Settings
      </h3>
    </div>
    <div
      class="form-group m-form__group row"
      v-for="(field, index) in dataMenu"
      :key="index"
    >
      <label class="col-xl-3 col-lg-3 col-form-label">
        * {{ field.name }}:
      </label>
      <div class="col-xl-9 col-lg-9">
        <input
          :type="field.type"
          name="name"
          class="form-control m-input"
          placeholder=""
          :value="field.type"
        />
        <span class="m-form__help"> Please enter your {{ field.name }} </span>
      </div>
    </div>
  </div>
</template>
<script>
import { BASE_URL } from "@/common/config";
export default {
  name: "HlmMenu",
  props: {
    dataMenu: { type: Array, required: true }
  },
  methods: {
    moveToDashboard() {
      this.$router.push({ name: "Dashboard" });
    },
    logout() {
      $("#full-load").show();
      this.$store.dispatch("logout").then(() => {
        setTimeout(function() {
          window.location.href = BASE_URL;
        }, 1000);
      });
    }
  },
  computed: {
    url() {
      return "http://localhost:8080";
    },
    module() {
      return this.dataMenu.module;
    }
  },
  mounted() {}
};
</script>
