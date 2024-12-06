<template>
    <Card1 :colClass="items.colclass" cardClass="card" v-for="(items, index) in swipers" :key="index">
        <div class="items-slider">
            <div class="swiper mySwiper1">
                <div class="swiper-wrapper">
                    <swiper :navigation="true" :slidesPerView="1" :spaceBetween="10" :autoplay="{
                        delay: 2000,
                        disableOnInteraction: false,
                    }" :modules="modules" class="mySwiper">
                        {{ items.children }}
                        <swiper-slide v-for="(item, childIndex) in items.children" class="swiper-slide" :key="childIndex">
                            <div class="slider-box " :class="item.lightclass">
                                <div class="header-top">
                                    <div class="badge  rated-product-badge" :class="item.badgeclass">{{ item.badge }}</div>
                                    <img class="img-fluid" :src="getImages(item.img)" alt="" />
                                    <div class="i fa-regular fa-heart"></div>
                                </div>
                            </div>
                            <div class="slider-content text-center">
                                <h4 :class="item.textclass">{{ item.sale }}</h4>
                                <p class="mb-0">{{ item.product }}</p>
                                <h6>{{ item.price }}<span v-html="item.del"></span></h6>
                                <div class="input-group"> <span class="input-group-text decrement-touchspin"
                                        @click="decrement(index, childIndex)">
                                        <svg class="svg-color">
                                            <use href="@/assets/svg/iconly-sprite.svg#minus"></use>
                                        </svg></span>
                                    <input class="form-control  input-touchspin" :class="item.lightclass" type="text"
                                        v-model="item.value" /><span class="input-group-text increment-touchspin"
                                        @click="increment(index, childIndex)">
                                        <svg class="svg-color">
                                            <use href="@/assets/svg/iconly-sprite.svg#plus"></use>
                                        </svg></span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { useDashboardStore } from "@/store/dashboard"
import { defineAsyncComponent, ref } from 'vue'
import { getImages } from "@/composables/common/getImages"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
let modules = [Navigation, Autoplay]
let count = ref<number>(1)
let store = useDashboardStore()
let swipers = store.swiperss
const increment = (index: number, childIndex: number) => {
    swipers[index].children[childIndex].value++;
};

const decrement = (index: number, childIndex: number) => {
    if (swipers[index].children[childIndex].value > 0) {
        swipers[index].children[childIndex].value--;
    }
}
</script>
  