<template>
    <Breadcrumbs main="Apps" mains="Bookmarks" title="Bookmarks" />
    <div class="container-fluid">
        <div class="email-wrap bookmark-wrap">
            <div class="row">
                <BookmarkSidebar />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const BookmarkSidebar = defineAsyncComponent(() => import("@/components/theme/bookmark/BookmarkSidebar.vue"))
</script>