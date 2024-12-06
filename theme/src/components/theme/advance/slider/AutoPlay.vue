<template>
    <Card3 colClass="col-xl-6 col-12" cardhaderClass="card-no-border pb-0" cardClass="auto-slider" pre="true"
        preClass="desc mb-0 mt-1" headerTitle="true" title="Auto Play Variant"
        desc="<span>Use the</span><code>.owl-carouse</code><span>through slides.</span>">
        <swiper :slidesPerView="3" :spaceBetween="10" :loop="true" :pagination="{
            clickable: true,
        }" :autoplay="{
    delay: 1000,
    disableOnInteraction: false,
}" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(item, index) in autoplay" :key="index">
                <div class="swiper-slide"><img :src="getImages(item.img)" class="img-fluid" alt="" style="object-fit:cover">
                </div>
            </swiper-slide>
        </swiper>
    </Card3>
</template>
<script lang="ts" setup>
import { autoplay } from "@/core/data/slider"
import { getImages } from "@/composables/common/getImages"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let modules = [Pagination, Autoplay]
</script>