<template>
    <Breadcrumbs main="Form Controls" mains="Input Group" title="Input Group" />
    <div class="container-fluid">
        <div class="row">
            <ButtonAddons />
            <CustomForms />
            <FileInput />
            <ButtonsDropdowns />
            <SegmentedButtons />
            <CheckboxesRadios />
            <SizingInput />
            <MultipleInputs />
            <BasicInput />
            <VariationAddons />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const ButtonAddons = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/inputgroups/ButtonAddons.vue"))
const CustomForms = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/inputgroups/CustomForms.vue"))
const FileInput = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/inputgroups/FileInput.vue"))
const ButtonsDropdowns = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/inputgroups/ButtonsDropdowns.vue"))
const SegmentedButtons = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/inputgroups/SegmentedButtons.vue"))
const CheckboxesRadios = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/inputgroups/CheckboxesRadios.vue"))
const SizingInput = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/inputgroups/SizingInput.vue"))
const MultipleInputs = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/inputgroups/MultipleInputs.vue"))
const BasicInput = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/inputgroups/BasicInput.vue"))
const VariationAddons = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/inputgroups/VariationAddons.vue"))
</script>