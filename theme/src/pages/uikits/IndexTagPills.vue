<template>
    <Breadcrumbs main="Ui Kits" mains="Tag pills" title="Tag pills" />
    <div class="container-fluid">
        <div class="row">
            <BadgesContextual />
            <PillsContextual />
            <NumberBadge />
            <TagsIcons />
            <TagsSection />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const BadgesContextual = defineAsyncComponent(() => import("@/components/theme/uikits/tag&pills/BadgesContextual.vue"))
const PillsContextual = defineAsyncComponent(() => import("@/components/theme/uikits/tag&pills/PillsContextual.vue"))
const NumberBadge = defineAsyncComponent(() => import("@/components/theme/uikits/tag&pills/NumberBadge.vue"))
const TagsIcons = defineAsyncComponent(() => import("@/components/theme/uikits/tag&pills/TagsIcons.vue"))
const TagsSection = defineAsyncComponent(() => import("@/components/theme/uikits/tag&pills/TagsSection.vue"))
</script>