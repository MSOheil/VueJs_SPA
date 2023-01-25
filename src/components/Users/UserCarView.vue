<template>
  <div class="card">
    <div class="container">
      <h4><b><router-link :to="{name:`userId`,params:{id:user.id}}">{{ user.name }}</router-link></b></h4>
      <p>{{user.username}}</p>
      <p>{{user.phone}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    user:Object
  }
};
</script>

<style>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>