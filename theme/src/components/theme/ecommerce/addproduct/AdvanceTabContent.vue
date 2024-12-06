<template>
    <div class="tab-content" id="advance-option-tabContent">
        <InventoryOption />
        <AdditionalOption />
        <ShippingOption />
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const InventoryOption = defineAsyncComponent(() => import("@/components/theme/ecommerce/addproduct/InventoryOption.vue"))
const AdditionalOption = defineAsyncComponent(() => import("@/components/theme/ecommerce/addproduct/AdditionalOption.vue"))
const ShippingOption = defineAsyncComponent(() => import("@/components/theme/ecommerce/addproduct/ShippingOption.vue"))
</script>