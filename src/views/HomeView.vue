<template>
  <div>
    <div class="flex flex-col">
      <div class="flex justify-center my-10">
        <div
          class="text-6xl bg-gradient-to-r from-blue-600 via-red-600 to-blue-400 inline-block text-transparent bg-clip-text">
          Shapes
        </div>
      </div>
      <ShapeList />
    </div>
  </div>
</template>

<script setup>
import ShapeList from "../components/Home/ShapeList.vue";
</script>
