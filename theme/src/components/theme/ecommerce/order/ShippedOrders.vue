<template>
    <Card3 headerTitle="true" title="Shipped Orders" cardhaderClass="card-no-border pb-0">
        <div class="row g-sm-4 g-3">
            <div class="col-xxl-4 col-md-6" v-for="(item, index) in news" :key="index">
                <div class="prooduct-details-box">
                    <div class="d-flex"><img class="align-self-center img-fluid img-60" :src="getImages(item.img)" alt="#">
                        <div class="flex-grow-1 ">
                            <div class="product-name">
                                <h6><a href="#">{{ item.title }}</a></h6>
                            </div>
                            <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                    class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                            <div class="price d-flex p-0 border-0">
                                <div class="text-muted me-2">Price</div>: 210$
                            </div>
                            <div class="avaiabilty">
                                <div class="text-success">In stock</div>
                            </div><a class="btn btn-success btn-xs" href="#">Shipped</a><vue-feather
                                @click="closeTab(index)" class="close" type="x"></vue-feather>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { useCommonStore } from "@/store/common"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let store = useCommonStore()
let news = store.shipped
function closeTab(index: number) {
    news.splice(index, 1)
}
</script>