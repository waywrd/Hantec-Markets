import { mount, flushPromises } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import NavigationHeader from "../../src/layout/navigation/NavigationHeader.vue";
import { routes } from "../../src/router/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe("NavigationHeader", () => {
  test("navigates to the correct paths", async () => {
    const wrapper = mount(NavigationHeader, {
      global: {
        plugins: [router],
      },
    });

    const links = wrapper.findAllComponents({ name: "RouterLink" });
    const expectedPaths = ["/", "/triangle", "/square", "/triangle-square"];

    router.push("/");
    await router.isReady();

    for (let i = 0; i < links.length; i++) {
      await links[i].trigger("click");
      await flushPromises();

      const currentRoute = wrapper.vm.$route;
      expect(currentRoute.fullPath).toBe(expectedPaths[i]);
    }
  });
});
