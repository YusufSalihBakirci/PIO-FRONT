<template>
    <Breadcrumbs main="Ui Kits" mains="Tooltip" title="Tooltip" />
    <div class="container-fluid">
        <div class="row">
            <BasicTooltip />
            <ColoredTooltip />
            <DirectionsTooltip />
            <HoverEffect />
            <FilledTooltip />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const BasicTooltip = defineAsyncComponent(() => import("@/components/theme/uikits/tooltip/BasicTooltip.vue"))
const ColoredTooltip = defineAsyncComponent(() => import("@/components/theme/uikits/tooltip/ColoredTooltip.vue"))
const DirectionsTooltip = defineAsyncComponent(() => import("@/components/theme/uikits/tooltip/DirectionsTooltip.vue"))
const HoverEffect = defineAsyncComponent(() => import("@/components/theme/uikits/tooltip/HoverEffect.vue"))
const FilledTooltip = defineAsyncComponent(() => import("@/components/theme/uikits/tooltip/FilledTooltip.vue"))
</script>