<template>
  <div class="flex flex-col w-4/6 relative p-3 gap-7">
    <!-- Device Type Selector -->
    <div class="flex justify-between block text-lg text-base font-semibold mb-1 w-full h-fit">
      <span class="flex items-center w-96 gap-2 justify-between ml-2 px-2 py-1 bg-[#308e87] text-white rounded-md font-medium">
        Selected View:
        <span class="device-type bg-[#f39159] rounded-md px-1 py-1 w-25 text-center">
          {{ capitalize(selectedDevice) }}
        </span>
      </span>
      <span class="flex">
        <button
          class="resolution-btn bg-zinc-300 rounded-md px-1 py-1"
          :class="{
            'border-2': true,
            'border-black': selectedDevice === btnKey,
          }"
          v-for="(btnValue, btnKey) in svgObject"
          :key="btnKey"
          v-html="btnValue"
          @click="selectDevice(btnKey)"></button>
      </span>
    </div>

    <!-- Preview Area -->
    <div class="preview-container bg-gray-100 rounded-lg flex-1">
      <div
        class="preview-frame"
        :style="{
          width: deviceSizes[selectedDevice].width + 'px',
          height: deviceSizes[selectedDevice].height + 'px',
          transform: `translate(-50%, -50%) scale(${deviceSizes[selectedDevice].scale})`,
        }">
        <div class="preview-content" v-html="previewStore.previewContent"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import svgObject from "../components/AuxJS/SvgVectors";
import { usePreviewStore } from "../store/previewStore";

const previewStore = usePreviewStore();

console.log(previewStore.previewContent);
const props = defineProps({
  previewContent: {
    type: String,
    default: "",
  },
});

const selectedDevice = ref("Desktop");
const deviceSizes = ref({
  Desktop: { width: 1920, height: 1080, scale: 0.45 },
  Tablet: { width: 810, height: 1080, scale: 0.6 },
  Mobile: { width: 390, height: 844, scale: 0.8 },
});

const selectDevice = (device) => {
  selectedDevice.value = device;
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
</script>

<style scoped>
.preview-container {
  position: relative;
  height: calc(100vh - 150px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.preview-frame {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  transform-origin: center;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.preview-content {
  width: 100%;
  height: 100%;
  position: relative;
}

.resolution-btn {
  width: 40px;
  height: 40px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.resolution-btn svg {
  width: 20px;
  height: 20px;
}

.device-type {
  font-weight: bold;
  margin-right: 5px;
}
</style>
