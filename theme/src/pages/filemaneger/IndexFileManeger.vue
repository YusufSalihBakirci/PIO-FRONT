<template>
    <Breadcrumbs main="App" mains="File manager" title="File manager" />
    <div class="container-fluid manager-card">
        <div class="row">
            <FileSidebar />
            <FileContent />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const FileSidebar = defineAsyncComponent(() => import("@/components/theme/filemaneger/FileSidebar.vue"))
const FileContent = defineAsyncComponent(() => import("@/components/theme/filemaneger/FileContent.vue"))
</script>