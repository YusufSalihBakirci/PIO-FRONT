<template>
  <div class="experience-list">
    <Breadcrumbs main="Dashboard" mains="Gamification Experience Page" title="Gamification Experiences" />
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
              <div v-for="(image, index) in exp.images" 
                   :key="index"
                   class="slide">
                <img :src="image" 
                     :alt="`${exp.name} - Görsel ${index + 1}`">
              </div>
            </div>
            <button class="slider-btn prev" @click="prevSlide(exp.id)">❮</button>
            <button class="slider-btn next" @click="nextSlide(exp.id)">❯</button>
            <div class="slider-dots">
              <span v-for="i in exp.images.length" 
                    :key="i" 
                    :class="['dot', (currentSlides[exp.id] || 0) === i-1 ? 'active' : '']"
                    @click="currentSlides[exp.id] = i-1">
              </span>
            </div>
          </div>
        </div>
        
        <div class="card-description" :class="store.layout?.class === 'dark-only' ? 'text-white' : 'text-black'">
          <p>{{ exp.description }}</p>
        </div>
        
        <div class="card-footer">
          <div class="button-group">
            <button class="preview-btn">Önizleme</button>
            <button class="create-btn">Oluştur</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { uselayoutStore } from '../../store/layout';
import Breadcrumbs from '../../layout/BreadCrumbs.vue';

const router = useRouter();
const store = uselayoutStore();
const currentSlides = ref({});

const handleEdit = (targetId) => {
  router.push({
    name: 'EditExperience',
    params: { targetId: targetId }
  });
};

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
  {
    id: 2,
    name: 'Gamification Deneyim 1',
    description: 'Gamification deneyim açıklaması',
    images: [
      'https://picsum.photos/400/300?random=301',
      'https://picsum.photos/400/300?random=302',
      'https://picsum.photos/400/300?random=303'
    ]
  },
  {
    id: 3,
    name: 'Gamification Deneyim 1',
    description: 'Gamification deneyim açıklaması',
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

<style lang="scss" scoped>
.card-image {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 15px;

  .slider {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .slider-wrapper {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease-in-out;
    }

    .slide {
      flex: 0 0 100%;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .slider-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(0, 0, 0, 0.7);
      }

      &.prev {
        left: 10px;
      }

      &.next {
        right: 10px;
      }
    }

    .slider-dots {
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
      z-index: 2;

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        transition: all 0.3s ease;

        &.active {
          background: white;
          transform: scale(1.2);
        }
      }
    }
  }
}

.card-footer {
  padding: 15px;
  
  .button-group {
    display: flex;
    gap: 10px;
    
    button {
      flex: 1;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: 500;
      font-size: 14px;
      transition: all 0.3s ease;
      cursor: pointer;
      border: none;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      
      &:active {
        transform: translateY(0);
      }
    }
    
    .preview-btn {
      background-color: var(--theme-default);
      color: white;
      
      &:hover {
        filter: brightness(90%);
      }
    }
    
    .create-btn {
      background-color: var(--theme-secondary);
      color: white;
      
      &:hover {
        filter: brightness(90%);
      }
    }
  }
}

@media (max-width: 768px) {
  .card-footer {
    .button-group {
      flex-direction: column;
      
      button {
        width: 100%;
      }
    }
  }
}
</style> 