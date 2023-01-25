<template>
  <div v-if="loading" class="loader">

  </div>
  <div v-else v-for="user in users" :key="user.id">
    <userCardView :user="user" />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import userCardView from "./UserCarView.vue";
export default {
  components: {
    userCardView: userCardView,
  },
  setup() {
    const users = ref([]);
    const loading = ref(true);
    function getUsert() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          users.value = response.data;
          loading.value=false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
    getUsert();
    return { users,loading };
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
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>