<template>
  <Header />
<router-link :to="{name:`users`}">ShowUser</router-link>
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
