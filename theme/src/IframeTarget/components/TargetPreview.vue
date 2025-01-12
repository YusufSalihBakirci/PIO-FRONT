<template>
  <div class="w-1/2 relative h-100 p-5">
    <label for="device" class="inline text-lg text-base font-semibold mb-1 w-100 text-center"
      >Site Cozunurlugu</label
    >
    <select
      name="device"
      class="w-60 p-2 border border-gray-300 rounded-md shadow-sm mb-1 ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      @change="deviceSizeChange"
    >
      <optgroup v-for="(optGvalue, optGkey) in breakPoints" :label="optGkey" :key="optGkey">
        <option
          v-for="(optVal, optKey) in optGvalue"
          :value="optVal"
          :data-width="optVal.width"
          :data-height="optVal.height"
          :data-fill-ratio="optVal.fillRatio"
          :key="optKey"
        >
          {{ optVal.width + 'x' + optVal.height }}
        </option>
      </optgroup>
    </select>

    <iframe
      id="piovare-frame"
      ref="siteFrame"
      :src="iframeSrc"
      sandbox="
        allow-forms allow-modals
        allow-orientation-lock
        allow-pointer-lock
        allow-popups
        allow-same-origin
        allow-scripts
        "
    ></iframe>
  </div>
</template>

<script>
import { watch } from 'vue'
import { pageHTML } from '../../public/FoodMart-1.0.0/foodmart'
import { useIframeStore } from '@/stores/iframeStore'
// import pageReader from './AuxJS/PageReader.js'

export default {
  data() {
    return {
      iframeSrc: '../../public/FoodMart-1.0.0/index.html',
      // iframeSrc: 'https://www.relateddigital.com/en/',
      pageHTML,
      // iframe icerisinde srcdoc her zaman onceliklidir. Dolayisiyla src fallback olarak kullanilmalidir. burada hatayi handle etmenin bir yoru bulunmali
      // su anda iki versiyon da calisir durumda
      breakPoints: {
        desktop: [
          { width: '1920', height: '1080', fillRatio: '0.45' },
          { width: '1366', height: '768', fillRatio: '0.6' },
          { width: '1600', height: '900', fillRatio: '0.5' },
        ],
        tablet: [
          { width: '810', height: '1080', fillRatio: '0.7' },
          { width: '1280', height: '800', fillRatio: '0.65' },
          { width: '601', height: '962', fillRatio: '0.7' },
        ],
        mobile: [
          { width: '390', height: '844', fillRatio: '0.9' },
          { width: '412', height: '915', fillRatio: '0.9' },
          { width: '360', height: '780', fillRatio: '0.9' },
        ],
      },
    }
  },

  methods: {
    deviceSizeChange(e) {
      const selectedSizeOption = e.target.options[e.target.selectedIndex]
      const selectedWidth = selectedSizeOption.dataset.width
      const selectedHeight = selectedSizeOption.dataset.height
      const selectedFillRatio = selectedSizeOption.dataset.fillRatio

      const iframe = this.$refs.siteFrame // Access the iframe using Vue ref
      iframe.style.width = `${selectedWidth}px` // Set the width
      iframe.style.height = `${selectedHeight}px` // Set the height

      const parent = iframe.parentElement
      const parentRect = parent.getBoundingClientRect()
      const parentWidth = parentRect.width
      const parentHeight = parentRect.height

      // Calculate the scale factor
      const aspectRatio = parentHeight / parentWidth
      console.log(aspectRatio, 16 / 9)

      iframe.style.transform = `translate(-50%, -50%) scale(${selectedFillRatio})`
    },
  },
  setup() {
    watch(
      () => pageHTML,
      (newValue) => {
        if (newValue) {
          console.log('watch calisti')
          const iframeStore = useIframeStore()
          iframeStore.setIframeContent(newValue)
        }
      },
    )
  },

  mounted() {
    const iframe = this.$refs.siteFrame // Access the iframe using a Vue ref

    // Add the 'load' event listener to the iframe element
    iframe.addEventListener('load', () => {
      // Access the iframe's content
      if (iframe) {
        // Example: Use your iframe store to set iframe content
        const iframeStore = useIframeStore()
        iframeStore.setIframeContent(iframe)
      } else {
        console.warn('Iframe contentWindow is not available')
      }
    })
  },
}
</script>

<style scoped>
#piovare-frame {
  margin: 10px;
  border: 5px solid lightgray;
  border-radius: 5px;
  width: 1920px;
  height: 1080px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.45);
  /* scale: 0.35, 0.35; */
  position: absolute;
  right: 0;
}
</style>
