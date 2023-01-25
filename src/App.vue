<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header/Header-Home.vue";

export default {
  name: "App",
  components:{
    Header:Header,
  }
};
</script>

<style>
</style>
