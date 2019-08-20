<template>
  <div id="app">
    <!-- <HlmHeader />
    <HlmSidebar /> -->
    <router-view></router-view>
    <!-- <HlmFooter /> -->
  </div>
</template>

<script>
import HlmHeader from "@/components/Header";
import HlmFooter from "@/components/Footer";
import HlmSidebar from "@/components/Sidebar";

export default {
  name: "App",
  components: {
    HlmHeader,
    HlmFooter,
    HlmSidebar
  }
};
</script>

<style></style>
