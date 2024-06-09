<template>
  <div class="flex justify-center mt-8">
    <div class="flex flex-wrap sm:justify-start justify-center w-11/12">
      <div
        v-for="([key, value], index) in Object.entries(componentShapes)"
        :key="key">
        <ShapeCard
          :shape="value"
          :index="index"
          v-model="activeIndex" />
      </div>
      <div
        @click="isCreateShapeModalOpen = true"
        class="rounded-lg shadow-md p-4 hover:shadow-lg bg-white w-56 m-5 h-48 cursor-pointer">
        <div class="flex w-full h-full justify-center items-center">
          <div>
            <button class="bg-sky-500 hover:bg-sky-400 text-white py-2 px-4 rounded">Create form</button>
          </div>
        </div>
      </div>
    </div>
    <ShapeCreatorModal v-model="isCreateShapeModalOpen" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import ShapeCard from "./ShapeCard.vue";
import ShapeCreatorModal from "./ShapeCreator/ShapeCreatorModal.vue";
import { useShapes } from "@/store/index.js";
import { storeToRefs } from "pinia";

const activeIndex = ref(false);
const isCreateShapeModalOpen = ref(false);
const { shapes } = storeToRefs(useShapes());
const componentShapes = ref(shapes);
// const { addShape } = useShapes();

// onMounted(() => {
//   // console.log(Object.entries(shapes));
// });
</script>
