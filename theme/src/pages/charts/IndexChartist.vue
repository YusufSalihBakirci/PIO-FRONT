<template>
    <Breadcrumbs main="Charts" mains="Chartist" title="Chartist" />
    <div class="container-fluid">
        <div class="row">
            <ChartistCharts />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'

const ChartistCharts = defineAsyncComponent(() => import("@/components/theme/charts/chartist/ChartistCharts.vue"))
</script>