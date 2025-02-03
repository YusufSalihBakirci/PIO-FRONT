<template>
  <div v-if="steps.length > 0" :key="selectedTarget.id" :data-id="dataId" class="bg-white p-6 rounded-lg shadow-lg">
    <div class="space-y-4">
      <div v-for="(step, index) in steps" :key="index" class="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <div class="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-t-lg border-b border-gray-200" @click="toggleStep(index)">
          <h3 class="text-lg font-medium text-gray-800">
            {{ step.title }}
          </h3>
          <svg class="w-5 h-5 transition-transform duration-200 text-gray-600" :class="{ 'rotate-180': activeStep === index }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>

        <div v-show="activeStep === index" class="p-4 border-t bg-white">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(field, key) in step.fields" :key="key" class="form-group">
              <label :for="key" class="block text-sm font-medium text-gray-700 mb-2">
                {{ field.description }}
              </label>

              <template v-if="field.type === 'color'">
                <div class="relative">
                  <div class="color-picker-trigger flex items-center p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg cursor-pointer transition-all duration-200" @click="() => toggleColorPicker(key)">
                    <div class="w-6 h-6 rounded-full border-2 border-white shadow-sm mr-3" :style="{ backgroundColor: field.value || '#ffffff' }"></div>
                    <span class="text-gray-700 flex-1">
                      {{ field.value || "#ffffff" }}
                    </span>
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <input
                    type="color"
                    :name="key"
                    :id="key"
                    :value="field.value"
                    @input="
                      (e) => {
                        handleInputChange(step.key + '.' + key, e.target.value);
                        hideColorPicker(key);
                      }
                    "
                    class="sr-only"
                    ref="colorInput" />
                </div>
              </template>

              <template v-else-if="field.type === 'date'" class="flex gap-2">
                <input type="datetime-local" :min="getCurrentDate()" :value="formatDateTimeForInput(field.value)" @input="validateDateTime($event, field)" class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" />
              </template>

              <template v-else-if="field.type === 'number'">
                <input type="number" class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" :name="key" :id="key" :value="field.value" @input="(e) => handleInputChange(step.key + '.' + key, e.target.value)" />
              </template>

              <template v-else-if="field.type === 'url'">
                <input type="url" class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" :name="key" :id="key" :value="field.value" placeholder="https://" @input="(e) => handleInputChange(step.key + '.' + key, e.target.value)" />
              </template>

              <template v-else-if="field.type === 'select'">
                <select class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" :name="key" :id="key" :value="field.value" @change="(e) => handleInputChange(step.key + '.' + key, e.target.value)">
                  <option value="" disabled>Select an option</option>
                  <option v-for="option in field.options" :key="option" :value="option">
                    {{ option.charAt(0).toUpperCase() + option.slice(1) }}
                  </option>
                </select>
              </template>

              <template v-else-if="field.type === 'string' && step.key === 'general' && key === 'code'">
                <CodeEditor v-model="field.value" @run-code="handleCodeRun" :readOnly="false" />
              </template>

              <template v-else>
                <input type="text" class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" :name="key" :id="key" :value="field.value" @input="(e) => handleInputChange(step.key + '.' + key, e.target.value)" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end mt-8 pt-4 border-t border-gray-200">
      <button class="px-6 py-2.5 bg-[#308e87] text-white rounded-lg hover:bg-[#277571] transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg active:shadow-md" @click="onPreview">
        Preview
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
  <div v-else class="bg-white p-6 rounded-lg shadow-lg">
    <p class="text-gray-500 text-center">Lütfen bir hedef seçin</p>
  </div>
</template>

<script>
import { reactive, watch, ref, computed } from "vue";
import { useIframeStore } from "../../iframeStore";
import { FirePopup, FireBanner } from "../TargetTypes/TargetCodes";
import { pageReader, highligthSelection } from "../AuxJS/PageReader";
import CodeEditor from "./CodeEditor.vue";
import { usePreviewStore } from "../../store/previewStore";
import { addExperience, getExperienceByID } from "../../../api/ExperienceService";

