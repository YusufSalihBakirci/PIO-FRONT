<template>
  <div class="experience-list">
    <Breadcrumbs main="Dashboard" mains="Experience List Page" title="Experiences" />
    <div class="experience-grid">
      <div v-for="exp in experiences" :key="exp.targetId" class="experience-card">
        <div class="card-header">
          <h3>{{ exp.name }}</h3>
          <button class="option-btn" :class="store.layout?.class === 'dark-only' ? 'text-white' : 'text-black'">⋮</button>
        </div>
        
        <div class="card-image">
          <div class="slider">
            <div class="slider-wrapper" 
                 :style="{ transform: `translateX(-${currentSlides[exp.targetId] * 100}%)` }">
              <img v-for="(image, index) in exp.images" 
                   :key="index"
                   :src="image" 
                   alt="Deneyim Görseli">
            </div>
            <button class="slider-btn prev" @click="prevSlide(exp.targetId)">❮</button>
            <button class="slider-btn next" @click="nextSlide(exp.targetId)">❯</button>
            <div class="slider-dots">
              <span v-for="i in 3" :key="i" 
                    :class="['dot', (currentSlides[exp.targetId] || 0) === i-1 ? 'active' : '']">
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
import { ref, onMounted } from 'vue';
import experienceService from '@/api/ExperienceService';
import { uselayoutStore } from '@/store/layout';

const store = uselayoutStore();
const currentSlides = ref({});
const experiences = ref([]);

// Slider işlevleri
const nextSlide = (expId) => {
  if (!currentSlides.value[expId]) currentSlides.value[expId] = 0;
  currentSlides.value[expId] = (currentSlides.value[expId] + 1) % 3;
};

const prevSlide = (expId) => {
  if (!currentSlides.value[expId]) currentSlides.value[expId] = 0;
  currentSlides.value[expId] = (currentSlides.value[expId] - 1 + 3) % 3;
};

// API çağrısı
onMounted(async () => {
  try {
        const targetId = 1000; // targetId seçilene göre dinamik alınacak
        experiences.value = await experienceService.getDefaultTargets(targetId);
      } catch (error) {
        console.error('Veriler yüklenirken bir hata oluştu:', error);
      }
});

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