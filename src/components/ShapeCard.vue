<template>
  <div
    @click="activeIndex = index"
    :class="[
      index === activeIndex ? 'border-sky-500 border-2' : '',
      'rounded-lg shadow-md p-4 hover:shadow-lg bg-white w-56 m-5 h-48',
    ]">
    <h2 class="card-title">{{ shapeTitle }}</h2>
    <div class="flex justify-center items-center">
      <div :style="shapeStyle"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, defineModel } from "vue";
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
</script>
<style scoped>
.card-title {
  margin: 0;
  font-size: 1.5em;
  margin-bottom: 16px;
}

.card-content {
  font-size: 1em;
}
</style>
