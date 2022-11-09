import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/dashboard.vue";
import Tables from "../views/table.vue";
import SignIn from "../views/signin.vue";
import SignUp from "../views/signup.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/tables",
      name: "tables",
      component: Tables,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
  ],
});

export default router;
