<template>
    <Breadcrumbs main="Job search" mains="Card View" title="Card View" />
    <div class="container-fluid">
        <div class="row">
            <JobSidebar />
            <CardView />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const JobSidebar = defineAsyncComponent(() => import("@/components/common/JobSidebar.vue"))
const CardView = defineAsyncComponent(() => import("@/components/theme/job/card/CardView.vue"))
</script>