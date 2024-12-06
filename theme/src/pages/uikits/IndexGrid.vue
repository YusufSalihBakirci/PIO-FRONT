<template>
    <Breadcrumbs main="Ui Kits" mains="Grid" title="Grid" />
    <div class="container-fluid">
        <div class="row">
            <GridOptions />
            <GridColumm />
            <GridAlignment />
            <GridSection />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const GridOptions = defineAsyncComponent(() => import("@/components/theme/uikits/grid/GridOptions.vue"))
const GridColumm = defineAsyncComponent(() => import("@/components/theme/uikits/grid/GridColumm.vue"))
const GridAlignment = defineAsyncComponent(() => import("@/components/theme/uikits/grid/GridAlignment.vue"))
const GridSection = defineAsyncComponent(() => import("@/components/theme/uikits/grid/GridSection.vue"))
</script>