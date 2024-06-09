<template>
  <div
    :class="[
      isCreateShapeModalOpen ? 'block' : 'hidden',
      'fixed left-250 top-50 bg-opacity-95 sm:w-2/4 sm:h-full w-6/8 h-full bg-white color-black rounded - lg shadow - 500 z - 50 border - 2',
    ]">
    <div class="flex justify-between p-2">
      <div class="text-xl text-black mt-2">Create shape</div>
      <div
        @click="closeMdal"
        class="cursor-pointer text-xl relative top-2">
        X
      </div>
    </div>
    <div class="flex h-full">
      <div class="flex h-full relative">
        <div class="p-4">
          <form>
            <div class="mb-4">
              <label
                for="height"
                class="block text-gray-700 text-sm font-bold mb-2"
                >Height</label
              >
              <input
                v-model="height"
                max="300"
                type="number"
                id="height"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
              <label
                for="width"
                class="block text-gray-700 text-sm font-bold mb-2"
                >Width</label
              >
              <input
                v-model="width"
                max="300"
                type="number"
                id="width"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
              <label
                for="top"
                class="block text-gray-700 text-sm font-bold mb-2"
                >Top Border</label
              >
              <input
                v-model="top"
                type="text"
                id="top"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div class="mb-4">
              <label
                for="bottom"
                class="block text-gray-700 text-sm font-bold mb-2"
                >Bottom Border</label
              >
              <input
                v-model="bottom"
                max="300"
                type="text"
                id="bottom"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
              <label
                for="left"
                class="block text-gray-700 text-sm font-bold mb-2"
                >Left Border</label
              >
              <input
                v-model="left"
                max="300"
                type="text"
                id="left"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
              <label
                for="right"
                class="block text-gray-700 text-sm font-bold mb-2"
                >Right Border</label
              >
              <input
                v-model="right"
                max="300"
                type="text"
                id="right"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div class="mb-4">
              <label
                for="background"
                class="block text-gray-700 text-sm font-bold mb-2">
                Background
              </label>
              <input
                v-model="background"
                type="text"
                id="background"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
              <label
                for="borderRadius"
                class="block text-gray-700 text-sm font-bold mb-2">
                Border radius
              </label>
              <input
                v-model="borderRadius"
                max="360"
                type="number"
                id="borderRadius"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="flex items-center justify-center">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex w-full justify-center">
        <div class="flex flex-col w-full items-center">
          <div class="text-xl">Shape preview</div>
          <div
            class="self-center mt-8"
            :style="{
              height: height + 'px',
              width: width + 'px',
              borderLeft: `${left}px solid ${leftColor ? leftColor : 'black'}`,
              borderRight: `${right}px solid ${rightColor ? rightColor : 'black'}`,
              borderTop: `${top}px solid ${topColor ? topColor : 'black'}`,
              borderBottom: `${bottom}px solid ${bottomColor ? bottomColor : 'black'}`,
              background: background ? background : 'green',
              borderRadius: borderRadius + 'px',
            }"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineModel, ref } from "vue";

const isCreateShapeModalOpen = defineModel();

const height = ref(120);
const width = ref(120);
const top = ref();
const topColor = ref();
const bottomColor = ref();
const leftColor = ref();
const rightColor = ref();
const bottom = ref();
const left = ref();
const right = ref();
const background = ref(null);
const borderRadius = ref();

const closeMdal = () => {
  height.value = null;
  width.value = null;
  top.value = null;
  bottom.value = null;
  left.value = null;
  right.value = null;
  background.value = "";
  isCreateShapeModalOpen.value = false;
};
</script>
