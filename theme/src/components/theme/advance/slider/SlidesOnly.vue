<template>
    <Card3 colClass="col-xl-6 col-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="desc mb-0 mt-1"
        headerTitle="true" title="Default swiper slider"
        desc="<span>Use the</span><code>.active</code><span>class and images to prevent browser default image alignment.</span>">
        <div class="carousel slide" id="carouselExampleSlidesOnly" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" :class="item.active == true ? 'active' : ''" v-for="(item, index) in slidesonly"
                    :key="index"><img class="d-block w-100" :src="getImages(item.img)" alt="drawing-room"></div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { slidesonly } from "@/core/data/slider"
import { getImages } from "@/composables/common/getImages"
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>