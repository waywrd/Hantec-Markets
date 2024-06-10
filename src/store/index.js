import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useShapes = defineStore("useShapes", () => {
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useShapes, import.meta.hot));
  }
  const shapes = ref([
    { Circle: "width: 100px; height: 100px; background-color: #375DD8; border-radius: 50%;" },
    { Square: "width: 100px; height: 100px; background-color: #6E4B9D;" },
    {
      Triangle:
        "width: 0; height: 0; border-left: 100px solid transparent; border-right: 100px solid transparent; border-bottom: 100px solid #CC2B37;",
    },

    {
      Diamond: "width: 100px; height: 100px; background-color: #B74B64; transform: rotate(45deg);",
    },
    {
      Oval: "width:200px; height:100px; background-color:#8C78AF; border-radius: 50%;  ",
    },
    {
      Trapezoid:
        "	border-bottom: 86px solid #699DEC; border-left: 15px solid transparent;  border-right: 15px solid transparent;height: 0;width: 165px;margin-top:20px;",
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
