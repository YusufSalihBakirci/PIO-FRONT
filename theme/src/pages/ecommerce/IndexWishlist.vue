<template>
    <Breadcrumbs main="ECommerce" mains="Wishlist" title="Wishlist" />
    <div class="container-fluid">
        <div class="row">
            <WishList />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const WishList = defineAsyncComponent(() => import("@/components/theme/ecommerce/whishlist/WishList.vue"))
</script>