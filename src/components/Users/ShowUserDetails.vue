<template>
  <div v-if="loading" class="loader"></div>
  <div v-else>
    <userCardView :user="user" />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import userCardView from "./UserCarView.vue";
import {useRoute}from "vue-router";
export default {
  components: {
    userCardView: userCardView,
  },
  setup() {
    var route=useRoute();
    const user = ref({});
    const loading = ref(true);
    console.log(route.params.id);
    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          // handle success
          user.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
    getUser();
    return { user, loading };
  },
};
</script>

<style>
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>