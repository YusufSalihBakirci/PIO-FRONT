<template>
    <Breadcrumbs main="Bonus Ui" mains="Scrollable" title="Scrollable" />
    <div class="container-fluid">
        <div class="row">
            <CustomScrollbar />
            <SmallScroll />
            <BadgesScrollbar />
            <ProfileScrollable />
            <ScrollableContent />
            <HorizontalScrollbar />
            <BothSide />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const CustomScrollbar = defineAsyncComponent(() => import("@/components/theme/advance/scrollable/CustomScrollbar.vue"))
const SmallScroll = defineAsyncComponent(() => import("@/components/theme/advance/scrollable/SmallScroll.vue"))
const BadgesScrollbar = defineAsyncComponent(() => import("@/components/theme/advance/scrollable/BadgesScrollbar.vue"))
const ProfileScrollable = defineAsyncComponent(() => import("@/components/theme/advance/scrollable/ProfileScrollable.vue"))
const ScrollableContent = defineAsyncComponent(() => import("@/components/theme/advance/scrollable/ScrollableContent.vue"))
const HorizontalScrollbar = defineAsyncComponent(() => import("@/components/theme/advance/scrollable/HorizontalScrollbar.vue"))
const BothSide = defineAsyncComponent(() => import("@/components/theme/advance/scrollable/BothSide.vue"))
</script>