<template>
    <Breadcrumbs main="ECommerce" mains="Category" title="Category" />
    <div class="container-fluid">
        <div class="row">
            <CategoryTable />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const CategoryTable = defineAsyncComponent(() => import("@/components/theme/ecommerce/category/CategoryTable.vue"))
</script>