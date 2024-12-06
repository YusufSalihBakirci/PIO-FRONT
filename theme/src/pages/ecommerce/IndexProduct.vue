<template>
    <Breadcrumbs main="ECommerce" mains="Product" title="Product" />
    <ProductHeader />
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const ProductHeader = defineAsyncComponent(() => import("@/components/theme/ecommerce/product/ProductHeader.vue"))
</script>