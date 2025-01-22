<script setup>
// import TargetPreview from './components/TargetPreview.vue'
// import BetterTargetPreview from "./components/BetterTargetPreview.vue";
// import InputPanel from "./components/InputPanel/InputPanel.vue";
import { ref, onMounted, onUnmounted } from "vue";

const isCodeEditorSelected = ref(false);
const previewContent = ref("");
const showPreview = ref(false);

// Function to handle code editor selection state
const handleCodeEditorSelection = (isSelected) => {
  isCodeEditorSelected.value = isSelected;
};

// Function to update preview content
const updatePreview = (content) => {
  previewContent.value = content;
  showPreview.value = true;
};

// Set up and clean up the global update method
onMounted(() => {
  window.updatePreviewContent = updatePreview;
});

onUnmounted(() => {
  delete window.updatePreviewContent;
});
</script>

<template>
  <div class="flex w-full justify-between h-screen bg-gray-100">
    <div class="w-1/2 border-r border-gray-300">
      <InputPanel @code-editor-selected="handleCodeEditorSelection"></InputPanel>
    </div>
    <div class="w-1/2 bg-white">
      <BetterTargetPreview v-if="showPreview" :isCodeEditorSelected="isCodeEditorSelected" :previewContent="previewContent"></BetterTargetPreview>
    </div>
  </div>
</template>

<style>
/* Ensure full height */
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
