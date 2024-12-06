<template>
    <Breadcrumbs main="Blog" mains="Add Post" title="Add Post" />
    <div class="container-fluid">
        <div class="row">
            <AddPost />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const AddPost = defineAsyncComponent(() => import("@/components/theme/blog/addpost/AddPost.vue"))
</script>