<template>
    <Card3 colClass="col-xl-6 col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Advanced SMIL Animations">
        <chartist class="ct-6 flot-chart-container" ratio="" type="Line" :data="chart8.data" :options="chart8.options"
            :event-handlers="chart8.eventHandlers"></chartist>
    </Card3>
    <Card3 colClass="col-xl-6 col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="SVG Path animation">
        <chartist class="ct-7 flot-chart-container" ratio="" type="Line" :data="chart2.data" :options="chart2.options"
            :event-handlers="chart2.eventHandlers">
        </chartist>
    </Card3>
    <Card3 colClass="col-xl-6 col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Animating a Donut with Svg.animate">
        <chartist class="ct-8 flot-chart-container" ratio="" type="Pie" :data="chart6.data" :options="chart6.options"
            :event-handlers="chart6.eventHandlers">
        </chartist>
    </Card3>
    <Card3 colClass="col-xl-6 col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Bi-polar Line chart with area only">
        <chartist class="ct-5 flot-chart-container" ratio="" type="Line" :data="chart4.data" :options="chart4.options">
        </chartist>
    </Card3>
    <Card3 colClass="col-xl-6 col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Line chart with area">
        <chartist class="ct-4 flot-chart-container" ratio="" type="Line" :data="chart5.data" :options="chart5.options">
        </chartist>
    </Card3>
    <Card3 colClass="col-xl-6 col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Bi-polar bar chart">
        <chartist class="ct-9 flot-chart-container" ratio="" type="Bar" :data="chart10.data" :options="chart10.options">
        </chartist>
    </Card3>
    <Card3 colClass="col-xl-6 col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Stacked bar chart">
        <chartist class="ct-10 flot-chart-container" ratio="" type="Bar" :data="chart7.data" :options="chart7.options">
        </chartist>
    </Card3>
    <Card3 colClass="col-xl-6 col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Horizontal bar chart">
        <chartist class="ct-11 flot-chart-container" ratio="" type="Bar" :data="chart11.data" :options="chart11.options">
        </chartist>
    </Card3>
    <Card3 colClass="col-xl-6 col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Extreme responsive configuration">
        <chartist class="ct-12 flot-chart-container" ratio="" type="Bar" :data="chart9.data" :options="chart9.options"
            :responsiveOptions="chart9.responsiveOptions">
        </chartist>
    </Card3>
    <Card3 colClass="col-xl-6 col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Simple line chart">
        <chartist class="ct-1 flot-chart-container" ratio="" type="Line" :data="chart1.data" :options="chart1.options">
        </chartist>
    </Card3>
    <Card3 colClass="col-xl-6 col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Holes in data">
        <chartist class="ct-2 flot-chart-container" ratio="" type="Line" :data="chart12.data" :options="chart12.options">
        </chartist>
    </Card3>
    <Card3 colClass="col-xl-6 col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Filled holes in data">
        <chartist class="ct-3 flot-chart-container" ratio="" type="Line" :data="chart13.data" :options="chart13.options">
        </chartist>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, } from 'vue'
import { chart8, chart2, chart6, chart4, chart5, chart10, chart7, chart11, chart9, chart1, chart12, chart13 } from "@/core/data/chartist-chart"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>