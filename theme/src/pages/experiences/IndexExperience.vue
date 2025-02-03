<template>
  <div class="flex h-[80vh] bg-[#f8f9fd]">
    <template v-if="selectedOption === 'Customize'">
      <CodeEditor class="w-full" @run-code="handleCodeRun" />
    </template>

    <template v-else>
      <InputPanel ref="inputPanel" @option-selected="handleOptionSelection" @update-preview="handlePreviewUpdate" />
      <BetterTargetPreview ref="preview" />
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeEditor from "@/IframeTarget/components/InputPanel/CodeEditor.vue";
import InputPanel from "@/IframeTarget/components/InputPanel/InputPanel.vue";
import BetterTargetPreview from "@/IframeTarget/components/BetterTargetPreview.vue";
import { usePreviewStore } from "@/IframeTarget/store/previewStore";

const selectedOption = ref("");
const inputPanel = ref(null);
const preview = ref(null);
const previewStore = usePreviewStore();

const handleOptionSelection = (option) => {
  selectedOption.value = option;
};

const handlePreviewUpdate = (content) => {
  previewStore.setPreviewContent(content);
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
