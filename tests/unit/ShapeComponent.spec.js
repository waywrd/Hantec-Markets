import { mount } from "@vue/test-utils";
import ShapeCard from "@/components/ShapeCard.vue";

describe("Check if shape title is rendered", () => {
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
});

// it("sets activeIndex on click", async () => {
//   const wrapper = mount(ShapeCard, {
//     props: {
//       shape: { Circle: { width: "100px", height: "100px", borderRadius: "50%" } },
//       index: 0,
//       isActive: false,
//     },
//     global: {
//       provide: {
//         activeIndex: {
//           value: 0,
//         },
//       },
//     },
//   });
//   // Initially, the activeIndex should not be set
//   expect(wrapper.classes()).not.toContain("border-sky-300");
//   // Simulate click event
//   await wrapper.trigger("click");
//   await nextTick();
//   // Check if the click event sets the activeIndex
//   expect(wrapper.emitted("update:modelValue")[0][0]).toBe(0);
//   // Check if the class changes
//   expect(wrapper.classes()).toContain("border-sky-300");
// }
// );
