<template>
    <Breadcrumbs main="Bootstrap Tables" mains="Bootstrap Basic Tables" title="Bootstrap Basic" />
    <div class="container-fluid table-space basic_table">
        <div class="row">
            <BasicTable />
            <InverseTable />
            <HoverableTable />
            <PrimaryBackground />
            <CaptionTable />
            <HeadOptions />
            <StripedRow />
            <BreckpointSpecific />
            <ResponsiveTable />
            <SizingTable />
            <CustomTable />
            <DashedBorder />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const BasicTable = defineAsyncComponent(() => import("@/components/theme/table/bootstrap/BasicTable.vue"))
const InverseTable = defineAsyncComponent(() => import("@/components/theme/table/bootstrap/InverseTable.vue"))
const HoverableTable = defineAsyncComponent(() => import("@/components/theme/table/bootstrap/HoverableTable.vue"))
const PrimaryBackground = defineAsyncComponent(() => import("@/components/theme/table/bootstrap/PrimaryBackground.vue"))
const CaptionTable = defineAsyncComponent(() => import("@/components/theme/table/bootstrap/CaptionTable.vue"))
const HeadOptions = defineAsyncComponent(() => import("@/components/theme/table/bootstrap/HeadOptions.vue"))
const StripedRow = defineAsyncComponent(() => import("@/components/theme/table/bootstrap/StripedRow.vue"))
const BreckpointSpecific = defineAsyncComponent(() => import("@/components/theme/table/bootstrap/BreckpointSpecific.vue"))
const ResponsiveTable = defineAsyncComponent(() => import("@/components/theme/table/bootstrap/ResponsiveTable.vue"))
const SizingTable = defineAsyncComponent(() => import("@/components/theme/table/bootstrap/SizingTable.vue"))
const CustomTable = defineAsyncComponent(() => import("@/components/theme/table/bootstrap/CustomTable.vue"))
const DashedBorder = defineAsyncComponent(() => import("@/components/theme/table/bootstrap/DashedBorder.vue"))
</script>