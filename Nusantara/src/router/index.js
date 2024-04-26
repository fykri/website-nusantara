import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/auth/register",
    name: "Register",
    component: Register,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;