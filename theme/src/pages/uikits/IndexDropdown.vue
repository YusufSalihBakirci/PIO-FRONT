<template>
    <Breadcrumbs main="Ui Kits" mains="Dropdown" title="Dropdown" />
    <div class="container-fluid">
        <div class="row">
            <BasicDropdown />
            <RoundedDropdown />
            <SplitDropdown />
            <DropdownSection />
            <UniqueDropdown />
            <JustifyContents />
            <AlignmentsDropdown />
            <HelperCard />
            <DividerDropdown />
            <DropdownSizing />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const BasicDropdown = defineAsyncComponent(() => import("@/components/theme/uikits/dropdown/BasicDropdown.vue"))
const RoundedDropdown = defineAsyncComponent(() => import("@/components/theme/uikits/dropdown/RoundedDropdown.vue"))
const SplitDropdown = defineAsyncComponent(() => import("@/components/theme/uikits/dropdown/SplitDropdown.vue"))
const DropdownSection = defineAsyncComponent(() => import("@/components/theme/uikits/dropdown/DropdownSection.vue"))
const UniqueDropdown = defineAsyncComponent(() => import("@/components/theme/uikits/dropdown/UniqueDropdown.vue"))
const JustifyContents = defineAsyncComponent(() => import("@/components/theme/uikits/dropdown/JustifyContents.vue"))
const AlignmentsDropdown = defineAsyncComponent(() => import("@/components/theme/uikits/dropdown/AlignmentsDropdown.vue"))
const HelperCard = defineAsyncComponent(() => import("@/components/theme/uikits/dropdown/HelperCard.vue"))
const DividerDropdown = defineAsyncComponent(() => import("@/components/theme/uikits/dropdown/DividerDropdown.vue"))
const DropdownSizing = defineAsyncComponent(() => import("@/components/theme/uikits/dropdown/DropdownSizing.vue"))
</script>