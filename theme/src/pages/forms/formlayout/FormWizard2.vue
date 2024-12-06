<template>
    <Breadcrumbs main="Form Controls" mains="Form Wizard 2" title="Form Wizard 2" />
    <div class="container-fluid">
        <div class="row">
            <CustomHorizontal />
            <BusinessVertical />
            <CustomVertical />
            <BusinessHorizontal />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const CustomHorizontal = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/CustomHorizontal.vue"))
const BusinessHorizontal = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/BusinessHorizontal.vue"))
const CustomVertical = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/CustomVertical.vue"))
const BusinessVertical = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/BusinessVertical.vue"))
</script>