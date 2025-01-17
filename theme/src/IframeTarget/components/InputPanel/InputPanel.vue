<template>
  <div id="input-panel-main" class="w-1/2 p-3">
    <template v-if="!showRequirements">
      <!-- Target Main Category -->
      <div class="mb-6">
        <label class="block text-lg font-semibold mb-4">Target Main Type</label>
        <div class="grid grid-cols-2 gap-4">
          <button
            v-for="type in targetTypes"
            :key="type.id"
            @click="selectMainType(type.value)"
            class="flex flex-col items-center p-4 border rounded-xl transition-all duration-200 hover:shadow-lg"
            :class="[
              selectedOption === type.value 
                ? 'border-blue-500 bg-blue-50 text-blue-600 shadow-md' 
                : 'border-gray-200 hover:border-blue-300'
            ]"
          >
            <div class="w-12 h-12 flex items-center justify-center mb-3">
              <img :src="type.image" :alt="type.label" class="w-[50px] h-[50px] object-cover rounded-lg">
            </div>
            <span class="font-medium">{{ type.label }}</span>
          </button>
        </div>
      </div>

      <!-- Target Sub-Category -->
      <template v-if="selectedObjectElement">
        <label class="block text-lg font-semibold mb-1 ml-4">Target Sub-Type</label>
        <div class="relative ml-4">
          <div 
            class="w-full border border-gray-300 rounded-lg bg-white shadow-md mb-2 cursor-pointer"
            @click="toggleDropdown"
          >
            <div class="p-3 flex items-center justify-between">
              <span class="text-gray-500">{{ selectedSubOption || 'Select target sub-type' }}</span>
              <svg 
                class="w-5 h-5 text-gray-400 transition-transform duration-200"
                :class="{ 'rotate-180': isDropdownOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <!-- Custom Dropdown Menu -->
          <div 
            v-if="isDropdownOpen"
            class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg"
          >
            <div 
              v-for="(value, key) in selectedObjectElement" 
              :key="key"
              @click="selectOption(key)"
              class="p-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 border-b border-gray-100 last:border-b-0"
            >
              <img 
                :src="getSubTypeImage(key)" 
                :alt="key"
                class="w-[50px] h-[50px] object-cover rounded-lg"
              >
              <div class="flex flex-col">
                <span class="font-medium text-gray-700">{{ key }}</span>
                <span class="text-sm text-gray-500">{{ getSubTypeDescription(key) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Create Button -->
        <div class="flex justify-end mt-4 mr-4" v-if="selectedSubOption">
          <button 
            @click="createTarget"
            class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <span>Create Target</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </template>
    </template>

    <!-- Target Requirements -->
    <div v-if="showRequirements" class="mt-4">
      <div class="flex items-center gap-2 ml-8 mb-4">
        <h1 class="font-bold text-2xl text-blue-600">{{ selectedOption }}</h1>
        <span class="text-gray-400">></span>
        <h2 class="font-bold text-xl text-gray-600">{{ selectedSubOption }}</h2>
      </div>
      <h2 class="font-bold text-lg ml-8">Target Requirements</h2>
      <TargetCreator 
        class="ml-8" 
        :is-inline="generalIdToPass == 'a'" 
        :selected-target="selectedTargetType" 
        :data-id="selectedTargetType.id"
      />
    </div>
    <div v-else-if="selectedSubOption" class="mt-4">
      <h2 class="font-bold text-gray-500 italic text-lg ml-8">Click Create Target to continue</h2>
    </div>
    <div v-else class="mt-4">
      <h2 class="font-bold text-gray-500 italic text-lg ml-8">Select a target type above</h2>
    </div>
  </div>
</template>

<script>
import TargetCreator from "./TargetCreator.vue";
import TargetConfig from "../TargetTypes/TargetConfigs";

export default {
  components: {
    TargetCreator,
  },
  data() {
    return {
      TargetConfig,
      selectedOption: "",
      selectedSubOption: "",
      selectedObjectElement: null,
      selectedTargetType: null,
      generalIdToPass: "",
      isDropdownOpen: false,
      showRequirements: false,
      targetTypes: [
        {
          id: 1,
          label: 'Inline',
          value: 'Inline Target',
          image: 'https://picsum.photos/50/50?random=5'
        },
        {
          id: 2,
          label: 'External',
          value: 'External Target',
          image: 'https://picsum.photos/50/50?random=6'
        },
        {
          id: 3,
          label: 'Gamification',
          value: 'Gamification',
          image: 'https://picsum.photos/50/50?random=7'
        },
        {
          id: 4,
          label: 'Customize',
          value: 'Customize',
          image: 'https://picsum.photos/50/50?random=8'
        }
      ],
      subTypeDetails: {
        'Banner': {
          image: 'https://picsum.photos/50/50?random=1',
          description: 'Create engaging banners for your website'
        },
        'Pop-up': {
          image: 'https://picsum.photos/50/50?random=2',
          description: 'Design interactive pop-up messages'
        },
        'FindToWin': {
          image: 'https://picsum.photos/50/50?random=3',
          description: 'Create interactive treasure hunt experiences'
        },
        'CustomizeExperience': {
          image: 'https://picsum.photos/50/50?random=4',
          description: 'Build custom interactive experiences'
        }
      }
    };
  },
  methods: {
    selectMainType(type) {
      this.selectedOption = type;
      this.optionChange();
    },
    optionChange() {
      if (this.TargetConfig[this.selectedOption]) {
        const { generalId, ...filteredObject } = this.TargetConfig[this.selectedOption];
        this.generalIdToPass = generalId;
        this.selectedObjectElement = filteredObject;
      } else {
        this.selectedObjectElement = null;
      }
      this.selectedSubOption = "";
      this.selectedTargetType = null;
      this.showRequirements = false;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.selectedSubOption = option;
      this.isDropdownOpen = false;
    },
    getSubTypeImage(type) {
      return this.subTypeDetails[type]?.image || 'https://picsum.photos/50/50?random=0';
    },
    getSubTypeDescription(type) {
      return this.subTypeDetails[type]?.description || 'Select a target sub-type';
    },
    createTarget() {
      if (this.selectedObjectElement && this.selectedSubOption) {
        this.selectedTargetType = this.selectedObjectElement[this.selectedSubOption];
        this.showRequirements = true;
      }
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#input-panel-main')) {
        this.isDropdownOpen = false;
      }
    });
  }
};
</script>

<style scoped>
#input-panel-main {
  height: 90vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

#input-panel-main::-webkit-scrollbar {
  width: 5px;
}

#input-panel-main::-webkit-scrollbar-track {
  background: #f1f1f1;
}

#input-panel-main::-webkit-scrollbar-thumb {
  background: #888;
}

#input-panel-main::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
