<template>
    <Card1 colClass="col-xxl-3 col-xl-4 col-sm-6 box-col-5 box-order-1" cardClass="card "
        cardhaderClass="card-no-border pb-0" header="true" title="Notice Board" headerTop="true" haderTitle="true"
        down="true" cardbodyClass="notice-board">
        <ul>
            <li class="d-flex gap-2" v-for="(item, index) in notice" :key="index">
                <div class="flex-shrink-0"><img class="img-fluid" :src="getImages(item.img)" alt="" /></div>
                <div class="flex-grow-1">
                    <h6>{{ item.title }}</h6>
                    <p class="text-truncate">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </Card1>
</template>
<script lang="ts" setup>
import { notice } from "@/core/data/dashboards"
import { defineAsyncComponent } from 'vue'
import { getImages } from "@/composables/common/getImages"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>