<template>
    <Breadcrumbs main="Bonus Ui" mains="Tree View" title="Tree View" />
    <div class="container-fluid">
        <div class="row">
            <BasicTree />
            <CheckTree />
            <EditTree />
            <DragDropTree />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const BasicTree = defineAsyncComponent(() => import("@/components/theme/advance/tree/BasicTree.vue"))
const CheckTree = defineAsyncComponent(() => import("@/components/theme/advance/tree/CheckTree.vue"))
const EditTree = defineAsyncComponent(() => import("@/components/theme/advance/tree/EditTree.vue"))
const DragDropTree = defineAsyncComponent(() => import("@/components/theme/advance/tree/DragDropTree.vue"))
</script>