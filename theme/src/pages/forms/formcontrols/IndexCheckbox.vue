<template>
    <Breadcrumbs main="Form Controls" mains="Checkbox & Radio" title="Checkbox & Radio" />
    <div class="container-fluid">
        <div class="row">
            <DefaultCheckbox />
            <CustomCheckbox />
            <DefaultRadio />
            <ImagesCheckbox />
            <ImagesRadio />
            <CustumRadio />
            <DefaultSwitches />
            <InlineInput />
            <AnimatedButtons />
            <CheckboxRadio />
            <RadioToggle />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const DefaultCheckbox = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/checkboxradio/DefaultCheckbox.vue"))
const CustomCheckbox = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/checkboxradio/CustomCheckbox.vue"))
const DefaultRadio = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/checkboxradio/DefaultRadio.vue"))
const ImagesCheckbox = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/checkboxradio/ImagesCheckbox.vue"))
const ImagesRadio = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/checkboxradio/ImagesRadio.vue"))
const CustumRadio = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/checkboxradio/CustumRadio.vue"))
const DefaultSwitches = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/checkboxradio/DefaultSwitches.vue"))
const InlineInput = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/checkboxradio/InlineInput.vue"))
const AnimatedButtons = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/checkboxradio/AnimatedButtons.vue"))
const CheckboxRadio = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/checkboxradio/CheckboxRadio.vue"))
const RadioToggle = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/checkboxradio/RadioToggle.vue"))
</script>