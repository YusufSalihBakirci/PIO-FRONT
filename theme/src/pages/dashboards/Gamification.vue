<template>
  <div class="experience-list">
    <Breadcrumbs main="Dashboard" mains="Gamification Page" title="Gamification" />
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
    name: 'Gamification Deneyim 1',
    description: 'Gamification deneyim açıklaması',
    images: [
      'https://picsum.photos/400/300?random=301',
      'https://picsum.photos/400/300?random=302',
      'https://picsum.photos/400/300?random=303'
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