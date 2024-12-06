<template>
    <Card1 colClass="col-xxl-3 col-xl-4 proorder-xxl-3 col-md-6 box-col-6" cardClass="card"
        cardhaderClass="card-no-border pb-0" header="true" title="Total Investment" headerTop="true" down="true"
        cardbodyClass="investment-card" haderTitle="true">
        <div id="investment">
            <apexchart type="radialBar" height="380" ref="chart" :options="chartOptions1" :series="series1">
            </apexchart>
        </div>
        <ul class="d-flex align-center justify-content-center">
            <li class="text-center">
                <p class="mb-0">Total</p>
                <h6>$45,9760</h6>
            </li>
            <li class="text-center">
                <p class="mb-0">Monthly</p>
                <h6>$12,263</h6>
            </li>
            <li class="text-center">
                <p class="mb-0">Daily</p>
                <h6>$32600</h6>
            </li>
        </ul>
    </Card1>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { series1, chartOptions1 } from "@/core/data/dashboards-chart"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>