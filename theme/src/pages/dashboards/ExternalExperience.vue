<template>
  <div class="experience-list">
    <Breadcrumbs main="Dashboard" mains="External Experience Page" title="External Experiences" />
    <div class="experience-grid">
      <div v-for="exp in experiences" :key="exp.id" class="experience-card">
        <!-- ListExperience.vue ile aynı template yapısı -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { uselayoutStore } from '@/store/layout';

const store = uselayoutStore();
const currentSlides = ref({});

const experiences = ref([
  {
    id: 1,
    name: 'External Deneyim 1',
    description: 'External deneyim açıklaması',
    images: [
      'https://picsum.photos/400/300?random=201',
      'https://picsum.photos/400/300?random=202',
      'https://picsum.photos/400/300?random=203'
    ]
  },
  // Diğer deneyimler...
]);

const nextSlide = (expId) => {
  if (!currentSlides.value[expId]) currentSlides.value[expId] = 0;
  currentSlides.value[expId] = (currentSlides.value[expId] + 1) % 3;
};

const prevSlide = (expId) => {
  if (!currentSlides.value[expId]) currentSlides.value[expId] = 0;
  currentSlides.value[expId] = (currentSlides.value[expId] - 1 + 3) % 3;
};
</script>

<style lang="scss">
// ListExperience.vue'dan stil kodlarını aynen kopyalayın
</style> 