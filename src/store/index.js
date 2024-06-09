import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useShapes = defineStore("useShapes", () => {
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useShapes, import.meta.hot));
  }
  const shapes = ref([
    { Circle: "width: 100px; height: 100px; background-color: blue; border-radius: 50%;" },
    { Square: "width: 100px; height: 100px; background-color: green;" },
    {
      Triangle:
        "width: 0; height: 0; border-left: 100px solid transparent; border-right: 100px solid transparent; border-bottom: 100px solid purple;",
    },
    { Octagon: "width: 100px; height: 100px; background-color: purple; transform: rotate(45deg);" },

    {
      Heart:
        "width: 0; height: 0; border-left: 100px solid transparent; border-right: 100px solid transparent; border-bottom: 100px solid orange; position: relative;",
    },
    {
      Diamond: "width: 100px; height: 100px; background-color: indigo; transform: rotate(45deg);",
    },
  ]);

  const addShape = (shape) => {
    shapes.value.push(shape);
  };

  return {
    shapes,
    addShape,
  };
});
