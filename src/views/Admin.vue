<template>
  <div>
    <HlmHeader />
    <div
      class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body"
    >
      <HlmSidebar />
      <router-view></router-view>
    </div>
    <HlmFooter />
  </div>
</template>
<script>
import HlmHeader from "@/components/Header";
import HlmSidebar from "@/components/Sidebar";
import HlmFooter from "@/components/Footer";

export default {
  name: "HlmAdmin",
  components: {
    HlmHeader,
    HlmSidebar,
    HlmFooter
  }
};
</script>
