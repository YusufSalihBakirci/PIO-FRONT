<template>
    <Breadcrumbs main="Widgets" mains="Chart" title="Chart" />
    <div class="container-fluid">
        <WidgetCharts />
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const WidgetCharts = defineAsyncComponent(() => import("@/components/theme/widgets/chart/WidgetCharts.vue"))

</script>