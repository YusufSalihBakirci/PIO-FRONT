<template>
    <Card1 colClass="col-xxl-6 col-xl-5 box-col-12" cardClass="card radial-card">
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 radial-chart">
                <div class="salesStatsRadialChart" id="salesStatsRadialChart">
                    <apexchart type="radialBar" height="345" ref="chart" :options="chartOptions18" :series="series16">
                    </apexchart>
                </div>
                <div class="content-label">
                    <p class="mb-0 font-primary">As From </p>
                    <h4>25 March</h4>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 radial-text">
                <div class="radial-content">
                    <div class="text-center">
                        <h4>Total Goal</h4>
                        <h3>$92,000.30</h3>
                        <hr />
                        <h5 class="progress-widget">Goal Archive : <span>$81,000.000</span></h5>
                        <div class="progress sm-progress-bar progress-animate">
                            <div class="progress-gradient-primary" role="progressbar" style="width: 65%" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h5 class="progress-widget">Duration: <span>9 Month</span></h5>
                        <div class="progress sm-progress-bar progress-animate">
                            <div class="progress-gradient-primary" role="progressbar" style="width: 65%" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div><router-link class="btn btn-pill btn-primary" to="/widgets/general" download="">Download
                            Details</router-link>
                    </div>
                </div>
            </div>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { series16, chartOptions18 } from "@/core/data/dashboards-chart"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>