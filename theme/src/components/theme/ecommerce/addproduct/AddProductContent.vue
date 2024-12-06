<template>
    <div class="col-xxl-9 col-xl-8 box-col-8 position-relative">
        <div class="tab-content" id="add-product-pills-tabContent">
            <productDetail />
            <ProductGallery />
            <ProductCategory />
            <SellingPrices />
            <AdvanceDetail />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const productDetail = defineAsyncComponent(() => import("@/components/theme/ecommerce/addproduct/productDetail.vue"))
const ProductGallery = defineAsyncComponent(() => import("@/components/theme/ecommerce/addproduct/ProductGallery.vue"))
const ProductCategory = defineAsyncComponent(() => import("@/components/theme/ecommerce/addproduct/ProductCategory.vue"))
const SellingPrices = defineAsyncComponent(() => import("@/components/theme/ecommerce/addproduct/SellingPrices.vue"))
const AdvanceDetail = defineAsyncComponent(() => import("@/components/theme/ecommerce/addproduct/AdvanceDetail.vue"))
</script>