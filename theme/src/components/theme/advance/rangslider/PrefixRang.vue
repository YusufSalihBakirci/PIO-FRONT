<template>
    <Card3 colClass="col-lg-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Prefix" desc="Use the <code>.range-slider </code>class.">
        <div class="form-group row py-1 my-3">
            <div class="col-md-10">
                <VueSlider v-model="three.value" :data="three.data1" :marks="true" :tooltip="'always'"
                    :tooltip-placement="'top'"></VueSlider>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import { ref, defineAsyncComponent } from "vue"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
interface ThreeData {
    value: number[];
    data1: number[];
}
let three = ref<ThreeData>({
    value: [200, 800],
    data1: [10, 100, 200, 250, 500, 750, 800, 1000],
})
</script>