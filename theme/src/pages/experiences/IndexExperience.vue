<template>
  <div class="flex h-screen bg-[#f8f9fd]">
    <template v-if="selectedOption === 'Customize'">
      <CodeEditor class="w-full" @run-code="handleCodeRun" />
    </template>

    <template v-else>
      <InputPanel @option-selected="handleOptionSelection" @update-preview="handlePreviewUpdate" />
      <BetterTargetPreview />
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeEditor from "@/IframeTarget/components/InputPanel/CodeEditor.vue";
import InputPanel from "@/IframeTarget/components/InputPanel/InputPanel.vue";
import BetterTargetPreview from "@/IframeTarget/components/BetterTargetPreview.vue";
import { usePreviewStore } from "@/IframeTarget/store/previewStore";

const previewStore = usePreviewStore();
const selectedOption = ref("");

const handleOptionSelection = (option) => {
  console.log("Option selected:", option);
  selectedOption.value = option;
};

const handlePreviewUpdate = (content) => {
  console.log("Updating preview store with:", content);
  previewStore.previewContent = content;
};

const handleCodeRun = (code) => {
  console.log("Custom Code:", code);
};
</script>

<style scoped>
.bg-[#f8f9fd] {
  background-color: #f8f9fd;
}
</style>
