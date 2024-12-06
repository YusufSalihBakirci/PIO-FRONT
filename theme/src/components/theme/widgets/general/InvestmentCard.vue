<template>
    <Card1 colClass="col-xl-3 col-sm-6 box-col-6" cardClass="card" cardhaderClass="card-no-border pb-0" header="true"
        title="Total Investment" headerTop="true" down="true" cardbodyClass="investment-card pt-0" haderTitle="true">
        <div id="investment">
            <apexchart type="radialBar" height="300" ref="chart" :options="chartOptions17" :series="series15">
            </apexchart>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { series15, chartOptions17 } from "@/core/data/dashboards-chart"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>