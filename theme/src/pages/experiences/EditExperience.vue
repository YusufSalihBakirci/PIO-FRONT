<template>
  <div class="flex h-[80vh] experience-bg">
    <div class="w-full">
      <Breadcrumbs main="Dashboard" mains="Edit Experience" :title="experienceData?.name || 'Experience'" />
      
      <div class="flex" v-if="experienceData">
        <InputPanel 
          :initial-data="experienceData"
          :selected-target="experienceData.targetType"
          :selected-sub-option="experienceData.subType"
          :edit-mode="true"
          @update-preview="handlePreviewUpdate" 
        />
        <BetterTargetPreview />
      </div>
      <div v-else class="flex justify-center items-center h-full">
        <p>Loading experience data...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import InputPanel from "@/IframeTarget/components/InputPanel/InputPanel.vue";
import BetterTargetPreview from "@/IframeTarget/components/BetterTargetPreview.vue";
import Breadcrumbs from "@/layout/BreadCrumbs.vue";
import { usePreviewStore } from "@/IframeTarget/store/previewStore";
import experienceService from '@/api/ExperienceService';

const route = useRoute();
const router = useRouter();
const previewStore = usePreviewStore();
const experienceData = ref(null);

onMounted(async () => {
  try {
    const targetId = route.params.targetId;
    const response = await experienceService.getExperienceById(targetId);
    
    if (!response) {
      console.error('Experience not found');
      router.push('/experiences/list');
      return;
    }

    // Deneyim verilerini düzenleme için hazırla
    experienceData.value = {
      ...response,
      targetType: response.type, // "Inline Target", "External Target" vs.
      subType: response.subType, // "Banner", "Pop-up" vs.
      name: response.name,
      settings: response.settings, // Tüm ayarlar
      // Diğer gerekli alanlar...
    };

    // Preview'i güncelle
    previewStore.previewContent = response.settings;
    
  } catch (error) {
    console.error('Deneyim verileri yüklenirken hata oluştu:', error);
    router.push('/experiences/list');
  }
});

const handlePreviewUpdate = (content) => {
  previewStore.previewContent = content;
};
</script>

<style>
.experience-bg {
  background-color: #f8f9fd;
}
</style> 