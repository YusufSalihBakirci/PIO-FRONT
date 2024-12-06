<template>
    <a href="javascript:void(0)" @click="openTab()">
        <svg>
            <use href="@/assets/svg/iconly-sprite.svg#cart-icon"></use>
        </svg>
    </a>
    <span class="badge rounded-pill badge-primary text-white">{{ cart.length }}</span>
    <div class="custom-menu cart-dropdown py-0 overflow-hidden" :class="show ? 'show' : ''">
        <h3 class="title dropdown-title">Cart</h3>
        <ul class="pb-0">
            <div class="col-sm-12 empty-cart-cls text-center" v-if="!cart.length">
                <img :src="getImgUrl('ecommerce/icon-empty-cart.png')" class="img-fluid my-3 img-60" />
                <h3><strong>Oops! Your cart empty!!!</strong></h3>
                <h5>Add something to make me happy :)</h5>
                <router-link :to="'/ecommerce/product'" class="btn btn-primary cart-btn-transform my-2 text-white">continue
                    shopping</router-link>
            </div>

            <li v-for="(item, index) in cart" :key="index">
                <div class="d-flex"><img class="img-fluid b-r-5 me-3 img-60" :src='getImgUrl(item.images[0])' alt="" />
                    <div class="flex-grow-1"><span class="f-w-600">{{ item.name }}</span>
                        <div class="qty-box">
                            <div class="input-group"><span class="input-group-prepend">
                                    <button class="btn quantity-left-minus" type="button" v-on:click="decrement(item)"
                                        data-type="minus" data-field="">-</button></span>
                                <input class="form-control input-number" type="text" name="quantity"
                                    v-model="item.quantity" /><span class="input-group-prepend">
                                    <button class="btn quantity-right-plus" type="button" data-type="plus" data-field=""
                                        v-on:click="increment(item)">+</button></span>
                            </div>
                        </div>
                        <h6 class="font-primary">${{ item.price * item.quantity }} </h6>
                    </div>
                    <div class="close-circle"><a @click='removeProduct(item)' class="bg-danger"><vue-feather
                                type="x"></vue-feather></a></div>
                </div>
            </li>
            <li class="total" v-if="cart.length">
                <h6 class="mb-0">Order Total : <span class="f-w-600">${{ getAmount() }}</span></h6>
            </li>
            <li class="text-center" v-if="cart.length"><router-link class="d-block mb-3 view-cart f-w-700 text-primary"
                    to="/ecommerce/cart">Go
                    to
                    your cart</router-link><router-link class="btn btn-primary view-checkout text-white"
                    to="/ecommerce/checkout">Checkout</router-link>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useProductsStore } from "@/store/products"
let show = ref<boolean>(false)
const store = useProductsStore()
const cart = store.cart
const totalAmount = ref()
function openTab() {
    show.value = !show.value
}
function removeProduct(product: object) {
    store.removeProduct(product);
}
function getImgUrl(path: string) {
    return require('@/assets/images/' + path);
}
function increment(product: object, qty = 1) {
    store.updateCartQuantity({
        product: product,
        qty: qty,
    });
}
function decrement(product: object, qty = -1) {
    store.updateCartQuantity({
        product: product,
        qty: qty,
    });
}
function getAmount() {
    return (totalAmount.value =
        store.getTotalAmount);
}
</script>