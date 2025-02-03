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
          <img src="@/assets/images/experiences/experienceDefaultİmage.jpg" alt="Deneyim Görseli" class="experience-img">
        </div>
        
        <div class="card-description" :class="store.layout?.class === 'dark-only' ? 'text-white' : 'text-black'">
          <p>{{ exp.description }}</p>
        </div>
        
        <div class="card-footer">
          <div class="action-group">
            <button class="edit-btn" @click="handleEdit(exp.targetId)">
              Experience Düzenle
            </button>
            <div class="status-toggle">
              <span class="status-badge" :class="{ 'active': exp.isActive, 'inactive': !exp.isActive }">
                {{ exp.isActive ? 'Active' : 'Inactive' }}
              </span>
              <label class="switch">
                <input 
                  type="checkbox" 
                  v-model="exp.isActive" 
                  @change="toggleStatus(exp.targetId, exp.isActive)"
                >
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import experienceService from '@/api/ExperienceService';
import { uselayoutStore } from '@/store/layout';

const router = useRouter();
const store = uselayoutStore();
const experiences = ref([]);

onMounted(async () => {
  try {
    const targetId = 1000; // targetId seçilene göre dinamik alınacak
    experiences.value = await experienceService.getDefaultTargets(targetId);
  } catch (error) {
    console.error('Veriler yüklenirken bir hata oluştu:', error);
  }
});

const handleEdit = (targetId) => {
  router.push({
    name: 'EditExperience',
    params: { targetId: targetId.toString() },
    query: { type: 'list' }
  });
};

const toggleStatus = async (targetId, isActive) => {
  try {
    console.log('Durum değiştiriliyor:', targetId, 'Yeni durum:', isActive);
  } catch (error) {
    console.error('Durum güncellenirken hata oluştu:', error);
    exp.isActive = !isActive;
  }
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
      
      .experience-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
      
      .action-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
      }
      
      .edit-btn {
        padding: 8px 16px;
        background: #308e87;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
        
        &:hover {
          background: #257068;
        }
      }
      
      .status-toggle {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .status-badge {
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 12px;
        font-weight: 500;
        
        &.active {
          background-color: rgba(48, 142, 135, 0.1);
          color: #308e87;
        }
        
        &.inactive {
          background-color: rgba(156, 163, 175, 0.1);
          color: #9CA3AF;
        }
      }
      
      .switch {
        position: relative;
        display: inline-block;
        width: 36px;
        height: 20px;
        
        input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #e5e7eb;
          transition: .3s;
          border-radius: 20px;
          
          &:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 2px;
            bottom: 2px;
            background-color: white;
            transition: .3s;
            border-radius: 50%;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          }
        }
        
        input:checked + .slider {
          background-color: #308e87;
        }
        
        input:checked + .slider:before {
          transform: translateX(16px);
        }
      }
    }
  }
}
</style>