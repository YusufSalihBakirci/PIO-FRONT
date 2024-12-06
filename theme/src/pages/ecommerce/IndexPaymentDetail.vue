<template>
    <Breadcrumbs main="ECommerce" mains="Payment Details" title="Payment Details" />
    <div class="container-fluid">
        <div class="row">
            <CreditCard />
            <DebitCard />
            <CodCard />
            <EmiCard />
            <NetBanking />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const CreditCard = defineAsyncComponent(() => import("@/components/theme/ecommerce/payment/CreditCard.vue"))
const DebitCard = defineAsyncComponent(() => import("@/components/theme/ecommerce/payment/DebitCard.vue"))
const CodCard = defineAsyncComponent(() => import("@/components/theme/ecommerce/payment/CodCard.vue"))
const EmiCard = defineAsyncComponent(() => import("@/components/theme/ecommerce/payment/EmiCard.vue"))
const NetBanking = defineAsyncComponent(() => import("@/components/theme/ecommerce/payment/NetBanking.vue"))
</script>