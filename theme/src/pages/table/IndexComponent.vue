<template>
    <Breadcrumbs main="Tables" mains="Table Components" title="Table Components" />
    <div class="container-fluid">
        <div class="row">
            <UiTable />
            <AlertComponent />
            <ProgressbarComponent />
            <CheckboxComponent />
            <RadioButtons />
            <SelectComponent />
            <InputComponent />
            <BadgesComponent />
            <TootipComponent />
            <SwitchComponent />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const UiTable = defineAsyncComponent(() => import("@/components/theme/table/tablecomponent/UiTable.vue"))
const AlertComponent = defineAsyncComponent(() => import("@/components/theme/table/tablecomponent/AlertComponent.vue"))
const ProgressbarComponent = defineAsyncComponent(() => import("@/components/theme/table/tablecomponent/ProgressbarComponent.vue"))
const CheckboxComponent = defineAsyncComponent(() => import("@/components/theme/table/tablecomponent/CheckboxComponent.vue"))
const RadioButtons = defineAsyncComponent(() => import("@/components/theme/table/tablecomponent/RadioButtons.vue"))
const SelectComponent = defineAsyncComponent(() => import("@/components/theme/table/tablecomponent/SelectComponent.vue"))
const InputComponent = defineAsyncComponent(() => import("@/components/theme/table/tablecomponent/InputComponent.vue"))
const BadgesComponent = defineAsyncComponent(() => import("@/components/theme/table/tablecomponent/BadgesComponent.vue"))
const TootipComponent = defineAsyncComponent(() => import("@/components/theme/table/tablecomponent/TootipComponent.vue"))
const SwitchComponent = defineAsyncComponent(() => import("@/components/theme/table/tablecomponent/SwitchComponent.vue"))
</script> 