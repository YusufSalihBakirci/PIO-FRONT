<template>
    <Breadcrumbs main="Bonus Ui" mains="Pagination" title="Pagination" />
    <div class="container-fluid">
        <div class="row">
            <SimplePagination />
            <DisabledPagination />
            <IconsPagenation />
            <ActivePagination />
            <OutlinePagination />
            <RoundedPagination />
            <AlignmentsPagination />
            <SizingPagination />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const SimplePagination = defineAsyncComponent(() => import("@/components/theme/advance/pagination/SimplePagination.vue"))
const DisabledPagination = defineAsyncComponent(() => import("@/components/theme/advance/pagination/DisabledPagination.vue"))
const IconsPagenation = defineAsyncComponent(() => import("@/components/theme/advance/pagination/IconsPagenation.vue"))
const ActivePagination = defineAsyncComponent(() => import("@/components/theme/advance/pagination/ActivePagination.vue"))
const OutlinePagination = defineAsyncComponent(() => import("@/components/theme/advance/pagination/OutlinePagination.vue"))
const RoundedPagination = defineAsyncComponent(() => import("@/components/theme/advance/pagination/RoundedPagination.vue"))
const AlignmentsPagination = defineAsyncComponent(() => import("@/components/theme/advance/pagination/AlignmentsPagination.vue"))
const SizingPagination = defineAsyncComponent(() => import("@/components/theme/advance/pagination/SizingPagination.vue"))
</script>