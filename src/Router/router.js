import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/Home-Main.vue";
import UsersShow from "../components/Users/Users-Show.vue";
import showUserDetail from "../components/Users/ShowUserDetails.vue";
import posts from "../components/Post/Posts-Lists.vue";
import postDetails from "../components/Post/ShowPostDetails.vue";
import CreatePost from "../components/Post/CreatePost.vue";
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/users", name: "users", component: UsersShow },
  { path: "/users/:id", name: "userId", component: showUserDetail },
  {
    path: "/posts",
    name: "posts",
    component: posts,
    children: [
      { path: "create", name: "createpost", component: CreatePost },
    ],
  },
  { path: "/posts/:id", name: "postId", component: postDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
