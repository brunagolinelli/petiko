import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Form from "@/views/Form.vue";
import User from "@/views/User.vue";
import Products from "@/views/Products.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/perfil",
    name: "perfil",
    component: User
  },
  {
    path: "/form",
    name: "form",
    component: Form
  },
  {
    path: "/produtos",
    name: "produtos",
    component: Products
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
