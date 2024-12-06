<template>
    <Card1 colClass="col-xxl-3 col-xl-4 col-md-7 col-sm-6 box-col-4" cardClass="card selling-product"
        cardhaderClass="card-no-border pb-0" header="true" haderTitle="true" title="Top Selling Products
" headerTop="true" down="true">
        <ul>
            <li class="d-flex align-items-center gap-2" v-for="(item, index) in product" :key="index">
                <div class="flex-shrink-0 " :class="item.class">
                    <svg class="stroke-icon " :class="item.stroke">

                        <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${item.icon}`"></use>
                    </svg>
                </div>
                <div class="flex-grow-1"><router-link to="/ecommerce/details/1">
                        <h6>{{ item.name }}</h6>
                    </router-link>
                    <p>{{ item.sub }}</p>
                </div>
                <div class="recent-text">
                    <h5>{{ item.price }}</h5>
                    <p>{{ item.sales }}</p>
                </div>
            </li>
        </ul>
    </Card1>
</template>
<script lang="ts" setup>
import { product } from "@/core/data/dashboards"
import { defineAsyncComponent } from 'vue'
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>