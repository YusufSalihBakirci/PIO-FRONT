<template>
  <div class="flex flex-col w-full relative p-3 gap-7">
    <div class="flex justify-between block text-lg text-base font-semibold mb-1 w-full h-fit">
      <span class="flex items-center w-96 gap-2 justify-between ml-2 px-2 py-1 bg-blue-600 text-white rounded-md font-medium">
        Selected View:
        <span class="device-type bg-zinc-600 rounded-md px-1 py-1 w-25 text-center">
          {{ capitalize(selectedResolution.deviceType) }}
        </span>
      </span>
      <span class="flex">
        <button
          class="resolution-btn bg-zinc-300 rounded-md px-1 py-1"
          :class="{
            'border-2': true, // Always apply border
            'border-black': selectedResolution.deviceType === btnKey, // Apply black border to the selected button
          }"
          v-for="(btnValue, btnKey) in svgObject"
          :key="btnKey"
          v-html="btnValue"
          @click="updateResolution(btnKey)"></button>
      </span>
    </div>

    <!-- Iframe Container -->
    <iframe id="piovare-frame" ref="siteFrame" :src="iframeContent" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-same-origin allow-scripts"></iframe>
  </div>
</template>

<script>
import svgObject from "./AuxJS/SvgVectors.js";

import { useIframeStore } from "../iframeStore";

export default {
  data() {
    return {
      selectedResolution: {
        deviceType: "desktop", // Default to "desktop"
        width: 1920,
        height: 1080,
        fillRatio: 0.45, // Default fillRatio
      },
      breakPoints: {
        desktop: { width: 1920, height: 1080, fillRatio: 0.45 },
        tablet: { width: 810, height: 1080, fillRatio: 0.6 },
        mobile: { width: 390, height: 844, fillRatio: 0.8 },
      },
      iframeContent: "http://127.0.0.1:5500/FoodMart-1.0.0/index.html",
    };
  },

  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },

    updateResolution(deviceType) {
      const formattedDeviceType = deviceType.toLowerCase(); // Device types are already lowercase in svgObject

      // Check if device type is valid
      if (this.breakPoints[formattedDeviceType]) {
        const selected = this.breakPoints[formattedDeviceType];
        this.selectedResolution = {
          deviceType: formattedDeviceType,
          width: selected.width,
          height: selected.height,
          fillRatio: selected.fillRatio, // Update fillRatio as well
        };
        this.setIframeStyles(selected);

        // Reload iframe content after the device type changes
        this.loadJSContent();
      } else {
        console.error("Invalid device type:", formattedDeviceType);
      }
    },

    setIframeStyles(selected) {
      const iframe = this.$refs.siteFrame;

      // Set width based on selected resolution
      iframe.style.width = `${selected.width}px`;

      // Set height based on selected resolution
      iframe.style.height = `${selected.height}px`;

      // Apply scaling based on the fillRatio
      iframe.style.transform = `translate(-50%, -50%) scale(${selected.fillRatio})`;
    },

    async loadJSContent() {
      try {
        console.log("Iframe source set to:", this.iframeContent);

        // Update the iframe content in the Pinia store
        const iframeStore = useIframeStore(); // Access the Pinia store
        iframeStore.setIframeContent(this.iframeContent); // Update content in store
      } catch (error) {
        console.error("Error loading content:", error);
      }
    },
  },

  mounted() {
    this.loadJSContent();
    // Set the initial iframe styles based on the default selected resolution
    this.setIframeStyles(this.selectedResolution);
  },

  setup() {
    return { svgObject };
  },
};
</script>

<style scoped>
/* Container for iframe */
.iframe-container {
  position: relative;
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

/* Iframe styling */
#piovare-frame {
  border: 5px solid lightgray;
  border-radius: 5px;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.45);
  transform-origin: center;
}

/* Button styling */
.resolution-btn {
  width: 40px; /* Adjust width to fit the icons better */
  height: 40px; /* Adjust height to fit the icons better */
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px; /* Optional rounded corners */
  transition: background-color 0.2s ease;
}

/* SVG scaling inside the button */
.resolution-btn svg {
  width: 20px; /* Control the size of the SVG inside the button */
  height: 20px; /* Control the size of the SVG inside the button */
}

/* Device type text styling */
.device-type {
  font-weight: bold;
  margin-right: 5px;
}
</style>
