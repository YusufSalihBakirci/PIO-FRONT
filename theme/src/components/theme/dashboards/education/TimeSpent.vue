<template>
    <Card1 colClass="col-xxl-3 col-xl-5 order-xxl-0 order-xl-2 col-lg-6 col-md-5 col-sm-6 box-col-6"
        cardClass="card pie-card" cardhaderClass="card-no-border pb-0" header="true" title="Time Spent on Learning"
        headerTop="true" haderTitle="true" down="true" cardbodyClass="revenue-category">
        <div class="donut-legend" id="legend">
            <apexchart type="donut" height="360" ref="chart" :options="chartOptions14" :series="series14">
            </apexchart>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { series14, chartOptions14 } from "@/core/data/dashboards-chart"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>