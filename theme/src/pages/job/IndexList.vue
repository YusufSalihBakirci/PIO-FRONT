<template>
    <Breadcrumbs main="Job search" mains="List View" title="List View" />
    <div class="container-fluid">
        <div class="row">
            <JobSidebar />
            <JobList />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const JobSidebar = defineAsyncComponent(() => import("@/components/common/JobSidebar.vue"))
const JobList = defineAsyncComponent(() => import("@/components/theme/job/list/JobList.vue"))
</script>