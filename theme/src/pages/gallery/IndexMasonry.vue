<template>
    <Breadcrumbs main="Gallery" mains="Masonary" title="Masonary" />
    <div class="container-fluid">
        <div class="row">
            <MasonryGallery />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const MasonryGallery = defineAsyncComponent(() => import("@/components/theme/gallery/masonry/MasonryGallery.vue"))
</script>