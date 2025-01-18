<template>
  <div class="flex flex-col w-full relative p-3 gap-7">
    <div class="flex justify-between block text-lg text-base font-semibold mb-1 w-full h-fit">
      <span class="flex items-center w-fit gap-2 justify-between ml-2 px-2 py-1 bg-[#308e87] text-white rounded-md font-medium">
        Selected View:
        <span class="device-type bg-[#f39159] rounded-md px-1 py-1 w-fit text-center">
          {{ capitalize(selectedResolution.deviceType) }}
        </span>
      </span>
      <span class="flex">
        <button
          class="resolution-btn bg-zinc-300 rounded-md px-1 py-1"
          :class="{
            'border-2': true,
            'border-black': selectedResolution.deviceType === btnKey,
          }"
          v-for="(btnValue, btnKey) in svgObject"
          :key="btnKey"
          v-html="btnValue"
          @click="updateResolution(btnKey)"></button>
      </span>
    </div>

    <!-- Iframe Container -->
    <div class="relative w-full h-full min-w-[920px]">
      <iframe id="piovare-frame" ref="siteFrame" :src="currentIframeUrl" @load="onIframeLoad" :style="iframeStyles" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-same-origin allow-scripts"></iframe>

      <!-- Preview Iframe -->
      <iframe v-if="showPreviewFrame" id="preview-frame" ref="previewFrame" :srcdoc="previewContent" :style="iframeStyles" class="absolute top-0 left-0" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-same-origin allow-scripts"></iframe>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from "vue";
import svgObject from "./AuxJS/SvgVectors.js";
import { useIframeUrl, useIframeContent } from "../iframeStore";

// Define breakpoints outside component
const breakPoints = {
  desktop: { width: 1920, height: 1080, fillRatio: 0.45 },
  tablet: { width: 810, height: 1080, fillRatio: 0.6 },
  mobile: { width: 390, height: 844, fillRatio: 0.8 },
};

