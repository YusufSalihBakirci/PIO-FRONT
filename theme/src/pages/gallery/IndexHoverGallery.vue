<template>
    <Breadcrumbs main="Gallery" mains="Gallery" title="Gallery" />
    <div class="container-fluid">
        <HoverEffect1 />
        <HoverEffect2 />
        <HoverEffect3 />
        <HoverEffect4 />
        <HoverEffect5 />
        <HoverEffect6 />
        <HoverEffect7 />
        <HoverEffect8 />
        <HoverEffect9 />
        <HoverEffect10 />
        <HoverEffect11 />
        <HoverEffect12 />
        <HoverEffect13 />
        <HoverEffect14 />
        <HoverEffect15 />
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const HoverEffect1 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect1.vue"))
const HoverEffect2 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect2.vue"))
const HoverEffect3 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect3.vue"))
const HoverEffect4 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect4.vue"))
const HoverEffect5 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect5.vue"))
const HoverEffect6 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect6.vue"))
const HoverEffect7 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect7.vue"))
const HoverEffect8 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect8.vue"))
const HoverEffect9 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect9.vue"))
const HoverEffect10 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect10.vue"))
const HoverEffect11 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect11.vue"))
const HoverEffect12 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect12.vue"))
const HoverEffect13 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect13.vue"))
const HoverEffect14 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect14.vue"))
const HoverEffect15 = defineAsyncComponent(() => import("@/components/theme/gallery/hover/HoverEffect15.vue"))
</script>