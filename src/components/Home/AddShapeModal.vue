<template>
  <div
    :class="[
      isAddShapeModalOpen ? 'block' : 'hidden',
      'absolute top-5 left-1 bg-opacity-95 w-80 h-64 bg-white color-black rounded-lg shadow-500 z-50 border-2',
    ]">
    <div class="flex justify-between p-2">
      <div class="text-xl text-black mt-2">Add shape</div>
      <div
        @click="closeModal"
        class="cursor-pointer text-xl relative top-2">
        X
      </div>
    </div>
    <div class="flex flex-col items-center">
      <select
        class="block w-3/4 px-4 py-2 pr-8 bg-white border border-sky-300 rounded-md shadow-sm focus:border-sky-300 sm:text-sm"
        v-model="selectedValue">
        <option
          v-for="(shape, index) in availableShapes"
          :key="index"
          :value="shape">
          {{ shape }}
        </option>
      </select>
      <button
        @click="addShape"
        class="bg-sky-500 hover:bg-sky-400 text-white py-2 px-4 rounded mt-8">
        Add shape
      </button>
      <div class="text-xl my-4">or</div>
    </div>
  </div>
</template>
<script setup>
import { defineModel, defineProps, defineEmits, ref } from "vue";

const isAddShapeModalOpen = defineModel();

const props = defineProps({
  availableShapes: Array,
});

const emit = defineEmits(["addShape"]);

const selectedValue = ref(props.availableShapes[0]);

const addShape = () => {
  emit("addShape", selectedValue.value);
};

const closeModal = () => {
  isAddShapeModalOpen.value = false;
};
</script>
