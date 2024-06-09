<template>
  <div class="w-full h-screen">
    <NavigationHeader />
    <div class="w-full h-full flex justify-center"><slot></slot></div>
  </div>
</template>
<script setup>
import NavigationHeader from "./navigation/NavigationHeader.vue";
</script>
