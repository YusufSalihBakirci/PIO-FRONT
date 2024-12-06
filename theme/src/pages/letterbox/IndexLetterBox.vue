<template>
    <Breadcrumbs main="Email" mains="Letter Box" title="Letter Box" />
    <div class="container-fluid">
        <div class="email-wrap email-main-wrapper">
            <div class="row">
                <LetterBoxSidebar />
                <div class="col-xxl-9 col-xl-8 box-col-12">
                    <div class="email-right-aside">
                        <LetterBoxHeader />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const LetterBoxSidebar = defineAsyncComponent(() => import("@/components/theme/letterbox/LetterBoxSidebar.vue"))
const LetterBoxHeader = defineAsyncComponent(() => import("@/components/theme/letterbox/LetterBoxHeader.vue"))
</script>