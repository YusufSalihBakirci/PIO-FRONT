<template>
    <Breadcrumbs main="Bonus Ui" mains="Toasts" title="Toasts" />
    <div class="container-fluid">
        <div class="row">
            <BasicToasts />
            <IconToasts />
            <PositionToasts />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const BasicToasts = defineAsyncComponent(() => import("@/components/theme/advance/toasts/BasicToasts.vue"))
const IconToasts = defineAsyncComponent(() => import("@/components/theme/advance/toasts/IconToasts.vue"))
const PositionToasts = defineAsyncComponent(() => import("@/components/theme/advance/toasts/PositionToasts.vue"))
</script>