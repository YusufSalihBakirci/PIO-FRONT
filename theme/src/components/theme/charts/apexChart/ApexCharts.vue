<template>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" headerTitle="true" cardhaderClass="card-no-border pb-0"
        title="Radar Chart">
        <apexchart height="350" type="radar" :options="chartOptions" :series="series"></apexchart>
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" headerTitle="true" cardhaderClass="card-no-border pb-0"
        title="Radial Bar Chart">
        <apexchart height="380" type="radialBar" :options="chartOptions1" :series="series1"></apexchart>
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-12 box-col-12" headerTitle="true" cardhaderClass="card-no-border pb-0"
        title="Candlestick Chart">
        <apexchart height="350" type="candlestick" :options="chartOptions2" :series="series2"></apexchart>
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" headerTitle="true" cardhaderClass="card-no-border pb-0"
        title="Basic Area Chart">
        <apexchart height="350" type="area" :options="chartOptions3" :series="series3"></apexchart>
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" headerTitle="true" cardhaderClass="card-no-border pb-0"
        title="Area Spaline Chart">
        <apexchart height="350" type="area" :options="chartOptions4" :series="series4"></apexchart>
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" headerTitle="true" cardhaderClass="card-no-border pb-0"
        title="Bar chart">
        <apexchart height="350" type="bar" :options="chartOptions5" :series="series5"></apexchart>
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" headerTitle="true" cardhaderClass="card-no-border pb-0"
        title="Column Chart">
        <apexchart height="350" type="bar" :options="chartOptions6" :series="series6"></apexchart>
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-12" headerTitle="true" cardhaderClass="card-no-border pb-0"
        title="3d Bubble Chart ">
        <apexchart height="350" type="bubble" :options="chartOptions7" :series="series7"></apexchart>
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" headerTitle="true" cardhaderClass="card-no-border pb-0"
        title="Stepline Chart">
        <apexchart height="350" type="line" :options="chartOptions8" :series="series8"></apexchart>
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-12 box-col-6" headerTitle="true" cardhaderClass="card-no-border pb-0"
        title="Column Chart">
        <apexchart height="350" type="line" :options="chartOptions9" :series="series9"></apexchart>
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" cardbodyClass="apex-chart" headerTitle="true"
        cardhaderClass="card-no-border pb-0" title="Pie Chart">
        <apexchart width="380" type="pie" :options="chartOptions10" :series="series10"></apexchart>
    </Card3>
    <Card3 colClass="col-sm-12 col-xl-6 box-col-6" cardbodyClass="apex-chart" headerTitle="true"
        cardhaderClass="card-no-border pb-0" title="Donut Chart">
    <apexchart width="380" type="donut" :options="chartOptions11" :series="series11"></apexchart>
</Card3>
<Card3 colClass="col-sm-12 col-xl-12 box-col-12" headerTitle="true" cardhaderClass="card-no-border pb-0"
    title="Mixed Chart">
    <apexchart height="350" type="line" :options="chartOptions12" :series="series12"></apexchart>
</Card3></template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { series, chartOptions, series12, chartOptions12, series11, chartOptions11, series10, chartOptions10, series9, chartOptions9, series8, chartOptions8, series7, chartOptions7, series6, chartOptions6, series5, chartOptions5, series4, chartOptions4, series3, chartOptions3, series2, chartOptions2, series1, chartOptions1, } from "@/core/data/apex-chart"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>