<template>
  <Card1 colClass="col-xxl-5 col-xl-7 col-lg-12 box-col-7" cardClass="card analytics-card"
    cardhaderClass="card-no-border pb-0" header="true" title="Sales Analytics" headerTop="true" tab="true"
    cardbodyClass="sale-chart-box" haderTitle="true">
    <ul class="d-flex">
      <li class="statistic-icon">
        <div>
          <div>
            <div class="statistic-content"><span class="primary-dot"> </span>Pending</div>
          </div>
          <div class="statistic-num ms-auto text-end font-danger d-flex align-items-center">
            <h5>$4,875</h5>
            <div><span>28%</span><i class="fa-solid fa-chevron-up ms-1"></i></div>
          </div>
        </div>
      </li>
      <li class="statistic-icon">
        <div>
          <div>
            <div class="statistic-content"><span class="secondary-dot"> </span>Complete</div>
          </div>
          <div class="statistic-num ms-auto text-end font-primary d-flex align-items-center">
            <h5>$1,320</h5>
            <div><span>36.28%</span><i class="fa-solid fa-chevron-down ms-1"></i></div>
          </div>
        </div>
      </li>
    </ul>
    <div id="chart-school-performance">
      <apexchart type="line" height="270" ref="chart" :options="chartOptions4" :series="series4">
      </apexchart>
    </div>
  </Card1>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { series4, chartOptions4 } from "@/core/data/dashboards-chart"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>