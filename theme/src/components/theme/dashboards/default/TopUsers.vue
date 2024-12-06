<template>
    <Card1 colClass="col-xxl-3 col-xl-5 proorder-xxl-4 col-md-6 box-col-6" cardClass="card"
        cardhaderClass="card-no-border pb-0" header="true" title="Top Users" headerTop="true" down="true"
        cardbodyClass="top-user pt-2" haderTitle="true">
        <ul>
            <li class="d-flex align-items-center justify-content-between gap-2" v-for="(item, index) in user" :key="index">
                <div class="d-flex gap-2">
                    <div class="flex-shrink-0 comman-round"><img :src="getImages(item.img)" alt="" /></div>
                    <div><a href="#">
                            <h6>{{ item.name }}</h6>
                        </a>
                        <p>
                            <svg class="stroke-icon">
                                <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${item.icon}`"></use>
                            </svg>{{ item.sub }}
                        </p>
                    </div>
                </div>
                <button class="btn " :class="item.class">{{ item.status }}</button><span>{{ item.price }}</span>
            </li>

        </ul>
    </Card1>
</template>
<script lang="ts" setup>
import { user } from "@/core/data/dashboards"
import { defineAsyncComponent } from 'vue'
import { getImages } from "@/composables/common/getImages"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>