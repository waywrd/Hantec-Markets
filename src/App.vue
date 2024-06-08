<template>
  <div>
    <BasicLayout>
      <div class="flex flex-col">
        <div class="flex justify-center mt-6">
          <div class="text-5xl">Shapes</div>
        </div>
        <ShapeList />
      </div>
    </BasicLayout>
  </div>
</template>

<script setup>
import ShapeList from "./components/ShapeList.vue";
import BasicLayout from "./components/layout/BasicLayout.vue";
</script>

<style></style>
