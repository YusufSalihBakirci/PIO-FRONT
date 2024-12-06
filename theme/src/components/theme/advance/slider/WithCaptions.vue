<template>
    <Card3 colClass="col-xl-6 col-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="desc mb-0 mt-1"
        headerTitle="true" title="With Captions"
        desc="<span>Add captions to your slides easily with the</span><code>.carousel-caption</code><span>element within any .carousel-item.</span>">
        <div class="carousel slide" id="carouselExampleCaptions" data-bs-ride="false">
            <div class="carousel-indicators">
                <button class="active" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item " :class="item.active == true ? 'active' : ''" v-for="(item, index) in captions"
                    :key="index"><img class="d-block w-100" :src="getImages(item.img)" alt="drawing-room">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span
                    class="visually-hidden">Previous</span></button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span
                    class="visually-hidden">Next</span></button>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { captions } from "@/core/data/slider"
import { getImages } from "@/composables/common/getImages"
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("Add captions to your slides easily with the<code> .carousel-caption</code> element within any <code>.carousel-item</code>.")
</script>