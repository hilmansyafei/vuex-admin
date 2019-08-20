<template>
  <div>
    <HlmHeader />
    <HlmSidebar />
    <router-view></router-view>
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
