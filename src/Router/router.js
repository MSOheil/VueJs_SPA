import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/Home-Main.vue";
import UsersShow from "../components/Users/Users-Show.vue";
const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/users", name: "users", component: UsersShow },


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
