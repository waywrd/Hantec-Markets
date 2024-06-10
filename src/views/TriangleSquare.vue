<template>
  <div class="flex flex-col h-full items-center mb-12">
    <div><SquareView /></div>
    <div class="mt-12"><TriangleView :isCombined="true" /></div>
  </div>
</template>
<script setup>
import TriangleView from "./TriangleView";
import SquareView from "./SquareView.vue";
</script>
