<template>
    <Card1 :colClass="colClass" :cardClass="cardClass" cardhaderClass="card-no-border pb-0" header="true" haderTitle="true"
        title="Monthly Revenue Growth" headerTop="true" tab="true" cardbodyClass="pb-0">
        <div id="growth-chart">

            <apexchart :type="option?.chart.type" :height="option?.chart.height" :options="option" :series="series">
            </apexchart>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
let props = defineProps({
    cardClass: String,
    colClass: String,
    series: Object,
    option: Object
})
</script>