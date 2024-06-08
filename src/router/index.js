import { createRouter, createMemoryHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Triangle from "../views/TriangleView.vue";
import Square from "../views/SquareView.vue";

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
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
