import { defineStore } from "pinia";
import { ref } from "vue";

export const usePreviewStore = defineStore("preview", () => {
  const previewContent = ref("");

  function updatePreview(content) {
    previewContent.value = content;
  }

  return {
    previewContent,
    updatePreview,
  };
});
