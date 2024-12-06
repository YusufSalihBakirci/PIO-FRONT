<template>
    <Card3 colClass="col-xl-6 col-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="desc mb-0 mt-1"
        headerTitle="true" title="Disable Touch Swiping"
        desc="<span>Use the</span><code>data-bs-touch</code><span>Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled using the  attribute.</span>">
        <div class="carousel slide" id="carouselExampleControlsNoTouching" data-bs-touch="false">
            <div class="carousel-inner">
                <div class="carousel-item" :class="item.active == true ? 'active' : ''" v-for="(item, index) in disable"
                    :key="index"><img class="d-block w-100" :src="getImages(item.img)" alt="drawing-room"></div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span
                    class="visually-hidden">Previous</span></button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span
                    class="visually-hidden">Next</span></button>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { disable } from "@/core/data/slider"
import { getImages } from "@/composables/common/getImages"
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>
