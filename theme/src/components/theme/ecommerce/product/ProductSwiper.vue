<template>
    <div>
        <swiper :navigation="false" :slidesPerView="1" :spaceBetween="5" :loop="true">
            <swiper-slide>
                <div class="item w-100">

                    <div class="product-box row mb-2 align-items-center" v-for="(product, index) in data.slice(0, 3)" :key="index">

                        <div class="product-img col-md-5">
                            <img class="img-fluid img-100" :src='getImages(product.images[0])' alt="">
                        </div>

                        <div class="product-details col-md-5 text-start">
                            <span><i class="fa-solid fa-star font-warning me-1"></i><i
                                    class="fa-solid fa-star font-warning me-1"></i><i
                                    class="fa-solid fa-star font-warning me-1"></i><i
                                    class="fa-solid fa-star font-warning me-1"></i><i
                                    class="fa-solid fa-star font-warning"></i></span>
                            <router-link :to="'/ecommerce/details/' + product.sku">
                                <p class="mb-0">{{ product.name }}</p>
                            </router-link>
                            <div class="product-price">${{ product.price }}</div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="item">
                    <div class="product-box row mb-2 align-items-center" v-for="(product, index) in data.slice(3, 6)" :key="index">

                        <div class="product-img col-md-5">
                            <img class="img-fluid img-100 " :src='getImages(product.images[0])' alt="">
                        </div>
                        <div class="product-details col-md-5 text-start">
                            <span><i class="fa-solid fa-star font-warning me-1"></i><i
                                    class="fa-solid fa-star font-warning me-1"></i><i
                                    class="fa-solid fa-star font-warning me-1"></i><i
                                    class="fa-solid fa-star font-warning me-1"></i><i
                                    class="fa-solid fa-star font-warning"></i></span>
                            <router-link :to="'/ecommerce/details/' + product.sku">
                                <p class="mb-0">{{ product.name }}</p>
                            </router-link>
                            <div class="product-price">${{ product.price }}</div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script lang="ts" setup>
import { useProductsStore } from "@/store/products"
import { data } from "@/core/data/products"
import { getImages } from "@/composables/common/getImages"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
let modules = [Navigation,]
</script>