<template>
  <div class="flex flex-col w-full">
    <div class="text-4xl mt-12 self-center">Triangle</div>
    <div class="triangle-container self-center mt-8"></div>

    <div class="w-9/12">
      <div class="text-xl mt-6 pl-4">
        Triangles are the simplest polygon, consisting of just three sides and three angles. Despite their simplicity,
        they form the basis for much of geometry and are integral to many structures and designs.
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style>
.triangle-container {
  position: relative;
  width: 350px;
  height: 200px;
  overflow: hidden;
}

.triangle-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, #ff0000, #0000ff);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
