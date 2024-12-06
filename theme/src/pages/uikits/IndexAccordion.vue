<template>
    <Breadcrumbs main="Ui Kits" mains="According" title="According" />
    <div class="container-fluid">
        <div class="row">
            <SimpleAccordion />
            <FlushAccordion />
            <MultipleAccordion />
            <IconsAccordion />
            <OutlineAccordion />
            <HorizontalAccordion />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const SimpleAccordion = defineAsyncComponent(() => import("@/components/theme/uikits/accordion/SimpleAccordion.vue"))
const FlushAccordion = defineAsyncComponent(() => import("@/components/theme/uikits/accordion/FlushAccordion.vue"))
const MultipleAccordion = defineAsyncComponent(() => import("@/components/theme/uikits/accordion/MultipleAccordion.vue"))
const IconsAccordion = defineAsyncComponent(() => import("@/components/theme/uikits/accordion/IconsAccordion.vue"))
const OutlineAccordion = defineAsyncComponent(() => import("@/components/theme/uikits/accordion/OutlineAccordion.vue"))
const HorizontalAccordion = defineAsyncComponent(() => import("@/components/theme/uikits/accordion/HorizontalAccordion.vue"))
</script>