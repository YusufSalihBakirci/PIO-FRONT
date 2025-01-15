<template>
  <div class="experience-list">
    <Breadcrumbs main="Dashboard" mains="Inline Experience Page" title="Inline Experiences" />
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
            <button class="preview-btn active" @click="openPreview(exp)">Önizleme</button>
            <button class="create-btn active">Oluştur</button>
          </div>
        </div>
      </div>
    </div>


    <PreviewModal :is-open="isPreviewOpen" @close="closePreview">
      <div class="preview-content">
        <h2>{{ selectedExperience?.name }}</h2>
        

        <div class="preview-row">
       
          <div class="preview-col slider-col">
            <div class="preview-slider">
              <div class="slider-wrapper" 
                   :style="{ transform: `translateX(-${currentPreviewSlide * 100}%)` }">
                <img v-for="(image, index) in selectedExperience?.images" 
                     :key="index"
                     :src="image" 
                     alt="Preview Image">
              </div>
              <button class="slider-btn prev" @click="prevPreviewSlide">❮</button>
              <button class="slider-btn next" @click="nextPreviewSlide">❯</button>
              <div class="slider-dots">
                <span v-for="i in selectedExperience?.images.length" 
                      :key="i" 
                      :class="['dot', currentPreviewSlide === i-1 ? 'active' : '']"
                      @click="currentPreviewSlide = i-1">
                </span>
              </div>
            </div>
          </div>


          <div class="preview-col details-col">
            <div class="description-section">
              <h3>Özellikler</h3>
              <ul class="feature-list">
                <li v-for="(feature, index) in selectedExperience?.details.features" 
                    :key="index">
                  <i class="fa fa-check-circle"></i>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <div class="description-section">
              <h3>Kullanım Alanları</h3>
              <ul class="usage-list">
                <li v-for="(usage, index) in selectedExperience?.details.usageCases" 
                    :key="index">
                  <i class="fa fa-arrow-right"></i>
                  <span>{{ usage }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

     
        <div class="preview-row bottom-row">
          <div class="performance-section">
            <p class="performance-text">{{ selectedExperience?.details.performance }}</p>
          </div>
          
          <div class="preview-actions">
            <button class="btn btn-primary">Oluştur</button>
          </div>
        </div>

        <div class="experience-slider-container">
          <div class="experience-slider-header">Bunun yerine yapabilecekleriniz</div>
          
          <div class="experience-slider">
            <button class="slider-nav prev" @click="prevAlternative" :disabled="currentAlternativeIndex === 0">
              <i class="fa fa-chevron-left"></i>
            </button>

            <div class="slider-window">
              <div class="slider-content" 
                   :style="{ transform: `translateX(-${currentAlternativeIndex * 33.33}%)` }">
                <div v-for="exp in alternativeExperiences" 
                     :key="exp.id" 
                     class="experience-card">
                  <img :src="exp.thumbnail" alt="Experience thumbnail">
                  <h4>{{ exp.name }}</h4>
                  <p>{{ exp.shortDescription }}</p>
                  <button class="preview-btn">Experience'a git</button>
                </div>
              </div>
            </div>

            <button class="slider-nav next" 
                    @click="nextAlternative" 
                    :disabled="currentAlternativeIndex >= alternativeExperiences.length - 3">
              <i class="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </PreviewModal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { uselayoutStore } from '@/store/layout';
import PreviewModal from '@/components/common/PreviewModal.vue';

const store = uselayoutStore();
const currentSlides = ref({});
const isPreviewOpen = ref(false);
const selectedExperience = ref(null);
const currentPreviewSlide = ref(0);
const currentAlternativeIndex = ref(0);

const experiences = ref([
  {
    id: 1,
    name: 'Inline Deneyim 1',
    description: 'Inline deneyim açıklaması',
    details: {
      features: [
        'Kişiselleştirilmiş içerik gösterimi',
        'Dinamik ürün önerileri',
        'A/B test desteği',
        'Detaylı analitik raporlama'
      ],
      usageCases: [
        'E-ticaret siteleri',
        'Blog sayfaları',
        'Kurumsal web siteleri'
      ],
      performance: 'Bu deneyim sayesinde kullanıcı etkileşimlerinizi %25\'e kadar artırabilir, dönüşüm oranlarınızı iyileştirebilirsiniz.'
    },
    images: [
      'https://picsum.photos/400/300?random=201',
      'https://picsum.photos/400/300?random=202',
      'https://picsum.photos/400/300?random=203'
    ]
  },
  {
    id: 2,
    name: 'Inline Deneyim 2',
    description: 'Inline deneyim açıklaması',
    details: {
      features: [
        'Akıllı içerik segmentasyonu',
        'Gerçek zamanlı davranış analizi',
        'Otomatik optimizasyon',
        'Gelişmiş hedefleme seçenekleri'
      ],
      usageCases: [
        'SaaS platformları',
        'Üyelik siteleri',
        'Online eğitim platformları'
      ],
      performance: 'Bu deneyim ile müşteri memnuniyetini artırırken, satış dönüşüm oranlarınızı %30\'a kadar yükseltebilirsiniz.'
    },
    images: [
      'https://picsum.photos/400/300?random=204',
      'https://picsum.photos/400/300?random=205',
      'https://picsum.photos/400/300?random=206'
    ]
  },
  {
    id: 3,
    name: 'Inline Deneyim 3',
    description: 'Inline deneyim açıklaması',
    details: {
      features: [
        'Yapay zeka destekli öneri sistemi',
        'Kullanıcı davranış analizi',
        'Çok kanallı entegrasyon',
        'Özelleştirilebilir tasarım şablonları'
      ],
      usageCases: [
        'Medya siteleri',
        'Dijital pazaryerleri',
        'Topluluk platformları'
      ],
      performance: 'Bu deneyim ile kullanıcı başına ortalama oturum süresini %40\'a kadar artırabilir, bounce rate\'inizi düşürebilirsiniz.'
    },
    images: [
      'https://picsum.photos/400/300?random=207',
      'https://picsum.photos/400/300?random=208',
      'https://picsum.photos/400/300?random=209'
    ]
  }
]);

const alternativeExperiences = ref([
  {
    id: 1,
    name: 'Pop-up Deneyimi',
    shortDescription: 'Dikkat çekici pop-up mesajları ile kullanıcı etkileşimi',
    thumbnail: 'https://picsum.photos/300/200?random=1'
  },
  {
    id: 2,
    name: 'Banner Deneyimi',
    shortDescription: 'Özelleştirilebilir banner çözümleri',
    thumbnail: 'https://picsum.photos/300/200?random=2'
  },
  {
    id: 3,
    name: 'Form Deneyimi',
    shortDescription: 'Akıllı form yapıları ve validasyonlar',
    thumbnail: 'https://picsum.photos/300/200?random=3'
  },
  {
    id: 4,
    name: 'Notification Deneyimi',
    shortDescription: 'Gerçek zamanlı bildirim sistemi',
    thumbnail: 'https://picsum.photos/300/200?random=4'
  },
  {
    id: 5,
    name: 'Chat Deneyimi',
    shortDescription: 'Canlı destek ve chatbot entegrasyonu',
    thumbnail: 'https://picsum.photos/300/200?random=5'
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

const openPreview = (exp) => {
  selectedExperience.value = exp;
  currentPreviewSlide.value = 0;
  isPreviewOpen.value = true;
};

const closePreview = () => {
  isPreviewOpen.value = false;
  selectedExperience.value = null;
};

const nextPreviewSlide = () => {
  if (!selectedExperience.value) return;
  currentPreviewSlide.value = (currentPreviewSlide.value + 1) % selectedExperience.value.images.length;
};

const prevPreviewSlide = () => {
  if (!selectedExperience.value) return;
  currentPreviewSlide.value = (currentPreviewSlide.value - 1 + selectedExperience.value.images.length) % selectedExperience.value.images.length;
};

const nextAlternative = () => {
  if (currentAlternativeIndex.value < alternativeExperiences.value.length - 3) {
    currentAlternativeIndex.value++;
  }
};

const prevAlternative = () => {
  if (currentAlternativeIndex.value > 0) {
    currentAlternativeIndex.value--;
  }
};
</script>

<style lang="scss" scoped>
.preview-content {
  h2 {
    font-size: 24px;
    margin-bottom: 30px;
    color: rgba(var(--black), 0.8);
  }

  .preview-row {
    display: flex;
    gap: 30px;
    margin-bottom: 30px;

    &.bottom-row {
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0;
    }
  }

  .preview-col {
    &.slider-col {
      flex: 0 0 50%;
    }

    &.details-col {
      flex: 1;
    }
  }

  .preview-slider {
    flex: 0 0 60%; 
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    
    .slider-wrapper {
      display: flex;
      transition: transform 0.3s ease;
      
      img {
        width: 100%;
        flex-shrink: 0;
        object-fit: cover;
      }
    }
    
    .slider-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(0, 0, 0, 0.7);
      }
      
      &.prev { left: 10px; }
      &.next { right: 10px; }
    }

    .slider-dots {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        transition: all 0.3s ease;

        &.active {
          background: rgba(255, 255, 255, 1);
        }
      }
    }
  }

  .description-section {
    margin-bottom: 30px;
    
    h3 {
      font-size: 18px;
      color: rgba(var(--black), 0.8);
      margin-bottom: 15px;
      font-weight: 600;
      position: relative;
      padding-bottom: 8px;
      
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40px;
        height: 3px;
        background: var(--theme-default);
        border-radius: 2px;
      }
    }
  }

  .feature-list, .usage-list {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      padding: 8px 15px;
      background: rgba(var(--black), 0.02);
      border-radius: 8px;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(var(--black), 0.04);
        transform: translateX(5px);
      }
      
      i {
        margin-right: 10px;
        font-size: 16px;
      }
    }
  }

  .feature-list li {
    i {
      color: var(--theme-default);
    }
  }

  .usage-list li {
    i {
      color: var(--theme-secondary);
    }
  }

  .performance-text {
    font-size: 16px;
    line-height: 1.6;
    color: rgba(var(--black), 0.7);
    padding: 15px;
    background: rgba(var(--theme-default), 0.05);
    border-left: 4px solid var(--theme-default);
    border-radius: 4px;
  }

  .preview-actions {
    flex: 0 0 auto;
    padding-left: 30px;
  }
}

