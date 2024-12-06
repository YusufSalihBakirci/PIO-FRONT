<template>
    <Breadcrumbs main="Charts" mains="Google Chart" title="Google Chart" />
    <div class="container-fluid">
        <div class="row">
            <GoogleChart />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'

const GoogleChart = defineAsyncComponent(() => import("@/components/theme/charts/google/GoogleChart.vue"))

</script>