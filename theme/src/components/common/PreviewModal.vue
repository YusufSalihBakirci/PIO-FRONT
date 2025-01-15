<template>
  <Teleport to="body">
    <transition name="modal-fade">
      <div v-if="isOpen" class="preview-modal-overlay" @click="closeModal">
        <div class="preview-modal-content" @click.stop>
          <button class="modal-close-btn" @click="closeModal">
            <i class="fa fa-times"></i>
          </button>
          <slot></slot>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<style lang="scss" scoped>
.preview-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.preview-modal-content {
  background-color: rgba(255,255,255, 1);
  width: 80%;
  margin: 0 10%;
  border-radius: 8px;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(var(--black), 0.1);
}

.modal-close-btn {
  position: fixed;
  right: calc(10% + 20px);
  top: 100px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 1001;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  i {
    color: rgba(0, 0, 0, 0.6);
  }
}

// Transition animations
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  
  .preview-modal-content {
    transform: translateY(-20px);
  }
}

// Responsive design
@media (max-width: 768px) {
  .preview-modal-content {
    width: 90%;
    margin: 0 5%;
    padding: 20px;
  }
}
</style>