export default {
  components: {
    CodeEditor,
  },
  props: {
    selectedTarget: {
      type: Object,
      required: true,
      validator(value) {
        return value && typeof value === "object" && "id" in value;
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

  setup(props, { emit }) {
    let insertPositions = ref([]);
    const selectedPosition = ref("");
    const selectedRelativePosition = ref("");
    const activeStep = ref(null);
    const iframeStore = useIframeStore();
    const previewStore = usePreviewStore();

    const onSelectPosition = () => {
      return true;
      // bu alan faz2 de iframe içerisinde eklenecek alanı highlight etmek için kullanılacak.
      // highligthSelection(iframeStore.content, selectedPosition.value);
    };

    const getRequirements = () => {
      if (!props.selectedTarget?.TargetRequire) return {};

      const requirements = {};
      Object.entries(props.selectedTarget.TargetRequire).forEach(([groupKey, groupValue]) => {
        if (typeof groupValue === "object") {
          requirements[groupKey] = {};
          Object.entries(groupValue).forEach(([fieldKey, fieldValue]) => {
            if (fieldKey !== "description") {
              requirements[groupKey][fieldKey] = fieldValue.value || "";
            }
          });
        }
      });
      return requirements;
    };

    const proxyReq = reactive({
      targetRequirements: getRequirements(),
    });

    const handleInputChange = (key, value) => {
      const [group, field] = key.split(".");
      if (props.selectedTarget?.TargetRequire?.[group]?.[field] !== undefined) {
        props.selectedTarget.TargetRequire[group][field].value = value;
      }
    };

    const onPreview = () => {
      console.log("Preview clicked, proxyReq:", proxyReq);
      console.log("Selected Target:", props.selectedTarget);
      console.log("Target type:", props.selectedTarget?.type);
      console.log("Is inline?", props.isInline);

      if (!props.selectedTarget) {
        console.warn("No target selected!");
        return;
      }

      if (props.isInline || props.selectedTarget.type === "banner") {
        console.log("Using FireBanner - Inline or Banner type detected");
        const proxyReqToPass = {
          selectedPosition,
          selectedRelativePosition,
          ...proxyReq,
        };
        console.log("Banner proxyReqToPass:", proxyReqToPass);
        const bannerHtml = FireBanner(proxyReqToPass);
        emit("update-preview", bannerHtml);
      } else {
        console.log("Using FirePopup - Regular popup type");
        console.log("Popup data:", proxyReq);
        const popupHtml = FirePopup(proxyReq);
        addExperience("test12", popupHtml, 1000, "test12", 1); 
        console.log("Generated Popup HTML:", popupHtml);
        getExperienceByID(3);
        emit("update-preview", popupHtml);
      }
    };

    const steps = computed(() => {
      const reqs = props.selectedTarget?.TargetRequire || {};
      const stepArray = [];

      if (reqs) {
        Object.entries(reqs).forEach(([groupKey, groupValue]) => {
          if (typeof groupValue === "object" && groupValue.description) {
            const fields = {};
            Object.entries(groupValue).forEach(([key, value]) => {
              if (key !== "description") {
                fields[key] = value;
              }
            });

            stepArray.push({
              key: groupKey,
              title: groupValue.description,
              fields: fields,
            });
          }
        });
      }

      return stepArray;
    });

    watch(
      () => props.selectedTarget,
      (newValue) => {
        if (newValue) {
          proxyReq.targetRequirements = getRequirements();
        }
      },
      { deep: true, immediate: true }
    );

    const toggleStep = (index) => {
      activeStep.value = activeStep.value === index ? null : index;
    };

    const toggleColorPicker = (key) => {
      const input = document.getElementById(key);
      if (input) {
        input.click();
      }
    };

    const hideColorPicker = (key) => {
      const input = document.getElementById(key);
      if (input) {
        input.blur();
      }
    };

    const handleCodeRun = (code) => {
      console.log("Code executed from CodeEditor:", code);
      // Handle any additional logic needed when code is run
    };

    const getCurrentDate = () => {
      const today = new Date();
      return today.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:mm
    };

    const formatDateTimeForInput = (value) => {
      if (!value) return "";
      return new Date(value).toISOString().slice(0, 16);
    };

    const validateDateTime = (event, field) => {
      const selectedDate = new Date(event.target.value);
      const now = new Date();

      if (selectedDate < now) {
        // If selected datetime is in the past, set it to next hour
        const futureDate = new Date(now.getTime() + 60 * 60 * 1000); // Add 1 hour
        field.value = futureDate.toISOString();
        event.target.value = formatDateTimeForInput(field.value);
      } else {
        field.value = selectedDate.toISOString();
      }
    };

    return {
      proxyReq,
      onPreview,
      onSelectPosition,
      handleInputChange,
      selectedRelativePosition,
      selectedPosition,
      steps,
      insertPositions,
      activeStep,
      toggleStep,
      toggleColorPicker,
      hideColorPicker,
      handleCodeRun,
      getCurrentDate,
      formatDateTimeForInput,
      validateDateTime,
    };
  },
};
</script>

<style>
.rotate-180 {
  transform: rotate(180deg);
}

.color-picker-trigger {
  min-height: 48px;
}

.color-picker-trigger:hover {
  border-color: #93c5fd;
}

/* Hide default color picker appearance */
input[type="color"] {
  -webkit-appearance: none;
  appearance: none;
  padding: 0;
  border: none;
  width: 0;
  height: 0;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}

input[type="color"]::-webkit-color-swatch {
  border: none;
}

input[type="color"]::-moz-color-swatch {
  border: none;
}
</style>
