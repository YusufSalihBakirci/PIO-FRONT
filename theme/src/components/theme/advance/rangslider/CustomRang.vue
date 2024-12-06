<template>
    <Card3 colClass="col-lg-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Custom Values" desc="Use the <code>.range-slider </code>class.">
        <div class="form-group row py-1 my-3">
            <div class="col-md-10">
                <VueSlider v-model="five.value" :data="five.data" :marks="true" :tooltip="'always'"
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
    value: string;
    data: string[];
}
let five = ref<ThreeData>({
    value: 'April',
    data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
})
</script>