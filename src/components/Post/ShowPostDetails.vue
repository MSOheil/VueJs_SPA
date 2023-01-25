<template>
  <h1>Details posts</h1>
  <div v-if="loading" class="loader"></div>
  <div v-else>
    <div class="card">
      <div class="container">
        <h4>
          <b>{{ post.title}}</b>
        </h4>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  setup() {
    const post = ref({});
    const loading = ref(true);
    const rout = useRoute();
    function getPosts() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${rout.params.id}`)
        .then(function (response) {
          // handle success
          console.log(response.data);
          post.value = response.data;
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
    getPosts();
    return {post,loading}
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