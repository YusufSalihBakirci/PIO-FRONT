<template>
    <Breadcrumbs main="Ui Kits" mains="Typography" title="Typography" />
    <div class="container-fluid">
        <div class="row">
            <HeadingsSeaction />
            <ColoredHeadings />
            <FontWeight />
            <ListingTypography />
            <DisplayHeadings />
            <TextElements />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const HeadingsSeaction = defineAsyncComponent(() => import("@/components/theme/uikits/typography/HeadingsSeaction.vue"))
const ColoredHeadings = defineAsyncComponent(() => import("@/components/theme/uikits/typography/ColoredHeadings.vue"))
const FontWeight = defineAsyncComponent(() => import("@/components/theme/uikits/typography/FontWeight.vue"))
const ListingTypography = defineAsyncComponent(() => import("@/components/theme/uikits/typography/ListingTypography.vue"))
const DisplayHeadings = defineAsyncComponent(() => import("@/components/theme/uikits/typography/DisplayHeadings.vue"))
const TextElements = defineAsyncComponent(() => import("@/components/theme/uikits/typography/TextElements.vue"))
</script>