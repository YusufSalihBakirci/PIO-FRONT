<template>
  <div id="input-panel-main" class="w-1/2 p-3">
    <!-- Target Main Category -->
    <label class="block text-lg text-base font-semibold mb-1" for="target-type"> Target Main Type </label>
    <select class="w-60 p-2 border border-gray-300 rounded-md shadow-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="target-type" v-model="selectedOption" @change="optionChange">
      <option value="" disabled selected :key="-1">Select target type</option>
      <option v-for="(value, key, index) in TargetConfig" :value="key" :key="index">
        {{ key }}
      </option>
    </select>
    <!-- Target Main Category -->

    <!-- Target Sub-Category -->
    <template v-if="selectedObjectElement">
      <label class="block text-lg text-base font-semibold mb-1 ml-4" for="target-sub-type"> Target Sub-Type </label>
      <select class="w-60 p-2 border border-gray-300 rounded-md shadow-sm mb-2 ml-4 focus:outline-none focus:ring-2 focus:ring-blue-500" name="target-sub-type" v-model="selectedSubOption">
        <option value="" disabled selected :key="-1">Select target sub-type</option>
        <option v-for="(value, key) in selectedObjectElement" :value="key" :key="value.id">
          {{ key }}
        </option>
      </select>
    </template>
    <!-- Target Sub-Category -->

    <button @click="subOptionChange" class="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">Test</button>

    <!-- Target Requirements -->
    <div v-if="selectedTargetType" class="mt-4">
      <h2 class="font-bold text-lg ml-8">Target Requirements</h2>
      <!-- Inline target türleri için TargetCreator.vue içerisinde pageReader.js çalışacak. Inline targetlar için generalId değeri a olacak -->
      <TargetCreator class="ml-8" :is-inline="generalIdToPass == 'a'" :selected-target="selectedTargetType" :data-id="selectedTargetType.id"></TargetCreator>
    </div>
    <div v-else class="mt-4">
      <h2 class="font-bold text-gray-500 italic text-lg ml-8">Select a target type above</h2>
    </div>
    <!-- Target Requirements -->
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
    };
  },
  methods: {
    test() {
      console.log(this.TargetConfig);
    },
    optionChange() {
      if (this.TargetConfig[this.selectedOption]) {
        //listede generalId'nin basilmasina gerek yoktu. destructure ile kullanilmasi engellendi
        const { generalId, ...filteredObject } = this.TargetConfig[this.selectedOption];
        this.generalIdToPass = generalId;
        this.selectedObjectElement = filteredObject;
      } else {
        //secilmis herhangi bir secenek yoksa bos eleman gonder ki bir sonraki adim renderlanmasin
        this.selectedObjectElement = null;
      }
      this.selectedSubOption = "";
      this.selectedTargetType = null;
      console.log(this.selectedOption);
    },
    subOptionChange() {
      this.selectedTargetType = this.selectedObjectElement ? this.selectedObjectElement[this.selectedSubOption] : null;
    },
  },
  setup() {},
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

/* Track */
#input-panel-main::-webkit-scrollbar-track {
  background: #f1f1f1;
  padding: 0px 10px;
}

/* Handle */
#input-panel-main::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
#input-panel-main::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
