<template>
    <Card3 colClass="col-xxl-5 box-col-6 order-xxl-0 order-1">
        <div class="product-page-details">
            <h3>{{ products.name }}</h3>
        </div>
        <div class="product-price">${{ products.price }}
            <del>${{ products.salePrice }}</del>
        </div>
        <ul class="product-color">
            <li class="bg-primary"></li>
            <li class="bg-secondary"></li>
            <li class="bg-success"></li>
            <li class="bg-info"></li>
            <li class="bg-warning"></li>
        </ul>
        <hr />
        <p>{{ products.description }}</p>
        <hr />
        <StockView />
        <hr />
        <div class="row">
            <div class="col-md-4">
                <h5 class="f-w-700 product-title">share it</h5>
            </div>
            <div class="col-md-8">
                <div class="product-icon">
                    <ul class="product-social">
                        <li class="d-inline-block" v-for="(item, index) in social" :key="index"><a :href="item.link"
                                target="_blank"><i class="" :class="item.icon"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-md-4">
                <h5 class="f-w-700 product-title">Rate Now</h5>
            </div>
            <div class="col-md-8">
                <div class="d-flex product-rating">
                    <rate class="d-flex align-items-center" :length="5" :value="2" /><span>(250 review)</span>
                </div>
            </div>
        </div>
        <hr />
        <div class="m-t-15 btn-showcase"><router-link @click="addToCart(products)" class="btn btn-primary"
                :to="'/ecommerce/cart'" title=""> <i class="fa-solid fa-basket-shopping me-1"></i>Add To
                Cart</router-link><router-link class="btn btn-success" to='/ecommerce/cart' title=""> <i
                    class="fa-solid fa-cart-shopping me-1"></i>Buy
                Now</router-link><router-link class="btn btn-secondary" :to="'/ecommerce/wishList'"> <i
                    class="fa-solid fa-heart me-1"></i>Add To WishList</router-link></div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from 'vue-router'
import { defineAsyncComponent } from 'vue';
import { social } from "@/core/data/ecommerce"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const StockView = defineAsyncComponent(() => import("@/components/theme/ecommerce/productpage/StockView.vue"))
import { useProductsStore } from "@/store/products"
let store = useProductsStore()
let router = useRouter()
let thumbsSwiper = ref(null)
const products: any = store.datas.find((item) => {
    if (parseInt(router.currentRoute._rawValue.params.id) === item.sku) return item;

})
function addToCart(product: object,) {

    store.addToCart(product);
}
</script>