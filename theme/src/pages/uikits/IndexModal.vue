<template>
    <Breadcrumbs main="Ui Kits" mains="Modal" title="Modal" />
    <div class="container-fluid">
        <div class="row g-lg-3">
            <BasicModal />
            <SizeModel />
            <FullscreenModal />
            <CenteredModal />
            <ToggleModals />
            <StaticModal />
            <CustomModals />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const BasicModal = defineAsyncComponent(() => import("@/components/theme/uikits/modal/BasicModal.vue"))
const SizeModel = defineAsyncComponent(() => import("@/components/theme/uikits/modal/SizeModel.vue"))
const FullscreenModal = defineAsyncComponent(() => import("@/components/theme/uikits/modal/FullscreenModal.vue"))
const CenteredModal = defineAsyncComponent(() => import("@/components/theme/uikits/modal/CenteredModal.vue"))
const ToggleModals = defineAsyncComponent(() => import("@/components/theme/uikits/modal/ToggleModals.vue"))
const StaticModal = defineAsyncComponent(() => import("@/components/theme/uikits/modal/StaticModal.vue"))
const CustomModals = defineAsyncComponent(() => import("@/components/theme/uikits/modal/CustomModals.vue"))
</script>