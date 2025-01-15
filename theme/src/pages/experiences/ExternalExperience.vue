<template>
  <div class="experience-list">
    <Breadcrumbs main="Dashboard" mains="External Experience Page" title="External Experiences" />
    <div class="experience-grid">
      <div v-for="exp in experiences" :key="exp.id" class="experience-card">
        <div class="card-header">
          <h3>{{ exp.name }}</h3>
          <button class="option-btn" :class="store.layout?.class === 'dark-only' ? 'text-white' : 'text-black'">⋮</button>
        </div>
        
        <div class="card-image">
          <div class="slider">
            <div class="slider-wrapper" 
                 :style="{ transform: `translateX(-${currentSlides[exp.id] * 100}%)` }">
              <img v-for="(image, index) in exp.images" 
                   :key="index"
                   :src="image" 
                   alt="Deneyim Görseli">
            </div>
            <button class="slider-btn prev" @click="prevSlide(exp.id)">❮</button>
            <button class="slider-btn next" @click="nextSlide(exp.id)">❯</button>
            <div class="slider-dots">
              <span v-for="i in 3" :key="i" 
                    :class="['dot', (currentSlides[exp.id] || 0) === i-1 ? 'active' : '']">
              </span>
            </div>
          </div>
        </div>
        
        <div class="card-description" :class="store.layout?.class === 'dark-only' ? 'text-white' : 'text-black'">
          <p>{{ exp.description }}</p>
        </div>
        
        <div class="card-footer">
          <div class="button-group">
            <button class="preview-btn active">Önizleme</button>
            <button class="create-btn active">Oluştur</button>
          </div>
        </div>
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
  {
    id: 2,
    name: 'External Deneyim 2',
    description: 'External deneyim açıklaması',
    images: [
      'https://picsum.photos/400/300?random=201',
      'https://picsum.photos/400/300?random=202',
      'https://picsum.photos/400/300?random=203'
    ]
  },
  {
    id: 3,
    name: 'External Deneyim 3',
    description: 'External deneyim açıklaması',
    images: [
      'https://picsum.photos/400/300?random=301',
      'https://picsum.photos/400/300?random=302',
      'https://picsum.photos/400/300?random=303'
    ]
  },
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