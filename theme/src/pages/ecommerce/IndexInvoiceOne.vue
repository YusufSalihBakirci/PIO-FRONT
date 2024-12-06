<template>
    <Breadcrumbs main="ECommerce" mains="Invoice" title="Invoice" />
    <div class="container">
        <div class="row">
            <Card3 colClass="col-sm-12" cardClass="invoice-1">
                <InvoicePageOne />
            </Card3>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const InvoicePageOne = defineAsyncComponent(() => import("@/components/theme/ecommerce/invoice/invoice1/InvoicePageOne.vue"))
</script>