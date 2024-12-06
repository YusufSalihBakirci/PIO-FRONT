<template>
    <Card1 colClass="col-sm-6 col-xl-3 box-col-6" cardClass="card widget-1" v-for="(item, index) in widgets" :key="index">
        <div class="widget-content">
            <div class="widget-round " :class="item.class">
                <div class="bg-round">
                    <svg class="svg-fill">

                        <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${item.svg1}`"></use>
                    </svg>
                    <svg class="half-circle svg-fill">
                        <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${item.svg2}`"></use>
                    </svg>
                </div>
            </div>
            <div>
                <h4>{{ item.number }}</h4><span class="f-light">{{ item.title }}</span>
            </div>
        </div>
        <div class=" f-w-500" :class="item.font"><i class=" icon-rotate me-1"
                :class="item.icon"></i><span>{{ item.total }}</span></div>
    </Card1>
</template>
<script lang="ts" setup>
import { widgets } from "@/core/data/dashboards"
import { defineAsyncComponent } from 'vue'
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>