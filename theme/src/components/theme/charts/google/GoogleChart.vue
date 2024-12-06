<template>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" cardbodyClass="p-0 chart-block" cardClass="overflow-hidden" headerTitle="true" cardhaderClass="card-no-border pb-0" title="Area Chart 1">
        <GChart class="chart-overflow" id="area-chart1" type="AreaChart" :data="area_chart.chartData_1"
            :options="area_chart.options_1" />
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" cardbodyClass="p-0 chart-block" cardClass="overflow-hidden" headerTitle="true" cardhaderClass="card-no-border pb-0" title="Area Chart 2">
        <GChart class="chart-overflow" id="area-chart2" type="AreaChart" :data="area_chart1.chartData_2"
            :options="area_chart1.options_2" />
    </Card3>
    <ColimnChart />
    <Card3 colClass="col-sm-12 box-col-12" cardbodyClass="chart-block" cardClass="overflow-hidden" headerTitle="true" cardhaderClass="card-no-border pb-0" title="Gantt Chart">
        <GChart class="chart-overflow" id="gantt_chart" :type="chartType" :data="chartData" :options="chartOptions"
            :settings="settings" />
    </Card3>
    <Card3 colClass="col-sm-12 box-col-12" cardbodyClass="chart-block" headerTitle="true" cardClass="overflow-hidden" cardhaderClass="card-no-border pb-0" title="Line Chart">
        <GChart class="chart-overflow" id="line-chart" type="LineChart" :data="line_chart.chartData_1"
            :options="line_chart.options_1" />
    </Card3>
    <Card3 colClass="col-sm-12 box-col-12" cardbodyClass="chart-block" headerTitle="true" cardClass="overflow-hidden" cardhaderClass="card-no-border pb-0" title="Combo Chart">
        <GChart class="chart-overflow" id="combo-chart" type="ComboChart" :data="combo_chart.chartData_1"
            :options="combo_chart.options_1" />
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-12" cardbodyClass="chart-block" headerTitle="true" cardClass="overflow-hidden" cardhaderClass="card-no-border pb-0" title="bar-chart2">
        <GChart id="bar-chart2" type="BarChart" :data="bar_chart.chartData_1" :options="bar_chart.options_1" />
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-12" cardbodyClass="chart-block" headerTitle="true" cardClass="overflow-hidden" cardhaderClass="card-no-border pb-0" title="word tree">
        <GChart class="word-tree" id="wordtree_basic" :type="chartTypes" :data="chartDatas" :options="chartOptions1"
            :settings="settings1" />
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" cardbodyClass="p-0 chart-block" headerTitle="true" cardClass="overflow-hidden" cardhaderClass="card-no-border pb-0" title="Pie Chart 1">
        <GChart class="chart-overflow" id="pie-chart1" type="PieChart" :data="pie_chart.chartData_1"
            :options="pie_chart.options_1" />
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" cardbodyClass="p-0 chart-block" headerTitle="true" cardClass="overflow-hidden" cardhaderClass="card-no-border pb-0" title="Pie Chart 2">
        <GChart class="chart-overflow" id="pie-chart3" type="PieChart" :data="pie_chart.chartData_2"
            :options="pie_chart.options_2" />
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" cardbodyClass="p-0 chart-block" headerTitle="true" cardClass="overflow-hidden" cardhaderClass="card-no-border pb-0" title="Pie Chart 3">
        <GChart class="chart-overflow" id="pie-chart4" type="PieChart" :data="pie_chart1.chartData_3"
            :options="pie_chart1.options_3" />
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" cardbodyClass="p-0 chart-block" headerTitle="true" cardClass="overflow-hidden" cardhaderClass="card-no-border pb-0" title="Pie Chart 4">
        <GChart class="chart-overflow" id="pie-chart2" type="PieChart" :data="pie_chart2.chartData_3"
            :options="pie_chart2.options_3" />
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, } from 'vue'
import { GChart } from "vue-google-charts";
import { area_chart, area_chart1, chartType, chartData, chartOptions, bar_chart, pie_chart2, pie_chart, pie_chart1, settings, line_chart, combo_chart, chartTypes, chartDatas, chartOptions1, settings1 } from "@/core/data/google-chart"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const ColimnChart = defineAsyncComponent(() => import("@/components/theme/charts/google/ColimnChart.vue"))
</script>