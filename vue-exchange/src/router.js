import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Error from "@/views/Error";
import About from "@/views/about";
import CoinDetail from "@/views/CoinDetail";
Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail
    },
    {
      path: "*",
      name: "Error",
      component: Error
    }
  ]
});
