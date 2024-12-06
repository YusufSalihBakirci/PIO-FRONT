<template>
    <Breadcrumbs main="Ui Kits" mains="Alert" title="Alert" />
    <div class="container-fluid">
        <div class="row">
            <DarkColor />
            <LightClor />
            <TextAlert />
            <AlertsSection />
            <AdditionalContent />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const DarkColor = defineAsyncComponent(() => import("@/components/theme/uikits/alert/DarkColor.vue"))
const LightClor = defineAsyncComponent(() => import("@/components/theme/uikits/alert/LightClor.vue"))
const TextAlert = defineAsyncComponent(() => import("@/components/theme/uikits/alert/TextAlert.vue"))
const AlertsSection = defineAsyncComponent(() => import("@/components/theme/uikits/alert/AlertsSection.vue"))
const AdditionalContent = defineAsyncComponent(() => import("@/components/theme/uikits/alert/AdditionalContent.vue"))
</script>