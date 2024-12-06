<template>
    <div class="modal fade" id="exampleModalCenter" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="product-box modal-content">
                <div class="modal-header border-bottom-0">
                    <div class="product-box row">

                        <div class="product-img col-lg-6"><img class="img-fluid" v-if="quickViewProduct?.images"
                                :src="getImgUrl(quickViewProduct?.images[0])" /></div>
                        <div class="product-details col-lg-6 text-start">
                            <h4 @click.prevent="$router.push('/ecommerce/details/' + quickViewProduct?.sku)"
                                data-bs-dismiss="modal">{{ quickViewProduct?.name }}</h4>
                            <div class="product-price">
                                <span> ${{ quickViewProduct?.price }}</span>
                                <del>${{ quickViewProduct?.salePrice }} </del>
                            </div>
                            <div class="product-view">
                                <h6 class="f-w-700">Product Details</h6>
                                <p class="mb-0">{{ quickViewProduct?.description }}</p>
                            </div>
                            <div class="product-size">
                                <ul>
                                    <li> <button class="btn btn-outline-light" type="button" data-bs-original-title=""
                                            title="">M</button></li>
                                    <li> <button class="btn btn-outline-light mx-1" type="button" data-bs-original-title=""
                                            title="">L</button></li>
                                    <li> <button class="btn btn-outline-light" type="button" data-bs-original-title=""
                                            title="">Xl</button> </li>
                                </ul>
                            </div>
                            <div class="product-qnty">
                                <h6 class="f-w-700">Quantity</h6>
                                <fieldset>
                                    <div class="input-group bootstrap-touchspin">
                                        <button class="btn btn-primary btn-square bootstrap-touchspin-down"
                                            v-on:click="decrement()" type="button"><i
                                                class="fa-solid fa-minus"></i></button>
                                        <input class="touchspin text-center form-control" v-model="counter"
                                            name="item.quantity" type="text">
                                        <button class="btn btn-primary btn-square bootstrap-touchspin-up"
                                            v-on:click="increment()" type="button">
                                            <i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </fieldset>
                                <div class="addcart-btn">
                                    <router-link to="/ecommerce/cart">
                                        <button class="btn btn-primary" type="button"
                                            data-original-title="btn btn-info-gradien" @click="addToCart(quickViewProduct)"
                                            data-bs-dismiss="modal">
                                            Add To Cart
                                        </button>
                                    </router-link>
                                    <a href="javascript:void(0)" class="btn btn-primary ms-2"
                                        @click.prevent="$router.push('/ecommerce/checkout')" data-bs-dismiss="modal">View
                                        Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useProductsStore } from "@/store/products"
let props = defineProps({
    quickViewProduct: Object,
});

let counter = ref<number>(1)
let store = useProductsStore()
function getImgUrl(path: string) {
    return require('@/assets/images/' + path);
}
function addToCart(product: object) {
    store.addToCart(product);
}
function increment() {
    if (counter.value < props.quickViewProduct?.stock) counter.value++;
}
function decrement() {
    if (counter.value > 1) counter.value--;
}
</script>