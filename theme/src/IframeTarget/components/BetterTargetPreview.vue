<template>
  <div class="flex flex-col w-4/6 relative p-3 gap-7" :class="{ 'enlarged-container': isEnlarged }">
    <!-- Controls Header -->
    <div class="flex justify-between block text-lg text-base font-semibold mb-1 w-full h-fit controls" :class="{ 'enlarged-controls': isEnlarged }">
      <!-- Selected View Section -->
      <span class="flex items-center gap-2 ml-2 px-3 py-1 bg-[#308e87] text-white rounded-md font-medium">
        Selected View:
        <span class="device-type bg-[#f39159] rounded-md px-2 py-0.5 min-w-[80px] text-center">
          {{ capitalize(selectedDevice) }}
        </span>
      </span>

      <!-- Device Buttons and Enlarge -->
      <div class="flex items-center gap-3">
        <span class="flex gap-2">
          <button
            class="resolution-btn bg-zinc-300 rounded-md p-1.5 w-10 h-10 flex items-center justify-center"
            :class="{
              border: true,
              'border-black': selectedDevice === btnKey,
              'border-transparent': selectedDevice !== btnKey,
            }"
            v-for="(btnValue, btnKey) in svgObject"
            :key="btnKey"
            v-html="btnValue"
            @click="selectDevice(btnKey)"></button>
        </span>

        <!-- Enlarge Button -->
        <button @click="toggleEnlarge" class="bg-[#308e87] text-white rounded-md p-1.5 w-10 h-10 flex items-center justify-center hover:bg-[#277873] transition-colors" :title="isEnlarged ? 'Shrink preview' : 'Enlarge preview'">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path v-if="!isEnlarged" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6l7-7" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3H3m0 0v6m0-6l7 7m5 11h6m0 0v-6m0 6L14 14" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Preview Area -->
    <div class="preview-container bg-gray-100 rounded-lg flex-1 transition-all duration-300" :class="{ enlarged: isEnlarged }">
      <div
        v-if="deviceSizes[selectedDevice]"
        class="preview-frame"
        :style="{
          width: deviceSizes[selectedDevice].width + 'px',
          height: deviceSizes[selectedDevice].height + 'px',
          transform: `translate(-50%, -50%) scale(${isEnlarged ? deviceSizes[selectedDevice].scale * 1.5 : deviceSizes[selectedDevice].scale})`,
        }">
        <div class="preview-content" v-html="previewContent"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import svgObject from "../components/AuxJS/SvgVectors";
import { usePreviewStore } from "../store/previewStore";
import EcommerceTemplate from "../components/AuxJS/EcommerceTemplate";

const previewStore = usePreviewStore();
const previewContent = ref(EcommerceTemplate.generateTemplate());
const isEnlarged = ref(false);

const selectedDevice = ref("desktop");
const deviceSizes = ref({
  desktop: { width: 1920, height: 1080, scale: 0.45 },
  tablet: { width: 810, height: 1080, scale: 0.6 },
  mobile: { width: 390, height: 844, scale: 0.8 },
});

const selectDevice = (device) => {
  if (deviceSizes.value[device]) {
    selectedDevice.value = device;
  } else {
    console.warn(`Invalid device type: ${device}`);
    selectedDevice.value = "desktop";
  }
};

const toggleEnlarge = () => {
  isEnlarged.value = !isEnlarged.value;
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const processPreviewContent = (content) => {
  if (!content) return EcommerceTemplate.generateTemplate();

  const template = EcommerceTemplate.generateTemplate();
  const parser = new DOMParser();
  const doc = parser.parseFromString(template, "text/html");

  // Get the target position details from the store
  const position = previewStore.targetPosition;
  const relativePosition = previewStore.relativePosition;

  // Find the reference element using the query selector
  const referenceElement = doc.querySelector(position?.selector || "header");

  if (referenceElement && content) {
    // Create a container for the banner
    const bannerContainer = parser.parseFromString(content, "text/html").body.firstChild;

    // Insert the banner based on relative position
    switch (relativePosition) {
      case "BEFORE":
        referenceElement.parentNode.insertBefore(bannerContainer, referenceElement);
        break;
      case "AFTER":
        referenceElement.parentNode.insertBefore(bannerContainer, referenceElement.nextSibling);
        break;
      case "INSIDE_BEGINNING":
        referenceElement.insertBefore(bannerContainer, referenceElement.firstChild);
        break;
      case "INSIDE_END":
        referenceElement.appendChild(bannerContainer);
        break;
      default:
        // Default to after header if no position specified
        const header = doc.querySelector("header");
        if (header) {
          header.parentNode.insertBefore(bannerContainer, header.nextSibling);
        }
    }
  }

  return doc.documentElement.outerHTML;
};

// Update the watch handler
watch(
  () => previewStore.previewContent,
  (newContent) => {
    previewContent.value = processPreviewContent(newContent);
  }
);

onMounted(() => {
  previewContent.value = processPreviewContent(previewStore.previewContent);
});
</script>

<style scoped>
.enlarged-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: white;
}

.controls {
  position: relative;
}

.enlarged-controls {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1002;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.preview-container {
  position: relative;
  height: calc(100vh - 150px);
  overflow: hidden;
}

.preview-container.enlarged {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  margin: 0;
  padding: 20px;
}

.preview-frame {
  position: absolute;
  left: 50%;
  top: 50%;
  background: white;
  overflow: auto;
  border: 1px solid #ddd;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.preview-content {
  height: 100%;
  overflow-y: auto;
}

.resolution-btn {
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-center: center;
}

.resolution-btn :deep(svg) {
  width: 20px;
  height: 20px;
}

.resolution-btn:hover {
  background-color: #ddd;
}

.resolution-btn.border-black {
  background-color: #ddd;
}

/* Custom scrollbar for preview content */
.preview-content::-webkit-scrollbar {
  width: 8px;
}

.preview-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.preview-content::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.preview-content::-webkit-scrollbar-thumb:hover {
  background: #555;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
