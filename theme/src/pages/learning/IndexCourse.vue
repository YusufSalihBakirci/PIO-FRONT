<template>
    <Breadcrumbs main="Learning" mains="Learning detailed" title="Learning detailed" />
    <div class="container-fluid">
        <div class="row">
            <BlogBox />
            <LearningFilter />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const BlogBox = defineAsyncComponent(() => import("@/components/theme/learning/Course/BlogBox.vue"))
const LearningFilter = defineAsyncComponent(() => import("@/components/common/LearningFilter.vue"))
</script>