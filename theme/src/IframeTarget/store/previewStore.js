import { defineStore } from "pinia";
import { ref } from "vue";

export const usePreviewStore = defineStore("preview", {
  state: () => ({
    previewContent: null,
    targetType: null,
  }),
  actions: {
    setPreviewContent(content) {
      this.previewContent = content;
    },
    setTargetType(type) {
      this.targetType = type;
    },
  },
});
