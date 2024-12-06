<template>
    <Breadcrumbs main="Ui Kits" mains="Tab bootstrap" title="Tab bootstrap" />
    <div class="container-fluid">
        <div class="row">
            <SimpleTabs />
            <IconTabs />
            <VerticalTabs />
            <PillsTabs />
            <JustifyTabs />
            <LeftTabs />
            <MaterialTabs />
            <BorderTabs />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const SimpleTabs = defineAsyncComponent(() => import("@/components/theme/uikits/tabs/SimpleTabs.vue"))
const IconTabs = defineAsyncComponent(() => import("@/components/theme/uikits/tabs/IconTabs.vue"))
const VerticalTabs = defineAsyncComponent(() => import("@/components/theme/uikits/tabs/VerticalTabs.vue"))
const PillsTabs = defineAsyncComponent(() => import("@/components/theme/uikits/tabs/PillsTabs.vue"))
const JustifyTabs = defineAsyncComponent(() => import("@/components/theme/uikits/tabs/JustifyTabs.vue"))
const LeftTabs = defineAsyncComponent(() => import("@/components/theme/uikits/tabs/LeftTabs.vue"))
const MaterialTabs = defineAsyncComponent(() => import("@/components/theme/uikits/tabs/MaterialTabs.vue"))
const BorderTabs = defineAsyncComponent(() => import("@/components/theme/uikits/tabs/BorderTabs.vue"))
</script>