<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" headerTitle="true" title="Cart">
        <div class="row">
            <EmptyCart />
            <div class="order-history table-responsive wishlist theme-scrollbar" v-if="cart.length">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Prdouct</th>
                            <th>Prdouct Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in cart" :key="index">
                            <td class="text-center"><img class="img-fluid img-40" :src='getImgUrl(item.images[0])' alt="#">
                            </td>
                            <td>
                                <div class="product-name"><router-link :to="'/ecommerce/details/' + item.sku">{{ item.name
                                }}</router-link></div>
                            </td>
                            <td>${{ item.price }}</td>
                            <td>
                                <fieldset class="qty-box">
                                    <div class="input-group bootstrap-touchspin">
                                        <button class="btn btn-primary btn-square bootstrap-touchspin-down"
                                            v-on:click="decrement(item)" type="button"><i
                                                class="fa-solid fa-minus"></i></button>
                                        <input class="touchspin text-center form-control" v-model="item.quantity"
                                            name="item.quantity" type="text">
                                        <button class="btn btn-primary btn-square bootstrap-touchspin-up"
                                            v-on:click="increment(item)" type="button"><i
                                                class="fa-solid fa-plus"></i></button>
                                    </div>
                                </fieldset>
                            </td>
                            <td><a href="javascript:void(0)" @click='removeProduct(item)'><vue-feather
                                        type="x-circle"></vue-feather></a></td>
                            <td>${{ item.price * item.quantity }}</td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <div class="input-group">
                                    <input class="form-control me-2" type="text" placeholder="Enter coupan code"><a
                                        class="btn btn-primary" href="#">Apply</a>
                                </div>
                            </td>
                            <td class="total-amount">
                                <h6 class="m-0 text-end"></h6><span class="f-w-600">Total Price :</span>
                            </td>
                            <td><span>${{ getAmount() }} </span></td>
                        </tr>
                        <tr class="border-0">
                            <td class="text-end" colspan="5"><router-link :to="'/ecommerce/product'"
                                    class="btn btn-warning cart-btn-transform">continue shopping</router-link></td>
                            <td><router-link :to="'/ecommerce/checkout'" class="btn btn-success cart-btn-transform">check
                                    out</router-link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { useProductsStore } from "@/store/products"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const EmptyCart = defineAsyncComponent(() => import("@/components/theme/ecommerce/cart/EmptyCart.vue"))
const store = useProductsStore()
let cart = store.cart
let totalAmount = ref()
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