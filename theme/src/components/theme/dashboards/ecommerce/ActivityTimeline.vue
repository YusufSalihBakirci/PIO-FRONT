<template>
    <Card1 colClass="col-xxl-3 col-xl-5 col-sm-6 box-col-6" cardClass="card" cardhaderClass="card-no-border pb-0"
        header="true" title="Activity Timeline" headerTop="true" haderTitle="true" down="true"
        cardbodyClass="timeline-card">
        <div class="activity-timeline">
            <div class="d-flex align-items-start" v-for="(item, index) in timeline" :key="index">
                <div class="activity-line" v-if="item.activeline"></div>
                <div :class="item.dotclass"></div>
                <div class="flex-grow-1">
                    <p class="mt-0 todo-font" v-html="item.date"></p><span class="f-w-700">{{ item.title }}</span>
                    <p class="mb-0 activity-text">{{ item.desc }}</p>
                    <ul class="img-wrapper" v-if="item.imgs">
                        <li v-for="(items, index) in item.children" :key="index"><img class="img-fluid"
                                :src="getImages(items.img)" alt="" /></li>
                    </ul>
                </div><i class="fa-solid fa-circle pull-right" :class="item.circledot"></i>
            </div>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { timeline } from "@/core/data/dashboards"
import { defineAsyncComponent } from 'vue'
import { getImages } from "@/composables/common/getImages"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>