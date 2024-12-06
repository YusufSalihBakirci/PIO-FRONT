<template>
    <div class="col-xxl-3 col-xl-5 order-xl-2 order-xxl-0 col-sm-6 box-col-6">
        <div class="card target-card overflow-hidden">
            <div class="card-header card-no-border">
                <ul>
                    <li class="text-center" :class="item.class" v-for="(item, index) in target" :key="index">
                        <h3>{{ item.title }}</h3>
                        <p class="mb-0">{{ item.status }}</p>
                        <h6 :class="item.priceclass">{{ item.price }}</h6>
                    </li>

                </ul>
            </div>
            <div class="card-body p-0">
                <div class="main-img"><img class="img-fluid img-banner" src="@/assets/images/dashboard-2/4.png" alt="" />
                    <ul class="animate-img">
                        <li :class="item.class" v-for="(item, index) in images" :key="index"> <img class="img-fluid"
                                :src="getImages(item.img)" alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { target, images } from "@/core/data/dashboards"
import { getImages } from "@/composables/common/getImages"
</script>