<template>
    <Card1 colClass="col-xxl-3 col-xl-4 proorder-xxl-2 col-sm-6 box-col-6" headerTop="true" cardClass="card earning-card"
        cardhaderClass="pb-0 card-no-border" header="true" item="Monthly" item1="Weekly" item2="Monthly" item3="Yearly"
        drop="true" title="Earnings Trend" haderTitle="true" cardbodyClass="pb-0">
        <div class="d-flex align-center gap-3">
            <h2>$4,875</h2><span class="text-primary">
                36.28%
                <svg class="stroke-icon stroke-primary">
                    <use href="@/assets/svg/icon-sprite.svg#arrow-down"></use>
                </svg></span>
        </div>
        <div id="earnings-chart">
            <apexchart type="bar" height="225" ref="chart" :options="chartOptions" :series="series">
            </apexchart>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { series, chartOptions } from "@/core/data/dashboards-chart"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>