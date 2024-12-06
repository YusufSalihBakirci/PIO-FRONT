<template>
    <div class="col-xxl-6 col-xl-7 box-col-12">
        <div class="row g-sm-3 height-equal-2 widget-charts">
            <Card1 colClass="col-sm-6" cardClass="card small-widget mb-sm-0" :cardbodyClass="item.class"
                v-for="(item, index) in small" :key="index">
                <span class="f-light">{{ item.title }}</span>
                <div class="d-flex align-items-end gap-1">
                    <h4>{{ item.number }}</h4><span class="f-12 f-w-500" :class="item.font"><i
                            :class="item.icon"></i><span>{{
                                item.total }}</span></span>
                </div>
                <div class="bg-gradient">
                    <svg class="stroke-icon svg-fill">
                        <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${item.svg}`"></use>
                    </svg>
                </div>
            </Card1>

            <Card1 colClass="col-sm-6" cardClass="card widget-1 widget-with-chart mb-xl-0"
                v-for="(item, index) in smallchart" :key="index">
                <div>
                    <h4 class="mb-1">{{ item.number }}</h4><span class="f-light">{{ item.title }}</span>
                </div>
                <div :class="item.chartclass">
                    <div id="orderchart1">
                        <apexchart :type="item.option.chart.type" :height="item.option.chart.height"
                            :width="item.option.chart.width" ref="chart" :options="item.option" :series="item.series">
                        </apexchart>
                    </div>
                </div>
            </Card1>


        </div>
    </div>
</template>
<script lang="ts" setup>
import { small, smallchart } from "@/core/data/dashboards"
import { defineAsyncComponent } from 'vue'
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>