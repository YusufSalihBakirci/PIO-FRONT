<template>
  <div class="experience-list">
    <Breadcrumbs main="Dashboard" mains="Experience List Page" title="Experiences" />
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
            <button  class="preview-btn active ">Önizleme</button>
            <button class="create-btn active ">Oluştur</button>
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
    name: 'Deneyim 1',
    description: 'Kürt kurdu tanır ama biz bunları tanımıyoruz.',
    images: [
      'https://picsum.photos/400/300?random=1',
      'https://picsum.photos/400/300?random=2',
      'https://picsum.photos/400/300?random=3'
    ]
  },
  {
    id: 2,
    name: 'Deneyim 2',
    description: 'Bu deneyim hakkında kısa açıklama',
    images: [
      'https://picsum.photos/400/300?random=4',
      'https://picsum.photos/400/300?random=5',
      'https://picsum.photos/400/300?random=6'
    ]
  },
  {
    id: 3,
    name: 'Deneyim 3',
    description: 'Bu deneyim hakkında kısa açıklama',
    images: [
      'https://picsum.photos/400/300?random=7',
      'https://picsum.photos/400/300?random=8',
      'https://picsum.photos/400/300?random=9'
    ]
  },
  {
    id: 4,
    name: 'Deneyim 4',
    description: 'Bu deneyim hakkında kısa açıklama',
    images: [
      'https://picsum.photos/400/300?random=10',
      'https://picsum.photos/400/300?random=11',
      'https://picsum.photos/400/300?random=12'
    ]
  },
  {
    id: 5,
    name: 'Deneyim 5',
    description: 'Bu deneyim hakkında kısa açıklama',
    images: [
      'https://picsum.photos/400/300?random=13',
      'https://picsum.photos/400/300?random=14',
      'https://picsum.photos/400/300?random=15'
    ]
  },
  {
    id: 6,
    name: 'Deneyim 6',
    description: 'Bu deneyim hakkında kısa açıklama',
    images: [
      'https://picsum.photos/400/300?random=16',
      'https://picsum.photos/400/300?random=17',
      'https://picsum.photos/400/300?random=18'
    ]
  },
  {
    id: 7,
    name: 'Deneyim 7',
    description: 'Bu deneyim hakkında kısa açıklama',
    images: [
      'https://picsum.photos/400/300?random=19',
      'https://picsum.photos/400/300?random=20',
      'https://picsum.photos/400/300?random=21'
    ]
  },
  {
    id: 8,
    name: 'Deneyim 8',
    description: 'Bu deneyim hakkında kısa açıklama',
    images: [
      'https://picsum.photos/400/300?random=22',
      'https://picsum.photos/400/300?random=23',
      'https://picsum.photos/400/300?random=24'
    ]
  },
  {
    id: 9,
    name: 'Deneyim 9',
    description: 'Bu deneyim hakkında kısa açıklama',
    images: [
      'https://picsum.photos/400/300?random=25',
      'https://picsum.photos/400/300?random=26',
      'https://picsum.photos/400/300?random=27'
    ]
  },
  {
    id: 10,
    name: 'Deneyim 10',
    description: 'Bu deneyim hakkında kısa açıklama',
    images: [
      'https://picsum.photos/400/300?random=28',
      'https://picsum.photos/400/300?random=29',
      'https://picsum.photos/400/300?random=30'
    ]
  },
  {
    id: 11,
    name: 'Deneyim 11',
    description: 'Bu deneyim hakkında kısa açıklama',
    images: [
      'https://picsum.photos/400/300?random=31',
      'https://picsum.photos/400/300?random=32',
      'https://picsum.photos/400/300?random=33'
    ]
  },
  {
    id: 12,
    name: 'Deneyim 12',
    description: 'Bu deneyim hakkında kısa açıklama',
    images: [
      'https://picsum.photos/400/300?random=34',
      'https://picsum.photos/400/300?random=35',
      'https://picsum.photos/400/300?random=36'
    ]
  }
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
.experience-list {
  max-width: 1250px; 
  width: 100%;
  margin: 0 auto; 
  
  .experience-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .experience-card {
    flex: 0 0 calc(25% - 15px);
    border-radius: 8px;
    overflow: hidden;
    
    :global(.dark-only) & {
      background-color: #1E1E1E;
    }
    
    .card-header {
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      h3 {
        margin: 0;
        font-size: 16px;
      }
      
      .option-btn {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 20px;
      }
    }
    
    .card-image {
      position: relative;
      height: 200px;
      
      .slider {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        
        .slider-wrapper {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease;
          
          img {
            min-width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        
        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.3);
          color: white;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          opacity: 0;
          transition: opacity 0.3s, background-color 0.3s;
          
          &:hover {
            background: rgba(0, 0, 0, 0.5);
          }
          
          &.prev { left: 10px; }
          &.next { right: 10px; }
        }
        
        &:hover .slider-btn {
          opacity: 1;
        }
        
        .slider-dots {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          
          .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            
            &.active {
              background: white;
            }
          }
        }
      }
    }
    
    .card-description {
      padding: 15px;
      min-height: 60px;
      max-height: 60px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; 
      overflow: hidden; 
      text-overflow: ellipsis; 
      white-space: normal;
      // background-color: #181919;
      
      p {
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
        color: #666;
        
        :global(.dark-only) & {
          color: #aaa;
        }
      }
    }
    
    .card-footer {
      padding: 15px;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      
      .button-group {
        display: flex;
        gap: 10px;
      }
      
      button {
        flex: 1;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s;
      }
      
      .preview-btn {
        background: #f39159;
        border: none;
        
        :global(.dark-only) & {
          background: #2A2A2A;
          border-color: #333;
          color: white;
        }
        
        &:hover {
          background: #d97342;
          
          :global(.dark-only) & {
            background: #333;
          }
        }
      }
      
      .create-btn {
        background: #308e87;
        color: white;
        border: none;
        
        &:hover {
          background: #257068;
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>