<template>
    <div class="product-wrapper-grid" :class="store.listViewEnable ? 'list-view' : ''">
        <div class="row list-collection">
            <div :class="[store.col2 ? 'col-md-6' : store.col3 ? 'col-xl-4 col-sm-4' : store.col4 ? 'col-xl-3 col-md-6' : store.col6 ? 'col-xl-2 col-lg-4 col-md-6' : store.list ? 'col-xl-3 col-lg-4 col-sm-6 xl-25 col-xl-12' : 'col-xl-3 col-md-6',]"
                v-for="(product, index) in filterProduct" :key="index">
                <div class="card">
                    <div class="product-box">
                        <div class="product-img">
                            <div class="ribbon ribbon-danger" v-if="product.sale">Sale</div>
                            <div class="ribbon ribbon-success ribbon-right" v-if="product.off">50%</div>
                            <div class="ribbon ribbon-secondary ribbon-vertical-left" v-if="product.icon"><i
                                    class="icon-gift"></i></div>
                            <div class="ribbon ribbon-bookmark ribbon-vertical-right ribbon-info" v-if="product.ribbon"><i
                                    class="icofont icofont-love"></i></div>
                            <div class="ribbon ribbon-clip ribbon-warning" v-if="product.hot">Hot</div>
                            <img class="img-fluid" :src="getImgUrl(product.images[0])" alt="">
                            <div class="product-hover">
                                <ul>
                                    <li @click="addToCart(product)"><router-link :to="'/ecommerce/cart'">
                                            <i class="icon-shopping-cart"></i>
                                        </router-link></li>
                                    <li @click="quickView(product)"><a data-bs-toggle="modal"
                                            data-bs-target="#exampleModalCenter">
                                            <i class="icon-eye"></i>
                                        </a></li>
                                </ul>
                            </div>
                            <ProductModel :quickViewProduct="quickViewProduct" />
                        </div>

                        <div class="product-details">
                            <div class="rating" v-html="stars(product.star)"></div>
                            <router-link :to="'/ecommerce/details/' + product.sku">
                                <h4>{{ product.name }}</h4>
                            </router-link>
                            <p>{{ product.shortDescription }}</p>
                            <div class="product-price">
                                ${{ product.price }}
                                <del>${{ product.salePrice }}</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineAsyncComponent } from "vue"
import { data } from "@/core/data/products"
import { useProductsStore } from "@/store/products"
import { storeToRefs } from "pinia";
import { getImages } from "@/composables/common/getImages"
const ProductModel = defineAsyncComponent(() => import("@/components/theme/ecommerce/product/ProductModel.vue"))
let modalShow = ref<boolean>(false)
let counter = ref<number>(1)
const store = useProductsStore()
store.productData(data)
let quickViewProduct = ref(store.filterProducts)
let { filterProducts: filterProduct } = storeToRefs(store)
function quickView(product: any) {
    modalShow.value = true;
    return (quickViewProduct.value = product);
}
function getImgUrl(path: string) {
    return require('@/assets/images/' + path);
}
function addToCart(product: object) {
    store.addToCart(product);
}
function stars(count: number) {
    var stars = '';

    for (var i = 0; i < 5; i++) {
        if (count > i) {
            stars = stars + '<i class="fa fa-star "></i>';
        } else {
            stars = stars + '<i class="fa-regular fa-star "></i>';
        }
    }

    return stars;
}
</script>