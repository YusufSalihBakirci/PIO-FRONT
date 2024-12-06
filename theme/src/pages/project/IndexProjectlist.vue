<template>
    <Breadcrumbs main="Application" mains="Project list" title="Project list" />
    <div class="container-fluid">
        <div class="row project-cards">
            <ProjectTab />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const ProjectTab = defineAsyncComponent(() => import("@/components/theme/project/projectlist/ProjectTab.vue"))
</script>