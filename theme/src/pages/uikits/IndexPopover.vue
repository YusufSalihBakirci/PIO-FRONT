<template>
    <Breadcrumbs main="Ui Kits" mains="Popover" title="Popover" />
    <div class="container-fluid">
        <div class="row popover-main">
            <BasicPopover />
            <DirectionPopover />
            <OffsetPopover />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const BasicPopover = defineAsyncComponent(() => import("@/components/theme/uikits/popover/BasicPopover.vue"))
const DirectionPopover = defineAsyncComponent(() => import("@/components/theme/uikits/popover/DirectionPopover.vue"))
const OffsetPopover = defineAsyncComponent(() => import("@/components/theme/uikits/popover/OffsetPopover.vue"))
</script>