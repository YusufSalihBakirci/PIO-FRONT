<template>
    <Breadcrumbs main="Bonus Ui" mains="Ribbons" title="Ribbons" />
    <div class="container-fluid">
        <LeftRibbons />
        <RightRibbons />
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const LeftRibbons = defineAsyncComponent(() => import("@/components/theme/advance/ribbons/LeftRibbons.vue"))
const RightRibbons = defineAsyncComponent(() => import("@/components/theme/advance/ribbons/RightRibbons.vue"))
</script>