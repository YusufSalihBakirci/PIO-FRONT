<template>
    <div class="row">
        <Card2 colClass="col-xl-4 col-md-12 box-col-12" cardClass="card overflow-hidden" chartClass="chart-widget-top"
            :title="item.title" :price="item.number" charts="true" :desc="item.desc" :total="item.total"
            cardbodyClass="row card-body pb-0 m-0" v-for="(item, index) in chart" :key="index">
            <div>
                <apexchart type="area" height="200" :options="item.option" :series="item.series">
                </apexchart>
            </div>
        </Card2>
    </div>
    <div class="row">
        <Card2 colClass="col-md-12 box-col-12" header="true" cardhaderClass="card-no-border pb-0"
            cardClass="card overflow-hidden" chartClass="bar-chart-widget" title="Monthly History" headerTitle="true"
            cardbodyClass="bottom-content card-body">
            <apexchart type="bar" height="380" :options="chartOptions4" :series="series4">
            </apexchart>
        </Card2>
        <Card2 colClass="col-xl-6 col-lg-12 box-col-6 xl-50" cardhaderClass="card-no-border pb-0" header="true"
            cardClass="card " title="Skill Status" cardbodyClass="card-body">
            <div class="chart-container skill-chart">
                <apexchart type="radialBar" height="375" :options="chartOptions5" :series="series5">
                </apexchart>
            </div>
        </Card2>
        <Card2 colClass="col-xl-6 col-lg-12 box-col-6 xl-50" cardhaderClass="card-no-border pb-0" dropdown="true"
            header="true" top="header-top" cardClass="card " title="Order Status" cardbodyClass="card-body">
            <div class="chart-container progress-chart">
                <div id="progress1" v-for="(item, index) in progresschart" :key="index">
                    <apexchart type="bar" height="70" :options="item.option" :series="item.series">
                    </apexchart>
                </div>
            </div>
        </Card2>
    </div>
    <div class="row">
        <Card2 colClass="xl-50 col-xl-7 col-lg-12" cardhaderClass="card-no-border pb-0"
            smallClass="small-chart-widget chart-widgets-small" header="true" headerTitle="true" title="Live Products">
            <apexchart type="area" height="320" :options="chartOptions11" :series="series11">
            </apexchart>
        </Card2>
        <Card2 colClass="xl-50 col-xl-5 col-lg-12" cardhaderClass="card-no-border pb-0" header="true" headerTitle="true"
            title="Turn over">
            <apexchart type="area" height="300" :options="chartOptions12" :series="series12">
            </apexchart>
        </Card2>
        <Card2 colClass="xl-50 col-xl-6 col-lg-12" cardhaderClass="card-no-border pb-0" contain="crypto-chart" header="true"
            headerTitle="true" title="Cryptocurrency Prices">
            <apexchart type="area" height="400" :options="chartOptions13" :series="series13">
            </apexchart>
        </Card2>
        <Card2 colClass="xl-50 col-xl-6 col-lg-12" cardhaderClass="card-no-border pb-0" header="true" headerTitle="true"
            title="Crypto Annotations">
            <div id="crypto-annotation">
                <apexchart type="line" height="400" :options="chartOptions14" :series="series14">
                </apexchart>
            </div>
        </Card2>
    </div>
    <div class="row">
        <Card3 colClass="col-sm-12 box-col-12" contain="donut-chart-widget" cardhaderClass="card-no-border pb-0"
            headerTitle="true" title="Stock Market">
            <div id="crypto-annotation">
                <apexchart type="line" height="450" :options="chartOptions15" :series="series15">
                </apexchart>
            </div>
        </Card3>
        <Card3 colClass="col-xl-5 col-lg-12 box-col-12" cardhaderClass="card-no-border pb-0" title="Finance"
            headerTitle="true">
            <div class="chart-container column-container">
                <apexchart type="line" height="350" :options="chartOptions16" :series="series16">
                </apexchart>
            </div>
        </Card3>
        <Card3 colClass="col-xl-7 col-lg-12 box-col-6" cardhaderClass="card-no-border pb-0" chartClass="chart-container"
            headerTitle="true" title="Order Status">
            <apexchart type="line" height="350" :options="chartOptions17" :series="series17">
            </apexchart>
        </Card3>
        <Card2 colClass="xl-50 col-xl-5 col-lg-12 box-col-6" cardhaderClass="card-no-border pb-0" header="true"
            headerTitle="true" title="Monthly Sales">
            <apexchart type="radar" height="300" :options="chartOptions18" :series="series18">
            </apexchart>
        </Card2>
        <Card2 colClass="xl-50 col-xl-7 col-lg-12 box-col-12" cardhaderClass="card-no-border pb-0"
            smallClass="small-chart-widget chart-widgets-small" header="true" headerTitle="true" title="Uses">
            <apexchart type="bubble" height="320" :options="chartOptions19" :series="series19">
            </apexchart>
        </Card2>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { chart } from "@/core/data/dashboards"
import { progresschart } from "@/core/data/widgets"
import { series4, chartOptions4, series5, chartOptions5, series11, chartOptions11, series12, chartOptions12, series13, chartOptions13, series14, chartOptions14, series15, chartOptions15, series16, chartOptions16, series17, chartOptions17, series18, chartOptions18, series19, chartOptions19 } from "@/core/data/widgets-chart"
const Card2 = defineAsyncComponent(() => import("@/components/common/card/CardData2.vue"))
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>