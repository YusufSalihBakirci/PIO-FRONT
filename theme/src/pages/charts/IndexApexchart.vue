<template>
    <Breadcrumbs main="Charts" mains="Apex chart" title="Apex chart" />
    <div class="container-fluid">
        <div class="row">
            <ApexCharts />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'

const ApexCharts = defineAsyncComponent(() => import("@/components/theme/charts/apexChart/ApexCharts.vue"))
</script>