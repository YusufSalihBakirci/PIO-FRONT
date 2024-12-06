<template>
    <Card3 colClass="col-xl-6 col-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="desc mb-0 mt-1"
        headerTitle="true" title="Cross-Fade"
        desc="<span>Add</span><code>.carousel-fade</code><span>to your carousel to animate slides with a fade transition instead of a slide.you may want to add .bg-body or some custom CSS to the .carousel-items for proper cross-fading.</span>">
        <div class="carousel slide carousel-fade" id="carouselExampleFade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" :class="item.active == true ? 'active' : ''" v-for="(item, index) in cross"
                    :key="index"><img class="d-block w-100" :src="getImages(item.img)" alt="drawing-room"></div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span
                    class="visually-hidden">Previous</span></button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span
                    class="visually-hidden">Next</span></button>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { cross } from "@/core/data/slider"
import { getImages } from "@/composables/common/getImages"
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>