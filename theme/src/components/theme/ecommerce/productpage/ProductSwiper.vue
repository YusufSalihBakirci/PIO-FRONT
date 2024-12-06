<template>
    <Card3 colClass="col-xxl-4 col-md-6 box-col-6">
        <div class="product-slider owl-carousel owl-theme" id="sync1">
            <Swiper :slidesPerView="1" :loop="true" :autoplay="{ delay: 3500, disableOnInteraction: false, }"
                :thumbs="{ swiper: thumbsSwiper }" :centeredSlides="true" :modules="modules" class="mySwiper">
                <Swiper-slide v-for="(product, index) in products.images" :key="index">
                    <img :src="getImages(product)" alt="index" />
                </Swiper-slide>
            </Swiper>
        </div>
        <div class="owl-carousel owl-theme product-tab-slider" id="sync2">
            <Swiper @swiper="setThumbsSwiper" :loop="true" :slidesPerView="4" :spaceBetween="10" :watchSlidesProgress="true"
                :pagination="{
                    clickable: true,
                }" :modules="modules" class="Swiper">
                <Swiper-slide v-for="(product, index) in products.images" :key="index">
                    <img :src="getImages(product)" class="img-fluid bg-img " alt="index" style="height:auto; " />
                </Swiper-slide>
            </Swiper>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { getImages } from "@/composables/common/getImages"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs"
import { useProductsStore } from "@/store/products"
import { useRouter } from 'vue-router'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let thumbsSwiper = ref()
const setThumbsSwiper = (swiper: string) => {
    thumbsSwiper.value = swiper;
}
let modules = [Autoplay, Navigation, FreeMode, Thumbs]
const store = useProductsStore()
const router = useRouter()

store.productData(store.products)
const products: any = store.datas.find((item) => {
    if (parseInt(router.currentRoute._rawValue.params.id) === item.sku) return item;
})

</script>