import { mount } from "@vue/test-utils";
import ShapeCard from "@/components/ShapeCard.vue";

describe("Check if Shape Component renders and works correctly", () => {
  test("Check if shape title is rendered", () => {
    const wrapper = mount(ShapeCard, {
      props: {
        shape: {
          Triangle:
            "width: 0; height: 0; border-left: 100px solid transparent; border-right: 100px solid transparent; border-bottom: 100px solid green;",
        },
      },
    });
    expect(wrapper.text()).toContain("Triangle");
  });
  test("Check if click adds border", async () => {
    const wrapper = mount(ShapeCard, {
      props: {
        shape: { Circle: { width: "100px", height: "100px", borderRadius: "50%" } },
        index: 0,
        isActive: false,
      },
      global: {
        provide: {
          activeIndex: {
            value: 0,
          },
        },
      },
    });
    expect(wrapper.classes()).not.toContain("border-sky-300");
    await wrapper.trigger("click");
    expect(wrapper.classes()).toContain("border-sky-300");
  });

  test("Check if click updates active index", async () => {
    const wrapper = mount(ShapeCard, {
      props: {
        shape: { Circle: { width: "100px", height: "100px", borderRadius: "50%" } },
        index: 0,
        isActive: true,
      },
      global: {
        provide: {
          activeIndex: {
            value: 0,
          },
        },
      },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted("update:modelValue")[0][0]).toBe(0);
  });
});
