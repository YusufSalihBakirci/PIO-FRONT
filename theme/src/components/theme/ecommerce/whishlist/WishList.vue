<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" headerTitle="true" title="Wishlist">
        <div class="row g-sm-4 g-3">
            <div class="col-xl-4 col-md-6" v-for="(item, index) in whislist" :key="index">
                <div class="prooduct-details-box">
                    <div class="d-flex"><img class="align-self-center img-fluid img-60" :src="getImages(item.img)" alt="#">
                        <div class="flex-grow-1 ">
                            <div class="product-name">
                                <h6><a href="#">{{ item.name }}</a></h6>
                            </div>
                            <div class="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                    class="fa-solid fa-star"></i>
                                <i class="fa-solid " :class="item.star1"></i>
                                <i class="fa-solid " :class="item.star2"></i>
                            </div>
                            <div class="price d-flex border-0 p-0">
                                <div class="text-muted me-2">Price</div>: {{ item.price }}$
                            </div>
                            <div class="avaiabilty">
                                <div :class="item.color">{{ item.stock }}</div>
                            </div><a class="btn btn-primary btn-xs" href="#">Move to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { whislist } from "@/core/data/ecommerce"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>