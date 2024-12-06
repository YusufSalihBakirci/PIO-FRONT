<template>
    <Card1 colClass="col-xxl-3 col-xl-4 proorder-xxl-12 col-md-6 box-col-6" cardClass="card"
        cardhaderClass="card-no-border pb-0" header="true" title="Latest Activity" headerTop="true" down="true"
        cardbodyClass="latest-activity" haderTitle="true">
        <ul>
            <li class="d-flex align-items-center gap-2" v-for="(item, index) in activity " :key="index">
                <div class="flex-shrink-0 " :class="item.class">
                    <svg class="stroke-icon " :class="item.svgclass">
                        <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${item.icon}`"></use>
                    </svg>
                </div>
                <div class="flex-grow-1"><router-link to="/ecommerce/details/1">
                        <h6>{{ item.title }}</h6>
                    </router-link>
                    <p>{{ item.sub }}</p>
                </div><span>{{ item.time }}</span>
            </li>
        </ul>
    </Card1>
</template>
<script lang="ts" setup>
import { activity } from "@/core/data/dashboards"
import { defineAsyncComponent } from 'vue'
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>