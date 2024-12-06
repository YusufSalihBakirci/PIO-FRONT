<template>
    <Breadcrumbs main="Apps" mains="Tasks" title="Tasks" />
    <div class="container-fluid">
        <div class="email-wrap bookmark-wrap">
            <div class="row">
                <TaskSidebar />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const TaskSidebar = defineAsyncComponent(() => import("@/components/theme/task/TaskSidebar.vue"))
</script>