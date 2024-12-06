<template>
    <Breadcrumbs main="Learning" mains="Learning List" title="Learning List" />
    <div class="container-fluid">
        <div class="row">
            <LearningList />
            <LearningFilter />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const LearningList = defineAsyncComponent(() => import("@/components/theme/learning/list/LearningList.vue"))
const LearningFilter = defineAsyncComponent(() => import("@/components/common/LearningFilter.vue"))
</script>