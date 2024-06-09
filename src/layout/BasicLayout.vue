<template>
  <div class="w-full h-screen">
    <nav>
      <NavigationHeader />
    </nav>
    <div class="w-full h-full flex justify-center">
      <body>
        <slot></slot>
      </body>
    </div>
  </div>
</template>
<script setup>
import NavigationHeader from "./navigation/NavigationHeader.vue";
</script>
