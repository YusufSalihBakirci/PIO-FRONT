<template>
    <Breadcrumbs main="ECommerce" mains="Checkout" title="Checkout" />
    <Card3 colClass="container-fluid checkout" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Billing Details">
        <div class="row">
            <CheckoutForm />
            <CheckoutDetail />
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const CheckoutForm = defineAsyncComponent(() => import("@/components/theme/ecommerce/checkout/CheckoutForm.vue"))
const CheckoutDetail = defineAsyncComponent(() => import("@/components/theme/ecommerce/checkout/CheckoutDetail.vue"))
</script>