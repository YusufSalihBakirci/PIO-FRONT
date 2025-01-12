<template>
  <div
    v-if="steps.length > 0"
    :key="selectedTarget.id"
    :data-id="dataId"
    class="bg-white p-6 rounded-lg shadow-md"
  >
    <!-- Step indicator with labels -->
    <div class="mb-8">
      <div class="flex justify-between mb-2">
        <div
          v-for="(step, index) in totalSteps"
          :key="index"
          class="flex flex-col items-center flex-1"
        >
          <div class="flex items-center w-full">
            <!-- Step circle -->
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center border-2 font-medium"
              :class="[
                index < currentStep
                  ? 'border-sky-500 bg-sky-500 text-white'
                  : index === currentStep
                    ? 'border-sky-500 text-sky-500'
                    : 'border-gray-300 text-gray-300',
              ]"
            >
              {{ index + 1 }}
            </div>
            <!-- Connecting line -->
            <div
              v-if="index < totalSteps - 1"
              class="flex-1 h-0.5 mx-2"
              :class="index < currentStep ? 'bg-sky-500' : 'bg-gray-300'"
            ></div>
          </div>
          <!-- Step label -->
          <span
            class="text-xs mt-2 font-medium"
            :class="index <= currentStep ? 'text-sky-500' : 'text-gray-400'"
          >
            {{ steps[index]?.title || `Adım ${index + 1}` }}
          </span>
        </div>
      </div>
    </div>

    <!-- Current step content -->
    <div v-if="currentStepFields" class="mb-6 transition-all duration-300 ease-in-out">
      <h3 class="text-2xl font-bold mb-6 text-gray-800">
        {{ currentStepTitle }}
      </h3>

      <!-- Inline position selectors -->
      <div v-if="isInline && currentStep === 0" class="space-y-4 mb-6">
        <div class="form-group">
          <label for="location" class="block text-sm font-medium text-gray-700 mb-2">
            Eklenecek Alan:
          </label>
          <select
            class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            name="location"
            id="location"
            v-model="selectedPosition"
            @change="onSelectPosition"
          >
            <option value="" disabled>Secim Yapiniz</option>
            <option
              v-for="(posValue, posIndex) in insertPositions"
              :key="posIndex"
              :value="posValue"
            >
              Position - {{ posIndex }} // {{ posValue }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label class="block text-sm font-medium text-gray-700 mb-2" for="where">
            Eklenecek Pozisyon:
          </label>
          <select
            class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            name="where"
            id="where"
            v-model="selectedRelativePosition"
          >
            <option value="afterbegin">Elemanin Baslangici</option>
            <option value="beforeend">Eleman Sonu</option>
            <option value="afterend">Elemandan Sonra</option>
            <option value="beforebegin">Elemandan Once</option>
          </select>
        </div>
      </div>

      <!-- Form fields -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(field, key) in currentStepFields" :key="key" class="form-group">
          <label :for="key" class="block text-sm font-medium text-gray-700 mb-2">
            {{ field.description }}
          </label>

          <!-- Input type'a göre farklı input'lar -->
          <template v-if="field.type === 'color'">
            <input
              type="color"
              class="w-full p-1 h-10 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              :name="key"
              :id="key"
              :value="field.value"
              @input="(e) => handleInputChange(currentStepKey + '.' + key, e.target.value)"
            />
          </template>

          <template v-else-if="field.type === 'date'">
            <input
              type="datetime-local"
              class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              :name="key"
              :id="key"
              :value="field.value"
              @input="(e) => handleInputChange(currentStepKey + '.' + key, e.target.value)"
            />
          </template>

          <template v-else-if="field.type === 'number'">
            <input
              type="number"
              class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              :name="key"
              :id="key"
              :value="field.value"
              @input="(e) => handleInputChange(currentStepKey + '.' + key, e.target.value)"
            />
          </template>

          <template v-else-if="field.type === 'url'">
            <input
              type="url"
              class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              :name="key"
              :id="key"
              :value="field.value"
              placeholder="https://"
              @input="(e) => handleInputChange(currentStepKey + '.' + key, e.target.value)"
            />
          </template>

          <template v-else>
            <input
              type="text"
              class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              :name="key"
              :id="key"
              :value="field.value"
              @input="(e) => handleInputChange(currentStepKey + '.' + key, e.target.value)"
            />
          </template>
        </div>
      </div>
    </div>

    <!-- Navigation buttons -->
    <div class="flex justify-between mt-8 pt-4 border-t border-gray-100">
      <button
        v-if="currentStep > 0"
        class="px-6 py-2.5 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
        @click="prevStep"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        Geri
      </button>
      <button
        v-if="currentStep < totalSteps - 1"
        class="px-6 py-2.5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-200 flex items-center gap-2"
        @click="nextStep"
      >
        İleri
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        v-else
        class="px-6 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
        @click="onPreview"
      >
        Preview
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fill-rule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
  <div v-else class="bg-white p-6 rounded-lg shadow-md">
    <p class="text-gray-500 text-center">Lütfen bir hedef seçin</p>
  </div>
</template>

<script>
import { reactive, watch, ref, computed, onMounted } from 'vue'
import TargetJSCreator from './TargetJSCreator.vue'
import { pageReader, highligthSelection } from '../AuxJS/PageReader'
import { FirePopup, FireBanner } from '../TargetTypes/TargetCodes'
import { useIframeStore } from '@/stores/iframeStore'

