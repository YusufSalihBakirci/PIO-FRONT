<template>
    <Breadcrumbs main="ECommerce" mains="Order History" title="Order History" />
    <div class="container-fluid">
        <div class="row">
            <NewOrder />
            <OrderTable />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const OrderTable = defineAsyncComponent(() => import("@/components/theme/ecommerce/order/OrderTable.vue"))
const NewOrder = defineAsyncComponent(() => import("@/components/theme/ecommerce/order/NewOrder.vue"))
</script>