<template>
  <div class="flex bg-black-red-vertical justify-start sm:gap-5 gap-3 h-14 items-end">
    <RouterLink to="/">
      <div class="text-white font-light pl-3 sm:text-xl text-md">All shapes</div>
    </RouterLink>
    <RouterLink to="/triangle">
      <div class="text-white font-light sm:text-xl text-md">Triangle</div>
    </RouterLink>
    <RouterLink to="/square">
      <div class="text-white font-light sm:text-xl text-md">Square</div>
    </RouterLink>
    <RouterLink to="/triangle-square">
      <div class="text-white font-light sm:text-xl text-md">Square & Triangle</div>
    </RouterLink>
  </div>
</template>
