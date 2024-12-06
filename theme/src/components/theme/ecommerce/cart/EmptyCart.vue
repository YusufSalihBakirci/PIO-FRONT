<template>
    <div class="col-sm-12 empty-cart-cls text-center" v-if="!cart.length">
        <img :src="getImgUrl('ecommerce/icon-empty-cart.png')" class="img-fluid my-3" />
        <h3><strong>Oops! Your cart empty!!!</strong></h3>
        <h5>Add something to make me happy :)</h5>
        <router-link :to="'/ecommerce/product'" class="btn btn-primary cart-btn-transform my-2">continue
            shopping</router-link>
    </div>
</template>
<script lang="ts" setup>

import { useProductsStore } from "@/store/products"

const store = useProductsStore()
const cart = store.cart

function getImgUrl(path: string) {
    return require('@/assets/images/' + path);
}

</script>