<template>
  <div class="flex flex-col items-center mt-8">
    <div class="flex flex-wrap sm:justify-start justify-center w-11/12">
      <div
        v-for="([key, value], index) in Object.entries(componentShapes)"
        :key="key">
        <ShapeCard
          :shape="value"
          :index="index"
          v-model="activeIndex" />
      </div>
      <!-- <div
        @click="isCreateShapeModalOpen = true"
        class="rounded-lg shadow-md p-4 hover:shadow-lg bg-white w-56 m-5 h-48 cursor-pointer">
        <div class="flex w-full h-full justify-center items-center">
          <div>
            <button class="bg-sky-500 hover:bg-sky-400 text-white py-2 px-4 rounded">Create form</button>
          </div>
        </div>
      </div> -->
      <div class="relative">
        <div
          @click="
            isAddShapeModalOpen = true;
            activeIndex = false;
          "
          class="rounded-lg shadow-md hover:shadow-lg bg-white w-56 p-4 m-5 h-48 cursor-pointer">
          <div class="flex w-full h-full justify-center items-center">
            <div>
              <button class="bg-sky-500 hover:bg-sky-400 text-white py-2 px-4 rounded">Add shape</button>
            </div>
          </div>
        </div>
        <AddShapeModal
          @addShape="addNewShape"
          v-model="isAddShapeModalOpen"
          :availableShapes="shapeNames" />
      </div>
    </div>
    <!-- <ShapeCreatorModal v-model="isAddShapeModalOpen" /> -->
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import ShapeCard from "./ShapeCard.vue";
// import ShapeCreatorModal from "./ShapeCreator/ShapeCreatorModal.vue";
import AddShapeModal from "./AddShapeModal.vue";
import { useShapes } from "@/store/index.js";
import { storeToRefs } from "pinia";

const activeIndex = ref(false);
// const isCreateShapeModalOpen = ref(false);
const isAddShapeModalOpen = ref(false);
const { shapes } = storeToRefs(useShapes());
const componentShapes = ref([]);

onMounted(() => {
  if (shapes.value.length) {
    componentShapes.value = shapes.value;
  }
});

const shapeNames = shapes.value.map((entry) => {
  return Object.keys(entry)[0];
});

const addNewShape = (shapeName) => {
  const { [shapeName]: value } = shapes.value.find((obj) => shapeName in obj) || {};
  const shape = { [shapeName]: value };
  componentShapes.value.push(shape);
  isAddShapeModalOpen.value = false;
};
</script>
