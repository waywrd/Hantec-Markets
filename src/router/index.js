import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Triangle from "../views/TriangleView.vue";
import Square from "../views/SquareView.vue";
import TriangleSquare from "../views/TriangleSquare.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/triangle",
    component: Triangle,
  },
  {
    path: "/square",
    component: Square,
  },
  {
    path: "/triangle-square",
    component: TriangleSquare,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
