<template>
    <Breadcrumbs main="Gallery" mains="Gallery" title="Gallery" />
    <div class="container-fluid">
        <div class="row">
            <GridGallery />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const GridGallery = defineAsyncComponent(() => import("@/components/theme/gallery/grid/GridGallery.vue"))
</script>