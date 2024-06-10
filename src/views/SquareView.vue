<template>
  <div class="relative overflow-hidden bg-image-opacity-square">
    <div class="bg-cover bg-center flex flex-col w-full relative z-10">
      <div class="text-4xl mt-12 self-center italic font-thin">Square</div>
      <div class="square sm:self-end self-center sm:mr-24 mt-8"></div>
      <div class="sm:w-6/12 w-screen self-end">
        <div class="text-xl font-extralight mt-6 sm:pl-12 px-8">
          A square has a larger area than all other quadrilaterals with the same perimeter. The diagonals of a square
          bisect each other at 90 degrees and are perpendicular. Opposite sides of a square are parallel. The internal
          angles of a square add to 360 degrees.
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.square {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #0000ff 16%, #000000 80%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
