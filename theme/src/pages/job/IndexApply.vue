<template>
    <Breadcrumbs main="Job search" mains="Apply" title="Apply" />
    <div class="container-fluid">
        <div class="row">
            <JobSidebar />
            <JobApply />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const JobSidebar = defineAsyncComponent(() => import("@/components/common/JobSidebar.vue"))
const JobApply = defineAsyncComponent(() => import("@/components/theme/job/apply/JobApply.vue"))
</script>