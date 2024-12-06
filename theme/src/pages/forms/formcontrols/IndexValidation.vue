<template>
    <Breadcrumbs main="Form Controls" mains="Form Validation" title="Form Validation" />
    <div class="container-fluid">
        <div class="row">
            <ToltipValidation />
            <BrowserDefaults />
            <ValidationForm />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const ToltipValidation = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/validation/ToltipValidation.vue"))
const BrowserDefaults = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/validation/BrowserDefaults.vue"))
const ValidationForm = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/validation/ValidationForm.vue"))
</script>