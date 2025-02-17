<template>
  <div v-if="steps.length > 0" :key="selectedTarget.id" :data-id="dataId" :class="StyleClasses.container">
    <div :class="StyleClasses.spaceY">
      <div v-for="(step, index) in steps" :key="index" :class="StyleClasses.stepContainer">
        <div :class="StyleClasses.headerContainer" @click="toggleStep(index)">
          <h3 :class="StyleClasses.headerTitle">
            {{ step.title || step.description }}
          </h3>
          <svg :class="[StyleClasses.iconBase, 'transition-transform duration-200 text-gray-600', { [StyleClasses.rotate180]: activeStep === index }]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" v-html="svgs.uiIcons.chevronDown"></svg>
        </div>

        <div v-show="activeStep === index" class="p-4 border-t bg-white">
          <div class="space-y-4">
            <template v-if="step.key === 'setSlides'">
              <div v-for="(slide, slideIndex) in slides" :key="slideIndex" class="border border-gray-200 rounded-lg mb-4">
                <div class="flex justify-between items-center p-3 cursor-pointer bg-gray-100" @click="toggleSlide(slideIndex)">
                  <h4 class="font-medium">Slide {{ slideIndex + 1 }}</h4>
                  <div class="flex items-center space-x-2">
                    <button @click.stop="removeSlide(slideIndex)" class="text-red-500 hover:text-red-700">
                      <span class="sr-only">Remove Slide</span>
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                    <svg class="w-5 h-5 transition-transform duration-200" :class="{ 'rotate-180': activeSlide === slideIndex }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div v-show="activeSlide === slideIndex" class="p-4 bg-white">
                  <div class="grid grid-cols-1 gap-6">
                    <div v-for="(field, key) in step.fields.slides.slideConfig" :key="key" class="form-group">
                      <label :for="`slide-${slideIndex}-${key}`" class="block text-sm font-medium text-gray-700 mb-2">
                        {{ field.description }}
                      </label>

                      <!-- Date Input for Slides -->
                      <template v-if="field.type === 'date'">
                        <input type="datetime-local" class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" :name="`slide-${slideIndex}-${key}`" :id="`slide-${slideIndex}-${key}`" :value="slides[slideIndex][key]" @input="(e) => updateSlideField(slideIndex, key, e.target.value)" />
                      </template>

                      <!-- Color Input -->
                      <template v-else-if="field.type === 'color'">
                        <div class="relative">
                          <div class="color-picker-trigger flex items-center p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg cursor-pointer transition-all duration-200" @click="() => toggleColorPicker(`slide-${slideIndex}-${key}`)">
                            <div class="w-6 h-6 rounded-full border-2 border-white shadow-sm mr-3" :style="{ backgroundColor: slides[slideIndex][key] || '#ffffff' }"></div>
                            <span class="text-gray-700 flex-1">
                              {{ slides[slideIndex][key] || "#ffffff" }}
                            </span>
                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                          </div>
                          <input type="color" :name="`slide-${slideIndex}-${key}`" :id="`slide-${slideIndex}-${key}`" :value="slides[slideIndex][key]" @input="(e) => updateSlideField(slideIndex, key, e.target.value)" class="sr-only" />
                        </div>
                      </template>

                      <!-- Select Input -->
                      <template v-else-if="field.type === 'select'">
                        <select class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" :name="`slide-${slideIndex}-${key}`" :id="`slide-${slideIndex}-${key}`" :value="slides[slideIndex][key]" @change="(e) => updateSlideField(slideIndex, key, e.target.value)">
                          <option value="" disabled>Select an option</option>
                          <option v-for="option in field.options" :key="option" :value="option">
                            {{ option.charAt(0).toUpperCase() + option.slice(1) }}
                          </option>
                        </select>
                      </template>

                      <!-- Text/String Input -->
                      <template v-else-if="field.type !== 'date'">
                        <input type="text" class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" :name="`slide-${slideIndex}-${key}`" :id="`slide-${slideIndex}-${key}`" :value="slides[slideIndex][key]" @input="(e) => updateSlideField(slideIndex, key, e.target.value)" />
                      </template>
                    </div>

                    <!-- Custom CSS textarea for slide - Full width -->
                    <div class="form-group md:col-span-2">
                      <label :for="`slide-${slideIndex}-customCSS`" class="block text-sm font-medium text-gray-700 mb-2"> Custom CSS for this slide </label>
                      <textarea :id="`slide-${slideIndex}-customCSS`" class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" :value="slides[slideIndex].customCSS" @input="(e) => updateSlideField(slideIndex, 'customCSS', e.target.value)" rows="3" placeholder="Enter custom CSS styles..."></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-end mt-4">
                <button @click="addSlide" class="px-6 py-2.5 bg-[#308e87] text-white rounded-lg hover:bg-[#277571] transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg active:shadow-md">
                  Add Slide
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </template>

            <template v-else>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <template v-for="(field, key) in step.fields" :key="key">
                  <!-- Regular fields -->
                  <div :class="['form-group', key === 'swiperCustomCSS' ? 'md:col-span-2' : '', field.type === 'array' ? 'col-span-full' : '', field.type === 'textarea' ? 'md:col-span-2' : '']">
                    <label :for="key" class="block text-sm font-medium text-gray-700 mb-1">
                      {{ field.description || key }}
                    </label>

                    <!-- Custom CSS textarea for Swiper -->
                    <template v-if="key === 'swiperCustomCSS'">
                      <textarea :id="key" class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" :value="field.value" @input="(e) => handleInputChange(step.key + '.' + key, e.target.value)" rows="3" placeholder="Enter custom CSS styles for the Swiper container..."></textarea>
                    </template>

                    <!-- Add date input handling -->
                    <template v-if="field.type === 'date'">
                      <input type="datetime-local" class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" :name="key" :id="key" :value="field.value" @input="(e) => handleInputChange(step.key + '.' + key, e.target.value)" />
                    </template>

                    <!-- Color Input -->
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

                    <template v-else-if="field.type === 'array'">
                      <div class="space-y-4 w-full">
                        <div v-for="(item, itemIndex) in field.value" :key="itemIndex" class="border border-gray-200 rounded-lg w-full">
                          <div class="flex justify-between items-center p-4 bg-gray-50 cursor-pointer" @click="toggleArrayItem(key, itemIndex)">
                            <h4 class="font-medium">Item {{ itemIndex + 1 }}</h4>
                            <div class="flex items-center space-x-2">
                              <button @click.stop="removeArrayItem(step.key, key, itemIndex)" class="text-red-500 hover:text-red-700">
                                <span class="sr-only">Remove Item</span>
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                              <svg class="w-5 h-5 transition-transform duration-200" :class="{ 'rotate-180': activeArrayItems[`${key}-${itemIndex}`] }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                            </div>
                          </div>

                          <div v-show="activeArrayItems[`${key}-${itemIndex}`]" class="p-4">
                            <div class="grid grid-cols-1 gap-4 w-full">
                              <template v-for="(config, propKey) in field.slideConfig" :key="propKey">
                                <div class="form-group w-full">
                                  <label :for="`${key}-${itemIndex}-${propKey}`" class="block text-sm font-medium text-gray-700 mb-2 w-full">
                                    {{ config.description }}
                                  </label>

                                  <template v-if="config.type === 'select'">
                                    <select :id="`${key}-${itemIndex}-${propKey}`" class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md" :value="item[propKey]" @change="(e) => updateArrayItemField(step.key, key, itemIndex, propKey, e.target.value)">
                                      <option v-for="option in config.options" :key="option" :value="option">
                                        {{ option }}
                                      </option>
                                    </select>
                                  </template>

                                  <template v-else-if="config.type === 'color'">
                                    <div class="relative w-full">
                                      <div class="color-picker-trigger flex items-center p-3 border border-gray-300 rounded-lg bg-white shadow-md cursor-pointer w-full" @click="() => toggleColorPicker(`${key}-${itemIndex}-${propKey}`)">
                                        <div class="w-6 h-6 rounded-full border-2 border-white shadow-sm mr-3" :style="{ backgroundColor: item[propKey] || '#ffffff' }"></div>
                                        <span class="text-gray-700 flex-1">{{ item[propKey] || "#ffffff" }}</span>
                                      </div>
                                      <input type="color" :id="`${key}-${itemIndex}-${propKey}`" :value="item[propKey]" @input="(e) => updateArrayItemField(step.key, key, itemIndex, propKey, e.target.value)" class="sr-only" />
                                    </div>
                                  </template>

                                  <template v-else-if="config.type === 'textarea'">
                                    <textarea :id="`${key}-${itemIndex}-${propKey}`" class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md min-h-[100px] resize-y" :value="item[propKey]" @input="(e) => updateArrayItemField(step.key, key, itemIndex, propKey, e.target.value)"></textarea>
                                  </template>

                                  <template v-else>
                                    <input :type="config.type === 'number' ? 'number' : 'text'" :id="`${key}-${itemIndex}-${propKey}`" class="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-md" :value="item[propKey]" @input="(e) => updateArrayItemField(step.key, key, itemIndex, propKey, e.target.value)" />
                                  </template>
                                </div>
                              </template>
                            </div>
                          </div>
                        </div>

                        <button @click="addArrayItem(step.key, key)" class="w-full px-6 py-2.5 bg-[#308e87] text-white rounded-lg hover:bg-[#277571] transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                          Add Item
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </template>

                    <template v-else>
                      <input type="text" :class="StyleClasses.input" :name="key" :id="key" :value="field.value" @input="(e) => handleInputChange(step.key + '.' + key, e.target.value)" />
                    </template>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div :class="StyleClasses.footer">
      <button :class="StyleClasses.button" @click="onPreview">
        Preview
        <svg :class="StyleClasses.iconBase" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" v-html="svgs.inputIcons.eye"></svg>
      </button>
    </div>
  </div>
  <div v-else :class="StyleClasses.container">
    <p :class="StyleClasses.emptyState">Lütfen bir hedef seçin</p>
  </div>
