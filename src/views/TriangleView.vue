<template>
  <div class="relative overflow-hidden bg-image-opacity">
    <div class="bg-cover bg-center flex flex-col w-full h-screen relative z-10">
      <div class="text-4xl mt-12 self-center italic font-thin">Triangle</div>
      <div class="triangle-container self-start mt-8"></div>
      <div class="sm:w-4/12 w-screen">
        <div class="text-xl font-extralight mt-6 pl-12">
          Triangles are the simplest polygon, consisting of just three sides and three angles. Despite their simplicity,
          they form the basis for much of geometry and are integral to many structures and designs.
        </div>
      </div>
      <div class="triangle-container2 self-end mt-8"></div>
      <div class="sm:w-4/12 w-screen self-end">
        <div class="text-xl font-extralight mt-6 pl-12">
          The Pythagorean theorem has more than 400 known proofs, including geometric proofs, algebraic proofs, and even
          proofs using calculus. One famous proof was given by U.S. President James A. Garfield.
        </div>
      </div>
      <!-- <div class="self-end">Another div</div> -->
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({ isCombined: Boolean, a: String });
</script>
<style>
.triangle-container {
  position: relative;
  width: 350px;
  height: 200px;
  overflow: hidden;
  right: 120px;
  @media (max-width: 400px) {
    right: 0;
  }
}

.triangle-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: linear-gradient(360deg, #0000ff, #ff0000);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.triangle-container2 {
  position: relative;
  width: 500px;
  height: 200px;
  overflow: hidden;
  right: 120px;
  @media (max-width: 400px) {
    right: 0;
  }
}

.triangle-container2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, #05022b, #4f02b4);
  clip-path: polygon(50% 0%, 100% 0%, 0% 100%);
}
</style>
