<template>
    <Breadcrumbs main="Blog" mains="Blog Single" title="Blog Single" />
    <div class="container-fluid">
        <div class="row">
            <Card3 colClass="col-sm-12 ">
                <div class="blog-single">
                    <BlogDetails />
                    <CommentBox />
                </div>
            </Card3>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const BlogDetails = defineAsyncComponent(() => import("@/components/theme/blog/single/BlogDetails.vue"))
const CommentBox = defineAsyncComponent(() => import("@/components/theme/blog/single/CommentBox.vue"))
</script>