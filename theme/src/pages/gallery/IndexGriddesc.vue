<template>
    <Breadcrumbs main="Gallery" mains="Gallery Grid With Description" title="Gallery Grid With Description" />
    <div class="container-fluid">
        <div class="row">
            <GridDesc />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const GridDesc = defineAsyncComponent(() => import("@/components/theme/gallery/grid/GridDesc.vue"))
</script>