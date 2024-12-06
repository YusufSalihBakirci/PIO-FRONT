<template>
    <Breadcrumbs main="ECommerce" mains="Invoice-3" title="Invoice-3" />
    <div class="container invoice-2">
        <div class="row">
            <Card3 colClass="col-sm-12">
                <InvoicePageThree />
            </Card3>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const InvoicePageThree = defineAsyncComponent(() => import("@/components/theme/ecommerce/invoice/invoice3/InvoicePageThree.vue"))
</script>