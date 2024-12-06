<template>
    <Breadcrumbs main="Form Controls" mains="Form Wizard 1" title="Form Wizard 1" />
    <div class="container-fluid">
        <div class="row">
            <ShippingForm />
            <SimpleWizard />
            <VerticalValidation />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const ShippingForm = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard/ShippingForm.vue"))
const SimpleWizard = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard/SimpleWizard.vue"))
const VerticalValidation = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard/VerticalValidation.vue"))
</script>