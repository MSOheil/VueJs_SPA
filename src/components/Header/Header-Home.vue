<template>
  <header>
    <ul id="header-nav">
      <li><h4>MSoheil.dev</h4></li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/users">Users</router-link></li>
      <li><router-link to="/posts">posts</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style>
* {
  list-style: none;
  text-decoration: none;
}
#header-nav {
  display: flex;
  background: rgb(214, 199, 199);
  justify-content: flex-start;
  align-items: center;
}
#header-nav li {
  padding: 0 3%;
}
.router-link-active{
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}
</style>