<template>
    <Card1 colClass="col-xxl-3 col-xl-4 col-md-5 col-sm-6 box-col-4" cardClass="card sale-card overflow-hidden"
        cardhaderClass="card-no-border pb-0" header="true" headerTitle1="true" title="$1500.89K" headerTop="true"
        down="true" desc="Sales last 5 Months" cardbodyClass="p-0 ">
        <div class="current-sale-container order-container">
            <div class="overview-wrapper" id="orderoverview">
                <apexchart type="area" height="345" ref="chart" :options="chartOptions6" :series="series6">
                </apexchart>
            </div>
            <div class="back-bar-container">
                <div id="order-bar">
                    <apexchart type="bar" height="250" ref="chart" :options="chartOptions5" :series="series5">
                    </apexchart>
                </div>
            </div>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { series5, chartOptions5, series6, chartOptions6 } from "@/core/data/dashboards-chart"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>