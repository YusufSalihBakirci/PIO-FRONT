<template>
  <div class="flex w-full justify-between h-screen">
    <InputPanel></InputPanel>
    <!-- <TargetPreview></TargetPreview> Bu component faz 2 de iframe içerisinde experience görüntülemek için kullanılacak. -->
  </div>
</template>

<script setup>
import TargetPreview from "../../IframeTarget/components/TargetPreview.vue";
import InputPanel from "../../IframeTarget/components/InputPanel/InputPanel.vue";
</script>

<style></style>