</template>

<script>
import { reactive, watch, ref, computed } from "vue";
import { useIframeStore } from "../../iframeStore";
import { FireBanner, FirePopup, fireFTW, SlidingBanner, FireExpandModal } from "../TargetTypes/TargetCodes";
import { pageReader, highligthSelection } from "../AuxJS/PageReader";
import CodeEditor from "./CodeEditor.vue";
import { usePreviewStore } from "../../store/previewStore";
import { StyleClasses } from "../AuxJS/StyleClasses";
import { deviceIcons, uiIcons, inputIcons } from "../AuxJS/SvgVectors";

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
      default: false,
    },
    dataId: {
      type: [String, Number],
      default: 0,
    },
  },

  setup(props, { emit }) {
    const previewStore = usePreviewStore();
    const activeStep = ref(null);
    const activeSlide = ref(null);
    const slides = ref([]);
    const selectedPosition = ref(null);
    const selectedRelativePosition = ref(null);
    const insertPositions = ref([]);

    // Proxy request object
    const proxyReq = reactive({
      targetRequirements: {},
    });

    // Get requirements from target
    const getRequirements = () => {
      const requirements = {};
      if (props.selectedTarget?.TargetRequire) {
        Object.entries(props.selectedTarget.TargetRequire).forEach(([group, fields]) => {
          requirements[group] = {};
          Object.entries(fields).forEach(([field, config]) => {
            if (field !== "description") {
              requirements[group][field] = config.value;
            }
          });
        });
      }
      return requirements;
    };

    // Steps computed property
    const steps = computed(() => {
      const reqs = props.selectedTarget?.TargetRequire || {};
      return Object.entries(reqs)
        .filter(([_, groupValue]) => typeof groupValue === "object" && groupValue.description)
        .map(([groupKey, groupValue]) => ({
          key: groupKey,
          title: groupValue.description,
          fields: Object.fromEntries(Object.entries(groupValue).filter(([key]) => key !== "description")),
        }));
    });

    const onSelectPosition = () => {
      return true;
      // bu alan faz2 de iframe içerisinde eklenecek alanı highlight etmek için kullanılacak.
      // highligthSelection(iframeStore.content, selectedPosition.value);
    };

    const handleInputChange = (key, value) => {
      const [group, field] = key.split(".");
      if (props.selectedTarget?.TargetRequire?.[group]?.[field] !== undefined) {
        props.selectedTarget.TargetRequire[group][field].value = value;
      }
    };

    const onPreview = () => {
      let targetCode;

      switch (props.selectedTarget.id) {
        // Inline Targets (1000-1999)
        case 1000:
          targetCode = FireBanner(proxyReq);
          break;
        case 1001:
          targetCode = SlidingBanner(proxyReq);
          break;

        // External Targets (2000-2999)
        case 2000:
          targetCode = FirePopup(proxyReq);
          break;
        case 2001: // Expanding Modal ID
          console.log("Firing Expand Modal with data:", proxyReq);
          targetCode = FireExpandModal(proxyReq);
          break;

        // Gamification Targets (3000-3999)
        case 3000:
          targetCode = fireFTW(proxyReq);
          break;

        default:
          console.error("Unknown target type:", props.selectedTarget.id);
          return;
      }

      if (targetCode) {
        console.log("Generated target code:", targetCode);
        previewStore.setPreviewContent(JSON.parse(targetCode));
        emit("update-preview", targetCode);
      }
    };

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

    const toggleColorPicker = (id) => {
      const input = document.getElementById(id);
      if (input) {
        input.click();
      }
    };

    const hideColorPicker = (id) => {
      const input = document.getElementById(id);
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

    // Add new slide with default values
    const addSlide = () => {
      slides.value.push({
        content: "New Slide",
        textColor: "#000000",
        position: "middle",
        fontSize: "18px",
        redirectUrl: "",
        finishDate: "",
        layout: "inline",
        format: "day-hour-minute",
        showText: "show",
        backgroundColor: "#4ECDC4",
        customCSS: "",
      });
    };

    // Remove slide (with minimum 2 slides check)
    const removeSlide = (index) => {
      if (slides.value.length <= 2) {
        // Prevent removing if only 2 slides remain
        return;
      }
      slides.value.splice(index, 1);
      updatePreview();
    };

    // Toggle slide accordion
    const toggleSlide = (index) => {
      activeSlide.value = activeSlide.value === index ? null : index;
    };

    // Update individual slide fields
    const updateSlideField = (slideIndex, key, value) => {
      // Only update the slide value without triggering preview
      slides.value[slideIndex][key] = value;
    };

    // Update preview when slides change
    const updatePreview = () => {
      // Update the requirements object with current slides
      const requirements = getRequirements();
      requirements.setSlides = requirements.setSlides || {};
      requirements.setSlides.slides = slides.value;
      emit("update-preview", requirements);
    };

    const activeArrayItems = ref({});

    const toggleArrayItem = (fieldKey, itemIndex) => {
      const key = `${fieldKey}-${itemIndex}`;
      activeArrayItems.value[key] = !activeArrayItems.value[key];
    };

    // Expand newly added items automatically
    const addArrayItem = (groupKey, fieldKey) => {
      const field = props.selectedTarget.TargetRequire[groupKey][fieldKey];
      if (field && field.slideConfig) {
        const newItem = {};
        Object.entries(field.slideConfig).forEach(([key, config]) => {
          newItem[key] = config.value;
        });
        const newIndex = field.value.length;
        field.value = Array.isArray(field.value) ? [...field.value, newItem] : [newItem];

        // Automatically expand the new item
        activeArrayItems.value[`${fieldKey}-${newIndex}`] = true;
      }
    };

    const removeArrayItem = (groupKey, fieldKey, index) => {
      const field = props.selectedTarget.TargetRequire[groupKey][fieldKey];
      if (field && Array.isArray(field.value)) {
        field.value.splice(index, 1);
      }
    };

    const updateArrayItemField = (groupKey, fieldKey, itemIndex, propKey, value) => {
      const field = props.selectedTarget.TargetRequire[groupKey][fieldKey];
      if (field && Array.isArray(field.value) && field.value[itemIndex]) {
        field.value[itemIndex][propKey] = value;
      }
    };

    const svgs = {
      deviceIcons,
      uiIcons,
      inputIcons,
    };

    // Make StyleClasses available to the template
    const classes = StyleClasses;

    return {
      StyleClasses: classes,
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
      slides,
      activeSlide,
      addSlide,
      removeSlide,
      toggleSlide,
      updateSlideField,
      updatePreview,
      svgs,
      activeArrayItems,
      toggleArrayItem,
      addArrayItem,
      removeArrayItem,
      updateArrayItemField,
    };
  },
};
</script>

<style>
/* Only keep dynamic styles that can't be moved to StyleClasses */
.rotate-180 {
  transform: rotate(180deg);
}

.color-picker-trigger {
  min-height: 48px;
}

/* Color picker input styles */
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
