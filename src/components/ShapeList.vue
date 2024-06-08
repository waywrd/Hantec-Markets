<template>
  <div class="flex justify-center mt-8">
    <div class="flex flex-wrap sm:justify-start justify-center w-11/12">
      <div
        v-for="([key, value], index) in Object.entries(shapes)"
        :key="key">
        <ShapeCard
          :shape="value"
          :index="index"
          v-model="activeIndex" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import shapes from "../utils/Shapes.js";
import ShapeCard from "./ShapeCard.vue";

const activeIndex = ref(0);

onMounted(() => {
  console.log(Object.entries(shapes));
});
</script>
