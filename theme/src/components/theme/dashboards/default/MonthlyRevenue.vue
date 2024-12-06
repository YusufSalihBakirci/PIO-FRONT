<template>
    <Card1 colClass="col-lg-6 proorder-xxl-6 box-col-12" cardClass="card growthcard" cardhaderClass="card-no-border pb-0"
        header="true" haderTitle="true" title="Monthly Revenue Growth" headerTop="true" tab="true" cardbodyClass="pb-0">
        <div id="growth-chart">
            <apexchart type="area" height="350" ref="chart" :options="chartOptions2" :series="series2">
            </apexchart>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
// import { series2, chartOptions2 } from "@/core/data/dashboards-chart"
import {series2 , chartOptions2 } from "../../../../core/data/dashboards-chart"
// const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
const Card1= defineAsyncComponent(() => import("../../../../components/common/card/CardData1.vue"))
</script>