<template>
    <Breadcrumbs main="Ui Kits" mains="Progress bar" title="Progress bar" />
    <div class="container-fluid">
        <div class="row">
            <BasicProgressbar />
        </div>
        <div class="row">
            <StripedProgressbar />
        </div>
        <div class="row">
            <MultipleBars />
        </div>
        <CustomProgressbars />
        <div class="row">
            <SmallProgressbars />
        </div>
        <div class="row">
            <HeightProgressbars />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const BasicProgressbar = defineAsyncComponent(() => import("@/components/theme/uikits/progress/BasicProgressbar.vue"))
const StripedProgressbar = defineAsyncComponent(() => import("@/components/theme/uikits/progress/StripedProgressbar.vue"))
const MultipleBars = defineAsyncComponent(() => import("@/components/theme/uikits/progress/MultipleBars.vue"))
const CustomProgressbars = defineAsyncComponent(() => import("@/components/theme/uikits/progress/CustomProgressbars.vue"))
const SmallProgressbars = defineAsyncComponent(() => import("@/components/theme/uikits/progress/SmallProgressbars.vue"))
const HeightProgressbars = defineAsyncComponent(() => import("@/components/theme/uikits/progress/HeightProgressbars.vue"))
</script>