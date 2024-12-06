<template>
    <Breadcrumbs main="ECommerce" mains="Product list" title="Product list" />
    <div class="container-fluid">
        <div class="row">
            <ListTable />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const ListTable = defineAsyncComponent(() => import("@/components/theme/ecommerce/productlist/ListTable.vue"))
</script>