export default {
  components: {
    TargetJSCreator,
  },
  data() {
    return {}
  },
  props: {
    selectedTarget: {
      type: Object,
      required: true,
      validator(value) {
        return value && typeof value === 'object' && 'id' in value
      },
    },
    isInline: {
      type: Boolean,
      required: false,
    },
    dataId: {
      type: Number,
      required: true,
    },
  },

  mounted() {},
  methods: {
    // Boş ve kullanılmayan method kaldırılabilir
    createTargetParameters() {},
  },
  setup(props) {
    let insertPositions = ref([])
    let currentIframe = ref(null)
    const selectedPosition = ref('')
    const selectedRelativePosition = ref('')
    const currentStep = ref(0)

    const iframeStore = useIframeStore()

    onMounted(() => {
      try {
        const iframeElement = iframeStore.content
        if (!iframeElement) {
          console.error('Iframe element is not available')
          return
        }

        currentIframe.value = iframeElement
        const positions = pageReader(iframeElement)

        if (Array.isArray(positions) && positions.length > 0) {
          insertPositions.value = positions
          console.log('Populated positions:', insertPositions.value)
        } else {
          console.warn('No positions returned from pageReader')
          insertPositions.value = []
        }
      } catch (error) {
        console.error('Error setting up positions:', error)
      }
    })

    const onSelectPosition = () => {
      highligthSelection(currentIframe.value, selectedPosition.value)
    }

    const getRequirements = () => {
      if (!props.selectedTarget?.TargetRequire) return {}

      const requirements = {}
      Object.entries(props.selectedTarget.TargetRequire).forEach(([groupKey, groupValue]) => {
        if (typeof groupValue === 'object') {
          requirements[groupKey] = {}
          Object.entries(groupValue).forEach(([fieldKey, fieldValue]) => {
            if (fieldKey !== 'description') {
              requirements[groupKey][fieldKey] = fieldValue.value || ''
            }
          })
        }
      })
      return requirements
    }

    const proxyReq = reactive({
      targetRequirements: getRequirements(),
    })

    const handleInputChange = (key, value) => {
      const [group, field] = key.split('.')
      if (props.selectedTarget?.TargetRequire?.[group]?.[field] !== undefined) {
        props.selectedTarget.TargetRequire[group][field].value = value
      }
    }

    const onPreview = () => {
      if (props.isInline) {
        const proxyReqToPass = {
          selectedPosition,
          selectedRelativePosition,
          ...proxyReq,
        }
        console.log(proxyReqToPass)
        FireBanner(proxyReqToPass)
      } else {
        FirePopup(proxyReq)
        console.log('firePopup')
      }
      // console.log('Updated Target Requirements:', proxyReq)
      // console.log('Original remains unchanged:', props.selectedTarget)
    }

    const steps = computed(() => {
      const reqs = props.selectedTarget?.TargetRequire || {}
      const stepArray = []

      // Inline target için ilk adım
      if (props.isInline) {
        stepArray.push({
          key: 'position',
          title: 'Pozisyon Ayarları',
          fields: {}, // Bu adımda özel template kullanılacak
        })
      }

      // Config.js'deki grupları adımlara dönüştür
      if (reqs) {
        Object.entries(reqs).forEach(([groupKey, groupValue]) => {
          if (typeof groupValue === 'object' && groupValue.description) {
            const fields = {}
            // Her gruptaki field'ları topla
            Object.entries(groupValue).forEach(([key, value]) => {
              if (key !== 'description') {
                fields[key] = value
              }
            })

            stepArray.push({
              key: groupKey,
              title: groupValue.description,
              fields: fields,
            })
          }
        })
      }

      console.log('Generated Steps:', stepArray)
      return stepArray
    })

    const totalSteps = computed(() => steps.value.length)

    const currentStepData = computed(() => steps.value[currentStep.value] || null)
    const currentStepFields = computed(() => {
      const fields = currentStepData.value?.fields || {}
      // Debug için
      console.log('Current Step Fields:', fields)
      return fields
    })
    const currentStepTitle = computed(() => currentStepData.value?.title || '')
    const currentStepKey = computed(() => currentStepData.value?.key || '')

    // Yeni target seçildiğinde veya değiştiğinde
    watch(
      () => props.selectedTarget,
      (newValue) => {
        if (newValue) {
          console.log('New Target Selected:', newValue)
          console.log('Target Requirements:', newValue.TargetRequire)
          currentStep.value = 0 // Reset to first step
        }
      },
      { immediate: true },
    )

    watch(
      () => props.selectedTarget,
      (newValue) => {
        if (newValue) {
          proxyReq.targetRequirements = getRequirements()
          console.log('Updated proxyReq:', proxyReq)
        }
      },
      { deep: true, immediate: true },
    )

    const nextStep = () => {
      if (currentStep.value < totalSteps.value - 1) {
        currentStep.value++
      }
    }

    const prevStep = () => {
      if (currentStep.value > 0) {
        currentStep.value--
      }
    }

    return {
      proxyReq,
      onPreview,
      onSelectPosition,
      handleInputChange,
      getRequirements,
      selectedRelativePosition,
      selectedPosition,
      currentStep,
      totalSteps,
      steps,
      currentStepFields,
      currentStepTitle,
      currentStepKey,
      nextStep,
      prevStep,
      insertPositions,
    }
  },
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}

.transition-all {
  transition-property: all;
}

.duration-2000 {
  transition-duration: 2000ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.max-h-0 {
  max-height: 0;
}

.max-h-\[500px\] {
  max-height: 500px;
}
</style>
