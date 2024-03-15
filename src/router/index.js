import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/counter",
    name: "counter",
    component: () =>
      import(/* webpackChunkName: "counter" */ "../views/CounterView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/UsersView.vue"),
  },
  {
    path: "/users-old",
    name: "usersOld",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/UsersOld.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/SearchPokemonView.vue"),
  },
  {
    path: "/search/pokemon/:id",
    name: "pokemon",
    component: () =>
      import(/* webpackChunkName: "pokemon" */ "../views/PokemonView.vue"),
  },
  {
    path: "/to-do",
    name: "to-do",
    component: () =>
      import(/* webpackChunkName: "to-do" */ "../views/TodoVuex.vue"),
  },
  {
    path: "/slots",
    name: "slots",
    component: () =>
      import(/* webpackChunkName: "slots" */ "../views/CustomSlots.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
