<template>
    <Breadcrumbs main="ECommerce" mains="Invoice-2" title="Invoice-2" />
    <Card3 colClass="container invoice-2">
        <InvoicePageTwo />
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const InvoicePageTwo = defineAsyncComponent(() => import("@/components/theme/ecommerce/invoice/invoice2/InvoicePageTwo.vue"))
</script>