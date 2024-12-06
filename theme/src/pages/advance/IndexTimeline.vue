<template>
    <Breadcrumbs main="Bonus Ui" mains="Timeline" title="Timeline" />
    <div class="container-fluid">
        <div class="row">
            <BasicTimeline />
            <HoveringTimeline />
            <VariationTimeline />
            <HorizontalTimeline />
            <TimelineView />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const BasicTimeline = defineAsyncComponent(() => import("@/components/theme/advance/timeline/BasicTimeline.vue"))
const HoveringTimeline = defineAsyncComponent(() => import("@/components/theme/advance/timeline/HoveringTimeline.vue"))
const VariationTimeline = defineAsyncComponent(() => import("@/components/theme/advance/timeline/VariationTimeline.vue"))
const HorizontalTimeline = defineAsyncComponent(() => import("@/components/theme/advance/timeline/HorizontalTimeline.vue"))
const TimelineView = defineAsyncComponent(() => import("@/components/theme/advance/timeline/TimelineView.vue"))
</script>