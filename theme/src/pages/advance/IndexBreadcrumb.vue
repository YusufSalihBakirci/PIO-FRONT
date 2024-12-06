<template>
    <Breadcrumbs main="Bonus Ui" mains="Breadcrumb" title="Breadcrumb" />
    <div class="container-fluid breadcrumb-page">
        <div class="row">
            <DefaultBreadcrumb />
            <DividersBreadcrumbs />
            <IconsBreadcrumb />
            <NavBreadcrumb />
            <BreadcrumbAlignment />
            <ColoredNavigation />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const DefaultBreadcrumb = defineAsyncComponent(() => import("@/components/theme/advance/breadcrumb/DefaultBreadcrumb.vue"))
const DividersBreadcrumbs = defineAsyncComponent(() => import("@/components/theme/advance/breadcrumb/DividersBreadcrumbs.vue"))
const IconsBreadcrumb = defineAsyncComponent(() => import("@/components/theme/advance/breadcrumb/IconsBreadcrumb.vue"))
const NavBreadcrumb = defineAsyncComponent(() => import("@/components/theme/advance/breadcrumb/NavBreadcrumb.vue"))
const BreadcrumbAlignment = defineAsyncComponent(() => import("@/components/theme/advance/breadcrumb/BreadcrumbAlignment.vue"))
const ColoredNavigation = defineAsyncComponent(() => import("@/components/theme/advance/breadcrumb/ColoredNavigation.vue"))
</script>