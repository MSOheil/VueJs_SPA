<template>
  <router-link :to="{name:`createpost`}">Create Post</router-link>
  <div v-if="loading" class="loader"></div>
  <div v-else class="card">
    <div class="container" v-for="post in posts" :key="post.id">
      <h4>
        <b
          ><router-link :to="{ name: `postId`, params: { id: post.id } }">{{
            post.title
          }}</router-link></b
        >
      </h4>

      <p>{{ post.title }}</p>
      <p>{{ post.body }}</p>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
export default {
  setup() {
    const loading = ref(true);
    const posts = ref([]);
    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          // handle success
          console.log(response.data);
          posts.value = response.data;
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
    if(window.location.href!=="http://localhost:8080/posts/create"){
      getPosts();

    }else{
      loading.value = false;
    }
    return { loading, posts };
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
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>