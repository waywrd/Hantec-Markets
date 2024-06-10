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
      <div class="square2 sm:self-start self-center sm:ml-24 mt-8"></div>
      <div class="sm:w-6/12 w-screen self-start">
        <div class="text-xl font-extralight mt-6 sm:pl-12 px-8">
          The diagonal of a square forms the hypotenuse of two right-angled triangles. If the side length of the square
          is 𝑎 a, then the length of the diagonal is 𝑎 2 a 2 . This relationship is a direct application of the
          Pythagorean theorem.
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.square {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #774597, #96a5af);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.square2 {
  width: 250px;
  height: 250px;
  background: linear-gradient(180deg, #9fbcc7, #96a5af);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
