<template>
    <Card1 colClass="col-xxl-3 col-xl-4 proorder-xxl-11 col-md-6 box-col-6" cardClass="card height-equal"
        cardhaderClass="card-no-border pb-0" header="true" title="Total Invest" headerTop="true" down="true"
        cardbodyClass="total-invest" haderTitle="true">
        <div class="row">
            <div class="col-6 col-md-12 income-chart">
                <div class="Incomechrt" id="Incomechrt">
                    <apexchart type="radialBar" height="400" ref="chart" :options="chartOptions3" :series="series3">
                    </apexchart>
                </div>
            </div>
            <div class="col-6 col-md-12 invest-content text-center">
                <svg class="stroke-icon">
                    <use href="@/assets/svg/icon-sprite.svg#chart-invest"></use>
                </svg>
                <div class="btn btn-pill btn-primary"> <span> </span>Live</div>
                <p class="mb-0 des-title">This Invest Cycle</p>
                <h3>7,48,000</h3>
                <p class="description-title">Current Balance this invest cycle</p>
            </div>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { series3, chartOptions3 } from "@/core/data/dashboards-chart"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>