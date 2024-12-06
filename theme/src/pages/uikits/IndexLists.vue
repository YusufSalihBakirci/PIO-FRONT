<template>
    <Breadcrumbs main="Ui Kits" mains="Lists" title="Lists" />
    <div class="container-fluid">
        <div class="row">
            <DefaultLists />
            <ActiveLists />
            <FlushLists />
            <ContextualClasses />
            <HorizontalLists />
            <CustomList />
            <CheckboxRedio />
            <NumberList />
            <JavaScriptBehavior />
            <BadgeList />
            <DisabledLists />
            <ScrollableLists />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const DefaultLists = defineAsyncComponent(() => import("@/components/theme/uikits/lists/DefaultLists.vue"))
const ActiveLists = defineAsyncComponent(() => import("@/components/theme/uikits/lists/ActiveLists.vue"))
const FlushLists = defineAsyncComponent(() => import("@/components/theme/uikits/lists/FlushLists.vue"))
const ContextualClasses = defineAsyncComponent(() => import("@/components/theme/uikits/lists/ContextualClasses.vue"))
const HorizontalLists = defineAsyncComponent(() => import("@/components/theme/uikits/lists/HorizontalLists.vue"))
const CustomList = defineAsyncComponent(() => import("@/components/theme/uikits/lists/CustomList.vue"))
const CheckboxRedio = defineAsyncComponent(() => import("@/components/theme/uikits/lists/CheckboxRedio.vue"))
const NumberList = defineAsyncComponent(() => import("@/components/theme/uikits/lists/NumberList.vue"))
const JavaScriptBehavior = defineAsyncComponent(() => import("@/components/theme/uikits/lists/JavaScriptBehavior.vue"))
const BadgeList = defineAsyncComponent(() => import("@/components/theme/uikits/lists/BadgeList.vue"))
const DisabledLists = defineAsyncComponent(() => import("@/components/theme/uikits/lists/DisabledLists.vue"))
const ScrollableLists = defineAsyncComponent(() => import("@/components/theme/uikits/lists/ScrollableLists.vue"))
</script>