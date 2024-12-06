<template>
    <Breadcrumbs main="ECommerce" mains="Pricing" title="Pricing" />
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <PricingBlock />
                <SimplePricing />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const PricingBlock = defineAsyncComponent(() => import("@/components/theme/ecommerce/pricing/PricingBlock.vue"))
const SimplePricing = defineAsyncComponent(() => import("@/components/theme/ecommerce/pricing/SimplePricing.vue"))
</script>