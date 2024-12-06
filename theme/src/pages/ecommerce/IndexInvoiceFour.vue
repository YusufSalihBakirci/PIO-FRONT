<template>
    <Breadcrumbs main="ECommerce" mains="Invoice-4" title="Invoice-4" />
    <div class="container invoice-2">
        <div class="row">
            <Card3 colClass="col-sm-12">
                <InvoicePageFour />
            </Card3>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const InvoicePageFour = defineAsyncComponent(() => import("@/components/theme/ecommerce/invoice/invoice4/InvoicePageFour.vue"))
</script>