<template>
    <Breadcrumbs main="ECommerce" mains="Product Page" title="Product Page" />
    <div class="container-fluid">
        <div>
            <div class="row product-page-main p-0">
                <ProductSwiper />
                <PageDetails />
                <FilterBlock />
            </div>
        </div>
        <ProdectPageTab />
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const ProductSwiper = defineAsyncComponent(() => import("@/components/theme/ecommerce/productpage/ProductSwiper.vue"))
const PageDetails = defineAsyncComponent(() => import("@/components/theme/ecommerce/productpage/PageDetails.vue"))
const FilterBlock = defineAsyncComponent(() => import("@/components/theme/ecommerce/productpage/FilterBlock.vue"))
const ProdectPageTab = defineAsyncComponent(() => import("@/components/theme/ecommerce/productpage/ProdectPageTab.vue"))
</script>