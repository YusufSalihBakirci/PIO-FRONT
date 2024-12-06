<template>
    <Breadcrumbs main="Blog" mains="Blog details" title="Blog details" />
    <div class="container-fluid">
        <div class="row">
            <BlogShadow />
            <BlogList />
            <BlogGrid />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const BlogShadow = defineAsyncComponent(() => import("@/components/theme/blog/details/BlogShadow.vue"))
const BlogList = defineAsyncComponent(() => import("@/components/theme/blog/details/BlogList.vue"))
const BlogGrid = defineAsyncComponent(() => import("@/components/theme/blog/details/BlogGrid.vue"))
</script>