export default {
  setup() {
    const iframeStore = useIframeUrl();
    const currentIframeUrl = computed(() => iframeStore.getIframeUrl());

    return {
      currentIframeUrl,
      svgObject,
      breakPoints, // Make breakPoints available in template
    };
  },

  data() {
    return {
      showPreviewFrame: false,
      previewContent: "",
      selectedResolution: {
        deviceType: "desktop",
        ...breakPoints.desktop, // Use breakPoints here
      },
      iframeStyles: {
        width: `${breakPoints.desktop.width}px`, // Use breakPoints here
        height: `${breakPoints.desktop.height}px`,
        border: "5px solid lightgray",
        borderRadius: "5px",
        background: "white",
        overflow: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) scale(${breakPoints.desktop.fillRatio})`,
        transformOrigin: "center",
      },
    };
  },

  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },

    updateResolution(deviceType) {
      if (!breakPoints[deviceType]) {
        console.error("Invalid device type:", deviceType);
        return;
      }

      this.selectedResolution = {
        deviceType,
        ...breakPoints[deviceType],
      };

      this.iframeStyles = {
        ...this.iframeStyles,
        width: `${this.selectedResolution.width}px`,
        height: `${this.selectedResolution.height}px`,
        transform: `translate(-50%, -50%) scale(${this.selectedResolution.fillRatio})`,
      };
    },

    async loadJSContent() {
      try {
        console.log("Iframe source set to:", this.iframeUrl);

        // Fetch HTML content from the iframe URL
        const response = await fetch(this.iframeUrl);
        const html = await response.text();

        // Store the fetched HTML content
        this.iframeContent = html;

        // Update the iframe content in the Pinia store (if needed)
        const iframeStore = useIframeUrl(); // Access the Pinia store
        iframeStore.setIframeContentUrl(this.iframeUrl); // Update content in store
      } catch (error) {
        console.error("Failed to load iframe content:", error);
      }
    },

    showHighlight(selectedId) {
      const iframeContentStore = useIframeContent();
      const previewElement = iframeContentStore.previewElement.value;

      if (!previewElement) {
        console.error("No preview element available");
        return;
      }

      // Show the preview container
      this.showPreview = true;
      this.previewContent = previewElement.innerHTML;

      // Use nextTick to ensure the content is rendered
      this.$nextTick(() => {
        // Remove existing highlights
        const existingHighlight = document.querySelector(".element-highlight");
        if (existingHighlight) {
          existingHighlight.classList.remove("element-highlight");
        }

        // Find and highlight the selected element
        const selectedElement = document.querySelector(`#preview-container ${selectedId}`);
        if (selectedElement) {
          selectedElement.classList.add("element-highlight");
          selectedElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
          });
        }
      });
    },

    hidePreview() {
      this.showPreview = false;
      this.previewContent = "";
    },

    async onIframeLoad() {
      console.log("Iframe load event triggered");
      const iframeStore = useIframeUrl();
      const iframe = document.getElementById("piovare-frame");

      if (iframe && iframe.contentWindow && iframe.contentDocument) {
        try {
          // Wait for content to be fully loaded
          if (iframe.contentDocument.readyState !== "complete") {
            await new Promise((resolve) => {
              iframe.contentWindow.addEventListener("load", resolve, { once: true });
            });
          }

          // Store the iframe document for later use
          iframeStore.setContent(iframe.contentDocument);
          iframeStore.setIframeLoaded(true);
          console.log("Main iframe content stored");
        } catch (error) {
          console.error("Error capturing iframe content:", error);
        }
      }
    },

    createPreviewFrame() {
      const iframeStore = useIframeUrl();
      const mainDocument = iframeStore.content.value;
      const previewFrame = document.getElementById("preview-frame");

      if (mainDocument && previewFrame) {
        // Copy styles first
        const styles = mainDocument.getElementsByTagName("style");
        const links = mainDocument.getElementsByTagName("link");

        previewFrame.contentDocument.head.innerHTML = "";
        previewFrame.contentDocument.body.innerHTML = "";

        // Copy all style and link elements
        [...styles, ...links].forEach((element) => {
          previewFrame.contentDocument.head.appendChild(element.cloneNode(true));
        });

        // Copy body content
        previewFrame.contentDocument.body.innerHTML = mainDocument.body.innerHTML;

        // Copy any inline styles from body
        previewFrame.contentDocument.body.setAttribute("style", mainDocument.body.getAttribute("style") || "");

        console.log("Preview frame content copied");
        window.dispatchEvent(new CustomEvent("previewFrameReady"));
      }
    },

    hidePreviewFrame() {
      this.showPreviewFrame = false;
    },

    showPreviewFrame() {
      this.showPreviewFrame = true;
    },
  },

  mounted() {
    const iframeStore = useIframeUrl();
    if (!iframeStore.getIframeUrl()) {
      iframeStore.setIframeContentUrl("http://127.0.0.1:3000/");
    }

    // Listen for preview control events
    window.addEventListener("showPreview", () => {
      this.showPreviewFrame = true;
      this.$nextTick(() => {
        this.createPreviewFrame();
      });
    });

    window.addEventListener("hidePreview", () => {
      this.showPreviewFrame = false;
    });

    // Initialize with desktop resolution
    this.updateResolution("desktop");
  },

  unmounted() {
    window.removeEventListener("showPreview");
    window.removeEventListener("hidePreview");
    const iframeStore = useIframeUrl();
    iframeStore.setIframeLoaded(false);
  },

  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener("showHighlight");
    document.removeEventListener("click");
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

.element-highlight {
  position: relative !important;
  background-color: rgba(0, 123, 255, 0.3) !important;
  border: 2px solid rgba(0, 123, 255, 0.7) !important;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5) !important;
  transition: all 0.3s ease !important;
}

#preview-container {
  pointer-events: auto;
}

.element-highlight-container {
  width: 100%;
  height: 100%;
}

#preview-frame {
  border: 5px solid lightgray;
  border-radius: 5px;
  background: white;
  z-index: 10;
}

.relative {
  min-height: 600px; /* Add minimum height to container */
}
</style>
