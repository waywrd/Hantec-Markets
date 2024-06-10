<template>
  <div
    @click="cardClick"
    :class="[
      index === activeIndex ? 'border-sky-300 border-2 shadow-none' : 'border-transparent border-2',
      'rounded-lg shadow-md p-4 hover:shadow-lg   bg-white w-56 m-5 h-48 cursor-pointer transition-all duration-200 ease-in-out',
    ]">
    <h2 class="mb-2 text-lg">{{ shapeTitle }}</h2>
    <div class="flex justify-center items-center">
      <div :style="shapeStyle"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, defineModel, defineEmits } from "vue";
const emit = defineEmits(["cardClicked"]);

const props = defineProps({
  shape: Object,
  index: Number,
  isActive: Boolean,
});

const activeIndex = defineModel();

const shapeTitle = computed(() => {
  return Object.keys(props.shape)[0];
});

const shapeStyle = computed(() => {
  return Object.values(props.shape)[0];
});

const cardClick = () => {
  activeIndex.value = props.index;
  emit("cardClicked", shapeTitle.value);
};
</script>
<style scoped></style>