@media (max-width: 1024px) {
  .preview-content {
    .preview-row {
      flex-direction: column;
      
      &.bottom-row {
        flex-direction: column;
        align-items: stretch;
      }
    }
    
    .preview-col {
      &.slider-col,
      &.details-col {
        flex: 1 1 auto;
      }
    }

    .preview-actions {
      padding-left: 0;
      margin-top: 20px;
      text-align: center;
    }
  }
}

.experience-slider-container {
  margin-top: 30px;
  padding: 20px 0;

  .experience-slider-header {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    color: rgba(var(--black), 0.8);
    text-align: center;
  }

  .experience-slider {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .slider-nav {
    flex: 0 0 auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: rgba(var(--black), 0.1);
    color: rgba(var(--black), 0.7);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
      background: rgba(var(--black), 0.2);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .slider-window {
    flex: 1;
    overflow: hidden;
  }

  .slider-content {
    display: flex;
    transition: transform 0.3s ease;
  }

  .experience-card {
    flex: 0 0 33.33%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    height: 100%;
    
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 15px;
    }

    h4 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
      color: rgba(var(--black), 0.8);
      height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      font-size: 14px;
      color: rgba(var(--black), 0.6);
      line-height: 1.4;
      height: 40px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 15px;
    }

    .preview-btn {
      width: 100%;
      padding: 8px;
      border: none;
      background: var(--theme-default);
      color: white;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
}

// Responsive tasarım
@media (max-width: 768px) {
  .experience-slider-container {
    .experience-card {
      flex: 0 0 100%;
    }
  }
}
</style> 