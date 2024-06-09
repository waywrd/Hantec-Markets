<template>
  <div class="flex flex-col w-full">
    <div class="text-4xl mt-12 self-center">Square</div>
    <div class="square self-center mt-8"></div>
    <div class="sm:w-9/12 w-screen">
      <div class="text-xl mt-6 pl-12">
        A square has a larger area than all other quadrilaterals with the same perimeter. The diagonals of a square
        bisect each other at 90 degrees and are perpendicular. Opposite sides of a square are parallel. The internal
        angles of a square add to 360 degrees.
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
