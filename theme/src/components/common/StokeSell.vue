<template>
    <div :class="mainClass">
        <div class="row">

            <Card1 :colClass="colClass" cardClass="card value-chart" v-for="(item, index) in data" :key="index">
                <div class="row">
                    <div class="col-6">
                        <div :class="item.classes" id="sales-chart">
                            <apexchart type="bar" :height="height" :options="item.options" :series="item.serise">
                            </apexchart>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="valuechart-detail">
                            <div class="text-center">
                                <div class="badge " :class="item.class">{{ item.total }}</div>
                                <h2>{{ item.price }}</h2>
                                <p>{{ item.value }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card1>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
let props = defineProps({
    mainClass: String,
    colClass: String,
    data: Object,
    height: String
})
</script>